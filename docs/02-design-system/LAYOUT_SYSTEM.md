---
Title: Healthy Little Minds Layout System
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
  - COLOR_SYSTEM.md
  - ACCESSIBILITY_STANDARD.md
---

# Healthy Little Minds Layout System

## Purpose

Layout is the invisible structure that supports comprehension, navigation, accessibility, and emotional safety. It determines where information appears, how relationships are understood, what receives attention, and whether a user can move through a task without becoming disoriented.

This handbook defines the layout philosophy and spatial architecture for the Healthy Little Minds ecosystem. It applies to the website, audience hubs, stories, talks, dashboards, worksheets, documentation, emails, and future applications. It governs the relationships among pages, regions, containers, content, components, and individual elements.

A successful layout helps people focus on learning instead of locating information. Parents should find practical guidance, teachers should scan preparation quickly, children should follow activities without competing controls, and dashboard users should understand current state.

Layout should reduce cognitive effort and create confidence through consistency. Repeated structures let knowledge of navigation, actions, and support transfer across the ecosystem.

Layout is not a fixed arrangement imposed on every page. Different content and audiences need different emphasis and pacing. The system should provide reusable spatial logic that can adapt without losing hierarchy or identity.

This document defines no CSS, columns, pixel values, spacing measurements, or implementation code. Those specifications belong in design tokens, component guidance, templates, and platform implementation. The concern here is why spatial decisions exist and what outcomes they must protect.

---

## Layout Philosophy

### Structure before decoration

Establish meaning, sequence, grouping, and action before adding visual ornament. The layout should remain understandable when backgrounds, illustration, shadows, and decorative elements are removed. Decoration may reinforce atmosphere or brand, but it cannot repair weak information structure.

Structure helps users distinguish explanation from example, instruction from reflection, and ordinary guidance from a safety boundary.

### Simplicity before density

Show the information and controls needed for the current task without filling available space merely because it exists. Density may be appropriate for expert comparison or dashboards, but it should be intentional and adjustable to context.

Simplicity organizes useful detail into manageable stages rather than giving every region equal weight.

### Rhythm before complexity

Consistent patterns of spacing, headings, content blocks, imagery, and actions help users anticipate a page's flow. Rhythm gives a long resource coherence and creates visual pauses where thought changes.

### Predictability before novelty

Navigation, content order, controls, and page regions should appear where users reasonably expect them. Novel layouts may be memorable but can increase learning effort and accessibility risk. Use an unusual arrangement only when it improves a demonstrated user or learning outcome.

### Accessibility before aesthetics

Reading order, focus order, reflow, zoom, touch access, and screen-reader structure must guide layout from the beginning. A visually balanced composition that breaks when text enlarges or requires a pointer is not successful.

These principles matter because Healthy Little Minds asks users to spend attention on emotional knowledge and practical action. The interface should not consume the attention the content needs.

---

## Design Goals

### Readability

Layout should support reading through appropriate measure, grouping, hierarchy, breathing room, and proximity.

### Orientation

Titles, navigation, breadcrumbs, structure, and current-state cues should show where users are and how they can move.

### Hierarchy

Position, grouping, sequence, and semantics should distinguish primary, supporting, optional, interactive, and related content.

### Responsiveness

The experience should adapt to viewport, orientation, zoom, text settings, input method, and content without losing meaning.

### Accessibility

Layout should support logical reading and focus order, varied input, assistive technology, cognition, and user customization.

### Scalability

Architecture should accommodate more content, languages, hubs, features, and platforms without page-specific rebuilding.

### Maintainability

Spatial rules, templates, and patterns should have canonical sources and clear ownership.

### Localization

Layouts should allow text expansion, different scripts, bidirectional reading, and regional content.

The goals are interdependent. A dense layout may appear scalable but fail readability. A spacious desktop composition may fail responsiveness. Review the system as a complete experience.

---

## Spatial Hierarchy

Healthy Little Minds uses six conceptual levels of spatial organization. These levels describe responsibility, not implementation containers.

### Page

The page is the complete context for a primary purpose. It establishes location, audience, title, navigation, sequence, and principal outcome.

The page level governs the overall reading and focus order. It should include a clear beginning, coherent progression, and recognizable ending.

### Section

A section groups a major part of the page's meaning and should have a clear purpose and usually a descriptive heading.

Section boundaries should be visible through hierarchy and space before decorative separators. Too many short sections fragment reading; overly broad sections hide structure.

### Container

A container manages content and available space through readable measure, alignment, or a contained surface.

Nested containers require care. Multiple levels of borders, cards, and backgrounds can make hierarchy harder to understand and responsive behaviour more fragile.

### Content block

A content block is a coherent unit with an internal reading order and clear relationship to surrounding blocks.

Blocks make structured content reusable across templates, but they should not be reordered without considering educational sequence and accessibility.

### Component

A component is a reusable element with defined behaviour and states. This system governs how components compose; the Component Library governs their internals.

### Element

An element is an individual heading, label, icon, image, field, value, or action within a larger structure.

Moving from page to element should reveal increasing detail without losing the purpose of the parent level. When a layout requires arbitrary positioning of many individual elements, the hierarchy may be missing a meaningful section, block, or component.

---

## Grid Philosophy

Grid systems create shared alignment and proportion. They help separate consistent structure from page-specific content and allow different contributors to produce coherent layouts.

### Consistency

A grid establishes common lines and regions so content and actions relate consistently across pages.

### Alignment

Alignment should communicate relationship. Elements that begin on the same line appear connected; intentional offsets may establish hierarchy. Avoid near-alignments that look accidental or require local adjustments.

### Predictability

Repeated grid behaviour helps users anticipate primary and supporting regions and helps contributors reuse known relationships.

### Responsive flexibility

A grid should adapt to space and content rather than preserve a fixed desktop arrangement. Regions may change size, order, position, or visibility when the task requires it. The semantic order must remain coherent.

### Content rhythm

The grid should support repeated content blocks, reading measures, media, and vertical transitions. It provides a spatial rhythm without forcing every element to occupy equal proportions.

Do not choose a grid because it is common in another product. The system should emerge from Healthy Little Minds content and tasks. A grid is a tool for relationships, not a visible pattern to display.

Avoid treating grid lines as permission to fill every region. Empty space can be part of the structure. Likewise, content should not be stretched to align with a grid at the expense of reading comfort.

---

## Containers

Containers manage the relationship between content, viewport, and surrounding regions.

### Content width

Content width should reflect its purpose. Sustained reading, comparison, media, interactive stories, dashboards, and full-bleed illustration need different measures. A single maximum width should not govern every experience.

### Reading width

Long-form text should remain within a comfortable line length. Supporting media, callouts, and tables may extend beyond the reading column when doing so improves comprehension, but the body text should return to a stable measure.

### Full-width regions

Full-width regions may establish major navigation, a broad illustration, a story scene, a page-level message, or a dashboard surface. They should be used intentionally. Full width does not mean the internal content must span edge to edge.

### Grouped information

Containers can show that elements belong together. Use background, border, space, or heading relationships proportionately. Avoid placing every paragraph in a card or nesting grouped regions until the content feels boxed in.

### Visual breathing room

Containers should protect enough internal and external space for content to remain distinct. Breathing room should adapt on smaller screens without collapsing relationships. Excessive padding can waste space and separate related information from action.

Containers should tolerate text expansion, zoom, absent images, long errors, and optional content. Content should not be clipped to preserve an idealized shape.

---

## Vertical Rhythm

Vertical rhythm makes the sequence of a page legible. It is created through repeated relationships among headings, paragraphs, lists, images, activities, callouts, and sections.

### Section spacing

Major changes in topic should receive stronger separation than changes within a topic. Consistent section spacing helps users recognize the page outline before reading every heading.

### Paragraph spacing

Paragraph gaps should mark changes of thought while preserving continuity. Dense blocks are tiring; exaggerated gaps make one explanation feel disconnected. Typography and spacing should be designed together.

### Grouping

Elements that belong together should be closer than elements that do not. A label belongs with its field, a caption with its image, and an error with the control it describes. Proximity should support semantic relationships rather than merely visual balance.

### Visual pauses

After a complex explanation, activity, or sensitive message, additional space may support reflection and transition. Visual pauses should be purposeful, not inserted randomly to make a page feel premium.

### Reading flow

Rhythm should guide the eye naturally from title to explanation, example, action, and next step. Sudden density changes, unrelated promotional regions, and inconsistent heading gaps interrupt that flow.

Vertical rhythm externalizes structure and should remain coherent when content wraps, translates, or reflows.

---

## Responsive Layout

Responsive layout preserves purpose, hierarchy, and task completion across conditions. It does not reproduce the same composition at different scales.

### Desktop

Desktop layouts can support broad navigation, side information, comparison, and generous breathing room. Keep primary reading within a suitable measure and avoid spreading related content across distant regions simply because space exists.

### Laptop

Laptop viewports often have less vertical space than desktop mock-ups suggest. Test sticky navigation, dialogs, filters, tables, and long forms without assuming a tall screen. Preserve access to primary content and completion actions.

### Tablet

Tablet layouts may change orientation, support touch, use split-screen, or sit at different viewing distances. Regions should adapt without creating small desktop controls. Sidebars may become drawers or in-flow sections if their relationship remains clear.

### Mobile

Mobile layouts should prioritize one coherent flow. Put primary content and action before supporting regions, preserve readable text and touch targets, and allow natural wrapping. Do not hide essential information simply to shorten the page.

When multi-column content becomes a single column, verify that semantic order remains correct. A visually right-hand note may need to appear immediately after the paragraph it supports rather than at the end of the page.

### Large displays

Large displays may be used at a distance, in classrooms, or for shared viewing. Avoid unrestricted width and dispersed controls. Scale the composition according to viewing context rather than enlarging every region proportionally.

Responsive decisions should be triggered by content stress: wrapping, overlap, unreadable measure, insufficient touch space, or broken relationships. Device categories are useful test contexts, not the sole basis for layout changes.

Test zoom, text resizing, system font settings, orientation, translated text, reduced motion, keyboard focus, and on-screen keyboards. A layout is not responsive if it adapts to viewport width but fails user customization.

---

## Educational Page Layouts

Educational layouts should move users from orientation toward understanding and action. Templates may vary, but each should make audience, purpose, sequence, and next step clear.

### Teachers Hub articles

Teacher articles should surface title, intended age, duration, objective, materials, and practical use early. Background explanation should remain available without delaying classroom preparation. Adaptations, safeguarding notes, and downloads need recognizable, consistent locations.

### Parent guides

Parent guides should establish the issue, what may be noticed, what can be tried, and when further help may be appropriate. Keep practical guidance easy to find within longer context. Avoid sidebars that make important support appear optional or promotional.

### Worksheets

Worksheets need clear instructions, sufficient response space, logical task order, and print resilience. Keep prompts with their response areas and avoid page breaks that separate examples from tasks. Design for ordinary printers, photocopying, grayscale, handwriting, and varied motor needs.

### Interactive Stories

Stories should maintain focus on narrative, current choice, and progress without surrounding the scene with product navigation. Controls should be stable and choices manageable. Allow pause, replay, exit, and help without disrupting the emotional moment.

Story layout should work without assuming illustration alone carries meaning. Text, audio controls, captions, and alternatives need an integrated reading order.

### Podcast pages

Podcast pages should connect episode title, summary, player, transcript, chapters, sources, support notes, and related actions. The player should not obscure the transcript or dominate the entire page. Persistent playback must remain accessible and must not cover content at zoom.

### Lesson pages

Lesson pages should distinguish preparation, delivery, discussion, practice, reflection, and extension. Teachers need a scannable overview and a dependable sequence. Student-facing material should not be confused with facilitator notes.

### Resource libraries

Libraries should support search, filtering, comparison, and orientation as collections grow. Resource items need consistent metadata and titles. Filters should reflect real decisions such as audience, age, topic, format, duration, or language without overwhelming first-time users.

No educational template should become rigid enough to distort the learning. Templates establish expected structure while allowing justified variation for content, accessibility, and context.

---

## Dashboard Layouts

Dashboard layouts should help users understand state and take action. They should not display every available metric or feature at once.

### Progress

Progress should show meaningful learning or task state rather than reward activity for its own sake. Explain what is complete, what remains, and whether completion is required. Avoid dense charts or celebratory visuals that turn emotional learning into performance.

### Search

Search should remain prominent when the dashboard contains a growing resource collection. Preserve the query, make results count and scope understandable, and keep recovery visible when no result is found.

### Filters

Filters should match user decisions, show active selections, support clearing, and remain usable on small screens. Avoid long permanent sidebars when most users need only a few filters. Applied filters must be visible near results.

### Collections

Collections should communicate purpose, ownership, item count, and available actions. Avoid presenting several near-identical grids with no clear distinction. Empty collections should explain how to add relevant resources.

### Saved resources

Saved content should preserve recognizable metadata and allow sorting or grouping when volume requires it. Saving and removal should provide clear feedback and recovery. Do not imply that saved content is downloaded or available offline unless it is.

### User settings

Settings should be grouped by user mental model, not technical architecture. Explain consequences, separate high-risk actions, and provide confirmation and undo where appropriate. Accessibility and language preferences should be easy to find.

Clarity matters more than density. Use summary and progressive detail rather than compressing every status into cards. A dashboard should answer what matters now, not demonstrate how much data the platform can display.

---

## Navigation Layout

Navigation should create a stable map of the ecosystem. Global, local, and contextual navigation need distinct roles and should not compete.

### Headers

Headers should provide brand orientation, primary destinations, and essential utilities. Their height and content should remain proportionate to the task. Sticky headers must not consume excessive space or obscure focused elements under zoom.

### Sidebars

Sidebars suit local navigation, filters, or supporting information when parallel access improves the task. They should not become storage for every secondary action. On narrow layouts, preserve their purpose through an accessible alternative such as an in-flow section or controlled panel.

### Breadcrumbs

Breadcrumbs show hierarchical location and support movement to broader levels. They complement, not replace, a clear title and global navigation. Allow paths to wrap rather than shrink or truncate essential context.

### Footer

Footers provide stable access to secondary navigation, policies, support, language options, and project information. They should not become a duplicate site map or an overwhelming final page.

### Contextual navigation

Previous and next steps, table of contents, related lessons, and in-page anchors can support a sequence or long resource. Their placement should make the relationship explicit. Related content should not create an endless path that prevents completion.

Users should always know where they are. Current-state cues, titles, URL structure, navigation labels, and page context should agree. Test navigation with unfamiliar users; internal knowledge can hide structural ambiguity.

---

## Forms

Form layout should support completion, understanding, privacy, and recovery.

### Labels

Place visible labels in a consistent relationship to controls. Labels should remain available after input and should not depend on placeholders. Group related options under a clear legend or heading.

### Helper text

Put relevant requirements and reasons before users commit an answer. Helper text should sit close to its field without competing with the label. Explain why sensitive information is requested.

### Validation

Place validation where the user can associate it with the field and provide a clear summary when several errors exist. Move focus appropriately after submission. Do not rely on colour or distant messages.

### Grouping

Divide long forms into meaningful sections and reveal progress when it helps orientation. Avoid splitting a simple task across unnecessary steps. Keep dependent fields and choices together.

### Confirmation

After submission, confirm what happened, whether data was saved or sent, and what comes next. A confirmation page should preserve enough context to reassure users they completed the intended action.

### Recovery

Preserve entered data after validation and system errors. Offer retry, edit, cancel, or undo according to consequence. Destructive actions should be separated from routine controls and receive proportionate confirmation.

Forms should support keyboard, screen reader, touch, zoom, text expansion, autofill, and on-screen keyboards. Layout cannot solve unclear questions, so form structure and content must be reviewed together.

---

## Empty States

An empty state is part of the normal product experience, not a gap to fill with decoration. It should explain why no content appears, what that means, and what useful action is available.

Different causes require different responses: a new account, an empty collection, no search results, removed content, unavailable permissions, or a filtered list with no matches. Do not use one generic empty state for all of them.

An effective empty state may include:

- A clear title naming the state.
- A brief explanation without blame.
- One relevant primary action.
- A secondary option such as clearing filters or returning.
- Illustration only when it adds reassurance or recognition.

Empty states should educate and guide. A saved-resources page can explain what saving does and link to the resource library. A no-results state can preserve the query and suggest spelling, broader terms, or filter changes.

Avoid jokes about loneliness, failure, or emptiness, especially in emotional wellbeing contexts. Do not use an empty state to pressure users into creating activity they do not need.

---

## Error Layout

Errors should appear where users can understand and recover from them. Their layout must reflect severity and scope.

Field errors belong beside the affected control and may also appear in a summary for long forms. Section errors should identify the region that failed. Page-level failures should preserve navigation, explain what remains available, and offer a clear next step.

Hierarchy should prioritize:

1. What happened.
2. What information or work remains safe.
3. What the user can do next.
4. Where to get help if recovery fails.

Preserve user work wherever possible. An error that deletes a long reflection, form, or search is more than a message problem; it breaks trust. Keep entered content, selected filters, scroll context, and focus where safe.

Error layouts should not trap users in a modal, cover the control they need, or push the page into an unstable arrangement. Use calm, direct hierarchy rather than oversized warning decoration. Technical details may be available for support but should not replace a human explanation.

---

## Loading States

Loading layouts should communicate activity, preserve stability, and allow useful work to continue where possible.

### Skeleton layouts

Skeletons may reserve the shape of incoming content and reduce perceived disruption. They should resemble the actual structure, remain visually restrained, and not animate in a distracting way. Do not use skeletons for waits too short to notice or content unlikely to arrive in the shown shape.

### Progressive loading

Load essential structure and text before optional media, related content, or enhancements. Allow independent regions to resolve without blocking the entire page. Prioritize what users need to understand or act.

### Maintaining stability

Reserve appropriate space for images, media, messages, and dynamic regions to avoid layout shift. New content should not move a control while a user is about to activate it. Preserve reading and focus position.

### Avoiding layout shift

Unexpected movement causes errors and disorientation. Loading indicators, late fonts, ads, banners, and asynchronous results must not push essential content unpredictably. Where content size cannot be known, introduce it in a controlled region.

Always design failure and slow states alongside loading. A perpetual spinner without explanation or recovery is not acceptable. Respect reduced-motion preferences and do not use busy animation to disguise poor performance.

---

## Progressive Disclosure

Progressive disclosure presents necessary information first and makes additional complexity available when needed.

### Accordions

Accordions suit independent supplementary sections when users are likely to need only some. Labels should describe the hidden content and expose state. Avoid placing all page content in accordions merely to reduce visible length.

### Expandable sections

Expandable regions can hold examples, definitions, references, transcripts, or adaptations. Expansion should preserve focus, reading order, print behaviour, and direct linking where necessary.

### Advanced settings

Place infrequent, specialist, or high-complexity settings behind a clear advanced entry point. Do not hide privacy, accessibility, cost, or consequence settings because the default interface looks cleaner without them.

### Optional reading

Long resources may distinguish essential guidance from deeper evidence or context. Optional does not mean unimportant; use accurate labels so users can decide.

### Layered learning

Educational content can progress from a simple model to examples, practice, nuance, and sources. Each layer should remain accurate and useful. Do not make the first layer misleading with the expectation that later detail will correct it.

Disclosure should reduce load, not hide responsibility. Safety information, consent, critical limitations, and actions needed for completion must remain visible at the relevant moment.

---

## Localization

Layout should accommodate language and culture without treating the English composition as fixed.

### Longer translations

Navigation, titles, buttons, labels, errors, and callouts must wrap or expand. Avoid fixed heights and narrow text containers. Test substantially longer and shorter strings rather than assuming modest expansion.

### Traditional Chinese

Traditional Chinese may create different text density, line height, punctuation, and wrapping. Use appropriate fonts and line-breaking rules. Do not force spacing patterns designed for English words.

### Simplified Chinese

Simplified Chinese also requires locale-appropriate glyphs, punctuation, and breaks. Compact character count does not mean content needs less visual breathing room or can be placed in denser layouts without testing.

### Japanese

Japanese combines scripts and has line-breaking restrictions. Layouts should support appropriate punctuation placement, mixed Latin terms, vertical density, and natural wrapping without manual line breaks.

### Korean

Korean Hangul blocks, mixed-script content, and word spacing can produce different wrapping from English and Japanese. Test labels, tables, cards, and navigation with real translations.

### Future RTL languages

Architecture should be capable of bidirectional mirroring. Reading order, navigation, directional icons, tables, progress, forms, media controls, and transitions require semantic adaptation—not only right-aligned text. Some elements such as numbers, media controls, or brand marks may not mirror.

Localization may also change content order, examples, metadata, or required support information. Templates should allow controlled adaptation while preserving overall purpose and system governance.

Do not embed essential text in images or position elements through language-specific manual offsets. Localized layouts require native-language, accessibility, and rendered-product review.

---

## Accessibility

The Accessibility Standard defines detailed requirements. This layout system establishes the spatial responsibilities that support them.

### Reading order

Visual and semantic order should agree. Multi-column layouts, positioned content, and responsive rearrangement must produce a coherent sequence without relying on visual coordinates. Important context should precede the action it governs.

### Zoom

Content should reflow under zoom without clipping, overlap, or loss of functionality. Avoid fixed regions that consume the viewport or create two-dimensional scrolling for ordinary text.

### Keyboard navigation

Focus order should follow task and reading logic. Layout changes, dialogs, disclosures, and dynamic content must not move focus unpredictably or hide the focused element.

### Touch targets

Controls need enough target area and separation for varied motor precision. Responsive compression must not reduce targets or place consequential actions too close together.

### Cognitive accessibility

Use stable regions, consistent placement, manageable choices, descriptive headings, and visible progress. Avoid memory-dependent navigation and unexpected reordering. Keep help and recovery close to the task.

### Screen readers

Use semantic landmarks, headings, lists, tables, forms, and component relationships. Visual containers and cards do not create structure by themselves. Avoid duplicating content for responsive layouts in ways that cause repeated screen-reader output.

Accessibility testing should include keyboard, screen reader, zoom, reflow, text spacing, touch, orientation, reduced motion, and realistic content. Automated tools cannot judge spatial comprehension completely.

---

## Anti-patterns

- **Cluttered pages:** Too many regions, actions, and decorations compete for attention and hide the learning task.
- **Inconsistent spacing:** Unstable proximity makes relationships difficult to infer and weakens ecosystem familiarity.
- **Multiple competing columns:** Parallel content paths force users to decide reading order and often collapse poorly on small screens.
- **Endless scrolling without structure:** Length is not inherently harmful, but long pages need headings, progress, anchors, and meaningful sections.
- **Decorative layouts:** Asymmetry, overlap, and unusual placement should not exist merely to appear creative.
- **Broken reading flow:** Promotions, unrelated cards, and sudden region changes interrupt comprehension.
- **Page-specific layouts:** Local structures increase design and engineering cost and make each page feel like a different product.
- **Centred long paragraphs:** Inconsistent line starts make sustained reading and magnification harder.
- **Unpredictable navigation:** Moving, renaming, or hiding common destinations increases cognitive effort and weakens trust.
- **Card grids for everything:** Cards fragment related explanations and create unnecessary containers.
- **Excessive nesting:** Containers inside cards inside panels obscure hierarchy and complicate responsive behaviour.
- **Fixed-height content:** Text clips or overflows under translation, zoom, errors, and user settings.
- **Desktop-first shrinking:** Compressing a wide composition produces tiny controls, poor order, and hidden context.
- **Mobile content removal:** Mobile users should not receive incomplete guidance merely because space is smaller.
- **Visual order unlike source order:** Keyboard and screen-reader users encounter a different, confusing sequence.
- **Sticky regions everywhere:** Persistent headers, players, actions, and banners can leave little room for content.
- **Modal overuse:** Dialogs interrupt flow, constrain zoom, and create focus complexity when an in-page action would work.
- **Premature truncation:** Ellipses hide distinguishing information and consequences. Adapt the layout first.
- **Manual positioning:** One-off offsets fail with content changes, localization, and responsive layouts.
- **Hidden edge states:** A layout designed only for ideal content fails during loading, errors, empty results, and long translations.

When an anti-pattern repeats, improve the shared template, pattern, or system rule rather than patching each page.

---

## AI Contribution Guidelines

AI assistants may help inspect existing structures, generate realistic layout test content, identify duplication, propose responsive states, implement approved templates, and draft documentation. They must follow the canonical system rather than generic layout conventions.

AI assistants should:

- Reuse established page structures, patterns, containers, and components.
- Preserve semantic hierarchy, reading order, focus order, and learning sequence.
- Avoid inventing layouts, wrappers, breakpoints, or page-specific structures without a demonstrated need.
- Respect responsive behaviour under viewport changes, zoom, text resizing, and orientation.
- Maintain accessibility for keyboard, touch, screen readers, cognition, and localization.
- Test loading, empty, error, long-content, missing-media, and translated states.
- Document significant changes, tradeoffs, dependencies, migration, and system impact.
- Request clarification when the intended audience, content priority, or governing template is unclear.

AI must not infer layout quality from a static screenshot alone. It should inspect semantics, actual content, platform behaviour, and existing design-system sources. It must not claim accessibility or usability without testing and human review.

Generated implementation should avoid fixed dimensions, arbitrary offsets, duplicated responsive content, and hard-coded exceptions. When the existing system cannot express a recurring need, the assistant should propose a governed change rather than silently create a fork.

Human design, accessibility, localization, content, and engineering review remain required according to scope and risk.

---

## Layout Review Checklist

Before approval, confirm the applicable items.

### Purpose and structure

- [ ] The page has one clear primary purpose and audience.
- [ ] Page, section, container, content block, component, and element responsibilities are coherent.
- [ ] The title, introduction, main content, action, and ending form a logical sequence.
- [ ] Sections contain related ideas and use descriptive headings.
- [ ] Decorative regions do not determine the structure.

### Hierarchy and rhythm

- [ ] Primary, supporting, optional, and interactive content are distinguishable.
- [ ] Proximity communicates relationships accurately.
- [ ] Section, paragraph, and component spacing follow shared rhythm.
- [ ] Visual pauses support changes in thought or task.
- [ ] The grid and alignment create order without stretching content unnaturally.
- [ ] Containers preserve readable measure and appropriate breathing room.
- [ ] Nested surfaces and cards remain limited and meaningful.

### Orientation and navigation

- [ ] Users can identify their location, audience context, and available routes.
- [ ] Header, sidebar, breadcrumbs, footer, and contextual navigation have distinct purposes.
- [ ] Current state is visible through more than one visual cue where necessary.
- [ ] Navigation labels and placement remain consistent across the ecosystem.
- [ ] Related resources support the current need rather than endless engagement.

### Responsive behaviour

- [ ] The layout preserves understanding on desktop, laptop, tablet, mobile, and large displays as relevant.
- [ ] Content stress, not device convention alone, drives adaptation.
- [ ] Multi-column content becomes a coherent semantic sequence.
- [ ] Essential content and actions are not removed on small screens.
- [ ] Text, labels, errors, and controls wrap without clipping or unintended overlap.
- [ ] Orientation, split screen, on-screen keyboard, zoom, and user text settings are supported.
- [ ] Sticky and fixed regions do not obscure content or focus.

### Educational experiences

- [ ] Audience, objective, duration, materials, and next step appear where relevant.
- [ ] Explanation, example, practice, reflection, and support are easy to distinguish.
- [ ] Teacher and student-facing information cannot be confused.
- [ ] Parent guidance makes practical steps and support boundaries easy to find.
- [ ] Worksheets preserve instructions, response space, print, and photocopy quality.
- [ ] Stories keep narrative and current choice central while preserving controls and alternatives.
- [ ] Podcast pages integrate player, transcript, sources, and actions accessibly.
- [ ] Libraries support search, filtering, metadata, and growth without overwhelming users.

### Dashboards and forms

- [ ] Dashboard information answers current user needs rather than displaying every metric.
- [ ] Search, filters, collections, saved items, and settings have clear relationships.
- [ ] Form labels, helper text, fields, validation, and errors remain grouped.
- [ ] Long forms have meaningful sections and proportionate progress.
- [ ] Confirmation explains completion and next steps.
- [ ] User input and state are preserved during recoverable errors.

### Edge states and disclosure

- [ ] Empty states explain the cause and offer one relevant action.
- [ ] Errors appear at the correct scope and provide recovery.
- [ ] Loading preserves layout stability, focus, and useful content.
- [ ] Skeletons match real structure and respect reduced motion.
- [ ] Dynamic content does not create disruptive layout shifts.
- [ ] Progressive disclosure reduces load without hiding safety, consent, cost, or consequences.
- [ ] Expanded regions preserve focus, reading order, linking, and print where needed.

### Accessibility

- [ ] Visual order and semantic reading order agree.
- [ ] Focus order follows task logic and remains visible after changes.
- [ ] The page reflows under zoom without lost content or avoidable two-dimensional scrolling.
- [ ] Touch targets are sufficiently distinct and separated.
- [ ] Landmarks, headings, lists, tables, and forms provide meaningful structure.
- [ ] Help and recovery remain close to the relevant task.
- [ ] Keyboard, screen-reader, zoom, reflow, touch, and cognitive access have been tested as applicable.

### Localization and stewardship

- [ ] Longer and shorter translations fit without forced truncation or fixed heights.
- [ ] Traditional Chinese, Simplified Chinese, Japanese, and Korean layouts use appropriate line behaviour where in scope.
- [ ] The architecture can support future right-to-left languages.
- [ ] Essential text is not embedded in images or positioned with language-specific offsets.
- [ ] Established templates and patterns are reused from canonical sources.
- [ ] New structures address a recurring need and include documentation and ownership.
- [ ] Changes are tested across affected pages, products, languages, and states.
- [ ] AI-assisted work has received appropriate human review.

An essential unchecked item means the layout requires revision, testing, or specialist review before approval.

---

## Future Evolution

The layout system should evolve when user evidence, content growth, languages, platforms, accessibility knowledge, or product needs show that existing structures are insufficient. It should not be redesigned merely to follow visual fashion.

Change may be justified when:

- Users cannot find or understand important content.
- Responsive or accessible behaviour repeatedly fails.
- New languages or right-to-left support reveal structural assumptions.
- A new educational format needs a recurring architecture.
- Content growth makes existing navigation or libraries difficult to use.
- Repeated page-level exceptions reveal a missing pattern or template.
- New platforms introduce validated interaction or display needs.

Begin by identifying the level of the problem. It may belong to information architecture, a template, pattern, component, container, token, content model, or implementation. Changing the wrong level creates work without resolving the cause.

Test proposed evolution with representative users, content, translations, devices, assistive technologies, loading states, and realistic data. Preserve familiar mental models where they continue to work. When change is necessary, provide migration guidance, versioning, documentation, and a path to remove deprecated structures.

Do not preserve inaccessible or confusing layouts solely for visual consistency. Familiarity matters, but it cannot outweigh comprehension and access. Conversely, do not introduce widespread change without evidence that the benefit justifies relearning and migration.

Record decisions, templates, supported contexts, exceptions, limitations, and deprecations for future contributors.

The goal of evolution is not more layouts. It is a smaller, stronger set of architectures capable of serving more real needs.

---

## Closing Reflection

The best layouts quietly disappear. They provide enough structure for people to know where they are, enough rhythm to follow an idea, and enough flexibility to use the experience in their own context.

Healthy Little Minds should allow people to focus on learning, relationships, and emotional growth rather than navigating the interface. When layout succeeds, the user experiences order and confidence without needing to notice the spatial system that made them possible.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
