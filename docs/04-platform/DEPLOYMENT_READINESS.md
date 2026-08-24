# Deployment readiness

Last reviewed: 2026-08-24

## Decision

The current build is ready for a controlled production deployment and live
account testing. Supabase entitlement is now the only browser authorization
path; there are no existing customers requiring legacy migration support.

## Verified and prepared

- Supabase Auth loads from the static browser client without a secret key.
- The browser-safe Supabase URL and publishable key are included in the deployable repository.
- Row Level Security remains the authorization boundary; the publishable key grants no service-role authority.
- English account creation, login, confirmation resend, recovery, logout, and entitlement status pages are implemented.
- Signed-out access to English `home.html` redirects to the account page.
- The shared `members123` code and `isMember` browser-storage authorization have been removed.
- Four localized landing pages now link to the Supabase account flow; localized member-home routes temporarily use the English account screen.
- 190 previously browser-gated member HTML pages now initialize the shared Supabase entitlement guard.
- Payhip `paid` and `refunded` webhooks are connected to the signed Supabase Edge Function.
- The Payhip product mapping is `5096917` to `full-library`, lifetime access, USD 10.
- Resend SMTP is verified and a live Supabase recovery email was delivered from `no-reply@auth.healthylittleminds.club`.
- Account, auth, configuration, and known member pages bypass service-worker storage.
- Known member pages have been removed from the service-worker precache.
- Netlify-compatible no-store and baseline security headers are included in `_headers`.
- The sitemap now uses the production apex domain and excludes account/member-only pages.
- All repository JavaScript passed syntax validation.
- Essential site files returned HTTP 200 in the local deployment smoke test.

## Remaining post-launch hardening

1. **Protected files remain static URLs.** The UI now requires Supabase entitlement, but paid PDFs, audio, video, and other static assets must eventually move to private Storage for server-enforced file protection.
2. **Localized account UI is temporary.** Japanese, Korean, Simplified Chinese, and Traditional Chinese member entrances use the English account screen until translated versions are completed.
3. **Backend naming can be clarified later.** The connected project is named `Healthy Little Minds Staging`, although its active branch is production-capable.
4. **Live regression testing remains.** Test a real purchase, refund revocation, confirmation, recovery, expired session, offline behavior, and the supported locale entrances after deployment.

## Safe deployment sequence

1. Commit and deploy the current repository to Netlify production.
2. Verify the production account, confirmation, recovery, and member-library redirects.
3. Complete one real USD 10 Payhip purchase using a fresh email address.
4. Verify the entitlement, then refund the test purchase and verify revocation.
5. Monitor Supabase Auth, Edge Function, Payhip, and Resend logs during the test.
6. Translate the four localized account/member journeys.
7. Classify protected assets and move member-only files to private delivery.

## Rollback boundary

Before production cutover, retain the last known-good Netlify deploy. If the
new account flow fails, roll back the Netlify deploy while leaving Supabase,
Payhip, and Resend configuration intact for diagnosis.
