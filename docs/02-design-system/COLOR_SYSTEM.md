---
Title: Healthy Little Minds Color System
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
  - TYPOGRAPHY.md
  - BRAND_GUIDELINES.md
  - ACCESSIBILITY_STANDARD.md
---

# Healthy Little Minds Color System

## Purpose

Colour is a functional communication tool. It can establish hierarchy, distinguish interaction, communicate state, support navigation, focus attention, and contribute to emotional safety. It can also create confusion, exclusion, urgency, or distraction when roles are inconsistent or meaning depends on colour alone.

This handbook defines the colour philosophy and semantic architecture for the Healthy Little Minds ecosystem. It applies to websites, hubs, stories, talks, worksheets, dashboards, documentation, emails, and future applications. It governs why colour is used, what each role means, how meaning survives themes and localization, and how changes should be reviewed.

The system should improve:

- **Understanding:** Users should identify structure, action, feedback, and priority more easily.
- **Emotional safety:** Colour should create a calm, welcoming context without minimizing serious information or provoking unnecessary fear.
- **Accessibility:** Content and controls should remain perceivable under varied vision, devices, settings, and output formats.
- **Navigation:** Current location, available actions, and movement through the ecosystem should be recognizable.
- **Hierarchy:** Emphasis should match importance rather than decoration.
- **Learning:** Colour should clarify concepts and relationships without turning education into visual entertainment.

Colour should never distract from educational content. A resource that remains understandable in grayscale is generally more robust than one whose logic disappears without hue. Colour may reinforce meaning, but text, shape, position, iconography, pattern, and semantics must carry it too.

This document deliberately defines no HEX, RGB, HSL, or token values. Specific palettes, contrast pairs, theme mappings, and implementation sources should be developed under these principles, tested, and versioned within the Design System. This handbook remains the canonical authority on colour roles and decision-making.

---

## Colour Philosophy

The Healthy Little Minds colour system is guided by five principles.

### Calm before excitement

Colour should create a stable visual environment before it creates energy. Most people come to the platform to understand, teach, reflect, or find support—not to be stimulated. Restrained surfaces and intentional accents preserve attention for content.

Calm does not require a dull or colourless interface. Stories, illustrations, progress moments, and child-facing activities may use warmth and variety. The overall composition should still feel ordered. Saturation, contrast, and quantity should be controlled so the page does not compete with itself.

### Meaning before decoration

Every recurring colour choice should have a reason. It may identify an action, status, category, audience, focus, or relationship. Decorative colour is acceptable when it supports the brand and does not interfere with semantic roles, legibility, or learning.

Do not assign different colours to elements merely to create variety. When colour appears meaningful, users will try to interpret it. Unexplained variation increases cognitive load and makes genuine signals harder to recognize.

### Accessibility before aesthetics

Colour relationships must meet applicable accessibility requirements in all states and themes. A palette that looks appealing but produces insufficient contrast, invisible focus, indistinguishable statuses, or unreadable text is not acceptable.

Accessibility includes more than passing a contrast calculation. Test colour-vision differences, reduced vision, glare, low-quality displays, high contrast settings, grayscale, print, dark mode, and real content. Brand intent must adapt to accessible use.

### Consistency before novelty

The same semantic role should carry the same meaning across products. Users should not learn that a colour means “primary action” on one page and “warning” on another. New campaigns, hubs, or features should not introduce independent colour languages without a demonstrated need and system review.

Consistency does not mean one unchanging palette. Themes and audience contexts may express roles differently, but their purpose, relative hierarchy, and accessibility should remain stable.

### Emotion without manipulation

Colour contributes to emotional tone, but it must not exploit anxiety, guilt, urgency, or vulnerability. Do not use alarming colours to increase clicks, aggressive contrast to force an action, or celebratory colour to reward disclosure and continued use.

Emotional response varies by person and culture. The system should create conditions for calm, trust, and clarity without claiming that one hue produces a universal psychological effect.

Together, these principles make colour quiet but dependable. It should help people understand what they see without requiring them to think about the system behind it.

---

## Design Goals

### Clarity

Colour should make distinctions easier to perceive: foreground from background, action from content, selection from rest, and feedback from ordinary information. It should not create distinctions that have no user meaning.

### Trust

Stable roles, sufficient contrast, and proportionate feedback help the interface behave credibly. Trust is weakened when status colours change unexpectedly, links are difficult to recognize, or urgent styling is used for routine promotion.

### Emotional safety

The overall colour environment should reduce avoidable stress. Sensitive topics need space and steady hierarchy, not dramatic palettes. Error and warning roles must remain noticeable while avoiding a punitive visual tone.

### Accessibility

Every role should work for people with varied colour perception and reduced vision. Meaning should survive when hue cannot be distinguished, custom modes override colours, or content is printed without colour.

### Consistency

Semantic roles should be shared across the Website, Teachers Hub, Parents Hub, stories, talks, dashboard, documentation, and future products. A role's meaning should not depend on the team that built a page.

### Scalability

The system should support more components, content types, hubs, themes, and platforms without adding arbitrary colours. New needs should be expressed through existing semantic architecture where possible.

### Localization

Colour meaning should remain functionally consistent while allowing review of cultural associations and regional context. Localization should not require rebuilding the entire system for each language.

### Maintainability

Colour decisions should live in canonical tokens and documented mappings rather than repeated values. Changes must be reviewable, testable, and capable of propagating across the ecosystem without page-by-page replacement.

A successful system balances all eight goals. Strong brand expression cannot compensate for inaccessible text, and perfect consistency cannot justify a role that communicates the wrong level of urgency.

---

## Semantic Colour Roles

Semantic roles name why a colour is used rather than what it looks like. A role can map to different values across themes and platforms while retaining its meaning. Exact role names and token layers should be defined in the implementation source, but the following concepts are canonical.

### Primary

Primary colour represents the most recognizable brand-level emphasis and may support the principal action or identity in a context. It should not be applied to every prominent element. Overuse makes hierarchy flat and prevents primary actions from standing out.

Primary is not automatically suitable for every text, surface, or state. Each use must satisfy contrast and interaction requirements.

### Secondary

Secondary colour supports primary identity and provides controlled variation. It may help distinguish supporting actions, sections, or content types without competing for first attention. Secondary should remain subordinate in hierarchy, not become an alternative primary chosen by preference.

### Surface

Surface roles define the backgrounds of cards, panels, menus, dialogs, inputs, and other contained regions. Their purpose is to show grouping and elevation without relying entirely on borders or shadows. Multiple surface levels should exist only when users need to understand a meaningful layer.

### Background

Background colour establishes the broad visual field behind content and surfaces. It should provide cognitive rest and dependable contrast. Background variation may distinguish a major region, but frequent changes can fragment reading and make content feel unrelated.

### Text

Text roles cover primary reading, supporting copy, headings, labels, metadata, inverse contexts, and other written information. Hierarchy may use more than one text role, but secondary does not mean faint. All necessary content must remain readable.

Text colour should be selected in relationship to each permitted background, not approved in isolation.

### Border

Border colour separates regions, identifies inputs, defines tables, or reinforces state. Borders should clarify structure without outlining every element. A border used for focus, error, or selection must remain distinguishable from the default border.

### Accent

Accent colour provides limited emphasis, warmth, or category support. It may appear in illustrations, callouts, highlights, or selected brand moments. Accent must not acquire an undocumented interaction or status meaning. Its scarcity gives it value.

### Success

Success communicates that an intended action completed or a condition is valid. It should confirm what succeeded in text and should not imply moral approval. Do not use success styling to classify a child's emotion or answer as “good.”

### Warning

Warning identifies a condition that needs attention before harm, error, or unwanted consequence occurs. It is less severe than an error or immediate danger. Warnings should state what needs attention and what action is available; colour alone is insufficient.

Avoid warning users about ordinary choices merely to steer behaviour.

### Error

Error communicates a failed action, invalid state, or condition that prevents completion. It should be clear, specific, and paired with recovery guidance. Error colour must not feel accusatory or erase user input.

Reserve error styling for actual problems. If it appears frequently for promotion or low-priority notices, users will stop treating it as meaningful.

### Information

Information highlights neutral context, explanation, or guidance that supports a task. It should be noticeable without implying success, warning, or failure. Not every explanatory paragraph needs an informational container.

### Focus

Focus colour identifies the active element for keyboard and other non-pointer navigation. It must be highly perceivable across every permitted background, component, state, and theme. Focus should not be confused with hover, selected, or error.

The focus indicator is functional, not decorative. It must not be removed to make a page look cleaner.

### Disabled

Disabled roles indicate that an action is currently unavailable. They should distinguish the state without making necessary labels impossible to read. Where possible, explain why an action is unavailable and what must change.

Do not use disabled appearance for actions that are merely secondary. Avoid disabling controls when an active control with clear validation would better support learning and recovery.

### Interactive

Interactive roles identify elements that can be acted upon. They should support recognizable default, hover, focus, active, selected, and disabled states without relying only on colour changes. Interaction colour must remain separate from decorative accent.

### Link

Link colour identifies navigation within or beyond content. Links must remain recognizable in surrounding text through more than hue where required. Their treatment should be consistent across articles, documentation, cards, and interface regions.

### Visited

Visited colour can help users remember which resources they have opened, reducing repeated effort. It should remain clearly link-like and accessible. Visited state may be omitted in contexts where revealing history could create privacy or safety concerns.

### Selection

Selection roles communicate chosen items, active filters, selected navigation, highlighted text, or current options. Selection should remain distinguishable from focus and hover. It must include a non-colour cue such as a marker, label, icon, border, or state announcement.

Semantic roles should not be combined merely because their current values appear similar. Success and selected, for example, communicate different concepts and may diverge in future themes. Meaning should determine architecture.

---

## Educational Use of Colour

Colour in educational experiences should support attention, organization, recognition, and memory. It should not turn learning into spectacle or classify complex emotional experiences into simplistic visual categories.

### Teacher resources

Use colour to distinguish objectives, materials, steps, adaptations, safeguarding notes, and optional extensions when these distinctions improve scanning. Preserve clear labels and structure so printed, grayscale, or photocopied resources remain usable. Avoid requiring teachers to own colour printers.

Colour coding across a resource series should remain stable and documented. Do not create a new key for each lesson.

### Parent guides

Colour can separate explanations, practical suggestions, observations, and professional-support guidance. It should make serious information findable without turning the page into a warning display. Parent concern must not be amplified through dramatic colour.

### Stories

Stories may use richer colour to establish setting, pacing, focus, and emotional atmosphere. Avoid assigning one fixed colour to an emotion as if it were universal. A character's anger, sadness, or worry should be understood through narrative, expression, context, and language—not hue alone.

Interactive choices must not suggest a “correct” emotional response solely through positive or negative colours.

### Worksheets

Worksheets should use colour sparingly and retain full meaning in grayscale. Lines, writing areas, prompts, and diagrams need sufficient print contrast. Avoid background fills that consume ink, reduce writing contrast, or reproduce poorly.

### Podcasts

Podcast artwork and episode pages may use colour to identify the series, season, content type, or topic. Thumbnails should remain legible at small sizes and must not use alarming palettes to make serious subjects more clickable. Playback states and transcripts should follow normal semantic roles.

### Dashboards

Dashboards may use colour to support status, grouping, trends, and action. Data must include labels, shapes, patterns, position, or text alternatives. More metrics should not mean more colours. A restrained, repeatable encoding improves comparison and reduces interpretation errors.

Across formats, evaluate whether colour helps someone learn or merely makes the asset look active. If removing colour destroys the lesson, provide additional structure.

---

## Emotional Psychology of Colour

Colour affects attention, arousal, expectation, and emotional interpretation, but its effects are not universal or deterministic. Response depends on culture, context, saturation, brightness, contrast, surrounding colours, personal experience, device, and the meaning already attached to an interface.

### Trust

Trust is supported by stable, legible, proportionate use of colour. Familiar visual states and restrained emphasis can make an interface feel dependable. A particular hue does not create trust if content is inaccurate or interaction is manipulative.

### Calm

Calm often comes from balance, reduced visual competition, comfortable contrast, and enough neutral space. Low stimulation should not become low legibility. A soft palette that makes text difficult to read creates strain rather than calm.

### Confidence

Clear action hierarchy, visible focus, predictable feedback, and recoverable errors help users feel confident. Colour contributes when it reinforces those behaviours. It should not imply certainty or safety that the content cannot support.

### Attention

Contrast and accent can direct attention toward an action, warning, or learning cue. Because attention is limited, emphasis should be scarce. When every region is bright, nothing is prioritized.

### Encouragement

Warm, proportionate accents may support an encouraging atmosphere. Encouragement should not become constant celebration or reward. Emotional learning includes difficulty, pause, and repair; colour should leave room for those experiences.

Avoid unsupported psychological claims such as “blue always calms children” or “yellow causes happiness.” Do not assign moral status to colours or describe them as inherently therapeutic. Research findings should be evaluated for population, setting, method, and practical relevance before informing a decision.

User research should examine the experience in context rather than ask whether people like individual swatches. Observe comprehension, stress, errors, attention, and trust while users complete meaningful tasks.

---

## Accessibility

Accessible colour is a system responsibility. It must be evaluated across text, icons, graphics, controls, focus, states, themes, print, and user settings.

### Contrast

Text, text-like images, interface components, meaningful graphics, focus indicators, and state boundaries should meet applicable WCAG contrast requirements. Test actual combinations and states rather than approving foreground and background colours independently.

Large display text should not be assumed to remain large after localization or responsive adaptation. When uncertain, use the stricter requirement. Anti-aliasing and thin weights may reduce perceived contrast even when a calculated ratio passes.

### Colour blindness

Do not rely on red versus green, blue versus purple, or any hue pair as the sole distinction. Use labels, icons, shapes, patterns, position, or text. Simulations can reveal risk but do not replace testing with people who have varied colour perception.

### Dark mode

Dark mode requires deliberate semantic mapping, not colour inversion. Review contrast, glare, elevation, imagery, illustrations, shadows, charts, focus, disabled states, and media. Highly saturated accents may appear more intense against dark surfaces.

### High contrast mode

Interfaces should remain understandable when user or operating-system settings replace colours. Use semantic markup, visible borders, system colour support where appropriate, and non-colour state cues. Background images and subtle shadows may disappear.

### Reduced vision

People with reduced vision may need stronger contrast, larger text, zoom, or custom colours. Colour should remain stable under magnification and should not create vibrating or low-definition boundaries. Avoid placing text over visually complex backgrounds.

### Printing

Printed resources may use different paper, ink, printers, and copying quality. Test colour and monochrome output. Ensure text, writing lines, diagrams, and status distinctions survive grayscale. Avoid large unnecessary fills and colour-dependent instructions.

### Grayscale

Grayscale review helps reveal dependencies on hue. It does not represent every colour-vision difference, but it is a useful baseline for hierarchy and print. Similar luminance can cause distinct colours to merge.

### Colour-independent communication

Every meaningful state should have another cue. Errors need text and field association. Selection needs a marker or state. Charts need labels, patterns, shapes, or direct annotation. Links need recognizable styling. Focus needs a visible indicator that does not depend on a subtle hue change.

Automated contrast checks should be part of development and design review, but manual inspection and representative user testing remain necessary. Accessibility should be verified whenever tokens, themes, backgrounds, components, illustrations, or content combinations change.

---

## Responsive Themes

Themes map the same semantic system to different viewing conditions. They are not independent brand palettes.

### Light theme

The light theme should provide a calm, readable default for bright and ordinary environments. Surfaces, borders, text, and states need enough separation without excessive outlining. Neutral space should support reading rather than make the interface feel blank or clinical.

### Dark theme

The dark theme should reduce glare where users prefer or need it while preserving hierarchy and recognition. It must not be generated through simple inversion. Review all semantic roles, illustration backgrounds, media, charts, inputs, focus, overlays, and system surfaces.

Dark does not always mean lower brightness for every user or context. Respect explicit user preference and platform settings rather than claiming health benefits the project cannot establish.

### Future themes

Future themes may address high contrast, classroom projection, print, device capabilities, or validated user needs. A new theme should have a defined purpose, audience, maintenance plan, and accessibility evidence. Do not create themes only for novelty or seasonal decoration.

Semantic meaning must remain consistent across themes. Error remains error, primary action remains primary action, and focus remains focus even when their values change. Relative prominence and non-colour cues should survive theme switching.

Users should not lose work, orientation, or comprehension when a theme changes. Respect system preferences while providing an override where product context warrants it. Store preferences carefully and avoid flashes of the wrong theme during load.

---

## Localization

Colour associations vary among cultures, communities, contexts, professions, and individuals. A colour associated with celebration in one setting may suggest mourning, danger, status, politics, religion, or a particular institution in another.

Semantic roles should remain stable because predictable function supports usability. A localized product should not arbitrarily swap success and warning meanings based on a broad cultural stereotype. However, the expression of a role may require review when a colour carries a strong regional association that changes comprehension, trust, or emotional safety.

Localization review should consider:

- Cultural and religious associations.
- Political or institutional meanings.
- School conventions and grading practices.
- Common safety and status conventions.
- The relationship between colour and translated language.
- Illustrations, photography, and flags appearing beside interface colours.
- Device and print conditions common in the target context.

Do not use flags as language selectors or colour alone as a proxy for culture. Language, country, and culture are not interchangeable.

Translated text may expand, wrap, or change the visual balance within coloured containers. Test alerts, buttons, badges, charts, and callouts with real localized content. A role that works with a short English label may become visually dominant with a longer translation.

Any regional adaptation should be documented as part of the system, tested for accessibility, and maintained across products. Local teams should not create ungoverned palettes that weaken ecosystem consistency.

---

## Colour in Components

Colour should reinforce component purpose and state. Detailed component specifications belong in the Component Library; these principles govern semantic use.

### Buttons

Colour should distinguish primary, secondary, and destructive actions without making appearance the only cue. Hover, focus, active, loading, and disabled states must remain perceivable. Do not use urgent colour for ordinary primary actions.

### Forms

Default fields, focus, entered content, help, valid states, warnings, and errors should be distinguishable. Error colour requires a message and clear field association. Do not show success for every completed field when it creates visual noise.

### Cards

Surface and border roles should establish grouping and interaction. Colour may identify content type or audience, but cards must remain understandable without it. Avoid a different palette for every card category.

### Navigation

Colour can reinforce current location, interaction, and hierarchy. Active navigation needs more than hue, and links must remain identifiable. Navigation colours should remain stable across hubs so movement feels continuous.

### Alerts

Information, success, warning, and error alerts should use their semantic roles consistently. Pair colour with a clear label, icon where useful, message, and action. Alert severity must reflect actual consequences rather than promotional priority.

### Dialogs

Colour should support hierarchy, overlay separation, focus, and consequential actions. Dialogs should not become more urgent merely because they interrupt. Destructive choices require clear wording and proportionate emphasis.

### Badges

Badges may communicate status, category, or count. Their meaning should be explicit and their number limited. Do not use status colours for decorative labels, and do not place critical information only in a badge.

### Charts

Chart colours should support comparison and direct interpretation. Use as few series colours as the data requires. Pair colours with direct labels, patterns, shapes, position, or accessible data tables. Sequential, diverging, and categorical encodings should match the data relationship rather than visual preference.

Never use decorative colour in a way that looks like an interactive or status signal. Components should draw colour from semantic tokens so themes and accessibility improvements apply coherently.

---

## Anti-patterns

Avoid the following failures.

- **Using colour as the only indicator:** People may not perceive the distinction, and meaning disappears in grayscale, high contrast mode, or assistive contexts.
- **Decorative gradients everywhere:** Repeated gradients create noise, complicate contrast, date quickly, and compete with semantic emphasis.
- **Excessive saturation:** Highly saturated regions demand attention and can make calm educational tasks feel urgent or tiring.
- **Inconsistent status colours:** If the same appearance means success in one place and selection in another, users cannot form reliable expectations.
- **Inaccessible contrast:** Faint text, borders, icons, and focus may appear refined but exclude users and fail under ordinary conditions.
- **Emotional manipulation:** Alarm colours, flashing states, and aggressive calls to action must not exploit worry, guilt, or fear.
- **Rainbow interfaces:** Assigning many colours without stable meaning increases cognitive load and weakens hierarchy.
- **Page-specific palettes:** Local palettes fragment the ecosystem, create maintenance work, and bypass theme and accessibility governance.
- **Colouring every category:** Too many category colours become impossible to remember and difficult to expand consistently.
- **Status colour as moral judgment:** Success and error roles must not classify feelings, children, or personal answers as good or bad.
- **Automatic dark-mode inversion:** Inversion produces unintended contrast, distorted imagery, and incorrect semantic relationships.
- **Text over uncontrolled images:** Variable backgrounds make contrast unreliable and can obscure both text and image meaning.
- **Low-contrast disabled states:** Disabled does not mean invisible; necessary labels and reasons must remain readable.
- **Invisible focus:** Removing or weakening focus for visual cleanliness prevents keyboard users from navigating confidently.
- **Hover-only meaning:** Hover is unavailable to touch and keyboard users and cannot carry essential state by itself.
- **Too many surface levels:** Numerous near-identical backgrounds make grouping and elevation harder to understand.
- **Unlabelled chart colours:** Legends based only on coloured swatches increase memory demands and exclude some readers.
- **Hard-coded values:** Local colour values prevent theme changes, accessibility corrections, and consistent maintenance.
- **Brand colour at any cost:** A brand role must not be used where contrast, status meaning, or emotional context makes it inappropriate.
- **Unsupported colour psychology:** Decisions should not rely on claims that a hue universally produces a specific emotion or behaviour.

Repeated anti-patterns usually indicate a missing role, weak documentation, or ungoverned implementation. Correct the underlying system rather than applying isolated patches.

---

## AI Contribution Guidelines

AI assistants may help audit semantic use, identify hard-coded colours, generate test cases, inspect contrast data, prepare documentation, and implement approved mappings. They must use the canonical system rather than infer meaning from appearance.

AI assistants should:

- Reuse established semantic roles and tokens.
- Preserve accessibility across text, components, graphics, themes, print, and states.
- Avoid inventing new colour meanings, roles, palettes, or category systems without an approved need.
- Avoid hard-coded colour values in product implementations.
- Document significant changes, affected roles, migration needs, and review evidence.
- Preserve non-colour cues for every meaningful state.
- Test light, dark, high contrast, grayscale, localization, and relevant user settings.
- Explain uncertainty and request clarification when a role or theme mapping is missing.

AI must not claim that a colour is accessible from its name or isolated value. Contrast depends on foreground, background, size, weight, state, and rendering context. It must not make universal psychological or cultural claims, fabricate user research, or approve its own design.

Generated layouts should not introduce colour for visual variety. When an existing role cannot express a recurring requirement, the assistant should identify the gap and follow the Design System contribution workflow.

Human review remains required. Accessibility specialists should review significant mappings, local reviewers should assess cultural context, and designers and developers should inspect real rendered states. Automated analysis supports but does not replace judgment.

---

## Colour Review Checklist

Before approval, confirm the applicable items.

### Purpose and semantics

- [ ] Every recurring colour maps to a documented role or justified decorative use.
- [ ] Semantic meaning is consistent across pages, components, hubs, and platforms.
- [ ] Colour reinforces hierarchy rather than creating competing focal points.
- [ ] Primary, secondary, accent, and status roles remain distinct in purpose.
- [ ] No new role or palette has been introduced for local preference.

### Emotional safety

- [ ] The overall composition feels calm and appropriate to the content.
- [ ] Saturation and contrast direct attention proportionately.
- [ ] Warnings and errors are noticeable without feeling punitive.
- [ ] Colour does not create guilt, false urgency, fear, or pressure.
- [ ] Feelings and personal responses are not classified as good or bad through colour.
- [ ] Sensitive content is not surrounded by distracting or promotional colour.

### Accessibility

- [ ] Text and backgrounds meet applicable WCAG contrast requirements.
- [ ] Controls, icons, focus indicators, and meaningful graphics have sufficient contrast.
- [ ] Every status, category, selection, and interaction has a non-colour cue.
- [ ] Relevant colour-vision differences have been evaluated.
- [ ] Focus is visible across every permitted background and state.
- [ ] Disabled content remains understandable and necessary labels stay readable.
- [ ] Text does not sit over uncontrolled or complex imagery.
- [ ] High contrast and forced-colour modes preserve structure and action.
- [ ] Reduced-vision, zoom, glare, and low-quality display conditions have been considered.

### Themes

- [ ] Semantic roles retain their meaning in light and dark themes.
- [ ] Dark mode uses deliberate mappings rather than inversion.
- [ ] Surfaces, overlays, elevation, media, charts, and illustrations work in each theme.
- [ ] Theme switching preserves content, focus, orientation, and user preference.
- [ ] A new theme has a defined user need, owner, and maintenance plan.

### Educational content

- [ ] Colour supports an educational distinction or atmosphere rather than entertainment alone.
- [ ] Teacher resources and worksheets remain usable in grayscale and ordinary print.
- [ ] Stories do not assign universal colours to emotions or signal correct personal feelings.
- [ ] Parent guidance uses proportionate emphasis for concerns and support.
- [ ] Podcast artwork remains clear at small size without sensational treatment.
- [ ] Dashboard data includes direct labels or other accessible encodings.

### Components and interaction

- [ ] Button hierarchy and states remain clear without relying solely on hue.
- [ ] Forms pair status colour with messages, associations, and recovery.
- [ ] Navigation and links are recognizable across visited, current, focus, and interaction states.
- [ ] Alerts use severity roles accurately and include clear language.
- [ ] Cards, badges, dialogs, and charts do not introduce undocumented meanings.
- [ ] Hover states do not carry information unavailable to keyboard or touch users.

### Localization and output

- [ ] Cultural and regional associations have been reviewed where relevant.
- [ ] Local adaptation preserves semantic meaning and system governance.
- [ ] Translated text fits coloured containers without truncation or changed emphasis.
- [ ] Language selection does not rely on flags or colour alone.
- [ ] Print, photocopy, grayscale, and exported documents preserve meaning.

### System stewardship

- [ ] Components use canonical semantic tokens rather than hard-coded values.
- [ ] Role definitions, theme mappings, examples, and tests are updated together.
- [ ] Changes have been reviewed across affected products and contexts.
- [ ] Contrast and visual regression checks cover approved combinations and states.
- [ ] Versioning, migration, deprecation, and release notes are complete where required.
- [ ] AI-assisted work has received human, accessibility, and localization review.

An essential unchecked item means the colour decision is not ready for approval.

---

## Future Evolution

The colour system should evolve when evidence, accessibility needs, languages, platforms, content, or product capabilities change. It should not be refreshed merely to follow visual fashion.

Change may be needed when:

- A role fails contrast or real-world usability.
- Users cannot distinguish states or hierarchy.
- A new platform or output mode introduces different conditions.
- Localization reveals a strong cultural conflict.
- New data or educational patterns require a genuine semantic role.
- Repeated exceptions show that current architecture is incomplete.
- Brand evolution can improve the experience without weakening familiarity.

Begin with the underlying problem rather than selecting a new colour. Determine whether the issue belongs to content, hierarchy, a semantic role, theme mapping, component use, or implementation. Test proposed changes across realistic combinations, not isolated swatches.

Version changes according to effect. Correcting a mapping may be a patch; adding a backward-compatible role or theme may be minor; redefining widely used roles or removing tokens may require a major release and migration.

Preserve compatibility when it does not perpetuate harm. Provide aliases, deprecation periods, automated checks, migration guidance, and release notes. Accessibility corrections should be prioritized even when they require visible change.

Maintain an inventory of roles, mappings, permitted combinations, contrast evidence, themes, ownership, and known limitations. Archive the reasoning behind major decisions so future contributors do not reconstruct it from screenshots.

Growth should not mean more colours. The strongest system uses the smallest coherent set of roles needed to communicate clearly. Add meaning deliberately; do not add variety by default.

---

## Closing Reflection

Colour succeeds when it helps people understand where they are, what matters, and what will happen next while supporting a calm and trustworthy environment. Its presence should feel coherent, not demanding.

Users should remember how safe, clear, and understandable an experience felt—not the colours themselves. Achieving that restraint requires semantic discipline, accessible relationships, cultural humility, and careful maintenance across every part of Healthy Little Minds.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
