# Account and commerce migration

## Status

This document records the approved direction and the repository audit completed before implementation. The staging database foundation was applied successfully on 2026-08-23. The live site still uses the legacy shared access code until the Payhip rules, customer migration, and protected-content inventory are ready.

### Staging foundation verification

- Project: `Healthy Little Minds Staging`
- Region: Southeast Asia (Singapore)
- Seven expected application tables created
- Row Level Security enabled on all seven tables
- Three protected account/authorization functions created
- Six initial customer/resource policies created
- Automatic `auth.users` profile trigger created and verified
- No production website pages connected yet

### English reference UI — in progress

- `account.html` provides accessible login, signup, confirmation resend, password-reset, password-update, access-status, and logout states.
- `get-started.html` provides post-checkout account-linking guidance without treating a direct page visit as proof of payment.
- Account services use the staging project through a Git-ignored local configuration file.
- The staging Site URL is `https://healthylittleminds.club`.
- Allowed staging Auth redirects include the production apex account page, the `www` account page, and the localhost account test page.
- Account/auth/config requests bypass service-worker storage.
- The existing landing-page access-code form remains unchanged until account and purchase tests pass.
- The initial staging owner account is email-confirmed and assigned through the protected `admins` table; its email and UUID are intentionally not stored in this repository.
- The initial staging owner has an explicit complimentary `full-library` entitlement so administrator authority and content access remain independently auditable.
- English `home.html` now uses a transition guard: Supabase entitlement, then temporary legacy access, then time-limited preview. Signed-out users return to the account page and member content remains hidden while authorization is checked.
- English `index.html` now presents personal login/account creation first. The previous access code remains inside a secondary migration disclosure, and returning entitled members receive a direct library action with purchase prompts hidden.

## Approved experience

- `index.html` remains the public landing page, free-resource entry, checkout entry, signup, and login page.
- `home.html` becomes the authenticated member library.
- Public account types are `parent` and `educator`.
- Children do not receive independent accounts in the initial release.
- Supabase owns identity, profiles, authorization, purchases, and entitlements.
- Payhip remains the payment authority.
- Resend delivers branded authentication email through Supabase SMTP.
- Paid files are served from private storage; public and preview resources remain on the public site.
- Existing buyers claim imported entitlements by confirming the email used for their Payhip purchase.

## Confirmed commercial defaults

- Product key: `full-library`
- Purchase model: one-time purchase
- Access duration: lifetime
- Parent licence: household use
- Educator licence: use within one classroom
- Refunds revoke the related entitlement
- Legitimate existing buyers migrate without paying again
- Payhip product slug: `j6uL8`
- Verified Payhip webhook product ID: `5096917`
- Verified Payhip plan: `Lifetime Access`, one-time, USD 10.00

## Repository audit — 2026-08-23

### Legacy access system

- `index.js` contains the shared `members123` access code.
- Successful entry writes `isMember=true` to browser local storage.
- 384 HTML or JavaScript files reference membership-related strings, scripts, or controls.
- Direct membership decisions occur in shared scripts, locale scripts, dashboards, parent pages, and interactive stories.
- `membership-links.js` changes index/home navigation using the unverified local flag.
- `member-preview.js` also treats that flag as proof of membership.

The local flag cannot be migrated into a real entitlement because any visitor can create it.

### Checkout

- The single observed checkout URL is `https://payhip.com/b/j6uL8`.
- It appears in the five landing-page variants and in `member-preview.js`.
- The live checkout exposes the verified `Lifetime Access` plan at USD 10.00.
- Payhip `paid` and `refunded` events are connected to the signed Supabase Edge Function.
- A zero-cost staging checkout produced a completed purchase and active entitlement with no expiry.

### Public assets

The repository contains 56 files with protected-content candidate extensions:

- 31 PDFs, including terms files and worksheets
- 20 MP3 files
- 2 MP4 files
- additional localized copies included in the total

Not all of these should become private. Terms, trailers, public previews, and public calming audio may remain public. Each asset must be classified before it is moved.

### Service workers

The root and locale service workers precache `home.html`, locale member homes, dashboards, and other application pages. Their generic runtime strategies can also cache authenticated navigation and resources. Before authentication launches they must:

- stop precaching member-only pages;
- bypass Supabase API and private Storage requests;
- avoid caching signed URLs and responses with authorization headers;
- remove old member caches during activation;
- use an offline page that does not imply verified membership.

## Target journeys

### New customer

1. Visitor uses public resources on `index.html` without an account.
2. Visitor purchases through Payhip.
3. Payhip records payment and sends a verified webhook.
4. The site redirects to `get-started.html`.
5. Customer creates an adult account with the Payhip email.
6. Customer confirms the email.
7. The matching purchase is claimed and an entitlement becomes active.
8. The customer enters `home.html`.

### Returning customer

1. Supabase restores the session.
2. The site checks account status and the `full-library` entitlement.
3. An authorized customer goes directly to `home.html`.
4. A signed-in user without access sees a helpful status panel on `index.html`.

### Existing buyer migration

1. Export completed Payhip transactions.
2. Normalize and import purchases without creating passwords.
3. Create pending/unclaimed entitlement records tied to buyer email.
4. Invite buyers to create an account using that email.
5. Claim access only after the account email is confirmed.
6. Retire the shared code after the communicated transition period.

## Implementation stages

### Stage 1 — external decisions

- Keep the verified Payhip product and pricing-plan identifiers in the deployment record.
- Confirm refund, cancellation, household, classroom, and account-sharing rules.
- Export existing Payhip customers and transaction statuses.
- Choose Supabase production and staging projects and regions.
- Choose the initial administrator email.
- Classify all downloadable/media assets as public, preview, or member-only.

### Stage 2 — backend foundation

- Apply the reviewed SQL migration in `supabase/migrations` to staging.
- Configure Auth URLs and email confirmation.
- Create the private Storage buckets and policies after asset classification.
- Implement the Payhip webhook from the current verified Payhip payload/signature contract.
- Import a small staging sample and test both purchase-before-signup and signup-before-purchase.

### Stage 3 — English reference experience

- Replace the access-code form on `index.html` with login/signup UI.
- Add `get-started.html` and `account.html`.
- Guard `home.html` with session, profile-status, and entitlement checks.
- Load member resources only after authorization.
- Replace legacy navigation and logout behavior.
- Remove member pages from service-worker caches.

### Stage 4 — localization

- Adapt the proven English UI for Japanese, Korean, Simplified Chinese, and Traditional Chinese.
- Preserve locale through OAuth, confirmation, recovery, login, logout, and purchase redirects.
- Translate errors and recovery instructions rather than exposing provider messages directly.

### Stage 5 — customer migration and launch

- Import verified historical purchases.
- Send branded migration invitations.
- Monitor unmatched purchases and email delivery.
- End the shared-code transition.
- Remove `members123`, all `isMember` authorization, and stale caches in one coordinated release.

## Launch blockers

The following must not be guessed in code:

- Supabase URL and publishable key
- administrator identity
- Payhip webhook verification contract and secrets
- Payhip product/pricing-plan identifiers
- entitlement duration
- which repository assets are paid
- existing-customer eligibility and refund state

## Acceptance boundary

The migration is complete only when a browser-created `isMember` value, a direct public URL, a stale service-worker cache, an unconfirmed email, or a different customer account cannot grant paid access.
