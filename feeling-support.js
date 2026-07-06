(function () {
  "use strict";

  const path = window.location.pathname.replace(/\\/g, "/");
  const parts = path.split("/").filter(Boolean);
  const locales = new Set(["ko", "ja", "zh-cn", "zh-tw"]);
  const localePart = parts.find(part => locales.has(part));
  const locale = localePart || "en";
  const file = (parts[parts.length - 1] || "index.html").replace(".html", "");
  const base = locale === "en" ? "" : "../";

  const copy = {
    en: {
      kicker: "Feeling library upgrade",
      title: "Understand this feeling",
      means: "What this feeling means",
      body: "What it can feel like in the body",
      child: "What a child can say",
      parent: "What a parent can say",
      tryNow: "One thing to try now",
      variation: "Remember",
      story: "Related story",
      tool: "Related tool",
      printable: "Printable card",
      plan: "7-day growth plan",
      defaultMeaning: "This feeling is a message. It helps children notice what matters, what needs care, or what needs a next step.",
      defaultBody: "It may show up as tight muscles, a busy mind, quietness, tears, fast words, or needing space.",
      defaultChild: "I am feeling this right now, and I need help finding one next step.",
      defaultParent: "I hear you. Your feeling makes sense. We can slow down and choose one helpful step together.",
      defaultTryNow: "Pause and notice what your body needs. Choose one small, safe action rather than trying to change everything at once.",
      defaultVariation: "Feelings do not look the same in every person or situation. A face, action, or body signal can offer a clue, but it does not prove what someone feels."
    },
    ko: {
      kicker: "감정 도감",
      title: "이 감정을 이해해요",
      means: "이 감정의 의미",
      body: "몸에서 느껴질 수 있는 모습",
      child: "아이가 말할 수 있는 문장",
      parent: "보호자가 말할 수 있는 문장",
      tryNow: "지금 해 볼 한 가지",
      variation: "기억하세요",
      story: "관련 이야기",
      tool: "관련 도구",
      printable: "인쇄용 카드",
      plan: "7일 성장 계획",
      defaultMeaning: "이 감정은 아이에게 중요한 것, 돌봄이 필요한 것, 다음 단계가 필요한 것을 알려 주는 신호입니다.",
      defaultBody: "몸이 긴장되거나, 생각이 많아지거나, 조용해지거나, 눈물이 나거나, 혼자 있고 싶을 수 있습니다.",
      defaultChild: "지금 이런 감정을 느끼고 있어요. 다음에 무엇을 하면 좋을지 도와주세요.",
      defaultParent: "네 마음을 들었어. 그렇게 느낄 수 있어. 천천히 한 가지 도움이 되는 방법을 함께 찾아보자.",
      defaultTryNow: "잠시 멈추고 몸에 무엇이 필요한지 살펴보세요. 모든 것을 바꾸려 하기보다 작고 안전한 행동 하나를 고르세요.",
      defaultVariation: "감정은 사람과 상황에 따라 다르게 나타납니다. 표정이나 행동은 힌트가 될 수 있지만 감정을 확정하지는 못합니다."
    },
    ja: {
      kicker: "気持ちのガイド",
      title: "この気持ちを理解する",
      means: "この気持ちの意味",
      body: "体にあらわれるサイン",
      child: "子どもが言える言葉",
      parent: "大人がかけられる言葉",
      tryNow: "今試せること",
      variation: "覚えておきたいこと",
      story: "関連ストーリー",
      tool: "関連ツール",
      printable: "印刷カード",
      plan: "7日間の成長プラン",
      defaultMeaning: "この気持ちは、大切なこと、ケアが必要なこと、次の一歩が必要なことを教えてくれるサインです。",
      defaultBody: "体が固くなる、考えがいっぱいになる、静かになる、涙が出る、少し距離がほしくなることがあります。",
      defaultChild: "今この気持ちがあります。次にできることを一緒に考えてほしいです。",
      defaultParent: "聞いているよ。その気持ちは自然だよ。ゆっくり、一つ助けになることを選ぼう。",
      defaultTryNow: "少し立ち止まり、体が何を必要としているか気づいてみましょう。すべてを変えようとせず、小さく安全な行動を一つ選びます。",
      defaultVariation: "気持ちの現れ方は人や状況によって違います。表情や行動は手がかりになりますが、気持ちを断定するものではありません。"
    },
    "zh-cn": {
      kicker: "情绪图书馆",
      title: "理解这种情绪",
      means: "这种情绪是什么意思",
      body: "身体可能有什么感觉",
      child: "孩子可以这样说",
      parent: "大人可以这样说",
      tryNow: "现在可以尝试的一件事",
      variation: "请记住",
      story: "相关故事",
      tool: "相关工具",
      printable: "可打印卡片",
      plan: "7天成长计划",
      defaultMeaning: "这种情绪是在提醒孩子：有什么很重要、需要被照顾，或者需要一个下一步。",
      defaultBody: "身体可能会紧绷，脑子很忙，想安静，想哭，说话变快，或者想要一点空间。",
      defaultChild: "我现在有这种感觉，我需要帮助找到下一步。",
      defaultParent: "我听见你了。你这样感觉是可以理解的。我们慢慢来，一起找一个有帮助的下一步。",
      defaultTryNow: "先停一停，留意身体现在需要什么。不必一次改变所有事，只选一个小而安全的行动。",
      defaultVariation: "情绪在不同人和情境中的表现并不相同。表情或行为可以提供线索，但不能证明一个人的感受。"
    },
    "zh-tw": {
      kicker: "情緒圖書館",
      title: "理解這種情緒",
      means: "這種情緒是什麼意思",
      body: "身體可能有什麼感覺",
      child: "孩子可以這樣說",
      parent: "大人可以這樣說",
      tryNow: "現在可以嘗試的一件事",
      variation: "請記得",
      story: "相關故事",
      tool: "相關工具",
      printable: "可列印卡片",
      plan: "7天成長計畫",
      defaultMeaning: "這種情緒是在提醒孩子：有些事很重要、需要被照顧，或需要一個下一步。",
      defaultBody: "身體可能會緊繃、腦袋很忙、想安靜、想哭、說話變快，或想要一點空間。",
      defaultChild: "我現在有這種感覺，我需要幫忙找到下一步。",
      defaultParent: "我聽見你了。你這樣感覺是可以理解的。我們慢慢來，一起找一個有幫助的下一步。",
      defaultTryNow: "先停一停，留意身體現在需要什麼。不必一次改變所有事，只選一個小而安全的行動。",
      defaultVariation: "情緒在不同人和情境中的表現並不相同。表情或行為可以提供線索，但不能證明一個人的感受。"
    }
  };

  const englishFeelingData = {
    bored: {
      meaning: "Boredom may signal a need for novelty, meaningful choice, movement, connection, or rest.",
      body: "Low energy, restlessness, wandering attention, irritability, or feeling that time is moving slowly.",
      child: "I feel bored. I can check whether I need a new activity, company, movement, or rest.",
      parent: "Boredom is information. I can offer a few choices without solving every empty moment for you.",
      tryNow: "Choose one: move your body, make something with available materials, notice three new details nearby, or take a genuine rest.",
      variation: "Boredom is not always a lack of entertainment. It can also appear when a task feels too easy, too difficult, disconnected, or tiring."
    },
    confused: {
      meaning: "Confusion can appear when information is new, incomplete, conflicting, or arriving too quickly.",
      body: "A busy mind, hesitation, tension, repeated questions, silence, or wanting to leave the task.",
      child: "I do not understand yet. Please explain one step again or show me where to begin.",
      parent: "Not understanding yet is part of learning. Let us find the exact part that feels unclear.",
      tryNow: "Say one thing you already know, identify one unclear point, and ask one specific question about the next step.",
      variation: "Confusion does not mean a child was not listening or cannot learn. Language, processing time, stress, instructions, and context can all matter."
    },
    curious: {
      meaning: "Curiosity is the wish to notice, question, explore, and understand something more fully.",
      body: "Focused attention, alert energy, many questions, careful observation, or wanting to try something directly.",
      child: "I am curious. I can ask a question and explore the answer safely.",
      parent: "Your question matters. We can investigate it together, even if we do not know the answer yet.",
      tryNow: "Write or draw one question, choose a trustworthy place to investigate it, then describe what you discovered.",
      variation: "Curiosity may be energetic and talkative, or quiet and observant. A child may also need boundaries when exploration involves privacy or safety."
    },
    disappointed: {
      meaning: "Disappointment can follow when something hoped for, expected, or worked toward does not happen.",
      body: "A sinking feeling, tears, quietness, irritation, low energy, or wanting to give up.",
      child: "I am disappointed because this mattered to me. I need time before I choose what comes next.",
      parent: "I can see that you hoped for a different result. We do not need to pretend it does not hurt.",
      tryNow: "Name what you hoped would happen, allow the feeling some time, then choose whether to adapt, try again later, or seek comfort.",
      variation: "Disappointment may look like sadness, anger, withdrawal, joking, or apparent indifference. Ask before assuming the meaning of a reaction."
    },
    embarrassed: {
      meaning: "Embarrassment can appear when someone feels exposed, noticed, mistaken, or worried about how others see them.",
      body: "Warm cheeks, looking away, nervous laughter, hiding, going quiet, or wanting to leave.",
      child: "I feel embarrassed. I need a moment, and I can decide whether I want help repairing what happened.",
      parent: "You are still worthy when something awkward or mistaken happens. I will not make this moment bigger.",
      tryNow: "Move to a less exposed space, take one slow breath, and decide whether you need reassurance, privacy, clarification, or repair.",
      variation: "Laughing, silence, anger, or avoidance can sometimes accompany embarrassment. Do not tease, demand disclosure, or assume intent."
    },
    grateful: {
      meaning: "Gratitude is noticing support, care, opportunity, or something meaningful without denying what is difficult.",
      body: "Warmth, steadiness, connection, a wish to say thank you, or quiet appreciation.",
      child: "I can notice one thing that helped me and choose how I want to show appreciation.",
      parent: "We can model appreciation without requiring gratitude while a child is hurt, overwhelmed, or disappointed.",
      tryNow: "Name one specific action or moment that helped, then express appreciation through words, a note, a drawing, or a kind response.",
      variation: "Gratitude should not be used to silence sadness, anger, unfairness, or unmet needs. Difficult and appreciative feelings can exist together."
    },
    jealous: {
      meaning: "Jealousy can signal fear of losing attention, belonging, closeness, opportunity, or something personally important.",
      body: "Tension, comparison, worry, anger, sadness, watching others closely, or wanting reassurance.",
      child: "I feel jealous. I need help naming what I am afraid of losing or what I wish I had.",
      parent: "Jealousy does not make you unkind. We can understand the need without hurting or controlling someone else.",
      tryNow: "Complete the sentence, ‘I wish…’ or ‘I am worried that…’, then choose a respectful request or one action within your control.",
      variation: "Jealousy and envy are related but not identical, and both can mix with love, fear, sadness, or anger. Avoid shaming the feeling."
    },
    love: {
      meaning: "Love can include care, trust, connection, protection, respect, and a wish for another person's wellbeing.",
      body: "Warmth, ease, closeness, focused care, missing someone, or wanting to help and connect.",
      child: "I can show care in ways that respect my body, the other person's body, and both people's choices.",
      parent: "Affection should include consent. A child can choose a hug, words, a wave, shared time, or another comfortable form of connection.",
      tryNow: "Ask what kind of connection feels welcome, then choose a specific caring action such as listening, helping, writing, or spending time together.",
      variation: "Love is not proved by physical affection, obedience, constant closeness, or giving up boundaries. Safe relationships allow choice and repair."
    },
    nervous: {
      meaning: "Nervousness often appears before something new, important, or uncertain.",
      body: "Butterflies, a fast heartbeat, shaky hands, or wanting to hide.",
      child: "I feel nervous. Can I practise one small part first?",
      parent: "Your body is getting ready. We can practise one small step together.",
      story: ["Listen to Ella practise courage", "audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["Try calm breathing", "interactive-tools.html#calm-corner"],
      printable: ["When I Feel Scared", "worksheets/When-I-Feel-Scared.pdf"]
    },
    frustrated: {
      meaning: "Frustration shows up when something matters but feels hard or stuck.",
      body: "Hot cheeks, tight hands, loud words, or wanting to quit.",
      child: "This is hard. I need a break, then I can try one more step.",
      parent: "This is hard, and you are still learning. Let's make the next step smaller.",
      story: ["Listen to One More Kick, Ella!", "audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["Draw the feeling", "interactive-tools.html#drawing-tool"],
      printable: ["Goals and small steps", "resources/goals.html"]
    },
    proud: {
      meaning: "Pride helps children notice effort, courage, progress, and growth.",
      body: "Standing taller, smiling, warm energy, or wanting to share good news.",
      child: "I worked hard, and I can feel proud of my effort.",
      parent: "I noticed your effort. You kept going even when it was hard.",
      story: ["Ella's reflection", "interactive-tools.html#ella-reflection"],
      tool: ["Choose a progress badge", "growth-plan.html#progress-badges"],
      printable: ["Weekly growth plan", "growth-plan.html#weekly-plan"]
    },
    anger: {
      meaning: "Anger can mean something feels unfair, unsafe, blocked, or important.",
      body: "Heat, tense muscles, a loud voice, stomping, or needing space.",
      child: "I am angry. I need to calm my body before I talk.",
      parent: "Anger is allowed. Hurting is not. I will help you calm and then we can talk.",
      tryNow: "Create space from the conflict, then choose safe physical effort such as pushing a wall, stretching, or squeezing a cushion.",
      variation: "Anger may be loud, quiet, tearful, restless, or hidden behind withdrawal. Ask what happened instead of deciding from appearance alone.",
      story: ["Mood story builder", "interactive-tools.html#mood-story-builder"],
      tool: ["Calm corner", "interactive-tools.html#calm-corner"],
      printable: ["Calm workbook", "worksheets/Calm the Storm Inside - My Feelings Workbook.pdf"]
    },
    calm: {
      meaning: "Calm is a steady feeling that helps the brain listen, choose, and rest.",
      body: "Slower breathing, softer muscles, quieter thoughts, or feeling safe.",
      child: "I feel calmer now. I can choose my next step.",
      parent: "Let's remember what helped your body feel safe.",
      tryNow: "Notice one sign of steadiness—perhaps slower breathing or softer shoulders—and name what helped.",
      variation: "Calm does not mean having no emotions or always being quiet. A person can feel calm while moving, talking, creating, or asking for change.",
      story: ["Calm tools", "interactive-tools.html#calm-corner"],
      tool: ["Sound and breathing", "interactive-tools.html#calm-corner"],
      printable: ["Relaxation guide", "resources/relaxation.html"]
    },
    fear: {
      meaning: "Fear helps us notice possible danger or uncertainty and prepare to seek safety.",
      body: "A fast heartbeat, tight stomach, alert eyes, freezing, hiding, or wanting a trusted person nearby.",
      child: "I feel afraid. Please help me check what is safe and choose one small next step.",
      parent: "I believe that this feels frightening. We will check safety first, and you can choose how quickly to continue.",
      tryNow: "Look around and name five things you can see. Then tell a trusted adult what feels frightening and what support would help.",
      variation: "Fear can protect us, but it can also respond to memories, uncertainty, or imagined danger. Do not force exposure or assume every fear has the same cause.",
      story: ["When I Feel Scared", "worksheets/When-I-Feel-Scared.pdf"],
      tool: ["Try a grounding activity", "interactive-tools.html#calm-corner"],
      printable: ["When I Feel Scared", "worksheets/When-I-Feel-Scared.pdf"]
    },
    joy: {
      meaning: "Joy can appear when something feels enjoyable, meaningful, connecting, or satisfying.",
      body: "More energy, warmth, smiling, laughter, movement, focused interest, or wanting to share the moment.",
      child: "I feel joyful. I can enjoy this and notice whether other people want to join in.",
      parent: "I can see that this matters to you. Tell me what made this moment feel good.",
      tryNow: "Name what brought the joy, share appreciation with someone involved, or record the memory in a drawing or sentence.",
      variation: "Joy is not always energetic or visible. It may feel quiet, private, peaceful, proud, playful, or deeply focused.",
      story: ["Little Acts, Big Feelings", "https://heyzine.com/flip-book/8736fac672.html"],
      tool: ["Draw the moment", "interactive-tools.html#drawing-tool"],
      printable: ["Little Acts, Big Feelings", "worksheets/Little-Acts-Big-Feelings-Worksheet.pdf"]
    },
    lonely: {
      meaning: "Loneliness can mean a child needs connection, belonging, or to be noticed.",
      body: "A heavy chest, quietness, sadness, or wanting someone nearby.",
      child: "I feel left out. Can I have company or help joining in?",
      parent: "Feeling left out hurts. I am here with you while we think of one connection step.",
      story: ["Bella's choices story", "interactive-stories/scene_1_bella_story.html"],
      tool: ["Mood story builder", "interactive-tools.html#mood-story-builder"],
      printable: ["Relationships support", "resources/relationships.html"]
    },
    hopeful: {
      meaning: "Hope helps children believe a better next step is still possible.",
      body: "Lighter energy, curiosity, a small smile, or readiness to try.",
      child: "I can try again, one small step at a time.",
      parent: "You do not need to solve everything today. One small step is enough.",
      story: ["One More Kick, Ella!", "audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["Ella reflection", "interactive-tools.html#ella-reflection"],
      printable: ["Weekly growth plan", "growth-plan.html#weekly-plan"]
    },
    sadness: {
      meaning: "Sadness often shows that something mattered, changed, or needs comfort.",
      body: "Tears, low energy, quietness, or wanting a hug or space.",
      child: "I feel sad. I need comfort or someone to listen.",
      parent: "I am here. You do not have to rush out of sadness.",
      tryNow: "Choose comfort before problem-solving: sit with someone, hold a familiar object, draw, rest, or tell the story of what happened.",
      variation: "Sadness may include tears, quietness, irritability, tiredness, play, or a wish for privacy. There is no single correct way to look sad.",
      story: ["Feeling Sad story", "story-sad.html"],
      tool: ["Draw the feeling", "interactive-tools.html#drawing-tool"],
      printable: ["Little Acts, Big Feelings", "worksheets/Little-Acts-Big-Feelings-Worksheet.pdf"]
    },
    shy: {
      meaning: "Shyness can describe feeling cautious, self-conscious, or slow to warm up around attention, unfamiliar people, or new situations.",
      body: "A quiet voice, looking away, staying close to a trusted person, tension, or needing more observation time.",
      child: "I need more time before I join. I can watch, practise, or begin with one safe person.",
      parent: "You do not have to perform confidence. I can give you preparation, choice, and a smaller way to participate.",
      tryNow: "Preview what will happen, practise one opening sentence, or choose a low-pressure role such as watching first or joining one person.",
      variation: "Quietness is not a flaw, and it does not always mean fear. Temperament, culture, language, sensory needs, and the situation all matter."
    },
    silly: {
      meaning: "Silliness can express play, creativity, connection, excitement, tension release, or a need for movement.",
      body: "Laughter, lively movement, playful sounds, quick ideas, or difficulty shifting back to the current task.",
      child: "I feel playful. I can enjoy being silly and check whether this is a safe time and place for it.",
      parent: "Playfulness belongs here. I can enjoy it while helping you notice other people's boundaries and the needs of the moment.",
      tryNow: "Choose a safe playful activity, agree on a clear stopping signal, and practise shifting together when the activity ends.",
      variation: "Silliness is not automatically misbehavior. It may also appear when a child is nervous, overwhelmed, seeking connection, or avoiding exposure."
    }
  };

  const localizedFeelingData = {
    ja: {
      anger: {
        meaning: "怒りは、不公平、危険、傷つき、または大切なことが妨げられたと感じたときに現れることがあります。",
        body: "体が熱くなる、筋肉が硬くなる、声が大きくなる、または距離がほしくなることがあります。",
        child: "怒っている。話す前に体を落ち着かせたい。",
        parent: "怒ることは大丈夫。傷つけることは止めよう。落ち着いてから一緒に話そう。",
        tryNow: "いったん安全な距離をとり、壁を押す、伸びをする、クッションを握るなど、安全に力を使います。",
        variation: "怒りは、大きな声、涙、そわそわ、沈黙など異なる形で現れます。見た目だけで決めつけず、何があったかを尋ねましょう。"
      },
      sadness: {
        meaning: "悲しみは、大切なものを失ったり、変化したり、態めが必要なときに現れることがあります。",
        body: "涙、体の重さ、静けさ、抱きしめてほしい気持ち、または一人の時間がほしい感じがあります。",
        child: "悲しい。態めてほしい、または話を聞いてほしい。",
        parent: "ここにいるよ。無理にすぐ元気にならなくていいよ。",
        tryNow: "解決より先に態めを選びます。誰かと座る、絵を描く、休む、または起きたことを話しましょう。",
        variation: "悲しみは涙だけでなく、静けさ、いらだち、疲れ、遊びの中にも現れます。"
      },
      joy: {
        meaning: "喜びは、楽しいこと、大切なつながり、達成感などから生まれることがあります。",
        body: "エネルギー、温かさ、笑顔、笑い、集中、または誰かと共有したい感じがあります。",
        child: "うれしい。この気持ちを楽しみながら、ほかの人の気持ちも大切にできる。",
        parent: "この時間が大切なんだね。何がうれしかったか教えて。",
        tryNow: "喜びの理由を言葉にし、関わった人に感謝を伝えたり、絵や一文で記録したりします。",
        variation: "喜びはいつも元気に見えるわけではありません。静かで、個人的で、深く集中した喜びもあります。"
      },
      fear: {
        meaning: "恐れは、危険や不確かさに気づき、安全を求める準備をするための気持ちです。",
        body: "心拍が速くなる、お腹が硬くなる、動けなくなる、隠れたくなる、信頼できる人の近くにいたくなることがあります。",
        child: "こわい。安全を確かめて、小さな次の一歩を選ぶのを手伝って。",
        parent: "こわく感じていることを信じるよ。まず安全を確かめ、進む速さはあなたが選べるよ。",
        tryNow: "周りを見て、見えるものを5つ言います。その後、信頼できる大人に何がこわいか、何が助けになるかを伝えます。",
        variation: "恐れは安全を守りますが、記憶や不確かさに反応することもあります。無理に挑戦させないでください。"
      },
      calm: {
        meaning: "落ち着きとは、感情がないことではなく、安全を感じ、考えたり休んだりできる状態です。",
        body: "ゆっくりした呼吸、やわらかい筋肉、考える余裕、または安心感として現れることがあります。",
        child: "今、少し落ち着いている。次にすることを選べる。",
        parent: "何が安心につながったか、一緒に覚えておこう。",
        tryNow: "呼吸や肩など、安定しているサインを一つ見つけ、何が助けになったかを言葉にします。",
        variation: "落ち着きは、いつも静かにしていることではありません。動く、話す、作る、変化を求める中でも感じられます。"
      },
      hopeful: {
        meaning: "希望は、今すべてが解決していなくても、よりよい次の一歩があると感じることです。",
        body: "少し軽いエネルギー、好奇心、やってみようという気持ち、または静かな忍耐として現れることがあります。",
        child: "すべてを今解決しなくてもいい。小さな一歩を選べる。",
        parent: "無理に前向きにならなくていいよ。今できる小さな一歩を一緒に探そう。",
        tryNow: "心配の中でも自分にできることを一つ書き、助けてくれる人や資源を一つ選びます。",
        variation: "希望は、常に自信があることや、つらい気持ちを無視することではありません。不安と希望は同時に存在できます。"
      }
    }
  };

  const fallbackLinks = {
    story: ["Related story", "audiobook.html?book=audiobooks/ella/book.json"],
    tool: ["Related tool", "interactive-tools.html"],
    printable: ["Printable card", "growth-plan.html#weekly-plan"]
  };

  const localizedFallbackLinks = {
    en: fallbackLinks,
    ko: {
      story: ["엘라 이야기", "audiobook_section.html"],
      tool: ["감정 도구", "interactive-tools.html"],
      printable: ["7일 성장 계획", "growth-plan.html#weekly-plan"]
    },
    ja: {
      story: ["エラの物語", "audiobook_section.html"],
      tool: ["感情ツール", "interactive-tools.html"],
      printable: ["7日間プラン", "growth-plan.html#weekly-plan"]
    },
    "zh-cn": {
      story: ["Ella的故事", "audiobook_section.html"],
      tool: ["情绪工具", "interactive-tools.html"],
      printable: ["7天成长计划", "growth-plan.html#weekly-plan"]
    },
    "zh-tw": {
      story: ["Ella的故事", "audiobook_section.html"],
      tool: ["情緒工具", "interactive-tools.html"],
      printable: ["7天成長計畫", "growth-plan.html#weekly-plan"]
    }
  };

  function localizeUrl(url) {
    if (/^https?:|^mailto:|^#/.test(url)) return url;
    if (url.startsWith("../")) return url;
    if (locale === "en") return url;
    if (url.startsWith("worksheets/") || url.startsWith("audiobooks/")) return "../" + url;
    return url;
  }

  function addStylesheet() {
    if (!document.querySelector("link[data-feeling-support]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = base + "feeling-support.css";
      link.dataset.feelingSupport = "true";
      document.head.appendChild(link);
    }
    if (!document.querySelector('link[href*="feeling-page-standard.css"]')) {
      const standardLink = document.createElement("link");
      standardLink.rel = "stylesheet";
      standardLink.href = base + "feeling-page-standard.css?v=1";
      standardLink.dataset.feelingStandard = "true";
      document.head.appendChild(standardLink);
    }
    if (!document.querySelector('script[src*="feeling-page-standard.js"]')) {
      const standardScript = document.createElement("script");
      standardScript.src = base + "feeling-page-standard.js?v=1";
      standardScript.defer = true;
      standardScript.dataset.feelingStandard = "true";
      document.head.appendChild(standardScript);
    }
  }

  function render() {
    const text = copy[locale] || copy.en;
    const data = locale === "en"
      ? (englishFeelingData[file] || {})
      : ((localizedFeelingData[locale] && localizedFeelingData[locale][file]) || {});
    const panel = document.createElement("section");
    panel.className = "feeling-support-panel";
    panel.setAttribute("aria-labelledby", "feelingSupportTitle");

    const links = localizedFallbackLinks[locale] || fallbackLinks;
    const story = data.story || links.story;
    const tool = data.tool || links.tool;
    const printable = data.printable || links.printable;

    panel.innerHTML = `
      <p class="feeling-support-panel__kicker">${text.kicker}</p>
      <h2 id="feelingSupportTitle">${text.title}</h2>
      <div class="feeling-support-grid">
        <article class="feeling-support-card">
          <h3>${text.means}</h3>
          <p>${data.meaning || text.defaultMeaning}</p>
        </article>
        <article class="feeling-support-card">
          <h3>${text.body}</h3>
          <p>${data.body || text.defaultBody}</p>
        </article>
        <article class="feeling-support-card">
          <h3>${text.child}</h3>
          <p>${data.child || text.defaultChild}</p>
        </article>
        <article class="feeling-support-card">
          <h3>${text.parent}</h3>
          <p>${data.parent || text.defaultParent}</p>
        </article>
        <article class="feeling-support-card feeling-support-card--action">
          <h3>${text.tryNow}</h3>
          <p>${data.tryNow || text.defaultTryNow}</p>
        </article>
        <article class="feeling-support-card feeling-support-card--context">
          <h3>${text.variation}</h3>
          <p>${data.variation || text.defaultVariation}</p>
        </article>
      </div>
      <div class="feeling-support-links" aria-label="Related support">
        <a href="${localizeUrl(story[1])}">${text.story}: ${story[0]}</a>
        <a href="${localizeUrl(tool[1])}">${text.tool}: ${tool[0]}</a>
        <a href="${localizeUrl(printable[1])}">${text.printable}: ${printable[0]}</a>
        <a href="${localizeUrl("growth-plan.html")}">${text.plan}</a>
      </div>
    `;

    const intro = document.querySelector(".intro-text");
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    if (intro?.parentNode) {
      intro.insertAdjacentElement("afterend", panel);
    } else if (header?.parentNode) {
      header.insertAdjacentElement("afterend", panel);
    } else if (h1?.parentNode) {
      h1.insertAdjacentElement("afterend", panel);
    } else {
      document.body.prepend(panel);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    addStylesheet();
    render();
  });
})();
