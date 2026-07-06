(function () {
  "use strict";

  var topics = {
    bullying: {
      context: "Bullying is repeated aggressive behaviour involving a real or perceived power imbalance. Conflict between people with similar power still needs attention, but it may require a different response.",
      notice: ["Unexplained injuries, lost belongings, disrupted sleep, school avoidance, or sudden withdrawal", "Changes in online behaviour, fear after notifications, or reluctance to use a device", "A child may be harmed, may harm others, may witness bullying, or may move between these roles"],
      child: "You deserve to feel safe. Tell an adult you trust what happened, where it happened, who was involved, and what would help you feel safer now.",
      adult: "Thank you for telling me. This is not your fault. I will listen, record what happened, and work with you on a safe next step.",
      avoid: "Do not blame the child, promise secrecy you cannot keep, arrange unsafe face-to-face confrontation, or advise retaliation.",
      support: "Act promptly when safety, attendance, sleep, relationships, or emotional wellbeing are affected. Follow the school or organisation's safeguarding process and seek specialist support when harm is serious or continuing.",
      sources: [["CDC: Bullying", "https://www.cdc.gov/youth-violence/about/about-bullying.html"], ["StopBullying.gov", "https://www.stopbullying.gov/"]]
    },
    emotions: {
      context: "Emotions are changing responses that can include body sensations, thoughts, urges, expressions, and actions. No single expression proves what a person feels.",
      notice: ["Name possible feelings without insisting that your guess is correct", "Notice intensity, duration, context, and what the person needs", "Remember that culture, development, disability, and neurodivergence can shape expression"],
      child: "I notice something feels different. I can name it, draw it, point to it, or ask for time before I talk.",
      adult: "I wonder if something feels difficult right now. You do not have to explain immediately. I am here when you are ready.",
      avoid: "Do not label an emotion as bad, demand immediate disclosure, or treat a facial expression as reliable proof.",
      support: "Ask for additional support when emotional changes are persistent, intense, difficult to manage, or interfere with everyday life.",
      sources: [["WHO: Child and adolescent mental health", "https://www.who.int/activities/improving-the-mental-and-brain-health-of-children-and-adolescents/Improving-the-mental-and-brain-health-of-children-and-adolescents"]]
    },
    goals: {
      context: "A useful goal connects something meaningful with a small action that can be practised and reviewed. Progress is information, not a test of personal worth.",
      notice: ["Check that the goal matters to the learner rather than only to an adult", "Separate the outcome from the next controllable action", "Plan for obstacles, support, rest, and revision"],
      child: "My next small step is something I can practise. If it does not work, I can learn from it and change the plan.",
      adult: "What matters to you about this goal? What is one step small enough to try, and what support would make it more possible?",
      avoid: "Do not use goals to compare children, reward perfection, or frame a setback as laziness or failure.",
      support: "Slow down and review the goal when it creates persistent distress, conflict, exhaustion, or pressure that outweighs its benefit.",
      sources: [["CDC: Child development and healthy habits", "https://www.cdc.gov/child-development/about/index.html"]]
    },
    grief: {
      context: "Grief is a response to loss. It may involve sadness, anger, numbness, relief, confusion, physical discomfort, or moments of ordinary enjoyment. It does not follow a fixed timetable.",
      notice: ["Children may revisit a loss as their understanding develops", "Play, behaviour, sleep, concentration, and physical complaints may communicate grief", "Family, cultural, spiritual, and community practices shape mourning"],
      child: "I can miss someone and still have moments when I play, laugh, rest, or think about something else.",
      adult: "I will answer what I can honestly. It is okay to talk, stay quiet, remember, cry, or take a break.",
      avoid: "Do not impose stages, force remembrance activities, use confusing euphemisms with young children, or judge how grief should look.",
      support: "Seek additional help when distress remains severe, daily functioning is substantially affected, or there are concerns about safety, trauma, depression, or prolonged isolation.",
      sources: [["NHS: Grief after bereavement or loss", "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/"]]
    },
    mindfulness: {
      context: "Mindfulness means deliberately noticing present experience with openness. It can be practised through the senses, movement, breathing, or everyday activity; it is not a requirement to empty the mind.",
      notice: ["Some people find stillness uncomfortable and may prefer movement or eyes-open practice", "Brief, voluntary practice is often more usable than pressure to continue", "Mindfulness is one possible skill, not a cure or a substitute for care"],
      child: "I can notice one thing I see, hear, or feel. If this exercise is uncomfortable, I can stop and choose another way to settle.",
      adult: "Would you like to try noticing your feet, looking around the room, or taking a slow breath? You can choose.",
      avoid: "Do not force closed eyes, prolonged stillness, or inward attention, particularly when it increases distress.",
      support: "Stop or adapt the activity when it increases panic, dissociation, traumatic memories, sensory discomfort, or frustration.",
      sources: [["NHS: Mindfulness", "https://www.nhs.uk/mental-health/self-help/tips-and-support/mindfulness/"]]
    },
    parents: {
      context: "Behaviour communicates a mixture of development, need, skill, context, learning, stress, and choice. Understanding a behaviour does not mean accepting harm or removing appropriate boundaries.",
      notice: ["Look for patterns around demands, transitions, hunger, sleep, sensory load, relationships, and communication", "Regulate first when a child cannot yet use reasoning effectively", "Use clear boundaries alongside warmth, repair, and opportunities to practise"],
      child: "The limit is still the same, and I will help you get through this safely.",
      adult: "I can be curious about what contributed to this behaviour while remaining clear about safety and responsibility.",
      avoid: "Do not shame, threaten abandonment, use humiliating consequences, or describe the child as the problem.",
      support: "Ask for help when behaviour is dangerous, escalating, persistent across settings, or causing substantial distress or disruption.",
      sources: [["CDC: Positive parenting and child development", "https://www.cdc.gov/child-development/about/index.html"]]
    },
    "positive-psychology": {
      context: "Positive psychology studies factors associated with wellbeing and effective functioning. Strengths, gratitude, hope, meaning, and connection can be useful without denying hardship or structural barriers.",
      notice: ["Make room for difficult emotions before inviting a positive perspective", "Treat strengths as capacities that develop, not fixed labels", "Keep responsibility realistic when circumstances are outside a person's control"],
      child: "Something can be hard and I can still notice one support, strength, or next possibility.",
      adult: "We do not need to pretend this is easy. Would it help to notice what supported you or what you want to try next?",
      avoid: "Do not demand gratitude, insist on optimism, or imply that wellbeing depends only on attitude.",
      support: "Persistent distress needs appropriate support; positive exercises should not delay assessment or care.",
      sources: [["WHO: Promoting mental health and wellbeing", "https://www.who.int/health-topics/mental-health"]]
    },
    relationships: {
      context: "Healthy relationships combine care, respect, communication, consent, boundaries, repair, and safety. Disagreement can be healthy; coercion, intimidation, and repeated harm are not.",
      notice: ["Notice whether each person can speak, disagree, set limits, and seek other relationships", "Look for patterns rather than judging one awkward moment", "Power differences require additional care and adult responsibility"],
      child: "I can care about someone and still say no, ask for space, or tell a trusted adult when something feels unsafe.",
      adult: "I want to understand what happened, what each person needed, and what repair or protection is required.",
      avoid: "Do not require affection, dismiss boundary violations as teasing, or force reconciliation where safety is uncertain.",
      support: "Seek help for coercion, exploitation, violence, stalking, sexual harm, persistent isolation, or relationships that create fear.",
      sources: [["CDC: School connectedness and restorative practices", "https://www.cdc.gov/youth-behavior/school-connectedness/restorative-practices.html"]]
    },
    relaxation: {
      context: "Relaxation skills can help the body move toward a steadier state. Different nervous systems respond differently, so choice and experimentation matter.",
      notice: ["Match the strategy to the person's state: movement may help before stillness", "Consider sensory preferences, pain, breathing conditions, and cultural comfort", "Use skills during ordinary moments so they are familiar when stress rises"],
      child: "I can choose movement, pressure, sound, breathing, quiet, or connection and notice what helps a little.",
      adult: "Would your body prefer to move, push against something, breathe slowly, or have less noise right now?",
      avoid: "Do not command a distressed person to calm down or treat one technique as universally effective.",
      support: "Seek guidance when distress is frequent, severe, unexplained, or accompanied by fainting, breathing difficulty, pain, or major disruption.",
      sources: [["NHS: Breathing exercises for stress", "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/"]]
    },
    "school-transitions": {
      context: "Starting or changing school combines practical change, uncertainty, relationship-building, and shifts in identity and routine. Adjustment can be uneven rather than steadily improving each day.",
      notice: ["Identify what is known, unknown, controllable, and still needs an answer", "Plan routes, routines, support people, sensory needs, and communication", "Keep familiar connection and recovery time available outside school"],
      child: "I do not have to know everything on the first day. I can learn one place, one routine, and one person who can help.",
      adult: "What part feels most uncertain? Let us find one answer and make a plan for who you can ask if something changes.",
      avoid: "Do not promise that everything will be easy, compare adjustment speeds, or withdraw support immediately after the first day.",
      support: "Coordinate with the school when attendance, sleep, eating, physical symptoms, learning, or distress are significantly affected.",
      sources: [["CDC: School connectedness", "https://www.cdc.gov/youth-behavior/school-connectedness/"], ["NHS: Anxiety in children", "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/"]]
    },
    "self-esteem": {
      context: "Self-esteem concerns a person's sense of worth and self-respect. It is supported by belonging, realistic self-knowledge, agency, competence, and relationships—not constant praise or winning.",
      notice: ["Separate worth from performance, appearance, popularity, and compliance", "Praise specific effort, choices, learning, and contribution without exaggeration", "Offer meaningful participation and achievable responsibility"],
      child: "A mistake tells me something about this attempt. It does not decide my value or what I can learn.",
      adult: "You matter whether this went well or not. Let us notice what happened and what support or practice comes next.",
      avoid: "Do not use empty praise, comparisons, appearance-based approval, or labels such as gifted, lazy, good, or bad.",
      support: "Seek support for persistent worthlessness, withdrawal, severe self-criticism, self-harm, disordered eating, or major changes in functioning.",
      sources: [["UNICEF Parenting: Mental health and wellbeing", "https://www.unicef.org/parenting/mental-health"]]
    },
    sleep: {
      context: "Sleep supports health, learning, mood, and attention. Sleep needs and patterns vary by age and person; difficulties can reflect routines, environment, stress, health, medication, or other factors.",
      notice: ["Look at the whole pattern, including wake time, light, activity, naps, screens, caffeine, and worries", "Make changes gradually and keep routines predictable rather than punitive", "Consider sensory, disability, cultural, household, and caregiving realities"],
      child: "My job is to make room for rest. I do not have to force sleep, and I can ask for help with worries or discomfort.",
      adult: "Let us make bedtime more predictable and notice what helps your body feel safe and ready for rest.",
      avoid: "Do not punish wakefulness, create conflict around sleep, or promise that one routine will solve every sleep difficulty.",
      support: "Consult a healthcare professional for persistent sleep problems, loud snoring, breathing pauses, severe daytime sleepiness, pain, or major changes.",
      sources: [["CDC: Sleep and health", "https://www.cdc.gov/sleep/about/index.html"]]
    },
    stress: {
      context: "Stress is a response to demands or perceived demands. Some stress can mobilize action, while intense or prolonged stress can overwhelm coping and affect the body, learning, behaviour, and relationships.",
      notice: ["Look for changes in sleep, appetite, concentration, irritability, avoidance, physical complaints, or recovery", "Reduce unnecessary demands before adding more coping tasks", "Strengthen safety, connection, predictability, rest, movement, and practical problem-solving"],
      child: "My body may be telling me that too much is happening. I can pause, ask for help, and choose one next step.",
      adult: "You are not failing. Let us work out what can be reduced, what support is available, and what needs attention first.",
      avoid: "Do not praise chronic overwork, minimize the stressor, or place the full burden of adaptation on the child.",
      support: "Seek help when stress is prolonged, worsening, linked to unsafe circumstances, or substantially affects health or daily functioning.",
      sources: [["WHO: Stress", "https://www.who.int/news-room/questions-and-answers/item/stress"]]
    },
    "substance-use": {
      context: "Substance use can involve curiosity, peer context, coping, risk-taking, dependence, or exposure within the family or community. Calm, direct, developmentally appropriate conversation supports safety better than shame.",
      notice: ["Notice patterns, impairment, secrecy, access, peer context, mixing substances, and immediate safety", "Ask what function the substance may be serving without excusing risk", "Keep medication, alcohol, nicotine, and other substances stored safely"],
      child: "I can leave, contact a trusted person, refuse without explaining, and ask for medical help if someone becomes unwell.",
      adult: "I care more about your safety than catching you out. I need honest information so we can decide what help is needed.",
      avoid: "Do not shame, interrogate during intoxication, encourage secrecy, or rely only on punishment and scare tactics.",
      support: "Urgent medical help is needed for unconsciousness, seizures, breathing difficulty, severe confusion, suspected poisoning, or immediate danger. Ongoing use warrants qualified assessment.",
      sources: [["WHO: Alcohol", "https://www.who.int/news-room/fact-sheets/detail/alcohol"], ["WHO: Adolescent mental health", "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health"]]
    },
    trauma: {
      context: "Trauma describes the lasting effects that may follow overwhelming or threatening experiences; an event alone does not determine one person's response. Reactions vary and may change over time.",
      notice: ["Prioritize current safety, predictable relationships, choice, and practical needs", "Possible reactions include alertness, avoidance, numbness, distress, play themes, sleep changes, or concentration difficulties", "Do not assume every behaviour is caused by trauma or require disclosure"],
      child: "What happened was not your fault. You can choose what to share, and adults are responsible for helping you be safe.",
      adult: "I believe that this affected you. You do not need to tell me every detail. We can focus on safety and the support you want now.",
      avoid: "Do not ask for repeated retelling, conduct an investigation yourself, force calming exercises, or promise secrecy where safeguarding action is required.",
      support: "Use safeguarding procedures for abuse or ongoing danger. Seek trauma-informed professional support when reactions persist, intensify, or significantly affect daily life.",
      sources: [["NHS: Looking after a child following trauma", "https://www.penninecare.nhs.uk/trauma/looking-after-your-child-following-trauma"], ["WHO: Child and adolescent mental health", "https://www.who.int/activities/improving-the-mental-and-brain-health-of-children-and-adolescents/Improving-the-mental-and-brain-health-of-children-and-adolescents"]]
    },
    values: {
      context: "Values are chosen qualities that can guide action, such as fairness, care, curiosity, courage, or responsibility. They are directions to practise rather than standards a person must perfectly achieve.",
      notice: ["Help the learner distinguish personal values from pressure, rules, goals, and other people's approval", "Explore how two important values can conflict", "Choose small actions that fit the situation and respect other people's rights"],
      child: "I can ask what kind of person I want to be in this moment and choose one action that moves in that direction.",
      adult: "Which value matters here, and what would a small, realistic expression of it look like?",
      avoid: "Do not impose an adult's values as the child's personal choice or use values language to demand obedience.",
      support: "Offer additional guidance when value conflicts involve safety, discrimination, coercion, legal duties, or significant family or community tension.",
      sources: [["WHO: Mental health", "https://www.who.int/health-topics/mental-health"]]
    },
    "worry-anxiety": {
      context: "Worry is a common response to uncertainty or possible threat. Anxiety becomes a concern when fear or avoidance is intense, persistent, disproportionate to the situation, or interferes with everyday life.",
      notice: ["Children may show anxiety through physical complaints, irritability, reassurance-seeking, sleep difficulty, or avoidance", "Check whether there is an actual safety, bullying, learning, sensory, health, or relationship problem", "Support gradual, safe participation without forcing or enabling expanding avoidance"],
      child: "My alarm system is trying to protect me. I can check what is happening, take one manageable step, and ask for support.",
      adult: "I can see this feels frightening. We will not rush, and we will work out one safe step together.",
      avoid: "Do not ridicule the fear, guarantee that nothing bad can happen, force overwhelming exposure, or repeatedly provide reassurance without building coping.",
      support: "Seek professional advice when anxiety persists, worsens, causes substantial avoidance, or affects school, sleep, eating, relationships, or health.",
      sources: [["NHS: Anxiety in children", "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/"]]
    },
    "youth-teens": {
      context: "Adolescence is a period of rapid physical, cognitive, emotional, and social development. Growing autonomy works best alongside respect, connection, privacy, clear safety boundaries, and access to support.",
      notice: ["Discuss sleep, school pressure, identity, relationships, digital life, discrimination, health, and future uncertainty without assuming one cause", "Distinguish ordinary change from persistent distress or impairment", "Include the young person in decisions that affect them"],
      child: "My views matter. I can ask questions, request privacy, involve a trusted person, and seek help without having every word worked out.",
      adult: "I will listen before solving. Tell me whether you want company, ideas, practical help, or support from someone else.",
      avoid: "Do not dismiss concerns as hormones, monitor secretly without a serious safety reason, or make help conditional on perfect disclosure.",
      support: "Act on major changes in functioning, abuse, exploitation, severe substance use, self-harm, suicidal thoughts, violence, psychosis, eating concerns, or immediate danger.",
      sources: [["WHO: Adolescent mental health", "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health"]]
    }
  };

  var interfaceCopy = {
    en: {
      eyebrow: "Practical understanding",
      title: "Understand, respond, and know when to seek support",
      notice: "What to notice",
      child: "Words a child or young person can use",
      adult: "Words a supportive adult can use",
      avoid: "What to avoid",
      support: "When more support may help",
      evidence: "Evidence and review information",
      scope: "This educational summary was prepared against the Healthy Little Minds Psychology Editorial Standard. It does not diagnose an individual or replace professional care.",
      status: "Editorial status:",
      statusText: "Draft prepared July 2026. Human psychology and safeguarding review is required before approval. Recheck authoritative guidance during review."
    },
    ja: { eyebrow: "実践的な理解", title: "理解し、対応し、支援を求める目安を知る", notice: "気づきたいこと", child: "子どもや若者が使える言葉", adult: "支える大人が使える言葉", avoid: "避けたい対応", support: "さらなる支援が役立つとき", evidence: "根拠とレビュー情報", scope: "この教育的な概要は、Healthy Little Minds心理学編集基準に沿って作成されています。個人の診断や専門的なケアに代わるものではありません。", status: "編集状況：", statusText: "2026年7月作成の草案です。承認前に、心理学およびセーフガーディングの専門家による確認が必要です。確認時には、公的な指針が最新か再確認してください。" },
    ko: { eyebrow: "실생활을 위한 이해", title: "이해하고 대응하며 도움을 구할 때를 알아보기", notice: "살펴볼 점", child: "아동이나 청소년이 사용할 수 있는 말", adult: "지지하는 어른이 사용할 수 있는 말", avoid: "피해야 할 대응", support: "추가 지원이 도움이 될 때", evidence: "근거 및 검토 정보", scope: "이 교육용 요약은 Healthy Little Minds 심리학 편집 기준에 따라 작성되었습니다. 개인에 대한 진단이나 전문적인 치료를 대신하지 않습니다.", status: "편집 상태:", statusText: "2026년 7월 작성된 초안입니다. 승인 전에 심리학 및 아동 보호 전문가의 검토가 필요합니다. 검토할 때 공신력 있는 지침이 최신인지 다시 확인하세요." },
    "zh-cn": { eyebrow: "实用理解", title: "理解、回应并了解何时寻求支持", notice: "需要留意的情况", child: "儿童或青少年可以使用的表达", adult: "支持儿童的成年人可以使用的表达", avoid: "应避免的做法", support: "何时可能需要更多支持", evidence: "证据与审核信息", scope: "本教育摘要依照 Healthy Little Minds 心理学编辑标准编写，不能用于诊断个人，也不能替代专业照护。", status: "编辑状态：", statusText: "2026年7月编写的草案。获批前须由心理学及儿童安全保护专业人员审核。审核时应再次确认权威指引是否为最新版本。" },
    "zh-tw": { eyebrow: "實用理解", title: "理解、回應並了解何時尋求支援", notice: "需要留意的情況", child: "兒童或青少年可以使用的表達", adult: "支持兒童的成人可以使用的表達", avoid: "應避免的做法", support: "何時可能需要更多支援", evidence: "證據與審核資訊", scope: "本教育摘要依照 Healthy Little Minds 心理學編輯標準編寫，不能用於診斷個人，也不能取代專業照護。", status: "編輯狀態：", statusText: "2026年7月編寫的草案。核准前須由心理學及兒童安全維護專業人員審核。審核時應再次確認權威指引是否為最新版本。" }
  };

  window.HLM_RESOURCE_ENGLISH_CONTENT = topics;

  function topicName() {
    var match = document.body.className.match(/topic-page--([a-z-]+)/);
    return match ? match[1] : window.location.pathname.split("/").pop().replace(/\.html$/, "");
  }

  function list(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }

  function init() {
    var htmlLang = (document.documentElement.lang || "en").toLowerCase();
    var locale = htmlLang.indexOf("ja") === 0 ? "ja" : htmlLang.indexOf("ko") === 0 ? "ko" : (htmlLang.indexOf("zh-hant") === 0 || htmlLang.indexOf("zh-tw") === 0) ? "zh-tw" : htmlLang.indexOf("zh") === 0 ? "zh-cn" : "en";
    if (document.querySelector(".hlm-topic-depth")) return;
    var localizedTopics = locale === "en" ? topics : (window.HLM_RESOURCE_CONTENT_LOCALES || {})[locale];
    var data = localizedTopics && localizedTopics[topicName()];
    if (data && !data.sources && topics[topicName()]) data.sources = topics[topicName()].sources;
    var copy = interfaceCopy[locale];
    var main = document.querySelector("main") || document.querySelector(".topic-main");
    if (!data || !main) return;

    var section = document.createElement("section");
    section.className = "hlm-topic-depth";
    section.setAttribute("aria-labelledby", "hlmTopicDepthTitle");
    section.innerHTML = '<p class="hlm-topic-depth__eyebrow">' + copy.eyebrow + '</p>'
      + '<h2 id="hlmTopicDepthTitle">' + copy.title + '</h2>'
      + '<p class="hlm-topic-depth__lead">' + data.context + '</p>'
      + '<div class="hlm-topic-depth__grid">'
      + '<article><h3>' + copy.notice + '</h3>' + list(data.notice) + '</article>'
      + '<article><h3>' + copy.child + '</h3><p>“' + data.child + '”</p></article>'
      + '<article><h3>' + copy.adult + '</h3><p>“' + data.adult + '”</p></article>'
      + '<article><h3>' + copy.avoid + '</h3><p>' + data.avoid + '</p></article>'
      + '<article><h3>' + copy.support + '</h3><p>' + data.support + '</p></article>'
      + '</div>'
      + '<details class="hlm-topic-depth__evidence"><summary>' + copy.evidence + '</summary>'
      + '<p>' + copy.scope + '</p>'
      + '<ul>' + data.sources.map(function (source) { return '<li><a href="' + source[1] + '" rel="noopener noreferrer" target="_blank">' + source[0] + '</a></li>'; }).join("") + '</ul>'
      + '<p><strong>' + copy.status + '</strong> ' + copy.statusText + '</p></details>';

    var boundary = main.querySelector(".hlm-resource-boundary");
    main.insertBefore(section, boundary || null);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
