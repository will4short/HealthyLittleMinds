---
Title: Healthy Little Minds Component Library
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
  - ACCESSIBILITY_STANDARD.md
---

# Healthy Little Minds Component Library

## Purpose

Components are reusable building blocks that create consistency, accessibility, maintainability, and familiarity throughout Healthy Little Minds. They turn shared principles and foundations into recognizable interface behaviour without requiring each page or team to solve the same problem independently.

This handbook defines the scope, purpose, behaviour, relationships, accessibility expectations, and governance of reusable components. It applies across the website, audience hubs, stories, talks, dashboards, documentation, emails, worksheets where digital patterns apply, and future products.

The Component Library is more than a visual inventory. A component includes its reason for existing, semantic responsibility, content model, hierarchy, interactions, states, responsive behaviour, localization, accessibility, testing, documentation, ownership, and lifecycle. A screenshot or design asset alone is not a component specification.

Components exist to reduce repeated design decisions rather than limit creativity. They standardize familiar needs so contributors can focus creativity on education, content, research, illustration, and new user problems. When an established component cannot meet a genuine need, the appropriate response is to examine and improve the system—not create an undocumented local version.

This handbook describes component standards rather than implementation code. It contains no framework-specific interfaces or markup. Canonical specifications and implementation packages should be governed by these rules and by the Design System, Accessibility Standard, Typography, Color System, and Layout System.

A component is successful when users understand and operate it without needing to notice that it is reusable. Internal consistency should produce external confidence.

---

## Component Philosophy

### Consistency before novelty

Similar actions and information should use similar components. Consistency lets users transfer knowledge from one page or hub to another. A primary action, resource card, form error, or download should not change behaviour because a different contributor designed the page.

Novel components are justified only when established options cannot meet a demonstrated need. Visual difference alone is not a new need. Familiar patterns should be preferred when they support the task well.

### Accessibility by default

Each component should encode strong semantic, keyboard, focus, contrast, content, responsive, and assistive-technology behaviour. Accessible defaults reduce repeated mistakes, but a component is not automatically accessible in every context. Page structure, labels, content, sequence, and surrounding components still require review.

Accessibility variants should not become inferior “special” components. The primary component must support varied users and settings.

### Reusable before custom

Contributors should review the library before designing a local solution. Reuse improves familiarity, testing coverage, localization, and maintenance. Extension is appropriate when the responsibility remains the same; a distinct responsibility may need a new component or pattern.

Do not overload a component with unrelated variants merely to avoid adding a justified new pattern. Reuse concerns purpose and behaviour, not visual resemblance alone.

### Simplicity before complexity

Components should have focused responsibilities, understandable options, and the fewest variants needed to serve real use. Large configuration surfaces transfer system complexity to every consumer and make combinations difficult to test.

Prefer composition of focused components when relationships remain clear. Avoid composition that produces deep nesting, duplicated semantics, or fragmented user experiences.

### Educational usefulness before decoration

Every component should support understanding, navigation, action, feedback, practice, or another identifiable need. Decorative elements belong to brand and illustration systems and should not be disguised as interactive components.

Healthy Little Minds components should protect attention for learning. Interaction, colour, motion, and containers must earn their place rather than make pages look busy or contemporary.

---

## Component Categories

Categories help contributors find and reason about components. They do not create separate visual systems. A component may participate in several patterns, but it should have one primary responsibility and canonical home.

### Navigation Components

Navigation components help users understand location, available destinations, sequence, and return paths.

#### Header

The header establishes product identity, access to primary destinations, and essential utilities. It should remain proportionate to the page task, preserve a clear route to home, and adapt without hiding critical navigation. Sticky behaviour must not obstruct content, focus, or zoomed views.

#### Navigation Bar

The navigation bar exposes a stable set of major destinations. Labels should be plain, current state visible, and interaction consistent across input methods. It should not become a collection of promotions or duplicate every available page.

#### Sidebar

A sidebar supports local navigation, filtering, or contextual information when persistent parallel access improves the task. It should have a clear heading and relationship to main content. On narrow layouts, its purpose should survive through an accessible alternative rather than simply disappear.

#### Breadcrumbs

Breadcrumbs communicate hierarchical location and allow movement to broader levels. They supplement a clear page title and global navigation. Paths should wrap, identify the current page, and avoid exposing internal structure users do not understand.

#### Footer

The footer provides stable access to secondary navigation, policies, support, language settings, and organizational information. It should remain structured and concise rather than become a duplicate sitemap or promotional wall.

#### Pagination

Pagination divides large result sets or ordered content into navigable sections. It should identify current position, destination, previous and next relationships, and result context. User filters and focus should remain stable across page changes.

#### Table of Contents

A table of contents gives an overview of long content and links to meaningful sections. It should reflect heading hierarchy, support direct linking and return navigation, and remain useful under zoom and localization. It is unnecessary for short pages.

---

### Action Components

Action components allow users to initiate, navigate, confirm, or change something. Their hierarchy must reflect consequence and importance.

#### Buttons

Buttons initiate actions. Labels should name the result, and visual hierarchy should distinguish primary, secondary, and destructive intent without relying on colour alone. Buttons need complete interaction states, sufficient targets, and predictable feedback.

#### Button Groups

Button groups bring closely related actions together. They should clarify relationship without making all actions equally prominent. Groups are not a way to fit many competing choices into one region. Destructive actions require appropriate separation.

#### Floating Actions

Floating actions remain persistently available for a high-frequency, context-wide task. Use them rarely. They must not cover content, compete with navigation, or become the default solution for an unclear page hierarchy. Their purpose must remain recognizable without position alone.

#### Links

Links move users to content, resources, files, or locations. Link text should describe the destination and remain recognizable in context. External, download, or new-context behaviour should be clear when it changes user expectation.

#### Icon Buttons

Icon buttons represent familiar, compact actions where space or repetition makes visible text impractical. Every icon button needs an accessible name, adequate target, visible focus, and clear state. Use visible labels for unfamiliar, consequential, or child-facing actions.

---

### Content Components

Content components organize and present information. They should support comprehension rather than create decorative containers.

#### Cards

Cards represent discrete, comparable content or actions. Each should have clear hierarchy, consistent anatomy, and one understandable interaction model. Do not make some cards fully actionable and others dependent on hidden links without a meaningful distinction.

#### Hero Sections

Hero sections introduce a major landing context, audience, or campaign. They should establish purpose and primary action quickly. Illustration and display text must not push essential information away or turn every page into a promotional entry point.

#### Article Headers

Article headers identify title, summary, audience, author or reviewer where relevant, date, format, and other essential metadata. They should orient readers without delaying content through oversized decoration.

#### Podcast Cards

Podcast cards summarize an episode through title, series, duration, date, topic, and a clear listen or view action. Artwork supports recognition but cannot carry the title alone. Cards should distinguish playback from navigation to the episode page.

#### Teacher Resource Cards

Teacher resource cards surface classroom-relevant information such as objective, age, duration, format, and materials or preparation where useful. Their structure should support rapid comparison and avoid promotional copy.

#### Parent Resource Cards

Parent resource cards identify the concern, practical value, format, and intended age or context. They should use supportive language and avoid diagnostic or fear-based labels. Metadata should help selection without creating a dense clinical appearance.

#### Story Cards

Story cards introduce title, theme, audience, format, and approximate duration. Imagery should support recognition and dignity. Starting or continuing a story must be distinct, and progress should not pressure children through streaks or loss.

#### Worksheet Cards

Worksheet cards communicate topic, audience, format, page or activity information where relevant, and whether the resource is printable or digitally usable. Download behaviour, file type, language, and accessibility should be clear before action.

#### Quote Blocks

Quote blocks distinguish exact words that add meaningful perspective. They require attribution and context and should remain readable. Do not use oversized pull quotes to dramatize ordinary statements or present opinion as evidence.

#### Callout Boxes

Callouts highlight a specific note, example, adaptation, warning, or support boundary. Type and priority should be labelled, not inferred from colour. If most content becomes a callout, the page hierarchy needs revision.

#### Dividers

Dividers reinforce a meaningful boundary when spacing and headings are insufficient. They should not be inserted between every block. Decorative dividers must not add noise to screen-reader output or imply structure that semantics do not support.

---

### Form Components

Form components collect choices and information. They should support clear questions, minimal data collection, completion, privacy, and recovery.

#### Text Fields

Text fields collect short free-form values. They need persistent labels, relevant input expectations, helper text, validation, and error association. Field width should suggest expected content without limiting zoom or translation.

#### Text Areas

Text areas collect longer responses. They should provide adequate space, preserve content, support resizing where appropriate, and explain limits before entry. Do not use them to encourage unnecessary sensitive disclosure.

#### Select Menus

Select menus present a bounded list where users choose one option. Use them when options are known and scanning an expanded set would be less effective. Labels and current selection must remain visible; search may be needed for genuinely long lists.

#### Radio Buttons

Radio buttons allow one choice from a visible, mutually exclusive group. The group needs a clear question and each option a complete label. A default should exist only when it represents a safe, informed choice.

#### Checkboxes

Checkboxes allow independent choices or explicit agreement. Do not preselect consent, marketing, or sensitive options. Labels should describe the checked state clearly and provide enough target area.

#### Switches

Switches change an immediate binary setting. They should expose current state and take effect predictably. Use checkboxes instead when the choice is submitted later or represents agreement rather than a system state.

#### Date Pickers

Date pickers support date selection while preserving direct, keyboard-accessible entry. They need locale-aware formats, clear constraints, navigation, and validation. Do not require users to traverse long calendar ranges for known dates.

#### File Upload

File upload should explain accepted types, limits, privacy, progress, success, failure, and removal. Provide an alternative to drag-and-drop. Do not begin transmission without clear user action.

#### Search

Search includes a labelled query field, submission or responsive results, suggestions where useful, clearing, scope, and recovery. Preserve the query, avoid exposing sensitive history, and make no-results guidance useful.

#### Sliders

Sliders suit approximate values within a meaningful range when visual position aids understanding. Show current value, limits, and keyboard control, with direct entry or discrete alternatives where precision matters. Do not use sliders for emotional answers that imply false measurement.

---

### Feedback Components

Feedback components communicate system state, consequence, progress, and recovery. They should be timely, proportionate, and available to assistive technology.

#### Alerts

Alerts present important information requiring notice or action. Severity should reflect actual consequence. Alerts need a clear title or type, message, action, and appropriate persistence without relying on colour alone.

#### Toasts

Toasts provide brief, non-blocking confirmation for low-risk actions. They should not contain essential information, disappear before users can understand them, steal focus, or become the only evidence of completion. Provide a persistent alternative for consequential results.

#### Success Messages

Success messages confirm what completed and what happens next. They should not celebrate ordinary actions excessively or use success to judge emotions, behaviour, or personal answers.

#### Error Messages

Error messages explain what failed and how to recover. They should preserve user work, identify affected context, and avoid blame or technical jargon. Severity and placement should match field, section, or page scope.

#### Validation

Validation communicates whether entered data meets requirements. It should occur at a helpful time, associate with the relevant control, and provide correction. Avoid interrupting users on every keystroke or displaying success for each ordinary field.

#### Progress Indicators

Progress indicators communicate position or completion in a process. Use determinate progress only when it can be represented honestly. Progress in emotional learning should not become performance pressure or an implied measure of wellbeing.

#### Loading States

Loading states explain temporary system activity and preserve layout stability. Use proportionate indicators, prioritize essential content, and provide failure or retry. Animation should remain restrained and compatible with reduced-motion preferences.

#### Empty States

Empty states explain why content is absent and offer a relevant action. Different causes—new account, filters, no results, permissions, or removed content—require different guidance. Avoid blame, jokes, or pressure to create unnecessary activity.

---

### Display Components

Display components organize complex, comparative, sequenced, or categorized information.

#### Tables

Tables present relational data that benefits from row-and-column comparison. They require clear headers, captions or context, suitable alignment, and responsive alternatives. Do not use tables for visual layout or reduce text to preserve many columns.

#### Accordions

Accordions reveal independent supplementary sections. Labels should describe content and expose state. Do not hide essential safety, consent, or completion information, and do not place all page content in accordions simply to shorten it.

#### Tabs

Tabs switch among closely related views within one context. Labels should be short and distinct, the active panel clear, and keyboard behaviour predictable. Tabs are unsuitable when users need to compare panels or link to content that should remain visible.

#### Carousels

Carousels should be rare. Use only when a linear set benefits from browsing in limited space and all items remain discoverable. Never autoplay important content, hide controls, or make carousel position the only route to resources.

#### Timelines

Timelines show meaningful chronological sequence. Dates, events, and relationships must remain available in a logical textual structure. Do not use timelines when chronology is decorative or when a list would be clearer.

#### Statistics

Statistics communicate a value with its label, unit, timeframe, source, and context. Visual prominence must match evidence and importance. Do not use large figures to imply certainty, impact, or comparison not supported by data.

#### Tags

Tags describe content attributes that support discovery or understanding. Use a controlled vocabulary and limit visible quantity. Tags may link to related content when that behaviour is consistent and obvious.

#### Badges

Badges communicate concise status, count, or category. They should include text, remain readable, and use semantic colour correctly. Avoid badges as decoration or as the only location of critical information.

#### Chips

Chips represent compact selections, filters, inputs, or removable values. Their interactive or static nature must be evident. Removal requires an accessible name and adequate target, and large sets need a more scalable pattern.

---

### Educational Components

Educational components are unique to Healthy Little Minds because they encode recurring relationships among psychological knowledge, teaching, practice, reflection, support, and everyday action. They should not be treated as decorative card variants.

#### Reflection Cards

Reflection cards invite private or shared thought through one focused prompt. They should state whether response is optional, offer non-verbal alternatives where appropriate, and never require public disclosure. The card should create space for consideration without grading feelings.

#### Discussion Prompts

Discussion prompts provide questions for adults, groups, or children. They should identify intended audience and setting, move from lower-risk to deeper reflection where relevant, and include permission to pass. Facilitator guidance should address sensitive responses.

#### Teacher Tips

Teacher tips offer concise classroom-specific adaptations or reminders. They should respect time and professional boundaries and should not hide essential lesson instructions. A tip is optional guidance, not a substitute for safeguarding procedure.

#### Parent Tips

Parent tips provide realistic phrases, routines, observations, or alternatives. They should encourage without blame and avoid implying one response works for every child. Serious support guidance should use a stronger, dedicated component.

#### Activity Steps

Activity steps present a sequence with objective, preparation, actions, duration, and completion. Each step should contain one main action and preserve instructions during the task. Alternatives and safety boundaries should appear before the step they affect.

#### Learning Objectives

Learning objectives state what a learner should understand, practise, or be able to do. They should use observable, proportionate language and avoid promises about emotional outcomes. Objectives help adults choose and evaluate a resource.

#### Safety Notices

Safety notices communicate safeguarding, crisis, contraindication, privacy, or immediate support information. They require clear hierarchy, direct language, appropriate persistence, and specialist review. They must not be visually diluted or used for routine advice.

#### Psychology Notes

Psychology notes provide evidence context, definitions, limitations, or professional boundaries. They should be understandable to the intended audience and link to sources where relevant. They must not turn general education into diagnosis.

#### Practice Exercises

Practice exercises guide rehearsal of an emotional or relational skill. They should identify purpose, context, steps, alternatives, and reflection. Interaction should serve the skill, and users should be able to pause, repeat, or stop without penalty.

#### Downloads

Download components identify resource title, type, language, size or length where useful, and accessibility. The action and resulting file should be predictable. Provide HTML or other alternatives when a document format creates barriers.

#### Related Resources

Related-resource components connect users to a small number of genuinely relevant next steps. Explain the relationship through title, audience, format, or learning stage. They should support progression, not create an endless engagement feed.

Educational components require content, education, psychology, accessibility, and localization review in proportion to their purpose. Their consistency helps users recognize whether a block invites practice, offers optional help, or communicates a serious boundary.

---

## Component Anatomy

Every component specification should define the following.

### Purpose

State the user need, intended contexts, and boundaries. Explain when to use the component and when another component or pattern is more appropriate.

### Hierarchy

Describe required and optional parts, their relationships, content order, and emphasis. Anatomy should remain focused and avoid optional regions that create many untested combinations.

### States

Document every relevant interaction, system, content, and validation state. Include transitions and recovery rather than showing only static default and ideal examples.

### Accessibility

Define semantic responsibility, keyboard interaction, focus, names, state communication, contrast, touch, motion, screen-reader output, and testing. Reference the Accessibility Standard and specify component-specific requirements.

### Responsive behaviour

Explain how content wraps, reorders, collapses, expands, or changes interaction as space and settings change. Preserve purpose and semantic order rather than simply shrinking.

### Localization

Define string context, expansion, script support, direction, punctuation, imagery, formats, and regional adaptation. Components must work with realistic translations and not depend on short English labels.

### Documentation

Include principles, rules, examples, content guidance, anti-patterns, related patterns, implementation contract, tests, ownership, and revision history. Use realistic Healthy Little Minds content.

### Lifecycle

Record status such as proposed, experimental, approved, deprecated, or retired; version; owner; adoption; known limitations; and replacement or migration. Consumers should know whether a component is safe for production use.

Anatomy should express a stable contract without exposing incidental implementation details. Changes to required parts or expected behaviour require version and migration review.

---

## Component States

States communicate what a component can do, what is happening, and what happened. Comparable states should feel consistent across the system while retaining component-specific meaning.

- **Default:** The resting state before interaction. It should communicate purpose and affordance without instruction from hover.
- **Hover:** Pointer feedback that reinforces interactivity. It must not reveal essential content or action unavailable to other inputs.
- **Focus:** The current keyboard or assistive interaction target. It must remain strongly visible on every background and distinct from selection.
- **Active:** The state during activation, such as a pressed control. It should provide immediate feedback without moving the target unexpectedly.
- **Selected:** A chosen item, active option, current tab, filter, or navigation destination. Selection needs visual and programmatic communication beyond colour.
- **Disabled:** An unavailable action. Preserve readable context and explain why when users may need it. Do not use disabled style for low-priority actions.
- **Loading:** Temporary activity within the component. Preserve size, prevent duplicate action, announce meaningful progress, and provide failure handling.
- **Success:** Completed action or valid condition. State what succeeded and any next step. Do not equate success with a morally correct emotion or answer.
- **Warning:** A condition requiring attention before a possible consequence. Explain the risk and available response.
- **Error:** A failed action or invalid condition. Identify the problem, preserve input, and provide recovery without blame.
- **Empty:** No content within the component's expected region. Explain cause and a useful next step when action is possible.

Not every component requires every state. Document only states that make semantic sense, but do not omit edge conditions because they are difficult to design. State combinations—such as focused and error, selected and disabled, or loading after submission—must be considered where possible.

State transitions should avoid surprise, layout shift, focus loss, and inaccessible announcements. The user should not need colour or animation alone to understand a change.

---

## Responsive Behaviour

Components should adapt rather than simply shrink. Responsive behaviour should protect content, purpose, hierarchy, interaction, and target size.

A component may:

- Allow text and controls to wrap.
- Change internal arrangement while preserving semantic order.
- Move supporting information below primary content.
- Replace a persistent region with an accessible disclosure.
- Simplify decoration while retaining meaning.
- Provide controlled scrolling for inherently wide data.
- Compose into a different pattern when the task changes materially.

Do not truncate essential labels, errors, consequences, titles, or educational content to preserve a single-line design. Avoid fixed heights for text-bearing components. Buttons should accommodate translation and zoom without becoming ambiguous icon-only controls.

Test components independently and in realistic compositions. A card may work alone but fail in a grid with long localized titles. A dialog may pass at ordinary width but cover controls under zoom. A sticky player may obscure form errors on mobile.

Responsive specifications should cover viewport, orientation, zoom, text resizing, system font settings, on-screen keyboards, content density, absent media, and multiple scripts. Changes should follow content stress rather than device names alone.

---

## Accessibility

Every component must meet the Accessibility Standard and applicable WCAG 2.2 AA requirements. Accessibility is part of the component contract and acceptance criteria.

Specifications should address:

- Correct semantics and expected platform behaviour.
- Accessible names, descriptions, roles, values, and states.
- Complete keyboard operation and logical focus management.
- Visible focus and adequate target size.
- Sufficient contrast and colour-independent meaning.
- Zoom, reflow, text spacing, and responsive use.
- Reduced motion and safe animation.
- Screen-reader announcements that are useful and proportionate.
- Cognitive clarity, error prevention, and recovery.
- Alternatives for gestures, drag, sound, images, and timed action.

Native patterns should be preferred when they meet the need. Custom widgets inherit responsibility for all interaction and assistive-technology behaviour and require strong justification.

Automated tests should cover reliable rules, but manual keyboard, screen-reader, zoom, touch, and cognitive evaluation remain necessary. Test complete compositions because labels, order, nesting, and content can make an approved component inaccessible.

A known limitation must be documented with impact, workaround, owner, and remediation. Do not advertise a component as accessible based only on automated checks or design documentation.

---

## Localization

Components must support English, Traditional Chinese, Simplified Chinese, Japanese, Korean, and future right-to-left languages without creating separate ungoverned libraries.

Requirements include:

- Flexible length for labels, messages, titles, metadata, and actions.
- Language-aware fonts, punctuation, line breaking, and input.
- Correct language metadata for assistive technology.
- Locale-aware dates, times, numbers, names, plural forms, and sorting.
- Bidirectional reading, logical order, and directional icon review.
- Cultural review of icons, imagery, colour, examples, and interaction assumptions.
- Regional support, privacy, legal, and safeguarding content where relevant.

Traditional and Simplified Chinese require distinct appropriate glyph conventions and review. Japanese mixed scripts and line-breaking rules must be respected. Korean Hangul and mixed Latin content require real wrapping tests. Future RTL support requires semantic mirroring rather than simple right alignment.

Avoid concatenating translated fragments, embedding text in images, fixing component height, or setting narrow character limits based on English. Give translators context about audience, component, action, and variables.

Localization is complete only after native-language review in the rendered, interactive component and its full set of states.

---

## Educational Consistency

Components should reinforce learning through recognizable roles. A child, parent, or teacher should gradually understand what a reflection, activity, objective, tip, safety notice, or download invites them to do.

Educational consistency requires:

- Stable language and presentation for recurring learning functions.
- Clear distinction among information, practice, reflection, support, and safety.
- Interaction that serves the educational objective.
- Multiple ways to understand and participate where appropriate.
- No grading of emotions or pressure to disclose.
- Appropriate age, audience, duration, and context information.
- Relationships among related resources without endless recommendation.

Do not create colourful component variations for every topic or emotion. Colour and illustration may support context but cannot replace labels and educational structure. A component should not make content seem clinically authoritative merely through visual treatment.

Education, psychology, accessibility, content, and design reviewers should evaluate new educational components together. The key question is not whether a component looks engaging but whether it helps users understand, practise, reflect, or act safely.

---

## Component Governance

### Proposing new components

A proposal should demonstrate a recurring unmet need across contexts. It must define audience, problem, existing alternatives, expected reuse, content model, accessibility, localization, states, and system impact. Similar screenshots are not evidence of the same responsibility.

### Reviewing

Review should include design, engineering, accessibility, and content, plus education, psychology, illustration, or localization where relevant. Evaluate the component in realistic pages and workflows, not only an isolated specimen.

### Versioning

Follow the Design System's semantic versioning. Breaking contract changes require a major release or coordinated package strategy; backward-compatible additions require a minor release; corrections that preserve contract use patches. Classify behaviour, semantics, content, and design impacts—not code alone.

### Deprecation

Deprecation should identify reason, replacement, affected consumers, migration, support period, and removal version. Mark deprecated assets in design, code, and documentation and prohibit them in new work. Do not remove until reasonable migration and verification occur.

### Documentation

Documentation ships with the component. It must include purpose, anatomy, states, content, accessibility, responsiveness, localization, examples, anti-patterns, tests, status, owner, related patterns, and revision history.

### Migration

Migration guidance should describe what changed, why, required consumer action, content or data impact, testing, and deadlines. Where feasible, provide compatible transitions or automated assistance without concealing breaking behaviour.

Governance should monitor duplicate implementations, exceptions, defects, adoption, and user feedback. A component with low adoption may be poorly documented, difficult to use, or solving the wrong problem. Governance should investigate rather than force use blindly.

---

## AI Contribution Guidelines

AI assistants may search the library, audit reuse, generate test content, draft documentation, identify missing states, and implement approved specifications. Their output requires human review.

AI assistants should:

- Reuse existing components and compositions before proposing new ones.
- Avoid inventing components or variants for page-specific visual preference.
- Document new proposals through the governance workflow.
- Preserve terminology, state behaviour, content rules, and ecosystem consistency.
- Maintain semantics, keyboard access, focus, contrast, responsive behaviour, and localization.
- Explain tradeoffs, assumptions, and why an existing component does or does not fit.
- Test realistic content, edge states, translation, zoom, touch, and assistive technology.
- Update specifications, tests, examples, and release notes for approved changes.

AI must not infer component equivalence from appearance alone or accessibility from automated output. It must not fabricate supported variants, user research, testing, adoption, or approval. It should request clarification when responsibility, audience, or state is unclear.

Generated implementations should use canonical tokens and component sources, not copied local versions or hard-coded styles. Human specialists remain accountable for design, accessibility, education, psychology, and localization review.

---

## Anti-patterns

- **Page-specific buttons:** Local action styles weaken hierarchy and make familiar behaviour unpredictable.
- **Duplicated cards:** Near-identical cards drift in metadata, accessibility, and interaction while increasing maintenance.
- **Decorative components:** Reusable wrappers without a meaningful responsibility create visual noise and system complexity.
- **Inaccessible custom widgets:** Replacing native or approved patterns creates unnecessary semantic, keyboard, and assistive-technology risk.
- **Inconsistent spacing:** Local spacing changes make anatomy and relationships unstable across contexts.
- **Nested cards:** Containers within containers obscure hierarchy and create difficult responsive and screen-reader structures.
- **Component proliferation:** A component for every variation makes discovery, testing, and governance impossible.
- **Visual inconsistency:** Similar controls that look different force users to relearn meaning.
- **One component with endless variants:** Excessive configuration hides unrelated responsibilities inside an untestable interface.
- **Copy-and-modify reuse:** Duplicating source prevents fixes and accessibility improvements from propagating.
- **State omissions:** Designing only the default state produces failures during loading, error, empty, disabled, and long-content conditions.
- **Colour-only variants:** Meaning becomes inaccessible and theme-dependent.
- **Icon-only convenience:** Removing labels to save space makes unfamiliar and consequential actions ambiguous.
- **Fixed-height text components:** Translation, zoom, errors, and user settings cause clipping or overlap.
- **Desktop-only specifications:** Components fail on touch, mobile, zoom, and on-screen keyboards.
- **Framework as component definition:** Implementation technology does not establish user purpose or system responsibility.
- **Premature abstraction:** Generalizing before recurring needs are understood produces difficult APIs and weak use cases.
- **Hidden component forks:** Product-specific modifications create unsupported versions with no ownership.
- **Components replacing patterns:** Encoding entire workflows into one component makes adaptation and testing difficult.
- **Engagement components without user value:** Streaks, prompts, and recommendation feeds must not exist solely to increase use.

Repeated anti-patterns indicate a governance, documentation, or system gap. Correct the shared cause rather than normalize exceptions.

---

## Component Review Checklist

### Purpose and usability

- [ ] The component solves a defined, recurring user need.
- [ ] Its responsibility and boundaries are clear.
- [ ] Existing components and patterns were evaluated first.
- [ ] Users can recognize purpose and available action without instruction from hover.
- [ ] The component supports the primary task without unnecessary decoration.
- [ ] Consequences, completion, and recovery are understandable.
- [ ] Realistic content and contexts informed the design.

### Anatomy and states

- [ ] Required and optional parts have clear hierarchy and order.
- [ ] Optional regions do not create unmanageable combinations.
- [ ] Default, hover, focus, active, selected, disabled, loading, success, warning, error, and empty states are addressed where relevant.
- [ ] Combined states have been reviewed.
- [ ] State transitions preserve layout, focus, input, and orientation.
- [ ] Content limits reflect user meaning rather than ideal specimens.

### Accessibility

- [ ] Semantics and native behaviour match the component purpose.
- [ ] Accessible names, roles, values, descriptions, and states are correct.
- [ ] Every task is fully keyboard operable with visible, logical focus.
- [ ] Touch targets and spacing support varied motor precision.
- [ ] Contrast meets requirements and meaning does not depend on colour.
- [ ] Zoom, reflow, custom text spacing, and reduced motion are supported.
- [ ] Screen-reader announcements are useful and not excessive.
- [ ] Alternatives exist for gesture, drag, sound, imagery, and timing as applicable.
- [ ] Automated and relevant manual accessibility tests are complete.
- [ ] The component has been tested in realistic composition, not only isolation.

### Responsive behaviour

- [ ] The component adapts purposefully rather than simply shrinking.
- [ ] Content wraps without clipping, overlap, or lost meaning.
- [ ] Semantic and focus order remain coherent after rearrangement.
- [ ] Essential actions and information are not hidden on small screens.
- [ ] Orientation, on-screen keyboards, dynamic type, and long content are supported.
- [ ] Sticky, overlay, and scroll behaviour do not obstruct content or focus.

### Localization

- [ ] Strings are complete, externalized, and supplied with translator context.
- [ ] English, Traditional Chinese, Simplified Chinese, Japanese, and Korean work where supported.
- [ ] Text expansion, line breaking, punctuation, and mixed scripts are supported.
- [ ] Dates, numbers, names, sorting, plurals, and regional content are locale-aware.
- [ ] Architecture can support future right-to-left languages.
- [ ] Icons, colour, imagery, and examples have cultural review where relevant.
- [ ] Native-language testing occurred in every important state.

### Consistency and education

- [ ] The component uses canonical tokens, typography, colour, layout, icons, and content standards.
- [ ] Similar needs use the same component across products.
- [ ] Variation is based on context, not contributor preference.
- [ ] Educational purpose and learning outcome are explicit where applicable.
- [ ] Reflection and practice preserve choice and do not grade emotions.
- [ ] Safety and psychology components receive appropriate specialist review.
- [ ] Related content supports a meaningful next step rather than engagement alone.

### Documentation and testing

- [ ] Purpose, anatomy, states, rules, content, examples, and anti-patterns are documented.
- [ ] Accessibility, responsive, localization, and educational notes are complete.
- [ ] Related components, patterns, templates, and documents are linked.
- [ ] Implementation contract and supported platforms are clear without unnecessary technology coupling.
- [ ] Unit, interaction, accessibility, visual, responsive, and integration tests exist as applicable.
- [ ] Realistic edge cases, missing data, errors, and long translations are covered.
- [ ] Status, owner, version, known limitations, and revision history are recorded.

### Maintenance and governance

- [ ] The contribution workflow and required reviews are complete.
- [ ] Release type follows semantic versioning.
- [ ] Consumers and migration impact have been assessed.
- [ ] Deprecation and replacement are documented where relevant.
- [ ] Design, code, documentation, tests, and release notes are synchronized.
- [ ] Adoption and duplicate implementations can be monitored.
- [ ] Feedback and defects have a clear reporting and ownership route.
- [ ] AI-assisted work has received accountable human review.

An essential unchecked item means the component is not ready for approval or release.

---

## Future Evolution

The library should evolve when repeated user needs, accessibility evidence, content growth, localization, platforms, or educational practice show that existing components are insufficient. Evolution should strengthen the shared system rather than multiply choices.

Before adding a component:

1. Identify the user problem independently of a proposed visual solution.
2. Review existing components, patterns, and product implementations.
3. Determine whether the need is recurring and belongs at component level.
4. Test whether composition or a documented extension solves it.
5. Follow governance when a new responsibility remains.

New components should enter as proposals or experimental assets until evidence, accessibility, documentation, testing, and cross-product review support approval. Experimental status must be visible, with an owner and decision date. Products should not depend widely on an experiment without an exit plan.

Evolution also includes consolidation. Merge duplicate responsibilities carefully, migrate consumers, and retire the weaker solution. Remove unused variants and components when their maintenance cost exceeds value, while preserving historical documentation needed for migration.

Monitor user feedback, defects, search within documentation, adoption, exceptions, and implementation forks. A pattern of local workarounds may reveal that the component contract is too narrow; low adoption may reveal that it is too complex or poorly explained.

Platform changes should not automatically create separate component libraries. Shared purpose, semantics, content, and states can govern distinct native or web implementations. Document where platform conventions require appropriate difference.

The goal is not a complete catalogue of every interface possibility. It is the smallest coherent set of components that makes high-quality Healthy Little Minds experiences easier to build and maintain.

---

## Closing Reflection

Users should notice confidence and familiarity—not individual components. They should recognize how to navigate, act, learn, and recover without wondering which team or technology created the page.

The strongest component library is the one users rarely notice because every interaction feels natural, predictable, and trustworthy. That quiet consistency gives Healthy Little Minds more room to focus on the work that matters: helping people understand emotions, strengthen relationships, and apply learning in everyday life.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
