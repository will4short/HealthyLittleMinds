# Payhip webhook

This function accepts Payhip `paid` and `refunded` events. It verifies the JSON
`signature` against `SHA-256(PAYHIP_API_KEY)`, then calls the service-role-only
database processor. The API key and service-role key must never be placed in the
website or committed to this repository.

Before deployment:

1. Apply migration `202608230003_payhip_webhook_processing.sql`.
2. Set the Supabase function secret `PAYHIP_API_KEY` to the Payhip Developer API key.
3. Set `products.payhip_product_id` from an observed Payhip webhook `items[].product_id`.
4. Deploy this function with JWT verification disabled; Payhip authenticates using its signature.
5. Add the deployed function URL in Payhip Settings > Developer and enable `paid` and `refunded`.
6. Run a 100%-discount test checkout, then confirm the purchase and entitlement rows before going live.

Unknown product IDs are acknowledged but ignored. A full refund revokes access;
a partial refund is recorded without revoking access.
