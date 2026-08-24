begin;

alter table public.products
  add column license_model text not null default 'account_type'
    check (license_model in ('individual', 'household', 'classroom', 'account_type')),
  add column refund_revokes_access boolean not null default true;

comment on column public.products.license_model is
  'account_type means parent accounts receive household use and educator accounts receive one-classroom use.';

insert into public.products (
  product_key,
  name,
  payhip_product_id,
  access_type,
  access_duration,
  license_model,
  refund_revokes_access,
  active
)
values (
  'full-library',
  'Healthy Little Minds Full Library',
  null,
  'lifetime',
  null,
  'account_type',
  true,
  true
)
on conflict (product_key) do update
set name = excluded.name,
    access_type = excluded.access_type,
    access_duration = excluded.access_duration,
    license_model = excluded.license_model,
    refund_revokes_access = excluded.refund_revokes_access,
    active = excluded.active;

commit;
