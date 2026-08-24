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
- Account creation, login, confirmation resend, recovery, logout, and entitlement status are implemented in English, Japanese, Korean, Simplified Chinese, and Traditional Chinese.
- Signed-out access to every localized member home and protected route redirects to the translated account page while preserving the requested destination.
- The shared `members123` code and `isMember` browser-storage authorization have been removed.
- Four localized landing pages link to the shared locale-aware Supabase account flow, and entitled members return to their matching localized library.
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
- A real Payhip checkout using a one-use 100% test coupon created and linked a lifetime entitlement successfully.

## Remaining post-launch hardening

1. **Protected files remain static URLs.** The UI now requires Supabase entitlement, but paid PDFs, audio, video, and other static assets must eventually move to private Storage for server-enforced file protection.
2. **Localized copy needs native-language review.** The complete account journey is implemented and smoke-tested in all supported locales; a proficient reviewer should still confirm tone and naturalness before a localized marketing campaign.
3. **Backend naming can be clarified later.** The connected project is named `Healthy Little Minds Staging`, although its active branch is production-capable.
4. **Live regression testing remains.** Test refund revocation, confirmation, recovery, expired sessions, and offline behavior after deployment.

## Safe deployment sequence

1. Commit and deploy the current repository to Netlify production.
2. Verify the production account, confirmation, recovery, and member-library redirects.
3. Verify each localized account entrance and member-library destination in production.
4. Verify entitlement revocation with a controlled refund test when practical.
5. Monitor Supabase Auth, Edge Function, Payhip, and Resend logs during early use.
6. Arrange native-language review of the four translated account journeys.
7. Classify protected assets and move member-only files to private delivery.

## Rollback boundary

Before production cutover, retain the last known-good Netlify deploy. If the
new account flow fails, roll back the Netlify deploy while leaving Supabase,
Payhip, and Resend configuration intact for diagnosis.
