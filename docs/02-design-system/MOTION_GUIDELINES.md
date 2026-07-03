---
Title: Healthy Little Minds Motion Guidelines
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
  - Marketing
  - AI Assistants
Related Documents:
  - DESIGN_SYSTEM.md
  - COMPONENT_LIBRARY.md
  - LAYOUT_SYSTEM.md
  - ILLUSTRATION_GUIDELINES.md
  - ICONOGRAPHY.md
  - ACCESSIBILITY_STANDARD.md
  - TYPOGRAPHY.md
---

# Healthy Little Minds Motion Guidelines

## Purpose

Motion is a communication tool, not decoration. It can explain where content came from, show what changed, preserve a sense of continuity, guide attention, confirm interaction, and demonstrate a process that static information cannot communicate as clearly.

This handbook defines the philosophy, educational purpose, accessibility expectations, semantic roles, governance, and long-term standards for animation and motion throughout Healthy Little Minds. It applies to product interfaces, stories, media, dashboards, resources, documentation, marketing, AI-generated experiences, and future applications.

Animation should help users understand:

- **Change:** What appeared, disappeared, updated, completed, or failed.
- **Orientation:** Where a user is moving and how the new state relates to the previous one.
- **Continuity:** Which object or idea persists across a transition.
- **Interaction:** What can be acted upon and whether an action was received.
- **Feedback:** What the system is doing and what happened as a result.
- **Learning:** How an action, emotion, relationship, or process unfolds over time.

Motion should never exist simply because animation is technically possible. Every movement consumes attention and may create cognitive, sensory, vestibular, performance, or accessibility cost. If a static change communicates the same information more clearly, use the static change.

Healthy Little Minds serves people who may be distressed, distracted, tired, motion-sensitive, learning in a second language, using assistive technology, or working on modest devices. Motion must remain calm, optional where appropriate, and subordinate to the task.

This document does not prescribe animation libraries, implementation code, timing values, or easing functions. Those choices should follow the semantic purposes and accessibility requirements established here.

---

## Motion Philosophy

### Meaning before movement

Every animation should communicate a defined relationship, action, state, or learning sequence. Contributors should be able to explain what understanding would be lost if the motion were removed. “It feels more polished” is not sufficient.

When motion carries meaning, provide an equivalent form for people who cannot or prefer not to experience it. Meaning should not depend on interpreting speed, direction, or animation alone.

### Calm before excitement

Motion should feel steady, quiet, and proportionate. Healthy Little Minds is not competing for attention; it is protecting attention for learning. Large movement, overshoot, bounce, spin, and celebration should be rare and justified.

Calm does not mean lifeless. A subtle response can make an interface feel attentive, and a story can contain movement. The overall experience should never feel restless or urgent without a genuine reason.

### Accessibility before spectacle

Animation must respect reduced-motion preferences, vestibular needs, seizure safety, cognition, user control, and assistive technology. A visually impressive effect that excludes or harms users is not an acceptable brand expression.

Accessibility planning begins with the motion brief. It should not depend on disabling a finished spectacle after development.

### Continuity before surprise

Motion should help users understand how one state relates to another. A panel may appear from the region that invoked it; an item may remain visually connected while changing location. Unexpected movement, sudden zoom, and unexplained reordering weaken orientation.

Surprise may have narrative value, but it must not create fear, hide controls, or disrupt safe use. Sensitive content requires especially predictable transitions.

### Education before entertainment

Educational motion should clarify sequence, relationship, cause, perspective, or practice. It should not turn learning into passive spectacle. Interaction and repetition should support understanding rather than reward continued viewing.

Entertainment can coexist with learning in stories, but the animation must not obscure the learning purpose or create pressure to stay.

### Restraint before excess

Use the smallest amount of motion that communicates the intended meaning. One coordinated transition is clearer than several elements moving independently. A page with constant movement provides no stable place to focus.

Restraint also improves performance, maintenance, localization, and consistency. Motion should be a limited vocabulary, not a unique performance on every page.

---

## Educational Role

### Learning

Motion can make temporal and spatial relationships visible. It can show steps in a routine, how a choice leads to a consequence, or how attention moves through a framework. Users should control replay and pace when observation is part of learning.

Do not assume animation improves learning automatically. Extraneous movement can split attention and reduce recall. Evaluate whether users understand the concept better than with a static sequence.

### Orientation

Transitions can connect previous and new states so users know where they are. This is useful in stories, multi-step activities, filters, disclosures, and dashboards. Orientation motion should preserve focus and should not require users to track fast movement.

### Interaction

Brief motion may acknowledge activation, selection, expansion, saving, or error. Feedback should appear close to the action and remain understandable without movement. It should never reward emotional disclosure or ordinary clicks with disproportionate celebration.

### Storytelling

Movement can establish character action, pacing, emotional change, and scene continuity. Story animation should preserve room for imagination and reflection. It should not turn an educational story into a film users can only watch passively.

### Emotional understanding

Subtle animation may demonstrate breathing, bodily tension, pausing, gaze, posture, or repair. It should show variation and context rather than prescribe one appearance for an emotion. Avoid frightening, explosive, or comic treatment of distress.

### Classroom resources

Motion can demonstrate an activity or support a shared presentation, but classroom conditions vary. Provide static and printable equivalents, manual controls, captions, and a way to stop. Do not require reliable streaming, sound, or individual devices unless clearly stated.

### Parent guidance

Short demonstrations can model a conversational pause, co-regulation, or routine. They should remain realistic and avoid implying that reproducing one gesture guarantees a result. Textual steps and context remain necessary.

Educational motion should always have a stated objective, audience, context, and equivalent. Measure comprehension and application, not views or completion alone.

---

## Types of Motion

### Interface Motion

Interface motion explains product state and spatial relationship.

#### Navigation

Navigation transitions may indicate movement between levels, hubs, or steps. Direction should match information architecture and localization. Navigation must remain immediate; animation should not delay access or replace a clear title and current-state cue.

#### Page transitions

Page transitions can preserve continuity in app-like experiences, but ordinary content pages often need no full-screen animation. Avoid large wipes, zooms, and effects that reset orientation or increase loading perception. Content should be available without waiting for a transition to finish.

#### Dialogs

Dialog motion may show that a temporary layer has opened above the current context. The effect should be restrained, preserve the underlying location, and move focus correctly. Closing should return users to the invoking control. Reduced-motion use should remain immediate and comprehensible.

#### Menus

Menus may reveal through a small spatial transition that clarifies origin. Motion cannot substitute for open or closed state, keyboard behaviour, or focus. Avoid delayed cascades and moving targets.

#### Accordions

Accordion motion may reveal the relationship between a heading and its panel. Content should become available promptly and preserve focus and reading order. Large panels should not animate through a long expansion that forces users to watch the layout move.

#### Tabs

Tab changes should prioritize immediate panel identification. A subtle transition may reinforce selection, but horizontal sliding can imply direction or sequence that does not exist. Focus should remain on the chosen tab unless the interaction design states otherwise.

#### Search

Search motion may indicate that results updated, filters applied, or suggestions appeared. Preserve query, focus, and result context. Do not animate result reordering so extensively that users lose their place. Announcements should support screen-reader users independently.

#### Loading

Loading motion indicates temporary activity. It should be quiet, non-blocking where possible, and honest about whether progress is known. Avoid indefinite, visually intense loops. Provide failure, retry, and reduced-motion alternatives.

#### Feedback

Feedback motion may confirm selection, saving, addition, removal, or validation. It should be proportionate to consequence and accompanied by persistent state or text where needed. Users should not have to catch a brief animation to know what happened.

### Educational Motion

Educational motion communicates learning through time, sequence, or change.

#### Illustrated sequences

Use motion when the transition between stages matters. Provide step controls, replay, pause, and a static sequence. Keep the focal element stable and remove unrelated movement.

#### Psychology diagrams

Animation may show relationships among thoughts, feelings, bodies, actions, or environments. It must not imply causality, biological precision, or universality beyond evidence. Labels and explanatory text should remain available.

#### Emotion demonstrations

Subtle changes in face, posture, hands, distance, and breathing can support recognition. Demonstrations should include variation and context. Do not animate anger as explosion, anxiety as uncontrolled shaking, or sadness as constant tears.

#### Process explanations

Processes such as preparing, pausing, choosing, communicating, or seeking help may be animated in ordered stages. Allow users to control pace and access all steps as text.

#### Breathing exercises

Breathing motion may provide a visual rhythm, but users must control start, pause, stop, and repetition. Do not claim one pace suits everyone or require breath-holding. Provide non-animated and textual guidance and warn that users may stop if uncomfortable.

#### Reflection activities

Motion can reveal prompts gradually to reduce load. It must not create countdown pressure, gamify disclosure, or imply that a moving object can determine the user's emotional state. Reflection should remain optional.

#### Interactive stories

Story motion can connect choices, character action, and scene transitions. It should preserve character identity and emotional continuity and should not obscure text or controls. Branches need consistent movement language.

#### Learning progression

Motion may show progression through a defined lesson or task. It must not present emotional development as linear, competitive, or complete because a user viewed content. Progress information should remain accessible without animation.

### Media Motion

Media motion communicates playback and temporal state.

#### Podcast players

Players should use familiar, restrained feedback for play, pause, seek, and current position. Motion must not distract from listening or the transcript. Controls and state need accessible names and keyboard operation.

#### Audio visualization

Waveforms or level displays can indicate activity, but they are not substitutes for captions, transcripts, progress, or recording status. Decorative visualization should be removable and respect reduced motion.

#### Progress indicators

Media progress should show position and duration accurately and remain operable without precise dragging. Animation should track actual playback rather than imply false precision.

#### Playback controls

Control transitions should make current state clear. Play and pause should not morph so elaborately that the active action is ambiguous. Volume and mute need persistent, non-motion cues.

#### Transcript synchronization

Highlighting may connect spoken audio to transcript text. It should not force scrolling, move focus, or create rapid visual changes. Users should be able to disable synchronization and navigate the transcript independently.

---

## Motion Hierarchy

Motion hierarchy determines which movement deserves attention. The number of moving elements and their prominence should correspond to importance.

### Critical

Critical motion communicates an urgent state change whose timing matters, such as a session ending or an immediate safety-related update. Use it rarely and pair it with clear text, semantics, and action. Critical does not justify flashing, panic, or inaccessible urgency.

If the message can remain static and visible, motion may be unnecessary. Do not classify marketing or engagement prompts as critical.

### Important

Important motion explains a major user-initiated transition or consequential result, such as opening a dialog, completing a submission, or moving to the next story stage. It may receive clear but restrained emphasis. The state must persist after movement ends.

### Supporting

Supporting motion clarifies ordinary expansion, selection, filtering, or feedback. It should be subtle and brief in experience, never delay the task, and remain secondary to content.

### Decorative

Decorative motion has no functional or educational meaning. It may add atmosphere in carefully chosen story, campaign, or brand moments, but should be rare, optional, and absent from concentrated reading and sensitive content. It is the first motion removed under reduced-motion preferences, performance limits, or cognitive load.

Only one level should dominate a view at a time. Competing critical, important, and decorative movements make hierarchy meaningless. When several updates occur, coordinate them or present them without motion.

Motion level should be documented in the component, pattern, or asset specification. Do not choose prominence by visual preference during implementation.

---

## Timing Philosophy

This handbook defines no duration values. Timing should be chosen according to purpose, distance, complexity, context, user control, and accessibility, then validated in real use.

### Responsiveness

An interface should acknowledge input immediately. Motion may continue after acknowledgement, but it must not make users wonder whether an action was received. Controls should not become unresponsive while decorative transitions finish.

### Perceived speed

Motion can make a system feel coherent, but it cannot justify avoidable delay. Loading animation should not hide poor performance. Essential content should appear as soon as it is ready, and repeated interactions should not force users through the same transition.

### Continuity

Timing should allow users to understand relationship without requiring careful tracking. Larger spatial changes may need more perceptible continuity than small state changes. Coordinated elements should move in a comprehensible order rather than all at once or in decorative cascades.

### User control

Users should be able to pause, stop, skip, replay, or reduce motion when the content or duration warrants it. Educational demonstrations must not advance faster than users can understand. Story and media motion should not resume unexpectedly after interruption.

Timing should be reviewed with children, adults, people with cognitive and vestibular access needs, slow devices, high zoom, and translated content. A transition that feels pleasant to its creator may feel slow, disorienting, or impossible to follow to others.

---

## Educational Storytelling

Animation can support stories without turning them into cinematic experiences. The reader or learner should remain active, able to control pace, revisit information, and imagine beyond what is shown.

### Pacing

Use motion to support the narrative rhythm of observation, action, consequence, and reflection. Quiet moments need stability. Active moments may use clearer movement but should not become chaotic. Avoid automatic scene advance when reading or decision time varies.

### Emotional continuity

Character expression, posture, pace, and movement should change coherently with the narrative. A character should not shift instantly from severe distress to energetic happiness. Emotional repair and regulation may be gradual, mixed, and supported by another person.

### Scene transitions

Transitions should establish location or time without spectacle. Preserve important objects, relationships, and character position when continuity matters. Avoid sudden darkness, rapid zoom, spins, or frightening reveals in child-facing content.

### Focus

Move only what users need to notice. Character gaze, a small gesture, or the appearance of one object may be enough. Background loops, floating particles, and simultaneous character motion compete with reading and choice.

Recurring characters must follow the Illustration Guidelines. Amaka, Bella, Goshen, Destiny, and other characters should preserve facial construction, proportions, personality, clothing logic, and gesture. Movement should not distort identity or turn subtle emotion into caricature.

Provide captions, descriptions, static frames, and transcript-like scene information where motion carries narrative meaning. Test whether users understand the story when motion is reduced or unavailable.

---

## Accessibility

Motion must meet applicable WCAG requirements and the Healthy Little Minds Accessibility Standard. The goal is not only technical compliance but safe, understandable participation.

### Reduced motion

Respect operating-system and product-level reduced-motion preferences. Remove decorative movement, large spatial transitions, parallax, autoplay loops, and non-essential transforms. Replace functional movement with immediate state changes, fades where safe, or static presentation according to user need.

Reduced motion is not “no feedback.” Preserve state, hierarchy, progress, and confirmation through static and semantic cues.

### Vestibular disorders

Large movement, zoom, rotation, parallax, perspective changes, and motion tied to scrolling can cause dizziness, nausea, disorientation, or pain. Avoid these patterns by default. User-triggered movement can still be harmful and requires alternatives.

### Flashing content

Do not use flashing or rapid alternating effects that may trigger seizures or other adverse responses. Review video, animation, loading, errors, celebrations, and third-party media. Safety thresholds are a minimum; unnecessary flashing should be removed entirely.

### User preferences

Respect reduced motion, autoplay, media, and animation settings where available. Preferences should apply consistently and persist appropriately. Do not require users to configure every page separately.

### Cognitive accessibility

Movement can interrupt reading, divide attention, and make changing information hard to track. Limit simultaneous animation, avoid loops near text, preserve stable controls, and let users replay educational sequences. Do not use motion as a memory test.

### Motion alternatives

Every meaningful animation needs an equivalent: static before-and-after states, numbered steps, text, diagrams, captions, progress values, or direct controls. Alternatives should deliver the same learning or functional outcome.

Screen-reader users should receive useful state updates without announcements for every visual frame. Keyboard and switch users must not chase moving targets. Magnification users need stable position and focus. Touch users need controls that do not move during activation.

Test with reduced motion enabled, animation disabled or absent, keyboard, screen readers, zoom, touch, slow devices, and representative users. Automated checks cannot determine whether motion is disorienting or educationally useful.

---

## Localization

Motion carries cultural and directional meaning. Localization must review movement rather than merely translate labels.

### Reading direction

Transitions that imply forward, back, next, previous, opening, or hierarchy may need adaptation for right-to-left languages. Do not mirror all movement automatically. Media playback, clocks, physical processes, and some maps retain direction.

### Symbolic movement

Upward, downward, inward, outward, circular, and directional motion can imply growth, dismissal, progress, hierarchy, return, or loss. These associations vary by context and culture. Pair abstract movement with labels and validate meaning.

### Gestures

Animated hand, head, body, and interpersonal gestures may carry different meanings or levels of formality. Avoid gestures assumed to be universal. Review signs, pointing, touch, eye contact, bowing, beckoning, and celebratory movement with local expertise.

### Educational expectations

Classroom routines, reading sequences, family interaction, and attention cues differ. An animation showing a “normal” classroom response or family gesture may need contextual adaptation. Preserve the learning objective rather than the exact movement.

Translated text may change animation timing and layout. Do not reveal, highlight, or dismiss text according to English length. Captions, transcripts, voiceover, and motion must stay synchronized while allowing users to control pace.

English, Traditional Chinese, Simplified Chinese, Japanese, Korean, and future language versions require testing with real content and native reviewers. Record localized motion variants and their relationship to the canonical pattern.

---

## Motion in Components

Component motion should follow documented state and purpose. It must not be invented independently on each page.

### Buttons

Buttons may provide brief activation feedback without moving away from the pointer or focus. Loading state should prevent accidental repetition while preserving label and size. Avoid bounce, pulse, and continuous attention-seeking.

### Cards

Cards may reinforce hover or selection subtly, but essential actions cannot depend on hover. Avoid lifting, tilting, flipping, or autoplaying media that makes card grids unstable. Expanding cards should preserve reading order and nearby context.

### Dialogs

Dialogs may appear with restrained layer transition. Focus, background context, close behaviour, and reduced motion matter more than visual entrance. Do not delay urgent information while the dialog animates.

### Forms

Forms may reveal dependent fields or feedback in context. Avoid shaking errors, moving labels unpredictably, and validation on every keystroke. Preserve entered content and focus. Confirmation should remain understandable after animation ends.

### Navigation

Navigation motion may show menu expansion or spatial relationship. It should not move destinations during selection or use animated indicators as the only current-state cue. Repeated navigation should feel immediate.

### Notifications

Notifications should appear without startling users and remain available long enough to understand. Avoid bouncing badges, pulsing counts, and motion designed to create urgency. Consequential messages need persistent access.

### Search

Suggestions and results may update smoothly while preserving query and focus. Avoid animated resorting, large result shifts, and announcements for every character. Loading and no-results states should remain stable.

### Progress

Progress motion should reflect real process and not imply certainty where none exists. Emotional learning must not be framed as a race. Provide text, current position, and controls independently of animation.

### Loading

Loading indicators should be restrained, honest, and limited to the affected region. Skeletons should match likely content without constant shimmer where motion reduction is preferred. Provide timeout, failure, and retry.

### Tables

Sorting, filtering, expansion, and row updates should preserve user position and explain the changed state. Avoid animated row movement that makes comparison difficult. Do not use pulsing cells for attention.

### Accordions

Expansion may clarify containment but should not force users to watch a large panel grow. Focus remains on the trigger unless a documented task requires movement. State and content must be accessible without animation.

### Tabs

Tab changes should feel immediate and keep the active tab and panel relationship clear. Avoid sliding that falsely implies a sequential order. Screen readers need state communication independent of visual transition.

Component specifications should define motion level, trigger, purpose, affected properties conceptually, interruption, reduced-motion behaviour, failure, and testing.

---

## Motion in Illustrations

Animated illustration should extend the canonical visual language rather than become a separate animation style.

Recurring characters must preserve facial structure, hairstyle, clothing identity, personality, body proportion, assistive devices, and recognizable appearance throughout movement. Avoid stretching, squash, extreme anticipation, and cartoon physics that distort identity or emotional dignity.

### Emotional authenticity

Use subtle changes in gaze, eyebrows, mouth, shoulders, hands, distance, and breathing. Emotions should not become repetitive loops or dramatic effects. Movement should show context and variation rather than claim one universal bodily pattern.

### Subtle gestures

Small gestures—turning attention, pausing, offering space, adjusting posture, or reaching for support—can communicate more than continuous full-body movement. Touch should be consensual in context and not presented as the only form of connection.

### Educational focus

Animate the element that carries the learning. Freeze or simplify background detail. If several characters move, coordinate them around one readable relationship. Provide static frames or descriptions for essential meaning.

### Consistency

Movement vocabulary, pacing, expression range, transitions, and background behaviour should remain coherent across stories and products. Record approved character gestures and prohibited distortions in motion references.

AI-assisted character animation requires frame-by-frame review for identity, anatomy, continuity, accidental object changes, and style drift. The Illustration Guidelines remain authoritative.

---

## Motion Governance

### Proposing animations

A proposal should state user need, meaning, trigger, motion level, context, alternatives, accessibility, reduced-motion behaviour, performance, localization, and expected reuse. Include a static solution comparison. Do not begin with an effect looking for a purpose.

### Reviewing

Review should include design, accessibility, engineering, content, and relevant education, psychology, illustration, or localization expertise. Evaluate motion in the complete task, not as an isolated demonstration. Consider cumulative movement on the page.

### Testing

Test comprehension, orientation, interruption, keyboard, focus, screen readers, reduced motion, vestibular risk, flashing, zoom, touch, performance, slow devices, translation, and interruption. Educational motion requires evidence that it supports rather than distracts from learning.

### Versioning

Follow Design System semantic versioning. Corrections preserving behaviour may be patch changes; new backward-compatible motion roles may be minor; changed interaction timing semantics, removed alternatives, or replaced transition models may require major migration.

### Documenting

Record semantic name, purpose, level, trigger, sequence, user control, interruptibility, reduced-motion alternative, component or pattern, localization, accessibility, performance, owner, version, tests, and status. Documentation should describe behaviour without depending on one implementation technology.

### Deprecating

Deprecation should identify reason, replacement, affected products, migration, support period, and removal. Remove harmful motion quickly while preserving functional state. Do not leave deprecated animations in copied page assets.

Maintain a canonical motion vocabulary and registry. Audit repeated local transitions, unnecessary loops, and reduced-motion failures. Exceptions require documented evidence, ownership, and review date.

---

## AI Contribution Guidelines

AI assistants may audit motion use, identify unnecessary animation, generate state scenarios, draft specifications, and implement approved behaviour. They should not invent elaborate transitions because they are visually impressive or easy to generate.

AI assistants should:

- Begin with user and educational purpose.
- Prefer no motion or the simplest meaningful motion.
- Reuse approved semantic motion patterns and component behaviour.
- Preserve consistency across products, themes, characters, and states.
- Respect reduced motion, vestibular safety, flashing thresholds, cognition, and user control.
- Document trigger, purpose, level, interruption, alternative, and tradeoffs.
- Consider performance, localization, focus, screen readers, and responsive layouts.
- Test motion in context and verify the equivalent static experience.
- Request review when emotional, psychological, cultural, or safety meaning is uncertain.

AI must not claim accessibility, educational value, performance, or user preference without evidence. It must not fabricate testing or assume that user-triggered motion is harmless. Generated character motion must follow approved illustration references and receive human review.

When asked to “make the page feel alive,” an assistant should clarify the intended outcome and consider content, hierarchy, illustration, or feedback before adding movement. Human approval remains required.

---

## Anti-patterns

- **Autoplay animations:** Unrequested movement takes control, distracts, and may create vestibular or cognitive harm.
- **Excessive bouncing:** Bounce makes controls feel playful or urgent and can trivialize serious content.
- **Distracting loops:** Repeated motion near reading or tasks continuously consumes attention.
- **Decorative transitions:** Effects without meaning delay access and increase maintenance.
- **Motion without purpose:** If contributors cannot explain what users learn, the movement should not exist.
- **Flashing effects:** Flashing may cause severe harm and is unnecessary for communication.
- **Animation that delays tasks:** Users should not wait for panels, pages, buttons, or messages to finish performing.
- **Competing movements:** Simultaneous animations destroy hierarchy and create a restless experience.
- **Animation replacing clarity:** Movement cannot repair unclear labels, navigation, state, or content.
- **Scroll hijacking:** Taking control of scroll breaks expectation, keyboard use, reading pace, and orientation.
- **Parallax as atmosphere:** Large differential movement can cause vestibular symptoms and distract from content.
- **Zooming interfaces:** Rapid scale and perspective changes can be disorienting and obscure spatial relationships.
- **Shaking errors:** Shaking communicates blame or alarm and may move the control a user needs.
- **Celebrating disclosure:** Confetti or reward motion after emotional input manipulates sensitive participation.
- **Animated progress as wellbeing:** Movement through a course must not imply linear emotional improvement.
- **Moving targets:** Controls and results should not shift while users are trying to activate or read them.
- **Hover-only animation:** Touch and keyboard users lose the cue, and meaning becomes input-dependent.
- **Endless loading:** A loop without timeout, explanation, or recovery conceals failure.
- **Forced synchronized transcript:** Automatic scrolling can make reading, keyboard use, and magnification difficult.
- **Cinematic stories:** Long, unskippable sequences reduce learner control and replace reflection with viewing.
- **Reduced-motion afterthought:** Disabling one transition while leaving loops, parallax, and video motion is incomplete.
- **Page-specific motion language:** Unique effects on each page weaken familiarity and governance.

Repeated anti-patterns should be corrected in components, patterns, and governance rather than patched locally.

---

## Motion Review Checklist

### Purpose and educational value

- [ ] The motion communicates a defined change, relationship, state, or learning sequence.
- [ ] A static solution was considered first.
- [ ] Removing motion would remove identifiable value rather than visual polish alone.
- [ ] The motion supports the intended audience, context, and task.
- [ ] Educational claims and demonstrations have appropriate review.
- [ ] The movement does not replace active practice or reflection with spectacle.

### Hierarchy and restraint

- [ ] Motion is classified as critical, important, supporting, or decorative.
- [ ] Its prominence matches actual importance.
- [ ] Only one clear movement dominates at a time.
- [ ] Background and decorative movement do not compete with content.
- [ ] The smallest sufficient amount of motion is used.
- [ ] Repeated interactions do not become slow or tiring.

### Usability and continuity

- [ ] Input receives immediate acknowledgement.
- [ ] Users understand what changed and what happens next.
- [ ] Spatial transitions preserve orientation rather than surprise.
- [ ] Controls, content, and focus do not move unexpectedly.
- [ ] State remains understandable after motion ends.
- [ ] Animation can be interrupted without corrupting state.
- [ ] Loading, failure, retry, and cancellation are addressed.
- [ ] Motion does not delay access to essential content or action.

### Accessibility

- [ ] Reduced-motion preference is respected comprehensively.
- [ ] A static or low-motion equivalent preserves meaning and outcome.
- [ ] Large spatial movement, zoom, rotation, parallax, and perspective are avoided or justified with alternatives.
- [ ] Content meets applicable flashing and seizure-safety requirements.
- [ ] Users can pause, stop, skip, replay, or control motion where needed.
- [ ] Keyboard and switch users do not encounter moving targets or focus loss.
- [ ] Screen readers receive useful state updates without visual-frame noise.
- [ ] Zoom and magnification preserve stable position and focus.
- [ ] Motion does not rely on colour, sound, direction, or speed alone.
- [ ] Cognitive load and distraction have been evaluated with realistic content.
- [ ] Relevant disabled users or specialists have reviewed high-impact motion.

### Components and media

- [ ] Component motion follows the canonical component specification.
- [ ] Buttons, cards, dialogs, forms, navigation, and notifications remain predictable.
- [ ] Search, tables, accordions, and tabs preserve position and context.
- [ ] Loading indicators are proportionate and honest.
- [ ] Media controls show persistent state and remain operable without precise dragging.
- [ ] Transcript synchronization can be disabled and does not force focus or scroll.
- [ ] Motion works with absent media, errors, and long content.

### Educational and character motion

- [ ] The learner can control pace and revisit a demonstration.
- [ ] Text, static steps, captions, or descriptions provide equivalent learning.
- [ ] Breathing guidance avoids universal pacing or forced breath-holding.
- [ ] Reflection motion does not pressure disclosure or impose a countdown.
- [ ] Character identity, anatomy, proportion, expression, and assistive devices remain consistent.
- [ ] Emotional movement is authentic, varied, and non-stigmatizing.
- [ ] Story transitions preserve emotional and narrative continuity.

### Responsiveness and performance

- [ ] Motion behaves appropriately across desktop, tablet, mobile, and large displays as relevant.
- [ ] Layout reflow, orientation, zoom, and text expansion do not create unintended motion.
- [ ] Performance is acceptable on modest devices and connections.
- [ ] Slow rendering does not change sequence, hide content, or block interaction.
- [ ] Motion does not cause disruptive layout shift.
- [ ] Essential state is available when animation fails or is disabled.

### Localization

- [ ] Directional meaning has been reviewed for each supported reading direction.
- [ ] Gestures, symbolic movement, and educational expectations have cultural review.
- [ ] English, Traditional Chinese, Simplified Chinese, Japanese, and Korean timing works with real content where supported.
- [ ] Text reveal, captions, transcripts, and voiceover remain synchronized without forcing pace.
- [ ] Localized variants are documented and governed.

### Governance

- [ ] Proposal includes need, meaning, level, trigger, alternatives, and system impact.
- [ ] Design, accessibility, engineering, content, and relevant specialist reviews are complete.
- [ ] Keyboard, reduced-motion, flashing, cognition, touch, performance, and localization tests are documented.
- [ ] Canonical registry, component guidance, examples, and tests are updated.
- [ ] Owner, status, version, limitations, and revision history are recorded.
- [ ] Versioning, migration, and deprecation are addressed where required.
- [ ] AI-assisted work has verified provenance and accountable human approval.

An essential unchecked item means the motion is not ready for release.

---

## Future Evolution

Motion may evolve as Healthy Little Minds adds platforms, stories, educational models, accessibility capabilities, and technologies. Evolution should improve understanding and control rather than increase visual complexity.

Future needs may include:

- A broader semantic motion vocabulary for recurring components and patterns.
- Better static and reduced-motion equivalents.
- Character gesture and expression libraries.
- Accessible instructional sequences and classroom presentation modes.
- Native mobile platform adaptations.
- Improved transcript, caption, and media synchronization.
- New input or spatial technologies with demonstrated educational value.

New technology does not justify new movement. Evaluate whether it improves comprehension, orientation, practice, or access better than a simpler approach. Novel spatial, immersive, generative, and reactive motion may introduce sensory, privacy, performance, and control risks requiring deeper review.

Begin evolution with evidence from users, accessibility findings, educational research, performance, recurring exceptions, and product needs. Identify whether the problem belongs to a component, pattern, illustration, story, media experience, or system foundation.

Version changes and provide migration when familiar behaviour changes. Preserve established mental models where they remain effective. Remove harmful motion promptly even if migration creates visual inconsistency during transition.

Maintain records of motion roles, assets, reduced alternatives, platform variants, tests, adoption, defects, and deprecations. Audit cumulative motion across pages; individually acceptable animations can become excessive when combined.

The long-term goal is not a richer catalogue of effects. It is a stable, accessible language in which movement has clear meaning and users remain in control.

---

## Closing Reflection

The best motion is often the motion users barely notice. It quietly explains change, supports orientation, and reinforces learning without becoming the centre of attention.

Healthy Little Minds motion should leave people more certain about what happened and what they can do next. When movement is calm, purposeful, accessible, and restrained, it serves the experience. When it asks to be watched for its own sake, it has lost its purpose.

---

## Revision History

| Version | Date | Summary |
|----------|------|---------|
| 1.0 | July 2026 | Initial draft |
