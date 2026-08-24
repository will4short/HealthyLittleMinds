begin;

alter table public.purchases
  add column refunded_amount_minor bigint not null default 0
    check (refunded_amount_minor >= 0);

alter table public.purchases
  drop constraint purchases_payhip_transaction_id_key,
  add constraint purchases_payhip_transaction_product_key
    unique nulls not distinct (payhip_transaction_id, product_id);

create or replace function public.claim_current_user_purchases()
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  claimed_count integer := 0;
  confirmed_email text;
begin
  select lower(btrim(u.email)) into confirmed_email
  from auth.users u
  where u.id = auth.uid()
    and u.email_confirmed_at is not null;

  if confirmed_email is null then
    return 0;
  end if;

  update public.purchases p
  set user_id = auth.uid(), updated_at = now()
  where p.buyer_email_normalized = confirmed_email
    and p.status = 'completed'
    and (p.user_id is null or p.user_id = auth.uid());

  insert into public.entitlements (
    user_id, product_id, source_purchase_id, status, starts_at, expires_at, grant_reason
  )
  select
    auth.uid(), p.product_id, p.id, 'active'::public.entitlement_status,
    coalesce(p.purchased_at, now()),
    case when product.access_type = 'fixed_period'
      then coalesce(p.purchased_at, now()) + product.access_duration
      else null
    end,
    'Confirmed Payhip purchase'
  from public.purchases p
  join public.products product on product.id = p.product_id
  where p.user_id = auth.uid()
    and p.status = 'completed'
    and product.active
  on conflict (user_id, product_id, source_purchase_id) do update
  set status = 'active',
      starts_at = excluded.starts_at,
      expires_at = excluded.expires_at,
      updated_at = now();

  get diagnostics claimed_count = row_count;
  return claimed_count;
end;
$$;

revoke all on function public.claim_current_user_purchases() from public;
grant execute on function public.claim_current_user_purchases() to authenticated;

create or replace function public.process_payhip_event(event_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  event_type text := event_payload ->> 'type';
  transaction_id text := event_payload ->> 'id';
  buyer_email text := lower(btrim(event_payload ->> 'email'));
  product_identifier text := event_payload ->> 'product_id';
  external_id text := event_payload ->> 'external_event_id';
  event_price bigint := nullif(event_payload ->> 'price', '')::bigint;
  event_refund bigint := coalesce(nullif(event_payload ->> 'amount_refunded', '')::bigint, 0);
  event_currency text := upper(nullif(event_payload ->> 'currency', ''));
  event_time timestamptz := to_timestamp(coalesce(nullif(event_payload ->> 'date', '')::bigint, extract(epoch from now())::bigint));
  matched_product public.products%rowtype;
  matched_purchase public.purchases%rowtype;
  matched_user uuid;
  full_refund boolean;
begin
  if event_type not in ('paid', 'refunded') or transaction_id is null or external_id is null then
    raise exception 'invalid_event';
  end if;

  insert into public.webhook_events (provider, external_event_id, event_type, processing_status)
  values ('payhip', external_id, event_type, 'received')
  on conflict (provider, external_event_id) do nothing;

  if not found then
    return jsonb_build_object('result', 'duplicate');
  end if;

  select * into matched_product
  from public.products
  where payhip_product_id = product_identifier and active;

  if matched_product.id is null then
    update public.webhook_events set processing_status = 'ignored', error_code = 'unknown_product', processed_at = now()
    where provider = 'payhip' and external_event_id = external_id;
    return jsonb_build_object('result', 'ignored', 'reason', 'unknown_product');
  end if;

  if event_type = 'paid' then
    if buyer_email is null or buyer_email = '' or event_price is null or event_price < 0 then
      raise exception 'invalid_paid_event';
    end if;

    select u.id into matched_user from auth.users u
    where lower(btrim(u.email)) = buyer_email and u.email_confirmed_at is not null
    order by u.created_at limit 1;

    insert into public.purchases (
      payhip_transaction_id, payhip_event_id, buyer_email_normalized, user_id,
      product_id, amount_minor, currency, status, purchased_at
    ) values (
      transaction_id, external_id, buyer_email, matched_user,
      matched_product.id, event_price, event_currency, 'completed', event_time
    )
    on conflict (payhip_transaction_id, product_id) do update
    set status = 'completed',
        payhip_event_id = excluded.payhip_event_id,
        user_id = coalesce(public.purchases.user_id, excluded.user_id),
        updated_at = now()
    returning * into matched_purchase;

    if matched_user is not null then
      insert into public.entitlements (user_id, product_id, source_purchase_id, status, starts_at, expires_at, grant_reason)
      values (
        matched_user, matched_product.id, matched_purchase.id, 'active', event_time,
        case when matched_product.access_type = 'fixed_period' then event_time + matched_product.access_duration else null end,
        'Confirmed Payhip purchase'
      )
      on conflict (user_id, product_id, source_purchase_id) do update
      set status = 'active', expires_at = excluded.expires_at, updated_at = now();
    end if;
  else
    select * into matched_purchase from public.purchases
    where payhip_transaction_id = transaction_id and product_id = matched_product.id
    for update;

    if matched_purchase.id is null then
      raise exception 'purchase_not_found';
    end if;

    full_refund := event_price is not null and event_refund >= event_price;
    update public.purchases
    set refunded_amount_minor = greatest(refunded_amount_minor, event_refund),
        status = case when full_refund then 'refunded'::public.purchase_status else status end,
        refunded_at = case when full_refund then event_time else refunded_at end,
        updated_at = now()
    where id = matched_purchase.id;

    if full_refund and matched_product.refund_revokes_access then
      update public.entitlements set status = 'revoked', updated_at = now()
      where source_purchase_id = matched_purchase.id;
    end if;
  end if;

  update public.webhook_events set processing_status = 'processed', processed_at = now()
  where provider = 'payhip' and external_event_id = external_id;
  return jsonb_build_object('result', 'processed');
exception when others then
  update public.webhook_events set processing_status = 'failed', error_code = left(sqlstate || ':' || sqlerrm, 160), processed_at = now()
  where provider = 'payhip' and external_event_id = external_id;
  raise;
end;
$$;

revoke all on function public.process_payhip_event(jsonb) from public;
grant execute on function public.process_payhip_event(jsonb) to service_role;

commit;
