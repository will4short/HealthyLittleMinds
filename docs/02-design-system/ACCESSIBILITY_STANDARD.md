---
Title: Healthy Little Minds Accessibility Standard
Version: 1.0
Status: Draft
Owner: Godswill U. Ambrose
Last Reviewed: July 2026
Applies To:
  - Website
  - Teachers Hub
  - Parents Hub
  - Interactive Stories
  - Will Talks
  - Dashboard
  - Documentation
  - AI Assistants
Related Documents:
  - DESIGN_SYSTEM.md
  - DESIGN_PRINCIPLES.md
  - LAYOUT_SYSTEM.md
  - TYPOGRAPHY.md
  - COLOR_SYSTEM.md
---

# Healthy Little Minds Accessibility Standard

## Purpose

Accessibility is a quality requirement, not an optional enhancement, specialist feature, or legal checkbox. It determines whether people can perceive, understand, navigate, operate, and benefit from Healthy Little Minds in their actual circumstances.

This handbook defines the accessibility philosophy, organizational standards, review responsibilities, testing expectations, and inclusive design requirements for the Healthy Little Minds ecosystem. It applies to public pages, audience hubs, stories, talks, worksheets, dashboards, documentation, emails, AI-generated interfaces, and future applications.

Accessibility enables more people to learn, participate, teach, and use emotional wellbeing resources. Its relevance extends beyond permanent disability. A person may have a temporary injury, use a device in bright sunlight, listen in a noisy room, read in a second language, experience stress or fatigue, use an older phone, or depend on captions because audio is unavailable. Accessible design supports these overlapping conditions.

Good accessibility improves the experience for everyone. Clear headings improve scanning. Captions help people in quiet and noisy settings. Visible focus supports keyboard users and clarifies interaction. Plain language helps children, busy teachers, language learners, and people under stress. Predictable errors make every form easier to recover from.

Compliance establishes a necessary baseline but does not prove that an experience is usable, dignified, or educationally effective. Healthy Little Minds must combine standards with manual evaluation, assistive-technology testing, user feedback, and responsible judgment.

Accessibility is shared work. Designers, developers, writers, educators, psychologists, illustrators, translators, reviewers, partners, and AI assistants all make decisions that can create or remove barriers. No final accessibility review can fully repair an experience whose content, architecture, or interaction was inaccessible from the beginning.

When delivery speed, visual preference, engagement, or technical convenience conflicts with access, access takes precedence. Exceptions require documented evidence, risk assessment, ownership, an accessible alternative where possible, and a time-bound remediation plan.

---

## Accessibility Philosophy

### Inclusion before compliance

Standards help define measurable requirements, but the purpose is participation. Contributors should ask whether people can complete the intended task with comparable dignity and understanding, not only whether an automated tool reports no violations.

A conforming interface can still use confusing language, demand excessive memory, provide an inferior transcript, or require exhausting navigation. Inclusion examines the whole experience and the outcome available to the user.

### People before disabilities

Disability is part of human diversity. People have different preferences, skills, technologies, contexts, and identities. Do not design around a single imagined “disabled user” or reduce people to a diagnosis.

Use respectful terminology and follow individual or community preference where known. Both identity-first and person-first language may be appropriate. Focus on removing barriers and supporting agency rather than presenting access as charity or inspiration.

### Accessibility from the beginning

Audience research, content planning, information architecture, design, procurement, development, localization, and testing should include accessibility. Early decisions determine whether headings are meaningful, media can be described, interactions work by keyboard, or a workflow depends on inaccessible technology.

Adding accessibility at the end usually creates incomplete alternatives and costly rework. Every proposal should identify accessibility risks and review needs before approval.

### Multiple ways to understand

People process information differently. Where the learning purpose allows, provide complementary forms such as text, audio, illustration, example, summary, transcript, or guided practice. Alternatives should communicate equivalent purpose rather than become a reduced version.

Multiple forms do not require duplicating everything. Choose formats according to user need and content. Essential meaning should not exist only in colour, sound, motion, spatial position, or an image.

### Multiple ways to interact

People may use a keyboard, pointer, touch, voice control, switch device, screen reader, magnification, or other assistive technology. Core tasks should not depend on one input method, precise movement, a complex gesture, or speed.

Provide alternatives to drag-and-drop, drawing, timed responses, hover, and device motion. Preserve choice without making an accessible route harder to discover or less complete.

### Accessibility is continuous

Products, content, standards, browsers, assistive technologies, languages, and user needs change. Accessibility must be monitored after release. New content can create barriers in an accessible template; a dependency update can change keyboard behaviour; translation can break labels or reading order.

Treat reported barriers as product defects. Review, prioritize, correct, document, and learn from them. Accessibility is stewardship rather than a one-time certification.

---

## Design Goals

### Usability

People should be able to find information, understand choices, complete tasks, and recover from errors with reasonable effort. Accessibility that technically exposes content but makes ordinary use exhausting does not meet this goal.

### Dignity

Accessible experiences should preserve privacy, control, and respect. Do not force users to disclose disability, use a public “special mode,” or accept a visibly inferior version. Assistance should not become surveillance or dependence.

### Independence

Users should be able to complete tasks without unnecessary help from another person. When human support is inherently necessary, explain how to access it. Do not assume a caregiver is available to operate an interface for a child or disabled adult.

### Cognitive accessibility

Language, structure, choices, memory demands, timing, and feedback should support people with varied attention, processing, learning, and executive-function needs. Emotional stress can also reduce cognitive capacity.

### Educational access

Access includes the learning outcome, not only the interface. A child who can open an activity but cannot understand its instructions has not received equivalent access. Resources should offer suitable scaffolding, formats, and ways to participate.

### Multilingual access

Language versions should preserve accessibility, psychological meaning, support information, and functional equivalence. Non-English content must not be treated as a secondary layer with weaker testing.

### Responsive accessibility

Experiences should remain usable across viewport, orientation, zoom, text settings, device capability, connection, and input method. Mobile access should not remove essential content or support.

### Long-term maintainability

Accessible decisions should be encoded in shared content models, tokens, components, patterns, templates, tests, and documentation. Repeated manual fixes are fragile. Ownership and review schedules should keep access from degrading.

These goals should be included in acceptance criteria and definitions of done. They are not aspirational qualities to consider after functional completion.

---

## Standards and Compliance

Healthy Little Minds adopts WCAG 2.2 Level AA as the minimum standard for relevant web and digital experiences. Where a later stable version or platform standard provides stronger and appropriate guidance, the organization should evaluate and adopt it through governance.

Level AA is a floor. Some needs require Level AAA techniques, platform guidance, or additional inclusive-design practices to make the product genuinely usable. Not every AAA criterion applies universally, but higher-quality solutions should be used when practical and beneficial.

### Progressive enhancement

Essential content and tasks should remain available when optional scripts, advanced browser features, media, or third-party services fail. Begin with a robust foundation and add enhancements that preserve the underlying purpose.

Progressive enhancement does not require every experience to be identical without scripting. It requires a responsible fallback, clear explanation, or alternative route proportionate to the task.

### Semantic HTML

Web content should use native elements and meaningful document structure according to purpose. Semantics support keyboard behaviour, assistive-technology interpretation, forms, headings, landmarks, tables, lists, and media.

Custom behaviour should not replace a native pattern without a demonstrated need and complete accessibility responsibility. Visual appearance must not determine semantics.

### Keyboard-first interaction

Every core task should be designed and tested for keyboard operation before pointer-only convenience. Focus order, visibility, entry, activation, dismissal, and recovery should be deliberate. Keyboard-first does not mean keyboard-only; it exposes interaction logic clearly.

### Responsive design

Content should reflow and remain functional under resize, zoom, orientation, and user text settings. Reading order and component relationships must remain coherent as layout changes.

### Assistive technology compatibility

Healthy Little Minds should define and maintain a representative support matrix of browsers, operating systems, screen readers, magnifiers, voice tools, and device types. Compatibility should focus on combinations used by relevant audiences rather than claiming universal support.

Conformance should be assessed at page, workflow, template, component, content, and product levels. A conforming component can become inaccessible in context. Third-party products, embedded players, documents, and partner content are included in the user experience and require evaluation.

Any known non-conformance must be documented with impact, affected users, workaround, owner, priority, and target remediation. A statement of conformance must never conceal unresolved barriers.

---

## Cognitive Accessibility

Cognitive accessibility is central to Healthy Little Minds because users may be children, language learners, people with learning disabilities, neurodivergent people, adults under pressure, or anyone trying to understand an emotionally difficult subject.

### Plain language

Use familiar, precise words and explain necessary psychological or educational terms. Break instructions into meaningful steps and identify the actor. Plain language should preserve important nuance and should never become patronizing.

### Predictable navigation

Keep destinations, labels, page regions, and interaction behaviour consistent. Users should know where they are, what a page does, and how to return. Avoid hidden navigation, changing labels, and surprise redirection.

### Manageable choices

Present the choices needed for the current decision. Too many similar options increase effort and error. Group related choices, use clear defaults, and explain consequences. Do not remove agency merely to simplify.

### Progressive disclosure

Show essential information first and make advanced detail available when needed. Do not hide safety guidance, cost, privacy, limitations, or information needed for an informed decision.

### Reduced cognitive load

Use visible hierarchy, consistent patterns, short task sequences, relevant examples, and minimal distraction. Remove decorative motion, repeated prompts, and competing actions. Keep related information close.

### Memory support

Do not require users to remember information across distant steps when it can remain visible. Preserve entered data, show selections, summarize decisions, and allow review before submission. Instructions should remain available during a task.

### Emotional safety

Fear, shame, urgency, and uncertainty consume cognitive capacity. Use calm language, explain system behaviour, offer pause and exit, and preserve work. Avoid countdowns, forced disclosure, punitive errors, and engagement pressure.

Allow sufficient time. Warn before sessions expire, provide extensions where possible, and save progress safely. For learning activities, repetition should support practice rather than penalize mistakes.

Cognitive review should use realistic tasks and content, not only readability scores. Observe whether users understand purpose, sequence, feedback, and recovery. Include people with relevant lived experience in research and testing.

---

## Visual Accessibility

### Contrast

Text, controls, focus indicators, icons, meaningful graphics, and state boundaries must meet applicable WCAG contrast requirements. Evaluate every theme and state. Passing contrast should not justify difficult combinations such as thin text over complex imagery.

### Typography

Use readable typefaces, clear hierarchy, manageable line length, appropriate spacing, and restrained emphasis. Avoid tiny supporting text, long italics, all-capital passages, justified body text, and decorative fonts for essential content.

### Zoom

Users must be able to magnify content without losing information or operation. Fixed headers, media players, banners, and dialogs should not consume most of the viewport or obscure focused elements.

### Reflow

Ordinary content should adapt to a narrow effective viewport without two-dimensional scrolling. Tables, diagrams, and other inherently two-dimensional material need thoughtful alternatives or controlled scrolling with context.

### Spacing

Layouts should tolerate user-adjusted text and paragraph spacing. Content must not overlap, clip, or become disconnected. Spacing should also create clear grouping and sufficiently separated controls.

### Colour-independent communication

Colour may reinforce but never carry essential meaning alone. Pair it with text, icons, patterns, position, shape, or semantic state. This applies to links, errors, charts, emotions, selections, and progress.

### Icons

Icons should have clear meaning, sufficient contrast, and accessible names when interactive. Pair unfamiliar or consequential icons with visible text. Decorative icons should not create duplicate screen-reader output.

### Illustrations

Illustrations should support understanding without carrying essential instructions alone. Provide appropriate alternatives. Avoid visual clutter, stereotypes, ambiguous emotional expressions, and details too small to perceive. Complex educational images may require extended descriptions.

Support user colour and contrast preferences where platforms allow. Test in grayscale, forced-colour modes, bright light, low-quality displays, and dark environments as relevant.

---

## Motor Accessibility

### Touch targets

Interactive targets should be large enough and separated enough for varied motor precision, tremor, device size, and movement. The visible control and active area should align with user expectation. Avoid placing destructive actions beside frequent actions without separation.

### Keyboard navigation

All functionality should be available through a keyboard interface. Focus must be visible, move in a logical order, and never become trapped. Users should be able to reach, operate, and leave menus, dialogs, disclosures, media, stories, and custom interactions.

### Focus indicators

Focus should remain clearly visible on every background, component, theme, and state. It should not rely on a subtle colour change. Programmatic focus moves should follow user intent, especially after opening dialogs, submitting forms, or resolving errors.

### Gesture alternatives

Provide alternatives to swiping, pinching, path-based gestures, shaking, tilting, and multipoint actions. Simple pointer activation and keyboard operation should achieve the same result. Do not make hover essential.

### Timing

Avoid time limits. Where time is necessary for security or a real-world event, warn users, allow extension, preserve work, and explain the consequence. Animations and transient messages should remain available long enough to understand or be user-controlled.

### Drag-and-drop alternatives

Every drag interaction should have a non-drag method such as selecting an item and choosing a destination, moving through controls, or entering an order. Alternatives must offer equivalent outcome and feedback.

Do not require precise drawing or handwriting when the learning objective does not depend on it. Provide selection, typing, voice, or adult-supported alternatives where appropriate.

Test motor access with keyboard, touch, screen magnification, switch-like sequential navigation, and voice control where relevant. Pointer success alone is insufficient.

---

## Hearing Accessibility

### Captions

Prerecorded video with meaningful audio should include accurate, synchronized captions. Captions should identify speakers where unclear and include relevant non-speech sound. Automatically generated captions require human correction before publication.

Live content should include live captions when feasible and appropriate, with clear communication when quality or availability is limited. Caption display should remain readable against changing backgrounds.

### Transcripts

Audio and video should have structured transcripts that identify speakers, meaningful sound, headings, and relevant links. Transcripts should be easy to find, navigate, copy, translate, and read on mobile. A raw unedited machine transcript is not equivalent access.

### Visual alternatives

Information communicated through sound should also have a visual or textual form. Alerts should not depend on tones. Educational audio cues need visible equivalents. If timing or rhythm is part of the learning, explain it accessibly.

### Podcast accessibility

Will Talks and other podcasts should include accurate titles, summaries, transcripts, chapter markers where useful, sources, and relevant support notes. The player should expose labelled controls and state and remain operable by keyboard and assistive technology.

### Audio controls

Audio must not start unexpectedly. Users should be able to play, pause, stop, seek, change volume where platform-appropriate, and understand current state. Do not hide controls after a short interval or make essential audio dependent on precise gestures.

Hearing accessibility also benefits users in noisy settings, quiet settings, with intermittent connections, or who process written language more easily than speech.

---

## Screen Reader Accessibility

### Landmarks

Pages should expose meaningful regions such as header, navigation, main content, complementary content, search, and footer. Landmarks help users move quickly without traversing every element. Avoid duplicate or unlabeled regions that create noise.

### Headings

Use a logical heading hierarchy that reflects content structure. Do not select heading levels for visual appearance or use bold text as a substitute. Headings should describe the section clearly when navigated as a list.

### Semantic structure

Lists, quotations, buttons, links, disclosures, dialogs, progress, status, and other structures should communicate their actual purpose. Custom controls inherit responsibility for all expected names, roles, states, and keyboard behaviour.

### Forms

Every control needs an accessible name, visible label where appropriate, instructions, required state, and error association. Groups need programmatic context. Reading order should match visual order, and submission should move attention to useful feedback.

### Tables

Use tables for relational data, not visual layout. Identify headers and relationships, provide captions where useful, and keep structures manageable. Complex tables may need summaries, simpler views, or downloadable alternatives.

### Images

Alternative text should communicate the image's purpose in context. Decorative images should be ignored by assistive technology. Complex charts, diagrams, and instructional illustrations may need adjacent explanation or extended description. Do not repeat nearby text unnecessarily.

### Live regions

Dynamic updates such as validation, loading completion, saved state, or new results should be announced when users need the information. Announcements should be concise and proportionate. Excessive live updates interrupt reading and make interfaces unusable.

Test with representative screen readers and browser combinations. Review rotor or element-list navigation, forms mode, dynamic updates, dialogs, responsive changes, and touch screen-reader use where relevant. Automated semantic inspection is not a substitute for listening to and operating the experience.

---

## Educational Accessibility

Educational accessibility means that users can participate in and benefit from the learning, not merely open the resource.

### Teachers

Teachers need resources that are easy to scan, prepare, adapt, print, and deliver under time pressure. Identify objective, duration, materials, age guidance, steps, adaptations, and safeguarding notes consistently. Downloads should work in grayscale, support accessible digital use, and avoid requiring specialist equipment without notice.

Provide alternatives for activities involving speech, movement, drawing, reading aloud, eye contact, sensory exposure, or public disclosure. Guidance should help teachers include pupils without asking educators to diagnose needs or improvise inaccessible replacements.

### Parents

Parents and caregivers need plain explanations, manageable steps, multiple formats, and clear routes to further help. Avoid assuming high literacy, unlimited time, private space, a particular family structure, or access to a printer and fast internet.

Resources should support listening, reading, saving, and sharing where appropriate. Instructions should distinguish what an adult can try from situations requiring qualified or emergency support. Accessibility must not create guilt or imply that a caregiver has failed.

### Children

Child-facing content should use age-appropriate language, visible structure, concrete examples, and manageable choices. Offer ways to listen, read, view, respond, pause, skip, repeat, and ask a trusted adult for help. Do not require public emotional disclosure or treat one communication method as the only valid response.

Support varied reading, sensory, motor, attention, language, and developmental needs. Avoid babyish alternatives for disabled children. Equivalent access should preserve dignity, challenge, and the learning objective.

### Adolescents

Adolescents need respectful, non-patronizing experiences with privacy, choice, and honest boundaries. Do not simplify language so aggressively that it feels childish or conceal why information is requested. Provide discreet access to support and avoid notifications or visible labels that may expose sensitive use.

Allow flexible pacing and formats while preserving autonomy. Accessibility features should feel integrated rather than marking the user as different. Involve adolescents, including disabled and neurodivergent young people, in relevant research.

For every audience, define the essential learning outcome and ensure alternative formats or interactions can achieve it. An alternative that removes the core learning is not equivalent.

---

## Localization

Accessibility and localization are inseparable. A translated interface that loses labels, reading order, support routes, or typographic clarity is not accessible.

### Traditional Chinese

Use appropriate Traditional Chinese glyphs, punctuation, line breaking, language metadata, and screen-reader pronunciation. Review detailed characters under zoom and at ordinary reading conditions. Do not assume Simplified Chinese resources can be converted mechanically.

### Simplified Chinese

Use locale-appropriate glyphs and terminology. Test text density, wrapping, controls, headings, and assistive technology. Plain-language choices require local judgment rather than literal simplification from English.

### Japanese

Support mixed kanji, hiragana, katakana, Latin text, punctuation rules, and correct pronunciation metadata. Avoid manual line breaks and English spacing assumptions. Screen-reader output, form labels, and dynamic messages require native-language review.

### Korean

Test Hangul readability, wrapping, mixed scripts, labels, and voice output. Do not reduce spacing merely because the translated text may appear compact. Confirm that fallback fonts preserve clear syllable blocks.

### English

Use plain, consistent British English for the default edition while supporting names and borrowed words with diacritics. Avoid idioms, ambiguous dates, and cultural assumptions that obstruct language learners or translation.

### Future RTL languages

Architecture should support bidirectional reading, mirrored navigation where appropriate, logical focus order, directional icons, form layout, tables, media, and mixed numbers or Latin terms. Right alignment alone is not RTL support.

Translated content may expand, contract, or require different examples and support services. Test complete workflows with real text. Mark language changes so assistive technology can pronounce content correctly. Captions, transcripts, alternative text, errors, notifications, metadata, and downloadable documents all require localization.

Machine translation may assist drafting but cannot approve educational, psychological, safeguarding, or accessibility content. Use proficient human review in the rendered experience.

---

## Accessible Forms

Forms should make purpose, requirements, privacy, sequence, and recovery clear.

### Labels

Every input should have a persistent visible label and an accessible name. Labels should identify the requested information without relying on placeholder text, colour, or position. Required and optional status should be clear before entry.

### Helper text

Place format requirements, examples, consequences, and reasons for sensitive questions near the field and before submission. Keep guidance concise and associate it with the correct control.

### Validation

Validate at a time that helps rather than interrupts. Identify the field, problem, and correction in plain language. Do not clear valid entries or rely only on colour, icons, or generic “invalid” messages.

### Recovery

Preserve user work after errors, timeouts, navigation, and temporary failures where safe. Provide retry, edit, undo, or support according to context. Warn before irreversible or destructive actions.

### Confirmation

Confirm what was submitted, saved, changed, or sent and what happens next. Move focus or announce the confirmation appropriately. Do not rely on a brief visual toast for consequential completion.

### Error summaries

Long or submitted forms should provide a clear summary linked to affected fields while preserving field-level messages. The summary should receive attention predictably and not trap focus.

Group related controls with meaningful context. Use a logical tab order, support autofill where appropriate, and avoid unnecessary data collection. Test zoom, mobile keyboards, voice input, screen readers, translation, and error states.

---

## Accessible Navigation

### Menus

Menus should have clear labels, predictable opening and closing, logical focus, visible state, and complete keyboard and touch operation. Do not hide essential navigation behind hover or unconventional gestures.

### Breadcrumbs

Breadcrumbs should identify hierarchical location and current page. They supplement rather than replace a page title and primary navigation. Paths must wrap and remain understandable under zoom and localization.

### Skip links

Provide efficient ways to bypass repeated regions and reach main content or other significant areas. Skip links should become visible on focus and land at a meaningful location.

### Search

Search should have a clear label, understandable scope, accessible suggestions, and useful no-results guidance. Preserve queries and filters. Dynamic results should not announce excessively or move focus without intent.

### Pagination

Pagination should identify current page, destination, and relationship among controls. Use meaningful labels for previous, next, and numbered pages. Infinite loading needs an accessible alternative, stable location, and a way to reach following content such as the footer.

### Table of contents

Long resources should provide a structured overview where helpful. Entries should link to unique headings, reflect hierarchy, and support return navigation. Sticky contents must not obscure content at zoom.

Navigation should remain consistent across hubs while allowing audience-specific context. Users should always know where they are, what section they entered, and how to leave.

---

## Accessible Media

### Images

Provide alternative text based on purpose and context. Decorative images should not add noise. Images containing text should be avoided unless essential, with equivalent text available. Complex images need sufficient explanation.

### Illustrations

Educational illustrations should have textual equivalents for the concept they teach. Representation should avoid stereotypes and ambiguous visual shorthand. Do not use facial expression, colour, or posture as the only indication of an emotion or choice.

### Video

Videos need accurate captions, audio description or integrated description when visual information is essential, accessible controls, transcripts where appropriate, and no unexpected autoplay. Users should be able to pause and seek.

### Audio

Audio requires a structured transcript and accessible player. Spoken instructions, sound cues, and emotional effects need visual or textual alternatives. Provide clear duration and content context.

### Animation

Animation should clarify, not distract. Respect reduced-motion preferences, avoid harmful flashing, and provide pause, stop, or static alternatives. Essential information must not depend on movement.

### Downloadable PDFs

PDFs should have tagged semantic structure, logical reading order, headings, lists, table headers, language metadata, meaningful links, alternative text, bookmarks for long documents, and accessible form fields where applicable. A source document's accessibility does not guarantee an accessible PDF; verify the exported file.

Provide an accessible HTML alternative where a PDF format creates avoidable barriers or is not necessary.

### Worksheets

Worksheets should support digital and print use, readable type, sufficient contrast, clear instructions, logical order, and adequate response space. Do not rely on colour, precise drawing, cutting, or handwriting unless alternatives are provided. Test grayscale and ordinary photocopying.

Third-party media and players require the same review. A vendor's accessibility claim should be verified against the actual use and supported environments.

---

## Accessibility Testing

Accessibility testing must combine automated checks, manual inspection, assistive technology, and representative user evaluation. No single method is sufficient.

### Keyboard testing

Complete every core workflow without a pointer. Check focus order, visibility, traps, menus, dialogs, disclosures, media, forms, errors, dynamic changes, and return focus.

### Screen readers

Test representative desktop and mobile combinations from the support matrix. Review landmarks, headings, links, buttons, forms, tables, images, live updates, dialogs, stories, and responsive layouts.

### Zoom

Review high zoom and magnification for clipping, overlap, hidden controls, obstructive sticky content, and logical navigation. Check focus visibility at magnified views.

### Reflow

Use a narrow effective viewport and text resizing to verify that ordinary content reflows without lost meaning or avoidable horizontal scrolling.

### Colour blindness

Use simulations as an early check and confirm that states, charts, links, and activities have colour-independent cues. Include lived-experience testing where relevant.

### Touch devices

Test target size, spacing, gestures, orientation, on-screen keyboards, screen-reader touch exploration, and accidental activation on representative devices.

### Translated interfaces

Test real Traditional Chinese, Simplified Chinese, Japanese, Korean, and other supported content for wrapping, labels, order, pronunciation, fonts, errors, and local support information.

### Cognitive walkthroughs

Evaluate whether a person can identify purpose, next action, consequence, completion, and recovery. Review choices, memory demands, timing, language, distraction, and emotional pressure.

Automated testing should run during development and continuous integration for rules it can reliably detect. It can identify some semantic, naming, contrast, and structural issues, but cannot determine whether alternative text is useful, focus order is logical, instructions are understandable, or a learning outcome is accessible.

Manual testing should occur during design, implementation, content review, and pre-release verification. High-risk workflows need deeper specialist and user evaluation. Record environments, steps, findings, severity, evidence, and retest results.

Testing should cover templates and shared components, but also representative complete pages and workflows. Content can create failures that component tests cannot predict.

---

## Accessibility Governance

### Review process

Every feature should identify accessibility requirements and risks during planning. Design and content review should occur before implementation, followed by implementation testing and pre-release acceptance. The depth should match novelty, audience, and consequence.

### Specialist review

Accessibility specialists should review system foundations, new interaction patterns, complex educational content, multimedia, documents, high-risk workflows, and exceptions. Specialist review complements rather than replaces team responsibility.

### User feedback

Provide an accessible route for reporting barriers. Acknowledge reports, protect privacy, avoid requiring users to prove disability, and communicate progress. Invite disabled people into research and compensated testing rather than relying only on complaints.

### Issue prioritization

Prioritize by severity, number and vulnerability of affected users, task importance, absence of workaround, frequency, and risk. Barriers to safety information, core learning, authentication, navigation, forms, and professional support require urgent attention.

Do not postpone a severe barrier because few users have reported it. Low reporting may reflect exclusion.

### Documentation

Record requirements, decisions, tests, supported environments, defects, exceptions, owners, remediation, and release notes. Shared components and templates should include accessibility contracts and known limitations.

### Continuous improvement

Review standards, training, tools, support matrix, recurring defects, third parties, and user feedback regularly. Correct systemic causes. If the same error appears across pages, improve the component, content model, guidance, or workflow.

Procurement and partnerships should include accessibility requirements, evidence, contractual responsibility, update obligations, and exit options. Third-party limitations must not be hidden from users.

An accessibility owner should coordinate governance, but accountability remains distributed. Product owners must include access in scope, contributors must follow standards, reviewers must test, and leadership must provide time and resources.

---

## AI Contribution Guidelines

AI assistants may support accessibility audits, test-case generation, semantic review, alternative-text drafts, transcript preparation, content simplification, documentation, and implementation. Their output is unverified until tested and reviewed.

AI assistants should:

- Preserve semantic structure and established reading and focus order.
- Reuse approved accessible components and patterns.
- Avoid pointer-only, hover-only, timed, motion-dependent, or colour-only interactions.
- Recommend improvements when existing work conflicts with this standard.
- Never assume or claim accessibility without appropriate testing.
- Document accessibility implications, assumptions, limitations, and required review.
- Generate realistic edge cases for zoom, reflow, translation, errors, long content, and assistive technology.
- Escalate uncertainty when the intended interaction or equivalent learning outcome is unclear.

AI-generated alternative text must be checked against the actual image and context. AI-generated captions and transcripts require human correction. Generated simplified language must preserve psychological accuracy and dignity. Generated code must be operated with keyboard and assistive technology rather than approved through static inspection.

AI must not fabricate test results, compliance, user feedback, supported technology, or a VPAT or conformance report. It should not treat automated-tool output as proof of access. It must protect personal and sensitive information used in testing.

Human contributors remain accountable for the final experience. Specialist and representative user review are required according to risk.

---

## Accessibility Review Checklist

Before approval, confirm every applicable item.

### Purpose and inclusion

- [ ] The intended audiences, tasks, learning outcomes, and potential barriers are identified.
- [ ] Accessibility requirements were included from planning rather than added after completion.
- [ ] People can achieve an equivalent outcome through accessible routes.
- [ ] The experience preserves dignity, privacy, agency, and independence.
- [ ] No user must disclose disability to access essential functionality.

### Structure and cognition

- [ ] Page purpose, location, next action, consequence, and completion are clear.
- [ ] Language is plain, accurate, respectful, and appropriate to the audience.
- [ ] Choices are manageable and grouped meaningfully.
- [ ] Instructions remain available during the task.
- [ ] Memory, timing, attention, and executive-function demands are proportionate.
- [ ] Navigation, terminology, placement, and interaction are predictable.
- [ ] Progressive disclosure does not hide essential information.
- [ ] Users can pause, exit, review, and recover without pressure.

### Visual access

- [ ] Text, controls, focus, icons, and meaningful graphics meet applicable contrast requirements.
- [ ] Meaning does not depend on colour alone.
- [ ] Typography and spacing support sustained reading and user customization.
- [ ] Content remains usable under zoom, resize, reflow, and custom text spacing.
- [ ] Text does not sit over uncontrolled imagery.
- [ ] Icons and illustrations have appropriate accessible equivalents.
- [ ] Dark, high contrast, forced-colour, grayscale, and print states work where relevant.

### Interaction and motor access

- [ ] Every core task is fully operable by keyboard.
- [ ] Focus is visible, logical, managed, and never trapped.
- [ ] Touch targets are sufficiently large and separated.
- [ ] Alternatives exist for complex gestures, drag-and-drop, device motion, and precise movement.
- [ ] Hover does not contain essential information or action.
- [ ] Time limits are avoided or can be extended with work preserved.
- [ ] Destructive and frequent actions are separated and recoverable.

### Screen readers and semantics

- [ ] Landmarks and regions are meaningful and not duplicated unnecessarily.
- [ ] Headings form a logical, descriptive hierarchy.
- [ ] Lists, quotations, tables, controls, dialogs, and status use correct semantics.
- [ ] Forms have labels, group context, instructions, and error associations.
- [ ] Images have contextual alternatives; decorative images add no noise.
- [ ] Dynamic updates are announced only when useful.
- [ ] Visual order and reading order agree across responsive states.

### Forms and navigation

- [ ] Forms identify purpose, required status, format, privacy, and consequences.
- [ ] Validation identifies the problem and correction without clearing valid data.
- [ ] Error summaries and field errors work together.
- [ ] Confirmation is persistent and understandable.
- [ ] Menus, breadcrumbs, skip links, search, pagination, and contents are accessible as applicable.
- [ ] Current location and navigation state remain clear without colour alone.

### Media and documents

- [ ] Videos include corrected captions and description of essential visual information.
- [ ] Audio includes a structured, accurate transcript.
- [ ] Media controls are labelled and operable without unexpected autoplay.
- [ ] Animation respects reduced motion and avoids harmful flashing.
- [ ] PDFs are tagged, structured, ordered, labelled, and independently verified.
- [ ] Worksheets work digitally, in print, in grayscale, and with suitable response alternatives.
- [ ] Third-party media and embedded tools have been tested in context.

### Educational access

- [ ] Teacher materials identify adaptations without requiring diagnosis.
- [ ] Parent resources do not assume high literacy, technology, time, or one family structure.
- [ ] Child-facing activities support varied communication, sensory, reading, motor, and attention needs.
- [ ] Adolescent experiences preserve privacy, respect, and autonomy.
- [ ] Alternatives preserve the learning objective and appropriate challenge.
- [ ] Emotional disclosure is optional and safe alternatives exist.

### Localization

- [ ] All user-facing and alternative content is localized together.
- [ ] Language metadata, pronunciation, glyphs, punctuation, and line breaking are correct.
- [ ] Traditional Chinese, Simplified Chinese, Japanese, Korean, and English are tested where supported.
- [ ] Layouts accommodate text expansion and future RTL behaviour.
- [ ] Region-specific safeguarding and support information is correct.
- [ ] Native-language review occurred in the rendered experience.

### Testing and governance

- [ ] Automated checks pass for the rules they can evaluate.
- [ ] Keyboard, screen reader, zoom, reflow, colour, touch, and cognitive tests are complete as applicable.
- [ ] Testing covers realistic content, edge states, translations, and complete workflows.
- [ ] Specialist and representative user review occurred in proportion to risk.
- [ ] Findings are documented, prioritized, owned, corrected, and retested.
- [ ] Known exceptions include impact, workaround, owner, deadline, and approval.
- [ ] AI-assisted work has received accountable human review.
- [ ] Accessibility documentation and release notes are current.

An essential unchecked item means the experience is not ready for approval.

---

## Future Evolution

Accessibility standards should evolve as technology, research, law, educational practice, assistive technology, and user needs change. Evolution should strengthen participation without making access dependent on constant redesign.

Healthy Little Minds should monitor:

- New and revised WCAG guidance and supporting techniques.
- Platform accessibility APIs and conventions.
- Browser and assistive-technology changes.
- User research and reported barriers.
- Language and localization expansion.
- Emerging input, media, AI, and immersive technologies.
- Changes in legal and procurement expectations.
- Recurring defects and exception patterns.

Adopt changes through the Design System governance process. Identify affected users and products, assess risk, update standards and shared assets, provide migration guidance, train contributors, and verify adoption. Do not declare a new standard supported until products and workflows can meet it.

Backward compatibility matters, but it must not preserve serious barriers indefinitely. Prioritize remediation, communicate changes, and offer transitional alternatives where necessary.

Accessibility research should include disabled children and adults, caregivers, educators, language communities, and people using diverse technologies. Participation should be safe, respectful, compensated where appropriate, and designed accessibly.

Maintain institutional knowledge. Record why decisions were made, which combinations were tested, what remains limited, and how user feedback changed the system. Future contributors should inherit evidence rather than assumptions.

The goal is continuous improvement in real access, not a growing collection of compliance claims.

---

## Closing Reflection

Accessibility is not about designing for a minority. It is about respecting the diversity of how all people perceive, learn, communicate, move, understand, and participate.

Healthy Little Minds can fulfil its educational purpose only when people can reach and use its work with dignity. Accessible design turns inclusion from an intention into an experience: children can take part, adults can support them, and differences in ability, language, device, or context do not become avoidable barriers to emotional learning.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
