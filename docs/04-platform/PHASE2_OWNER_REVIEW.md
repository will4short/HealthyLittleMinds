# Phase 2 owner review list

Written 2026-10-03 alongside the public Privacy Policy (`privacy.html`) and Terms (`terms.html`).
This file is not published: `docs/` is removed from the Netlify output by `netlify.toml`.

Nothing here is legal advice. The pages describe what the code and deployment notes show today.

## Needs action by the owner

1. **Legacy shared password is still public.**
   - `assets/Healthy_Little_Minds_Terms_Conditions.pdf` is still served and prints the old shared password and the address of the old member site.
   - That old site (`healthy-little-minds-members-library.netlify.app`) is a separate Netlify site, still online, with a password box. It is outside this repository.
   - Retire or password-change that site, then replace the PDF with a version that has no password or old link. The new `terms.html` does not repeat either.
   - Nothing links to the PDF any more; the file itself was left untouched.
2. **Refund wording.** The Terms (original text, unchanged) say all sales are final once access is granted. `ACCOUNT_COMMERCE_MIGRATION.md` still lists "confirm refund, cancellation, household, classroom and account-sharing rules" as open. Confirm the intended policy, check it against consumer rules in the places you sell to, and make sure the Payhip checkout page says the same.
3. **Licence scope.** The Terms say personal, non-commercial use. The migration notes say "household" (parents) and "one classroom" (educators) but mark them unconfirmed, so they are not published. Decide whether to publish them.
4. **Contact address.** The old PDF and the About page's "Send Email" button use a personal Gmail address. The new pages send people to the contact form. Decide whether to publish a domain address instead.
5. **Analytics consent.** Google Analytics 4 loads with no consent prompt on the English home page and on the member home and parenting-tips pages (all languages). The Privacy Policy says this plainly. Decide whether to add consent for visitors in regions that expect it, move to cookieless analytics, or drop it from member pages.
6. **"5+ yrs supporting children's emotions"** on the About page cannot be checked from the repository. Keep it only if you can support it.
7. **Will Talks email box** (`will-talks.js`) accepts an email address but sends nothing (it only shows "coming soon"). Remove it or connect it, and update the Privacy Policy if connected.

## Statements in the Privacy Policy to confirm are true

- Account database is hosted in Singapore (from the migration notes; the project is still named "Staging").
- "We do not sell your personal information."
- Update emails are sent to people who subscribe.
- No fixed retention periods, and you can handle access, correction and deletion requests by hand.
- Whether Google signals or advertising features are enabled in the GA property (not visible in code).

## Terms: what changed and what a lawyer should look at

Unchanged wording: sections 1 (usage), 3 (refunds, except the contact method) and 4 (copyright).

Changed so the page matches reality:
- Section 2 and 6: shared password replaced by personal account access.
- Section 3: "contact us at the email above" became "through the contact page".
- Section 5: original sentence kept, plus a link to the Privacy Policy.

Gaps worth legal review (nothing was added for these): governing law and jurisdiction, limitation of liability and an educational-use disclaimer, adult-only accounts, account sharing and termination, how "lifetime access" is defined, business name and address, how terms can change, Payhip's own terms, and whether section 5's one-sentence privacy statement should be reconciled with the Privacy Policy (analytics, accounts, support).

## Localization

- Privacy, Terms and Contact are English only. On translated pages the footer labels say "(English)".
- Translated by Claude and worth a native read: footer labels, the About credential line and stat tiles, the creator line on each landing page, and the Growth Plan note.
- Localized About gallery captions such as 臨床實務 / 临床实务 / 임상 실무 describe "Clinical practicum" photos with a word that reads as "clinical practice". They were left alone; ask a native reviewer to correct them.

## Safeguarding

- Sensitive topic pages (bullying, grief, parents, relationships, self-esteem, stress, substance use, trauma, worry/anxiety, youth/teens) end with an emergency note and a link to the Child Helpline International directory (`childhelplineinternational.org/helplines/`, a nonprofit, verified live 2026-10-03). Re-check the link now and then.
- Find a Helpline (findahelpline.com) was not used: its terms forbid referencing it for commercial purposes.

## Found while testing, not fixed (older issue, not part of Phase 2)

- `audiobook_section.html` (and probably its four translated copies) scrolls sideways on every screen size: the page is 1130 px wide on a 390 px phone and 1818 px wide at 1440 px, so the media cards and videos do not fit. Production shows the same numbers, so it predates Phase 2. Needs a layout fix in a later phase.
