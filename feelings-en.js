(function () {
  "use strict";

  var books = {
    storm: {
      title: "Calm the Storm Inside",
      image: "images/storm-book-cover.webp",
      text: "A story for noticing big feelings, slowing down, and choosing safe next steps.",
      url: "https://heyzine.com/flip-book/3cf1027650.html"
    },
    scared: {
      title: "When I Feel Scared",
      image: "images/when-i-feel-scared-bkcover.webp",
      text: "A gentle story for naming fear, checking safety, and asking for support.",
      url: "https://heyzine.com/flip-book/1f4337da92.html"
    },
    feelings: {
      title: "When My Feelings Get Too Big",
      image: "images/when-my-feelings-cover.webp",
      text: "A practical story about breathing, body signals, and asking for help.",
      url: "https://heyzine.com/flip-book/5cbe03c993.html"
    },
    destiny: {
      title: "The Day Destiny Wanted To Quit",
      image: "images/The_Day_Destiny_Wanted_To_Quit.webp",
      text: "A story about discouragement, persistence, and finding one small next step.",
      url: "https://heyzine.com/flip-book/8736fac672.html"
    },
    little: {
      title: "Little Acts, Big Feelings",
      image: "images/little-acts-book-cover.webp",
      text: "A story about kindness, connection, and the small choices that shape feelings.",
      url: "https://heyzine.com/flip-book/034942038a.html"
    }
  };

  var feelings = {
    anger: {
      emoji: "😡",
      title: "Anger",
      description: "Help children understand anger as useful information while keeping behaviour safe.",
      lead: "Anger can appear when something feels unfair, unsafe, blocked, or important. The feeling is allowed. Hurting yourself, another person, or property is not. Children need help separating the emotion from the action.",
      say: "I am angry. I need to calm my body before I talk.",
      causesTitle: "When anger might appear",
      causes: [
        ["Something feels unfair", "Being excluded, interrupted, blamed, or treated differently can make anger rise quickly."],
        ["A need has not been noticed", "Hunger, tiredness, noise, sensory overload, or not feeling heard can make the body more reactive."],
        ["Frustration has built up", "Repeated difficulty can turn into anger when a child feels stuck or powerless."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Create safe space", "Move away from the conflict if possible. Safety comes before problem-solving."],
        ["Use safe physical effort", "Push a wall, squeeze a cushion, stretch, or take a brisk walk with an adult nearby."],
        ["Use an expression sentence", "Try: “I am angry because ____. I need ____.” Keep the sentence short and specific."]
      ],
      adult: "Start with safety and co-regulation. Speak less during the emotional peak. When the child is calmer, help repair harm, name the need, and choose a more helpful response for next time.",
      books: ["storm", "feelings"]
    },
    sadness: {
      emoji: "😢",
      title: "Sadness",
      description: "Help children understand sadness, loss, disappointment, and the need for comfort.",
      lead: "Sadness can follow loss, disappointment, rejection, loneliness, change, or missing someone. It is not a problem to remove quickly. It is often a sign that something mattered and needs care.",
      say: "I feel sad. I do not need to rush. I can ask someone safe to stay with me.",
      causesTitle: "When sadness might appear",
      causes: [
        ["Something or someone is missed", "A person, pet, place, routine, or object may be absent or changed."],
        ["A hope did not happen", "Children can feel sadness when plans change, efforts do not work out, or expectations fall through."],
        ["Connection feels uncertain", "Feeling left out, misunderstood, or rejected can make the body want quiet, tears, or closeness."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Allow the feeling", "Crying, resting, or being quiet can be part of caring for sadness."],
        ["Share the story", "Tell a trusted person what happened, what changed, or what is being missed."],
        ["Choose gentle support", "Draw, hold a soft object, sit with someone safe, listen to calm audio, or take a slow walk."]
      ],
      adult: "Do not rush a child into feeling happy. Offer presence first. If sadness continues to affect sleep, eating, school, safety, or daily life, seek support from an appropriate professional.",
      books: ["destiny", "little"]
    },
    joy: {
      emoji: "😄",
      title: "Joy",
      description: "Help children notice, share, and remember joy without overwhelming themselves or others.",
      lead: "Joy can appear when something feels enjoyable, meaningful, connecting, funny, successful, or satisfying. Joy may be loud and energetic, but it can also be quiet, peaceful, or private.",
      say: "I feel joyful. I can enjoy this moment and notice whether others want to join in.",
      causesTitle: "When joy might appear",
      causes: [
        ["A meaningful moment happens", "Playing, creating, reading, learning, or being included can bring bright energy."],
        ["Effort leads to progress", "Finishing something hard, learning a skill, or trying again can feel satisfying."],
        ["Connection feels safe", "Shared laughter, kindness, celebration, or being understood can strengthen joy."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name what helped", "Say what made the moment feel good. This helps children notice patterns that support wellbeing."],
        ["Share respectfully", "Invite someone into the joy without demanding that they feel the same way."],
        ["Save the memory", "Draw it, write one sentence, take a photo with permission, or tell someone the story later."]
      ],
      adult: "Join the child’s joy when you can. Help them notice context, volume, consent, and other people’s boundaries without shaming their excitement.",
      books: ["little", "destiny"]
    },
    fear: {
      emoji: "😨",
      title: "Fear",
      description: "Help children understand fear, check safety, and take small supported steps.",
      lead: "Fear helps us notice possible danger or uncertainty and seek safety. Sometimes fear responds to real danger. Sometimes it responds to memory, imagination, unfamiliar situations, or not knowing what will happen.",
      say: "I feel afraid. Please help me check what is safe and choose one small next step.",
      causesTitle: "When fear might appear",
      causes: [
        ["Something feels unsafe", "Loud sounds, conflict, injury, separation, darkness, or unfamiliar places can activate the body’s alarm system."],
        ["The next step is unknown", "Not knowing what will happen can make the brain search for danger."],
        ["A memory or story is triggered", "Something seen, heard, imagined, or remembered can make fear feel present again."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Check safety first", "Find a trusted adult and name what feels frightening. Do not force a child to face fear alone."],
        ["Use grounding", "Name five things you can see, four things you can feel, and one person who can help."],
        ["Make the step smaller", "If it is safe to continue, choose a tiny next step with support and permission to pause."]
      ],
      adult: "Validate the fear before teaching a strategy. Distinguish between real danger, uncertainty, and remembered fear. If fear is persistent, intense, or limiting daily life, seek appropriate professional support.",
      books: ["scared", "feelings"]
    },
    calm: {
      emoji: "🌿",
      title: "Calm",
      description: "Help children notice calm, practise regulation, and remember what supports steadiness.",
      lead: "Calm is not the absence of all emotion. It is a state where the body has enough safety and space to rest, listen, think, connect, or choose. Calm can be quiet, active, creative, or relational.",
      say: "I notice some calm in my body. I can remember what helped me feel safe.",
      causesTitle: "When calm might appear",
      causes: [
        ["The environment feels safe", "Predictable routines, trusted adults, softer sensory input, and enough rest can support calm."],
        ["A feeling has been understood", "Being heard and not rushed can help the nervous system settle."],
        ["Regulation has been practised", "Breathing, movement, music, drawing, nature, and connection work best when practised before big feelings arrive."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Notice body clues", "Look for softer shoulders, slower breathing, steadier thoughts, or a less urgent body."],
        ["Build a calm list", "Write or draw three things that help calm return."],
        ["Practise when it is easy", "Use calming tools during ordinary moments, not only during distress."]
      ],
      adult: "Notice what helped rather than demanding calm. Co-regulation, predictable routines, and emotionally safe relationships make regulation tools easier to use.",
      books: ["storm", "feelings"]
    },
    bored: {
      emoji: "🧭",
      title: "Boredom",
      description: "Help children understand boredom as useful information about choice, interest, movement, rest, or connection.",
      lead: "Boredom can appear when a child needs novelty, meaningful choice, movement, connection, rest, or a different level of challenge. It is not always a problem adults need to solve immediately. Sometimes it is an opening for creativity, reflection, or a small change in direction.",
      say: "I feel bored. I can check whether I need movement, company, a new idea, or real rest.",
      causesTitle: "When boredom might appear",
      causes: [
        ["The task does not fit", "A task may feel too easy, too hard, too long, unclear, or disconnected from what matters to the child."],
        ["The body needs a shift", "Low energy, restlessness, hunger, tiredness, or sensory needs can make ordinary moments feel flat or irritating."],
        ["Choice feels limited", "Children may feel bored when they have little agency, too many options, or no clear next step."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name the need", "Ask whether the body needs movement, rest, connection, challenge, or quiet."],
        ["Offer bounded choice", "Choose between two or three realistic options instead of expecting instant inspiration."],
        ["Create before consuming", "Try drawing, building, sorting, writing, moving, or noticing three new details before reaching for passive entertainment."]
      ],
      adult: "Do not treat boredom as failure. Offer structure without becoming the child’s constant entertainment source. Boredom can build tolerance, creativity, and self-directed problem-solving when the environment is safe and expectations are realistic.",
      books: ["little", "feelings"]
    },
    confused: {
      emoji: "❔",
      title: "Confusion",
      description: "Help children understand confusion as part of learning, not a sign that they cannot succeed.",
      lead: "Confusion can happen when information is new, incomplete, conflicting, too fast, or hard to connect with what a child already knows. It is often a normal part of learning. Children need help finding the exact point that feels unclear.",
      say: "I do not understand yet. Please show me the next step or explain one part again.",
      causesTitle: "When confusion might appear",
      causes: [
        ["Too much arrives at once", "Long instructions, new vocabulary, noise, pressure, or rushing can overload attention and working memory."],
        ["The missing step is hidden", "A child may understand most of the task but feel stuck because one small link has not been made clear."],
        ["Stress blocks thinking", "When a child worries about being wrong, the brain may focus on safety instead of learning."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Find the unclear part", "Ask: “What is the first part that feels confusing?” This is more useful than repeating everything."],
        ["Use one example", "Show one worked example, picture, gesture, or demonstration before asking the child to try alone."],
        ["Make a next-step sentence", "Try: “First I will ____. Then I will ask for help if ____.”"]
      ],
      adult: "Respond to confusion with curiosity rather than blame. Slowing down, reducing language, checking understanding, and modelling one step can protect confidence while supporting learning.",
      books: ["feelings", "destiny"]
    },
    curious: {
      emoji: "🔎",
      title: "Curiosity",
      description: "Help children use curiosity safely, respectfully, and thoughtfully.",
      lead: "Curiosity is the wish to notice, question, explore, and understand. It can support learning, empathy, creativity, and problem-solving. Children also need guidance about privacy, safety, reliability, and respectful investigation.",
      say: "I am curious. I can ask a question and explore the answer safely.",
      causesTitle: "When curiosity might appear",
      causes: [
        ["Something is new or surprising", "A new object, idea, person, feeling, place, or story can invite careful attention."],
        ["A pattern needs explaining", "Children may notice that something does not fit what they expected and want to understand why."],
        ["A personal interest grows", "Repeated questions often show that a topic matters to the child or connects with their developing identity."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Turn wonder into a question", "Write, draw, or say one clear question that can be explored."],
        ["Choose a safe source", "Ask a trusted adult, observe carefully, use a reliable book, or look for age-appropriate information."],
        ["Respect boundaries", "Curiosity should not ignore someone’s privacy, body, belongings, culture, or personal story."]
      ],
      adult: "Welcome questions when possible. It is fine to say, “I do not know yet.” Model how to investigate carefully, check sources, and stay respectful when curiosity involves other people.",
      books: ["little", "destiny"]
    },
    disappointed: {
      emoji: "🌧️",
      title: "Disappointment",
      description: "Help children understand disappointment when hopes, expectations, or efforts do not turn out as wished.",
      lead: "Disappointment can follow when something hoped for, expected, promised, or worked toward does not happen. It may look like sadness, anger, withdrawal, joking, or giving up. Children need help honouring the loss before deciding what comes next.",
      say: "I am disappointed because this mattered to me. I need time before I choose my next step.",
      causesTitle: "When disappointment might appear",
      causes: [
        ["A hope did not happen", "Plans change, a turn is missed, a result is different, or an opportunity is not available."],
        ["Effort did not bring the expected result", "A child may feel discouraged when practice, courage, or kindness does not lead to the outcome they imagined."],
        ["Comparison makes the feeling sharper", "Seeing someone else receive, win, join, or succeed can make the missed hope feel bigger."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name the hoped-for outcome", "Say what the child wanted to happen. This validates that the feeling has a reason."],
        ["Allow a pause", "Give the body time before problem-solving, teaching a lesson, or suggesting a bright side."],
        ["Choose one response", "The next step may be comfort, trying again later, adapting the plan, asking for help, or repairing a relationship."]
      ],
      adult: "Avoid rushing the child into gratitude or resilience. Disappointment often softens when a trusted adult acknowledges the hope that was lost and helps the child find one realistic next step.",
      books: ["destiny", "feelings"]
    },
    embarrassed: {
      emoji: "🫣",
      title: "Embarrassment",
      description: "Help children understand embarrassment without shame, teasing, or exaggerated attention.",
      lead: "Embarrassment can appear when someone feels exposed, noticed, mistaken, awkward, or worried about how others see them. The goal is not to make the child talk before they are ready. The goal is to protect dignity and support repair if needed.",
      say: "I feel embarrassed. I need a moment, and then I can decide whether I want help.",
      causesTitle: "When embarrassment might appear",
      causes: [
        ["A mistake was seen", "Falling, forgetting, spilling, answering incorrectly, or needing help can feel more intense when others notice."],
        ["Attention feels too big", "Praise, teasing, performance, photos, or being singled out can feel uncomfortable even when adults mean well."],
        ["Belonging feels uncertain", "A child may worry that one awkward moment changes how others see them."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Make the moment smaller", "Reduce attention, stop teasing, and offer privacy or a quiet transition."],
        ["Separate worth from the event", "Use language that reminds the child that mistakes do not reduce their value."],
        ["Repair only if needed", "If harm happened, support a simple repair after the child is calmer. If no harm happened, moving on may be enough."]
      ],
      adult: "Protect the child’s dignity. Do not retell the moment for humour, force public apologies, or demand eye contact. A calm adult response teaches that awkward moments can pass safely.",
      books: ["feelings", "little"]
    },
    frustrated: {
      emoji: "🪢",
      title: "Frustration",
      description: "Help children understand frustration when something matters but feels hard, blocked, or stuck.",
      lead: "Frustration often appears when a child wants to do something, solve something, explain something, or be understood, but the path feels blocked. It can become anger quickly if the child feels powerless or rushed.",
      say: "This is hard. I need a break, then I can try one smaller step.",
      causesTitle: "When frustration might appear",
      causes: [
        ["The next step feels too large", "A task may be developmentally difficult, unclear, or made harder by tiredness, noise, or pressure."],
        ["Effort is not working yet", "Trying repeatedly without progress can make the body want to quit, shout, or push away."],
        ["Communication breaks down", "Children may feel frustrated when they cannot explain what they mean or do not feel understood."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Pause before pushing harder", "A short break can protect learning when the body is overloaded."],
        ["Shrink the task", "Make the next step smaller, clearer, or more visible."],
        ["Name effort and strategy", "Say what has already been tried, then choose a different strategy or ask for specific help."]
      ],
      adult: "Frustration needs structure and encouragement, not pressure. Help the child experience difficulty as something that can be adjusted, practised, shared, or paused rather than proof that they cannot do it.",
      books: ["destiny", "storm"]
    },
    grateful: {
      emoji: "💛",
      title: "Gratitude",
      description: "Help children practise gratitude as honest appreciation, not pressure to ignore difficult feelings.",
      lead: "Gratitude is noticing care, support, opportunity, effort, beauty, or meaning. It can strengthen connection and wellbeing when it is genuine. It should never be used to silence sadness, anger, unfairness, grief, or unmet needs.",
      say: "I can notice one thing that helped me and choose how I want to show appreciation.",
      causesTitle: "When gratitude might appear",
      causes: [
        ["Someone offered care", "A kind action, helpful word, shared time, or patient support may invite appreciation."],
        ["A moment feels meaningful", "Gratitude can arise from nature, play, learning, rest, safety, creativity, or belonging."],
        ["Difficulty and support coexist", "A child may still be upset while also noticing one helpful person or resource."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Make it specific", "Name the action, moment, or support rather than using a vague thank you."],
        ["Choose the form", "Appreciation can be spoken, drawn, written, acted on, or quietly noticed."],
        ["Leave room for other feelings", "Do not require gratitude when a child first needs comfort, justice, rest, or repair."]
      ],
      adult: "Model gratitude without demanding it. Children learn appreciation best through relationships, repeated noticing, and freedom to express thanks in developmentally appropriate ways.",
      books: ["little", "destiny"]
    },
    hopeful: {
      emoji: "🌤️",
      title: "Hope",
      description: "Help children understand hope as the ability to imagine a possible next step with support.",
      lead: "Hope is not pretending everything is easy. It is the ability to imagine that a helpful next step may exist, especially when things feel uncertain or difficult. Children often borrow hope from trusted adults before they can hold it alone.",
      say: "This is hard, and there may still be one helpful next step.",
      causesTitle: "When hope might appear",
      causes: [
        ["A path becomes visible", "A child may feel hopeful when someone helps break a problem into smaller steps."],
        ["Support feels available", "Trusted relationships can make a difficult situation feel less lonely."],
        ["Past effort is remembered", "Remembering previous progress can help a child imagine progress again."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Find one possible step", "Hope grows through small, realistic actions rather than big promises."],
        ["Name available support", "Identify one person, tool, routine, or resource that can help."],
        ["Keep uncertainty honest", "Use language like “maybe,” “we can try,” and “one step” rather than guaranteeing outcomes."]
      ],
      adult: "Offer steady, realistic hope. Avoid false reassurance, but do not leave a child alone with hopelessness. If a child expresses persistent hopelessness or safety concerns, seek professional support promptly.",
      books: ["destiny", "little"]
    },
    jealous: {
      emoji: "🫧",
      title: "Jealousy",
      description: "Help children understand jealousy without shame and choose respectful responses.",
      lead: "Jealousy can signal fear of losing attention, belonging, closeness, opportunity, or something personally important. It may mix with love, sadness, anger, comparison, or insecurity. The feeling can be understood without allowing controlling or hurtful behaviour.",
      say: "I feel jealous. I need help naming what I am afraid of losing or what I wish I had.",
      causesTitle: "When jealousy might appear",
      causes: [
        ["Attention feels threatened", "A sibling, friend, classmate, new baby, or group change may make connection feel uncertain."],
        ["Comparison feels painful", "Seeing someone else receive praise, gifts, closeness, or opportunity can sharpen the feeling."],
        ["A need is hard to ask for", "The child may want reassurance, fairness, belonging, time, or a chance to try."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name the wish or worry", "Try: “I wish ____” or “I am worried that ____.”"],
        ["Ask respectfully", "Turn the need into a request that does not control or punish another person."],
        ["Choose one controllable action", "Practise, ask for time together, take a break from comparison, or focus on a personal next step."]
      ],
      adult: "Do not shame jealousy. Help the child separate the feeling from the behaviour and reassure them that love, attention, and belonging are not always competitions.",
      books: ["little", "feelings"]
    },
    lonely: {
      emoji: "🤝",
      title: "Loneliness",
      description: "Help children understand loneliness and find safe, realistic steps toward connection.",
      lead: "Loneliness can mean a child needs connection, belonging, to be noticed, or to feel understood. A child can feel lonely even around other people. The feeling deserves care, not dismissal.",
      say: "I feel lonely. Can I have company or help finding one connection step?",
      causesTitle: "When loneliness might appear",
      causes: [
        ["Connection feels missing", "A child may miss a person, group, routine, pet, place, or familiar role."],
        ["Belonging feels uncertain", "Being left out, misunderstood, new to a group, or different from peers can make loneliness stronger."],
        ["Asking feels risky", "Children may want connection but fear rejection, embarrassment, or being a burden."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Offer presence first", "Sitting near, listening, or sharing a quiet activity may help before advice."],
        ["Choose one connection action", "Send a message with help, invite someone to play, join a routine, or ask a trusted adult for support."],
        ["Build repeated belonging", "Small regular moments of connection often matter more than one big gesture."]
      ],
      adult: "Take loneliness seriously. Help the child identify safe people and realistic connection steps. If loneliness is persistent or linked with withdrawal, sleep changes, or safety concerns, seek appropriate support.",
      books: ["little", "feelings"]
    },
    love: {
      emoji: "❤️",
      title: "Love",
      description: "Help children understand love as care, connection, respect, consent, and repair.",
      lead: "Love can include care, trust, connection, protection, respect, affection, and wanting another person’s wellbeing. Love should never require giving up boundaries, privacy, safety, or choice. Children need to learn that healthy love includes consent and repair.",
      say: "I can show care in a way that respects my body, your body, and both of our choices.",
      causesTitle: "When love might appear",
      causes: [
        ["Connection feels safe", "A trusted person, pet, story, place, or routine may create warmth and belonging."],
        ["Care wants expression", "Children may want to hug, help, share, listen, draw, write, or spend time together."],
        ["Separation matters", "Missing someone can be one way love is felt in the body."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Offer choices for affection", "A child can choose a hug, high-five, wave, words, shared time, or no physical contact."],
        ["Show care specifically", "Listen, help, include, thank, comfort, repair, or make time."],
        ["Respect boundaries", "Love grows safer when people can say yes, no, not now, or can we try differently."]
      ],
      adult: "Teach love through respectful relationships. Do not force affection. Model apology, repair, consent, steady care, and boundaries so children learn that love and safety belong together.",
      books: ["little", "feelings"]
    },
    nervous: {
      emoji: "🦋",
      title: "Nervousness",
      description: "Help children understand nervousness before new, important, or uncertain moments.",
      lead: "Nervousness often appears before something new, important, unfamiliar, or uncertain. It can mean the body is getting ready. Children need support to check safety, practise one small part, and remember that nervousness does not mean they cannot continue.",
      say: "I feel nervous. Can I practise one small part first?",
      causesTitle: "When nervousness might appear",
      causes: [
        ["Something new is coming", "A new class, activity, person, place, performance, or routine can make the body alert."],
        ["The outcome matters", "Children may feel nervous when they care about doing well, being accepted, or not making a mistake."],
        ["The next step feels uncertain", "Not knowing what will happen can make the brain search for possible problems."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name the moment", "Say what is coming and what part feels uncertain."],
        ["Practise one small piece", "Rehearse the first sentence, first movement, first question, or first minute."],
        ["Use support and grounding", "Breathe slowly, notice the room, and identify one person who can help if needed."]
      ],
      adult: "Treat nervousness as preparation, not weakness. Offer realistic encouragement, clear information, and small practice steps. Avoid forcing a child to perform before they feel supported enough to try.",
      books: ["scared", "destiny"]
    },
    proud: {
      emoji: "⭐",
      title: "Pride",
      description: "Help children notice effort, courage, progress, and growth in a grounded way.",
      lead: "Pride helps children notice effort, courage, progress, kindness, learning, and repair. Healthy pride is not about being better than other people. It is about recognizing growth and connecting confidence with specific actions.",
      say: "I am proud that I kept trying and learned something.",
      causesTitle: "When pride might appear",
      causes: [
        ["Effort becomes visible", "Practice, patience, persistence, or trying again can create a warm sense of progress."],
        ["Courage was used", "A child may feel proud after speaking up, asking for help, telling the truth, or trying something difficult."],
        ["Kindness or repair happened", "Helping, apologising, including someone, or fixing a mistake can support healthy pride."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Make praise specific", "Name the action, effort, choice, or strategy that led to growth."],
        ["Notice the journey", "Draw, write, or say what changed from the beginning to now."],
        ["Share without comparing", "Celebrate progress while also noticing other people’s efforts and feelings."]
      ],
      adult: "Use specific praise rather than labels. “You tried another strategy” teaches more than “You are amazing.” Help children connect pride with effort, values, learning, kindness, and repair.",
      books: ["destiny", "little"]
    },
    shy: {
      emoji: "🌱",
      title: "Shyness",
      description: "Help children understand shyness and take gentle, respectful steps toward connection.",
      lead: "Shyness can appear when a child wants connection but needs more time, safety, familiarity, or choice. It is not rudeness, weakness, or a personality flaw. Children can be supported without being forced into attention before they are ready.",
      say: "I feel shy. I can take a small step when I feel ready and safe.",
      causesTitle: "When shyness might appear",
      causes: [
        ["Attention feels too intense", "Introductions, performances, questions, photos, or group attention can feel overwhelming."],
        ["The relationship is not familiar yet", "A child may need time to observe before joining, speaking, or showing themselves fully."],
        ["The child wants choice", "Being pushed to hug, greet, answer, or perform can make shyness stronger."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Offer low-pressure options", "A wave, smile, nod, drawing, whisper, or standing nearby may be a valid first step."],
        ["Practise before the moment", "Rehearse a greeting, question, or request in a safe place."],
        ["Respect readiness", "Invite participation without making the child’s pace a public problem."]
      ],
      adult: "Do not label a child as shy in a way that traps them. Protect choice and dignity while gently widening opportunities for connection when the child is ready.",
      books: ["little", "feelings"]
    },
    silly: {
      emoji: "🎈",
      title: "Silliness",
      description: "Help children understand playful energy while learning timing, safety, and respect.",
      lead: "Silliness can be playful, connecting, creative, and joyful. It can also become difficult when the timing, space, or other people’s boundaries are not noticed. Children need guidance that preserves playfulness while teaching context.",
      say: "I feel silly and playful. I can check whether this is a good time and place.",
      causesTitle: "When silliness might appear",
      causes: [
        ["Playful energy is high", "Movement, laughter, imagination, friendship, or relief can bring silly energy."],
        ["Connection is being invited", "Children may use humour to join, repair, cope, or test whether a relationship feels safe."],
        ["The body needs release", "After sitting, concentrating, or feeling tense, the body may seek movement and laughter."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Check the setting", "Ask whether this is a playful time, a listening time, a quiet time, or a safety time."],
        ["Keep bodies and words safe", "Silliness should not hurt, humiliate, exclude, or ignore someone’s no."],
        ["Make space for play", "Use a movement break, funny voice, drawing, dance, or game when the context allows it."]
      ],
      adult: "Guide silliness without crushing it. Children need room for play and also help noticing timing, consent, volume, and the needs of the group.",
      books: ["little", "feelings"]
    }
  };

  function esc(text) {
    return String(text).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  function cards(items) {
    return items.map(function (item) {
      return '<article class="insight-card"><h3>' + esc(item[0]) + '</h3><p>' + esc(item[1]) + '</p></article>';
    }).join("");
  }

  function steps(items) {
    return items.map(function (item) {
      return '<li><strong>' + esc(item[0]) + '</strong><br>' + esc(item[1]) + '</li>';
    }).join("");
  }

  function bookCards(keys) {
    return keys.map(function (key) {
      var book = books[key];
      return '<article class="resource-card"><img src="' + esc(book.image) + '" alt="' + esc(book.title) + ' cover"><h3>' + esc(book.title) + '</h3><p>' + esc(book.text) + '</p><a class="read-button" target="_blank" rel="noopener" href="' + esc(book.url) + '">Read story</a></article>';
    }).join("");
  }

  var app = document.getElementById("feelingApp");
  if (!app) return;

  var feeling = feelings[app.dataset.feeling];
  if (!feeling) return;

  document.title = feeling.title + " - Healthy Little Minds";
  var description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", feeling.description);

  app.innerHTML = '<a class="breadcrumb" href="more-feelings.html">&larr; Explore more feelings</a>' +
    '<section class="feeling-hero"><div><span class="feeling-emoji" aria-hidden="true">' + feeling.emoji + '</span><p class="kicker">Understand a feeling</p><h1>' + esc(feeling.title) + '</h1><p class="feeling-lead">' + esc(feeling.lead) + '</p></div><aside class="hero-prompt"><h2>Try saying</h2><p>“' + esc(feeling.say) + '”</p></aside></section>' +
    '<section class="guide-section"><h2>' + esc(feeling.causesTitle) + '</h2><div class="card-grid">' + cards(feeling.causes) + '</div></section>' +
    '<div class="two-column"><section class="panel"><h2>' + esc(feeling.stepsTitle) + '</h2><ol class="steps">' + steps(feeling.steps) + '</ol></section><aside class="support-card"><h2>For parents and teachers</h2><p>' + esc(feeling.adult) + '</p></aside></div>' +
    '<section class="resource-panel"><h2>Stories to read together</h2><div class="resource-grid">' + bookCards(feeling.books) + '</div></section>' +
    '<nav class="feeling-resource-actions" aria-label="Related pages"><a href="home.html#feelings">Home feelings area</a><a href="interactive-tools.html">Feeling tools</a><a href="parents.html">For parents</a></nav>';
})();
