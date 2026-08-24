begin;

update public.products
set payhip_product_id = '5096917',
    access_type = 'lifetime',
    access_duration = null,
    updated_at = now()
where product_key = 'full-library';

commit;
