---
Title: Healthy Little Minds Typography
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
  - BRAND_GUIDELINES.md
  - WRITING_STYLE.md
  - ACCESSIBILITY_STANDARD.md
---

# Healthy Little Minds Typography

## Purpose

Typography is one of the most important parts of the Healthy Little Minds user experience because most of the platform's teaching, guidance, navigation, and feedback depends on written language. Typography determines whether that language can be found, distinguished, read, understood, and remembered. It shapes pace and emphasis before a reader processes every word.

This handbook defines the typography system used across the Healthy Little Minds ecosystem. It establishes the philosophy, roles, selection criteria, reading standards, multilingual responsibilities, accessibility requirements, and review practices that should govern typography on websites, hubs, stories, talks, worksheets, dashboards, documentation, emails, and future applications.

Typography should improve comprehension, reduce cognitive load, support emotional safety, and remain accessible across languages, devices, and user settings. A person may arrive worried, tired, distracted, learning in another language, reading on a small screen, or using magnification. The system must remain dependable under these conditions rather than work only in an ideal design presentation.

Typography should never exist merely for decoration. Expressive type may support a title, story, or campaign when readability and context allow it, but essential information must never depend on typographic novelty. When personality conflicts with comprehension, accessibility, localization, or emotional safety, comprehension takes precedence.

This document defines no font family, size, spacing value, breakpoint, or CSS rule. Those values should be selected, tested, tokenized, and documented separately under this philosophy. The purpose here is to establish the enduring reasons and roles that implementation must serve.

---

## Typography Philosophy

Healthy Little Minds typography should quietly support learning. It should provide enough character to feel warm and human while remaining unobtrusive during reading, reflection, and action.

### Readability before personality

The first responsibility of type is to carry meaning. Letterforms, weights, spacing, and styles must remain legible at the sizes, resolutions, languages, and conditions in which they appear. Personality is valuable only when it does not make words slower to recognize or tiring to read.

### Consistency before novelty

Readers learn hierarchy through repetition. A page title, section heading, label, caption, and link should retain recognizable roles across products. Novel styles introduced for one page make users relearn the system and create maintenance costs.

Consistency does not require every audience or format to look identical. Contextual variations should extend established roles rather than create unrelated hierarchies.

### Accessibility before aesthetics

Typography must respond to user needs and settings. Sufficient contrast, resizing, zoom, reflow, clear letterforms, readable spacing, and language coverage are not optional refinements. A visual choice that cannot meet accessibility requirements is not a valid expression of the brand.

### Hierarchy before decoration

Hierarchy should communicate structure and priority through a restrained combination of scale, weight, spacing, placement, and style. Decoration should not substitute for semantic organization. If a reader cannot distinguish the title, headings, body, labels, and supporting text without colour or ornament, the hierarchy needs revision.

Typography succeeds when it helps users concentrate on the idea rather than the presentation. It should make complex content feel organized without making it appear simpler than it is.

---

## Design Goals

The typography system should meet seven related goals.

### Readability

Body content must support sustained reading, while labels and controls remain clear at a glance. Readability depends on typeface, contrast, line length, spacing, structure, and surrounding noise.

### Scanning

Titles, headings, lists, labels, metadata, and callouts should reveal structure and help people locate relevant information. Scanning does not require fragmenting every sentence.

### Accessibility

Typography should accommodate varied vision, cognition, reading ability, motor use, language, device, and context. It should remain usable when resized, zoomed, restyled, translated, printed, or accessed with assistive technology.

### Localization

The system should support English, Traditional Chinese, Simplified Chinese, Japanese, Korean, and future languages without treating non-Latin scripts as fallback cases.

### Responsiveness

Typography should adapt to available space, viewing distance, and content density while preserving hierarchy and reading comfort.

### Consistency

Each semantic role should have an established purpose. Contributors should reuse roles rather than select styles by local preference.

### Maintainability

Use a limited, documented set of roles with clear names and ownership. Implement them from canonical sources so improvements do not require page-by-page repair.

These goals should be assessed together. A type choice may look readable in English but lack high-quality Chinese glyphs. A hierarchy may scan well on desktop but collapse under zoom. A maintainable scale may still fail if its supporting roles have insufficient contrast. Approval requires the complete experience.

---

## Typeface Selection Principles

This handbook does not recommend a specific font. Typeface selection should follow evidence from representative content, language coverage, accessibility testing, licensing, performance, and long-term product needs.

### Readability

A primary typeface should have clear letterforms, distinguishable characters, dependable spacing, useful weight distribution, and stable rendering at common reading conditions. Evaluate frequently confused characters, punctuation, numerals, diacritics, mathematical signs, and interface symbols. Avoid features that create ambiguity or visual fatigue in sustained reading.

Test paragraphs, forms, tables, labels, and educational examples—not only headings or alphabet specimens.

### Multilingual support

Selection must consider the scripts and languages the platform serves. High-quality support includes complete glyph coverage, appropriate punctuation, localised forms where relevant, coherent weight behaviour, and compatible metrics across fallback fonts.

One family may not serve every script well. A coordinated multilingual stack is appropriate when it preserves comparable tone, hierarchy, density, and visual weight.

### Professional appearance

Typography should feel credible to educators, caregivers, professionals, and partners while remaining welcoming to children. Avoid typefaces that resemble novelty toys, institutional forms, luxury branding, or clinical software. Professional does not mean cold; child-friendly does not mean childish.

### Educational suitability

Letterforms should support recognition for developing and varied readers. Evaluate forms of characters such as lowercase “a” and “g,” distinctions among “I,” “l,” and “1,” and the clarity of numerals. No one letterform style is universally superior, so decisions should be tested with relevant readers rather than based on assumption.

### Licensing considerations

Licensing must cover all intended uses: web, applications, documents, downloadable worksheets, email, social assets, video, collaboration tools, and future platforms. Confirm rights for embedding, subsetting, modification, redistribution, server use, and third-party production where relevant.

Record licence source, terms, obligations, version, and approved files.

### Web performance

Font files affect loading, data use, rendering, and perceived stability. Prefer a system that can deliver necessary scripts and weights without excessive files. Consider subsetting carefully: it may reduce transfer but can fail when user-generated, translated, or dynamically loaded content requires omitted characters.

Provide robust fallbacks so text remains visible while fonts load or fail. Performance techniques must not compromise glyph coverage or readability.

Test on modest devices, slow connections, operating systems, and supported browsers. Document reasons, limitations, fallbacks, and review conditions.

---

## Typographic Hierarchy

Typographic hierarchy assigns recognizable roles to content. A role describes purpose and relationship, not a fixed appearance. Exact values belong in tokens and implementation documentation.

### Display text

Display text may introduce a major landing experience, campaign, or story moment. It can carry more visual personality than ordinary headings, but should remain short, readable, and rare. It must not replace a clear page title or contain essential detail that becomes difficult to access on small screens.

### Page titles

The page-title role identifies the primary subject. It should be the strongest semantic heading, usually associated with the single H1. Its appearance should remain recognizable across products while allowing content length and language to wrap naturally.

### Section headings

Section headings divide the main content into meaningful topics. They should support scanning, establish clear separation, and reflect H2-level structure. Their spacing relationship to preceding and following content is as important as weight or scale.

### Subsection headings

Subsection headings organize detail within a section. They should remain visibly subordinate to the section heading and clearly stronger than body text. Avoid creating numerous near-identical heading levels that users cannot distinguish.

### Body text

Body text carries primary explanations and should provide the most comfortable sustained reading experience. It requires dependable line length, spacing, contrast, and language rendering. A body role should not be reduced merely to fit more content on screen.

### Captions

Captions explain or attribute images, illustrations, tables, audio, or video. They may be visually secondary but must remain readable. A caption should be connected clearly to the object it describes and should not contain essential information unavailable elsewhere unless its prominence remains adequate.

### Labels

Labels name fields, controls, categories, and interface regions. They need strong recognition at small visual scale and should not rely on placeholders. Their relationship to the associated control must remain clear under reflow and assistive technology.

### Metadata

Metadata communicates supporting facts such as audience, date, duration, format, status, or author. It should be easy to scan without competing with the primary content. Do not make metadata so faint or small that relevant context becomes inaccessible.

### Callouts

Callouts highlight information that needs special attention, such as a practical note, safeguarding boundary, adaptation, or reminder. Typography should establish the callout's type and priority without using excessive emphasis. A callout should not become a container for every useful sentence.

### Quotations

Quotation styling should distinguish another speaker's exact words while preserving readability and attribution. Avoid oversized quotation marks, long italics, or decorative layouts that make substantive quotations difficult to read. Pull quotes must not remove context or imply unsupported authority.

### Tables

Table typography should make headers, row labels, values, notes, and units distinguishable. Alignment should support comparison. Dense tables must not solve space constraints through unreadably small text. Responsive alternatives may be required when the structure cannot reflow.

### Lists

List typography should preserve markers, indentation, hierarchy, and spacing. Bullets and numbers should align consistently without separating markers from their content. Nested lists should remain rare and visually clear.

### Code blocks

Code and technical literals need a distinct, legible role with clear character differentiation. Code blocks should preserve spacing, support horizontal overflow responsibly, and provide sufficient contrast. Use code styling only for actual code, commands, filenames, or machine-readable values—not ordinary emphasis.

### Form text

Form typography includes labels, inputs, options, helper text, requirements, validation, and errors. These roles must establish sequence and relationship. Supporting text may be secondary, but instructions and errors must remain readable and cannot depend on colour or size alone.

Each role should map to semantic markup and documented tokens where appropriate. Contributors should not invent a new role because a page needs a one-off visual effect. If an existing role cannot express a recurring need, propose a system change with evidence.

---

## Reading Experience

Reading quality emerges from the relationship among type, content, space, and layout. Optimizing one property in isolation is not enough.

### Line length

Lines should be long enough to support natural reading and short enough for the eye to find the next line reliably. Very long lines increase tracking effort; very short lines create excessive returns and broken phrasing. The appropriate measure varies with script, typeface, content, viewport, and reader.

Use content containers and responsive layouts to preserve a comfortable measure. Do not enlarge text merely to compensate for a column that is too wide, or reduce text to fit a fixed layout.

### Line spacing

Line spacing should allow readers to distinguish and track lines without disconnecting them. Dense spacing creates visual crowding; excessive spacing weakens paragraph coherence. Needs differ among scripts, weights, line lengths, and user settings, so test real content rather than applying one ratio universally.

### Paragraph spacing

Space between paragraphs should make changes of thought visible. Digital body text should generally use paragraph spacing rather than first-line indentation. Avoid both uninterrupted text walls and excessive gaps that make one explanation appear unrelated.

### Whitespace

Whitespace gives attention room to rest and helps identify groups. It should clarify the relationship among headings, paragraphs, lists, images, and activities. Whitespace is functional, but too much can increase scrolling or separate instructions from the task they govern.

### Rhythm

Consistent repetition of headings, body blocks, examples, media, and spacing creates reading rhythm. Predictable rhythm lets users anticipate structure. Irregular changes in style and density make pages feel unsettled even when individual elements are readable.

### Visual breathing room

Sensitive or cognitively demanding content should not be crowded by promotion, navigation, or decoration. Give important explanations enough surrounding space to be processed. On mobile, preserve breathing room while keeping related information and actions close.

These properties affect learning because working memory is limited. When readers spend effort finding the next line, decoding hierarchy, or separating content from decoration, less attention remains for understanding and reflection.

Review reading experience with long and short content, translated strings, headings that wrap, lists, links, inline emphasis, and images. A system should not be judged from a short specimen alone.

---

## Responsive Typography

Responsive typography adapts hierarchy and reading comfort to context. It should not scale every text role proportionally from a large desktop design.

### Desktop

Desktop layouts can support generous space and wider hierarchies, but body text should not stretch across the available viewport. Multi-column composition should preserve clear reading order and avoid placing important supporting information too far from the content it explains.

### Tablet

Tablet typography should tolerate touch, changing orientation, split-screen layouts, and narrower measures without compressing labels or losing hierarchy.

### Mobile

Mobile typography should prioritize readable text, clear headings, adequate controls, and natural wrapping. Reduce decoration before readability and avoid truncating essential meaning.

### Large displays

Large displays do not justify enormous type or unrestricted lines. Consider viewing distance and whether the screen is personal, shared, or used in a classroom.

Responsive behaviour should account for zoom, browser text resizing, system font settings, dynamic type, orientation, translated text, and user overrides. Breakpoints should follow content stress rather than popular device categories alone.

Hierarchy must remain stable across contexts. A page title should still feel like the title, and metadata should remain secondary but readable. When space is limited, change layout, wrapping, or disclosure before removing important content.

---

## Accessibility

Typography must support current recognized accessibility standards, including relevant Web Content Accessibility Guidelines (WCAG), while also being tested for actual usability. Conformance is a minimum, not proof that reading is comfortable.

### Contrast

Text and text-like graphics must meet required contrast against their backgrounds in every state. This includes links, placeholders where used, disabled content that remains necessary, errors, captions, metadata, and text over images. Never rely on weight or shadow to compensate for insufficient contrast.

### Resizing

Users should be able to resize text without losing content, controls, relationships, or functionality. Fixed containers must not clip enlarged text. Text should reflow, and controls should grow or rearrange as necessary.

### Zoom

At high zoom, reading order, headings, labels, and actions should remain coherent. Avoid horizontal scrolling for ordinary text. Sticky regions should not consume most of the available viewport or conceal focused content.

### Dyslexia considerations

Support readability through clear letterforms, familiar patterns, left alignment for left-to-right languages, sufficient spacing, manageable line length, and restrained emphasis. Avoid long italics, all-capital passages, justified text with irregular gaps, and dense blocks. A font marketed for dyslexia should not replace broader usability testing or individual preference.

### Cognitive accessibility

Use consistent roles, visible hierarchy, plain language, and focused blocks. Do not communicate structure through subtle typography alone. Pair changes in size or weight with semantic headings and meaningful grouping. Avoid unnecessary style shifts that readers must interpret.

### Screen readers

Screen readers generally communicate semantic markup rather than visual typography. A large bold sentence is not a heading unless it uses heading semantics. Preserve correct heading order, list structure, table headers, labels, quotations, emphasis, abbreviations, and code markup. Do not use punctuation or special characters decoratively when they create confusing announcements.

### Multilingual typography

Every supported script requires readable glyphs, appropriate font selection, correct language metadata, and local review. A missing-glyph box or poor fallback is an accessibility failure. Assistive technologies also depend on language changes being marked correctly for pronunciation.

### Text spacing

Layouts should tolerate user-adjusted line height, paragraph spacing, letter spacing, and word spacing where applicable. Content must not overlap, disappear, or become unusable. Some scripts do not use spaces between words in the same way as English; spacing rules must be language-aware.

Test with keyboard and screen readers where typography participates in controls, but also perform visual review under zoom, text-only resize, contrast modes, custom spacing, and actual language content. Automated tools cannot judge reading comfort or typographic relationships completely.

---

## Localization

Typography must preserve meaning, hierarchy, and emotional character across languages without treating English as the visual master. Traditional Chinese, Simplified Chinese, Japanese, Korean, and English each have distinct script conventions and reading behaviours.

### Traditional Chinese

Traditional Chinese glyphs can contain substantial visual detail. Select fonts with complete, region-appropriate forms and clear rendering. Avoid weights that close internal spaces. Review line height, punctuation positioning, line breaking, and the balance between Chinese text and Latin terms. Do not assume a Simplified Chinese font provides culturally or typographically appropriate Traditional forms.

### Simplified Chinese

Use a typeface with reliable Simplified Chinese coverage and appropriate mainland Chinese glyph conventions where that locale applies. Check punctuation compression, line starts and endings, numerals, Latin abbreviations, and emphasis. Dense glyph texture may require hierarchy adjustments different from English.

### Japanese

Japanese text may combine kanji, hiragana, katakana, Latin characters, and numerals. The type system must support coherent mixed-script colour and punctuation. Respect Japanese line-breaking prohibitions and do not leave certain punctuation at inappropriate line positions. Avoid inserting spaces according to English habits.

### Korean

Korean Hangul requires fonts with clear syllable blocks and balanced spacing. Review mixed Hangul, Hanja where present, Latin text, and numerals. Line height and weight should preserve internal clarity. English-derived terms may expand or wrap differently after localization.

### English

English typography should support readable Latin letterforms, punctuation, contractions, numerals, diacritics in names and borrowed words, and consistent British English editorial conventions for the default edition. Do not optimize the system so narrowly for English that other scripts receive degraded fallbacks.

### Text expansion

Translation may be shorter or substantially longer than English. Labels, navigation, cards, dialogs, and tables must allow wrapping or layout adaptation. Avoid fixed text containers and do not truncate essential meaning to preserve appearance.

### Line breaking

Apply language-aware rules. English usually breaks at word spaces; CJK languages may break between characters subject to punctuation and typographic prohibitions. Do not insert manual line breaks into source content to control one viewport or language.

### Punctuation

Use locale-appropriate punctuation, spacing, quotation marks, brackets, and full-width or half-width characters. Punctuation affects visual rhythm and line breaking. Translators and local reviewers should control these choices rather than inherit English marks mechanically.

### Mixed-language layouts

Names, citations, technical terms, links, or educational examples may combine scripts. Choose compatible fallback metrics and weights, mark language changes semantically, and test baseline, wrapping, emphasis, and pronunciation. Avoid shrinking one script to make it visually resemble another.

Localization review must use real content on actual target platforms. Machine translation and automated screenshot comparison cannot approve typographic quality.

---

## Typography in Educational Content

Educational typography should make objectives, instructions, examples, practice, reflection, and support easy to distinguish.

### Lessons

Lesson pages should reveal objective, audience, duration, materials, sequence, and adaptations through stable roles. Teacher-facing preparation should be scannable without competing with the student-facing content. Steps should remain identifiable when printed or viewed on a small device.

### Worksheets

Worksheets need sufficient room to read, write, draw, or mark responses. Typography should survive printing, photocopying, grayscale, and ordinary classroom equipment. Instructions must remain close to the relevant task. Do not reduce type to fit more exercises onto one page.

### Classroom resources

Shared displays may be read from a distance, while handouts are viewed closely. Design for the intended setting. Avoid assuming one asset works for projection and print without adaptation. Labels, diagrams, and activity cues should remain clear under real classroom light and viewing conditions.

### Stories

Story typography can support pacing, dialogue, emphasis, and emotional rhythm, but should not turn reading into a visual puzzle. Expressive type should be limited and accessible. The text must remain selectable, resizable, translatable, and understandable without decorative effects.

### Podcasts

Podcast pages need clear episode titles, summaries, metadata, transcripts, chapters, sources, and actions. Transcripts should be structured for reading, with speaker identification and useful headings. Timestamp links and playback labels must remain legible and operable.

### Teacher guides

Teacher guides should support rapid preparation and later reference. Distinguish mandatory instructions, optional adaptations, examples, safeguarding notes, and background evidence without creating too many competing callout styles.

### Parent guides

Parent guides should support sustained reading and quick access to practical steps. Use hierarchy to separate what a parent may notice, what they can try, and when to seek help. Do not visually overemphasize warnings so strongly that the entire resource feels alarming.

Across educational content, typography should support repetition and transfer. The same type of prompt or note should use the same role across related resources so users learn what it means.

---

## UI Typography

UI typography helps users identify destinations, actions, inputs, status, consequences, and recovery. It must remain clear under interaction and translation.

### Buttons

Button text should be concise, specific, and readable in every state. Typography must preserve label clarity without forcing all labels to one line. Weight should not substitute for sufficient contrast or clear button shape.

### Forms

Labels, field values, helper text, requirements, validation, and errors need distinct but related roles. Visible labels must remain present when a field contains input. Supporting text cannot become unreadably small because it is secondary.

### Navigation

Navigation type should make destinations easy to scan and current state easy to recognize. Labels need room for translation and zoom. Do not use all capitals or excessive letter spacing to create distinction.

### Cards

Card hierarchy should reveal title, description, metadata, and action without making every element equally prominent. Comparable cards should use the same roles. Typography should accommodate realistic long titles rather than depend on truncation.

### Alerts

Alert typography should communicate type, message, and action in a clear order. Serious alerts may use stronger emphasis, but urgency should come from accurate content and hierarchy—not capital letters or excessive bold.

### Dialogs

Dialogs should have a clear title, concise explanation, consequences, and distinguishable actions. Text should reflow under zoom without hiding controls. Long-form content usually belongs outside a modal context.

### Breadcrumbs

Breadcrumbs are supporting navigation but must remain readable and operable. Preserve separators, wrapping, and current-page meaning across languages. Do not shrink them excessively to keep the path on one line.

### Search

Search input, query, suggestions, filters, results, matching context, and no-results guidance should use stable roles. Highlighting must not overwhelm the result title or rely only on colour. User-entered text must remain visually distinct where relevant.

### Tables

UI tables should prioritize comparison and navigation. Headers, rows, units, sort state, actions, and status require clear hierarchy. Typography cannot compensate for too many columns; restructure the information when density prevents reading.

UI text should follow the Writing Style and Voice & Tone handbooks. This typography system determines how roles are presented, not what the interface should say.

---

## Anti-patterns

Avoid the following typography failures.

- **Tiny body text:** It excludes readers, increases fatigue, and fails under poor displays or viewing conditions. Do not use reduced type to solve layout density.
- **Decorative fonts for essential content:** Novel forms slow recognition, weaken professionalism, and may lack multilingual or accessibility support.
- **Inconsistent hierarchy:** When similar headings and labels look different, users cannot predict structure and contributors create local rules.
- **Centred long paragraphs:** Centred lines create inconsistent starting points and make sustained reading harder. Reserve centred alignment for short, appropriate text.
- **Excessive bold:** When most text is emphasized, nothing is. Dense weight also reduces texture and can make pages feel urgent.
- **Poor contrast:** Faint text may appear refined in a mock-up but becomes inaccessible under real lighting, screens, or vision conditions.
- **Crowded spacing:** Tight lines, paragraphs, labels, and controls increase cognitive load and make relationships difficult to perceive.
- **Too many font families:** Multiple families increase load, inconsistency, licensing, fallback, and localization complexity without necessarily improving hierarchy.
- **All-capital passages:** Capitals reduce familiar word shapes, can feel like shouting, and become difficult to scan.
- **Long italics:** Italic letterforms can reduce readability and should not carry extended instructions or explanations.
- **Justified body text:** Uneven word spaces create distracting rivers, especially in narrow responsive layouts.
- **Hierarchy based only on colour:** It fails for some readers, printing, contrast modes, and assistive technologies.
- **Manual line breaks:** They encode one viewport and language, causing awkward wrapping elsewhere.
- **Truncating essential text:** Ellipses can hide meaning, distinguishers, or consequences. Adapt layout before truncating important labels and titles.
- **Text embedded in images:** It prevents resizing, selection, translation, search, and reliable screen-reader access.
- **Placeholder-only labels:** They disappear during entry and force users to remember the field's meaning.
- **Desktop-only specimens:** A type system approved only on a wide, high-resolution screen is not ready for the ecosystem.
- **Unreviewed fallback fonts:** Missing web fonts can change width, hierarchy, glyphs, and layout. Fallback is part of the system.
- **False precision through typography:** Large figures and bold percentages can imply certainty the evidence does not support.
- **Styling instead of semantics:** A visually large line is not a page title unless its markup and document structure communicate the same role.

Anti-patterns should be corrected at the system level when repeated. A local visual patch often conceals a missing role, unsuitable layout, or content problem.

---

## AI Contribution Guidelines

AI assistants may help audit role use, generate test content, identify inconsistencies, check localization stress, draft documentation, or implement approved typography decisions. They must work from the canonical system rather than generic preferences.

AI assistants should:

- Preserve semantic and visual hierarchy.
- Reuse approved typography roles and tokens.
- Avoid inventing new roles, font families, weights, or styles without a recurring need and authorized proposal.
- Respect localization, language-specific line breaking, punctuation, script coverage, and text expansion.
- Preserve accessibility under resizing, zoom, custom spacing, contrast, and assistive technology.
- Test realistic long, short, translated, and mixed-language content.
- Explain tradeoffs and identify assumptions or missing standards.
- Update documentation and tests when an approved system change is implemented.

AI must not select a typeface based only on popularity or aesthetic similarity. It should not claim accessibility, readability, language coverage, licensing rights, or performance without verification. It must not fabricate user testing or infer that a screenshot proves semantic correctness.

Generated code should use existing semantic elements and canonical tokens. Avoid hard-coded values, inline exceptions, and page-specific type scales. When the required role does not exist, the assistant should identify the gap and follow the design-system contribution process rather than silently create one.

Human review remains required. Native speakers and local typographic reviewers should assess supported scripts; accessibility specialists should review high-impact changes; designers and developers should verify rendered behaviour across platforms.

---

## Typography Review Checklist

Before approving typography, confirm the applicable items.

### Purpose and hierarchy

- [ ] Every text style maps to a clear semantic purpose.
- [ ] The page title, sections, subsections, body, labels, and supporting text are distinguishable.
- [ ] Heading hierarchy follows document structure rather than appearance.
- [ ] The most prominent text matches the user's primary task.
- [ ] No new role has been introduced solely for local decoration.

### Reading experience

- [ ] Body text supports comfortable sustained reading.
- [ ] Line length remains appropriate across relevant viewports and scripts.
- [ ] Line and paragraph spacing create coherent, trackable text.
- [ ] Whitespace groups related content without separating instructions from tasks.
- [ ] Long paragraphs, lists, links, and wrapped headings have been tested.
- [ ] Alignment supports the language and reading task.
- [ ] Emphasis is restrained and meaningful.

### Typeface and assets

- [ ] Typeface choices have clear readability and product reasons.
- [ ] Required characters, punctuation, numerals, symbols, and weights are supported.
- [ ] Multilingual and fallback families are visually and metrically compatible.
- [ ] Licensing covers every intended product, document, and distribution method.
- [ ] Font loading and file weight are acceptable on modest devices and connections.
- [ ] Text remains visible and usable when custom fonts fail.

### Accessibility

- [ ] Text and meaningful states meet applicable WCAG contrast requirements.
- [ ] Text can resize and reflow without clipping, overlap, or lost functionality.
- [ ] High zoom does not create avoidable horizontal scrolling for ordinary text.
- [ ] User text-spacing changes do not break content or controls.
- [ ] Typography does not rely on all capitals, long italics, or subtle weight differences.
- [ ] Semantic headings, lists, tables, labels, quotations, and code match visual roles.
- [ ] Instructions do not rely on colour, position, shape, or typography alone.
- [ ] Cognitive and dyslexia-related readability considerations have been reviewed.

### Responsive behaviour

- [ ] Hierarchy remains clear on desktop, tablet, mobile, and large displays as relevant.
- [ ] Typography adapts to content needs rather than scaling proportionally.
- [ ] Essential labels, errors, titles, and consequences are not truncated.
- [ ] Orientation, split-screen use, system font settings, and dynamic type are supported where applicable.
- [ ] Touch controls remain readable and usable as text wraps or enlarges.

### Localization

- [ ] English, Traditional Chinese, Simplified Chinese, Japanese, and Korean use appropriate glyphs and conventions where in scope.
- [ ] Line-breaking and punctuation rules are language-aware.
- [ ] Layout tolerates text expansion, contraction, and mixed scripts.
- [ ] No essential text is embedded in an image.
- [ ] Manual line breaks have not been used to control one language or viewport.
- [ ] Language metadata supports correct rendering and assistive-technology pronunciation.
- [ ] Native-language review has occurred in the rendered product.

### Educational and interface use

- [ ] Learning objectives, instructions, examples, practice, reflection, and support have recognizable roles.
- [ ] Worksheets remain readable when printed, copied, or viewed in grayscale.
- [ ] Stories use expressive typography without reducing comprehension or access.
- [ ] Podcast transcripts and metadata are structured for reading and navigation.
- [ ] Forms keep labels visible and instructions and errors readable.
- [ ] Cards, alerts, dialogs, breadcrumbs, search, and tables handle realistic content.

### System stewardship

- [ ] Approved roles and tokens are used from canonical sources.
- [ ] Exceptions are justified, documented, and reviewed for wider system need.
- [ ] Relevant snapshots, accessibility checks, and language test cases are updated.
- [ ] Changes have been reviewed across affected products and templates.
- [ ] Migration and versioning needs are documented.
- [ ] AI-assisted work has received human, accessibility, and language review as required.

An essential unchecked item means the typography is not ready for approval.

---

## Future Evolution

Typography will evolve as Healthy Little Minds adds languages, platforms, content types, accessibility knowledge, and user evidence. Evolution should improve the system without making each product feel newly unrelated.

Changes may be prompted by:

- Evidence that a role is difficult to read or distinguish.
- Expanded script or language requirements.
- Licensing or availability changes.
- Performance and rendering improvements.
- New platform conventions or accessibility capabilities.
- Repeated local exceptions that reveal a missing role.
- Research with children, caregivers, educators, disabled users, or language communities.

Begin with the problem, not a replacement font. Determine whether it belongs to content, layout, tokens, role definitions, selection, or implementation, then test with representative content.

System changes should be versioned according to their effect. A corrected description may be a patch; a backward-compatible role may be a minor addition; changing role mappings or replacing a family across products may require a major migration. Follow the Design System governance process.

Preserve compatibility where it does not prevent improvement. Provide migration guidance, regression coverage, and release notes, but do not retain inaccessible styles indefinitely.

Record why decisions were made, what was tested, supported scripts and platforms, and remaining limitations.

The system should grow deliberately. More roles, weights, families, and variants do not necessarily create greater flexibility; they may produce inconsistency and load. Prefer the smallest system that expresses the required hierarchy well.

---

## Closing Reflection

Typography succeeds when it makes reading feel natural, structure feel obvious, and action feel possible. It should carry the warmth and trust of Healthy Little Minds without asking users to pay attention to the type itself.

Users should remember what they learned—not the font used to present it. Reaching that simplicity requires careful choices about roles, rhythm, access, language, performance, and maintenance. The typography system exists to make those choices dependable across every experience.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
