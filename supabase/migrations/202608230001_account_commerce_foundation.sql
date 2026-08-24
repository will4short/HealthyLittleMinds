begin;

create extension if not exists pgcrypto;

create type public.account_type as enum ('parent', 'educator');
create type public.account_status as enum ('active', 'deactivated');
create type public.purchase_status as enum ('pending', 'completed', 'refunded', 'disputed', 'failed');
create type public.entitlement_status as enum ('active', 'revoked', 'expired');
create type public.resource_visibility as enum ('public', 'preview', 'member');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  account_type public.account_type not null default 'parent',
  account_status public.account_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.admins (
  user_id uuid primary key references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  created_by uuid references auth.users(id) on delete set null
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  product_key text not null unique check (product_key ~ '^[a-z0-9][a-z0-9-]*$'),
  name text not null,
  payhip_product_id text unique,
  access_type text not null check (access_type in ('lifetime', 'fixed_period', 'subscription')),
  access_duration interval,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint duration_matches_access_type check (
    (access_type = 'fixed_period' and access_duration is not null)
    or (access_type <> 'fixed_period' and access_duration is null)
  )
);

create table public.purchases (
  id uuid primary key default gen_random_uuid(),
  payhip_transaction_id text unique,
  payhip_event_id text unique,
  buyer_email_normalized text not null check (buyer_email_normalized = lower(btrim(buyer_email_normalized))),
  user_id uuid references auth.users(id) on delete set null,
  product_id uuid not null references public.products(id) on delete restrict,
  amount_minor bigint check (amount_minor is null or amount_minor >= 0),
  currency text check (currency is null or currency ~ '^[A-Z]{3}$'),
  status public.purchase_status not null,
  payment_source text not null default 'payhip',
  purchased_at timestamptz,
  refunded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (payhip_transaction_id is not null or payment_source <> 'payhip')
);

create index purchases_buyer_email_idx on public.purchases (buyer_email_normalized);
create index purchases_user_id_idx on public.purchases (user_id);

create table public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  source_purchase_id uuid references public.purchases(id) on delete restrict,
  status public.entitlement_status not null default 'active',
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  granted_by uuid references auth.users(id) on delete set null,
  grant_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (expires_at is null or expires_at > starts_at),
  unique nulls not distinct (user_id, product_id, source_purchase_id)
);

create index entitlements_user_status_idx on public.entitlements (user_id, status);

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  resource_key text not null unique check (resource_key ~ '^[a-z0-9][a-z0-9-]*$'),
  title text not null,
  language text not null default 'en',
  resource_type text not null,
  visibility public.resource_visibility not null default 'member',
  storage_bucket text,
  storage_path text,
  required_product_id uuid references public.products(id) on delete restrict,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check ((visibility = 'member' and required_product_id is not null) or visibility <> 'member'),
  check ((storage_bucket is null and storage_path is null) or (storage_bucket is not null and storage_path is not null))
);

create table public.webhook_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  external_event_id text not null,
  event_type text not null,
  processing_status text not null check (processing_status in ('received', 'processed', 'ignored', 'failed')),
  error_code text,
  received_at timestamptz not null default now(),
  processed_at timestamptz,
  unique (provider, external_event_id)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger products_set_updated_at before update on public.products
for each row execute function public.set_updated_at();
create trigger purchases_set_updated_at before update on public.purchases
for each row execute function public.set_updated_at();
create trigger entitlements_set_updated_at before update on public.entitlements
for each row execute function public.set_updated_at();
create trigger resources_set_updated_at before update on public.resources
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested_type text := coalesce(new.raw_user_meta_data ->> 'requested_account_type', 'parent');
  safe_type public.account_type := case when requested_type = 'educator' then 'educator'::public.account_type else 'parent'::public.account_type end;
begin
  insert into public.profiles (id, full_name, account_type)
  values (new.id, left(btrim(coalesce(new.raw_user_meta_data ->> 'full_name', '')), 120), safe_type)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null
    and exists (select 1 from public.admins where user_id = auth.uid());
$$;

create or replace function public.current_user_has_entitlement(requested_product_key text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.entitlements e
    join public.products p on p.id = e.product_id
    join public.profiles pr on pr.id = e.user_id
    where e.user_id = auth.uid()
      and pr.account_status = 'active'
      and p.product_key = requested_product_key
      and p.active
      and e.status = 'active'
      and e.starts_at <= now()
      and (e.expires_at is null or e.expires_at > now())
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;
revoke all on function public.current_user_has_entitlement(text) from public;
grant execute on function public.current_user_has_entitlement(text) to authenticated;

alter table public.profiles enable row level security;
alter table public.admins enable row level security;
alter table public.products enable row level security;
alter table public.purchases enable row level security;
alter table public.entitlements enable row level security;
alter table public.resources enable row level security;
alter table public.webhook_events enable row level security;

create policy profiles_read_own on public.profiles for select to authenticated
using (id = auth.uid() or public.is_admin());
create policy profiles_update_own_safe_fields on public.profiles for update to authenticated
using (id = auth.uid())
with check (id = auth.uid());

create policy products_read_active on public.products for select to authenticated
using (active or public.is_admin());
create policy purchases_read_own on public.purchases for select to authenticated
using (user_id = auth.uid() or public.is_admin());
create policy entitlements_read_own on public.entitlements for select to authenticated
using (user_id = auth.uid() or public.is_admin());
create policy resources_read_allowed on public.resources for select to anon, authenticated
using (
  published and (
    visibility in ('public', 'preview')
    or (
      visibility = 'member'
      and exists (
        select 1 from public.entitlements e
        join public.profiles pr on pr.id = e.user_id
        where e.user_id = auth.uid()
          and e.product_id = resources.required_product_id
          and pr.account_status = 'active'
          and e.status = 'active'
          and e.starts_at <= now()
          and (e.expires_at is null or e.expires_at > now())
      )
    )
    or public.is_admin()
  )
);

revoke insert, delete on public.profiles from anon, authenticated;
revoke update on public.profiles from anon, authenticated;
grant update (full_name) on public.profiles to authenticated;
revoke all on public.admins from anon, authenticated;
revoke insert, update, delete on public.products from anon, authenticated;
revoke insert, update, delete on public.purchases from anon, authenticated;
revoke insert, update, delete on public.entitlements from anon, authenticated;
revoke insert, update, delete on public.resources from anon, authenticated;
revoke all on public.webhook_events from anon, authenticated;

commit;
