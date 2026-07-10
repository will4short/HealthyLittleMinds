(function () {
  "use strict";

  const root = document.getElementById("will-talks-app");
  if (!root) return;

  const lang = (document.documentElement.lang || "en").toLowerCase();
  const locale = lang.startsWith("zh-tw")
    ? "zh-tw"
    : lang.startsWith("zh-cn")
      ? "zh-cn"
      : lang.startsWith("ja")
        ? "ja"
        : lang.startsWith("ko")
          ? "ko"
          : "en";
  const prefix = locale === "en" ? "" : "../";

  const episodeLinks = {
    spotify:
      "https://open.spotify.com/episode/2SQDr6gscwAJmwD2sYtUvN?si=ZtXMCBgIQx24RHqobLxdyg",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/2SQDr6gscwAJmwD2sYtUvN?utm_source=generator&theme=0",
    youtube: "https://youtu.be/rFB3goO0-G0?si=2hBmavZqWOxogl4z",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/rFB3goO0-G0",
  };

  const archiveLinks = {
    spotify:
      "https://open.spotify.com/episode/4PNHEiwusoYZKG572kMxDa?si=c3h1-zlASP6-n1MJ5Z6Izw",
    youtube: "https://youtu.be/_5vzBYbVh3s?si=nSQ8ATWAbdMRHP5D",
  };

  const copy = {
    en: {
      home: "Home",
      back: "Back to home",
      pageLabel: "Will Talks",
      nav: ["Latest", "Episodes", "Topics", "About"],
      eyebrow: "Will Talks",
      title: "Psychology made practical for everyday life.",
      intro: "Reflective conversations about emotions, relationships, behaviour, learning, and the patterns that shape everyday choices.",
      primaryCta: "Listen to latest episode",
      secondaryCta: "Explore topics",
      heroNote: "Educational reflections for adults, educators, and curious listeners. Not a replacement for therapy, diagnosis, or medical care.",
      latestLabel: "Latest episode",
      latestTitle: "Gaslighting: The Most Misused Psychology Word | Psychology Misunderstood S1E1",
      latestTopic: "Psychology misunderstood",
      latestSummary: "The first episode of Psychology Misunderstood separates the science from the buzzword. Learn what gaslighting actually means, why it is often confused with lying or disagreement, and why accurate language matters.",
      listenSpotify: "Listen on Spotify",
      watchYoutube: "Watch on YouTube",
      episodeMeta: "Psychology Misunderstood · Season 1 · Episode 1",
      whyTitle: "Why this episode matters",
      whyText: "Gaslighting is now used everywhere, but loose use can make a serious psychological pattern harder to understand. This episode helps listeners separate everyday conflict from repeated manipulation of a person's sense of reality.",
      useTitle: "Use it in real life",
      useItems: [
        "Learn the difference between lying, disagreeing, forgetting, and gaslighting.",
        "Notice patterns over time instead of judging one moment in isolation.",
        "Use psychology terms carefully, especially when describing relationships."
      ],
      episodesTitle: "Episodes and conversations",
      episodesLead: "Will Talks is built slowly and intentionally. Each episode should make psychology easier to understand, remember, and apply.",
      filterLabel: "Filter episodes by topic",
      allTopics: "All topics",
      topicsTitle: "Topics covered",
      topicsLead: "The show returns to practical themes that affect homes, classrooms, relationships, and self-understanding.",
      aboutTitle: "About Will Talks",
      aboutText: "Will Talks was created to make psychology and mental health ideas easier to understand without making them shallow. The goal is not to sound impressive. The goal is to help people think more clearly, respond more gently, and use psychological knowledge in ordinary life.",
      promiseTitle: "Editorial promise",
      promiseItems: ["Evidence-informed, not exaggerated.", "Reflective, not sensational.", "Practical, not performative.", "Human, warm, and honest."],
      followTitle: "Continue the conversation",
      followText: "Follow new episodes, practical reflections, and thoughtful conversations about everyday human behaviour.",
      comingSoon: "Channel link coming soon",
      subscribe: "Subscribe",
      emailPlaceholder: "Email address",
      searchPlaceholder: "Search episodes",
      noResults: "No episodes match that search yet.",
      openEpisode: "Open episode",
      copyLink: "Copy link",
      linkCopied: "Link copied",
      backToTop: "Back to top",
      platform: "Platform",
      language: "Language",
      imageAlt: "Will Talks podcast artwork",
      thumbnailAlt: "Episode artwork for Gaslighting: The Most Misused Psychology Word",
      archiveTitle: "Your Brain Lies To You Sometimes",
      archiveSummary: "A practical conversation about cognitive distortions: why our thoughts can feel convincing, how they influence emotions, and how to pause before believing every story the mind tells.",
      archiveTopic: "Cognitive distortions",
      archiveAlt: "Episode artwork for Your Brain Lies To You Sometimes",
      topics: ["Cognitive distortions", "Psychology misunderstood", "Gaslighting", "Emotional regulation", "Stress and coping", "Relationships", "Self-awareness", "Childhood and family patterns", "Personal growth", "Learning and motivation"]
    },
    "zh-tw": {
      home: "首頁",
      back: "返回首頁",
      pageLabel: "Will Talks",
      nav: ["最新", "集數", "主題", "關於"],
      eyebrow: "Will Talks",
      title: "把心理學變成日常生活中用得上的理解。",
      intro: "關於情緒、人際關係、行為、學習，以及影響日常選擇的心理模式的反思對話。",
      primaryCta: "收聽最新一集",
      secondaryCta: "探索主題",
      heroNote: "為成人、教育工作者和好奇的聽眾提供的教育性反思。不能取代治療、診斷或醫療照護。",
      latestLabel: "最新一集",
      latestTitle: "煤氣燈操控：最常被誤用的心理學詞語 | Psychology Misunderstood S1E1",
      latestTopic: "被誤解的心理學",
      latestSummary: "Psychology Misunderstood 第一集把科學理解和流行用語分開。你會了解煤氣燈操控真正的意思、為什麼它常被誤解為說謊或意見不同，以及為什麼準確使用心理學語言很重要。",
      listenSpotify: "在 Spotify 收聽",
      watchYoutube: "在 YouTube 觀看",
      episodeMeta: "Psychology Misunderstood · 第 1 季 · 第 1 集",
      whyTitle: "為什麼這一集重要",
      whyText: "煤氣燈操控現在被到處使用，但過度寬鬆的用法可能讓一個嚴肅的心理模式更難被理解。這一集幫助聽眾分辨日常衝突和反覆操控一個人現實感的模式。",
      useTitle: "在生活中使用",
      useItems: ["分辨說謊、意見不同、忘記事情和煤氣燈操控之間的差別。", "觀察一段時間中的模式，而不是只根據單一時刻下判斷。", "描述關係時，謹慎使用心理學詞語。"],
      episodesTitle: "集數與對話",
      episodesLead: "Will Talks 會慢慢、慎重地建立。每一集都應該讓心理學更容易理解、記得住，也能用在生活裡。",
      filterLabel: "依主題篩選集數",
      allTopics: "所有主題",
      topicsTitle: "涵蓋主題",
      topicsLead: "節目會回到影響家庭、課堂、人際關係和自我理解的實用主題。",
      aboutTitle: "關於 Will Talks",
      aboutText: "Will Talks 的建立，是為了讓心理學和心理健康概念更容易理解，但不把它們簡化得失去深度。目標不是聽起來很厲害，而是幫助人們想得更清楚、回應得更溫和，並把心理知識用在日常生活中。",
      promiseTitle: "編輯承諾",
      promiseItems: ["以證據為基礎，不誇大。", "重視反思，不煽情。", "實用，而不是表演式。", "有人味、溫暖且誠實。"],
      followTitle: "延續這場對話",
      followText: "追蹤新集數、實用反思，以及關於日常人類行為的深度對話。",
      comingSoon: "頻道連結即將提供",
      subscribe: "訂閱",
      emailPlaceholder: "電子郵件地址",
      searchPlaceholder: "搜尋集數",
      noResults: "目前沒有符合搜尋的集數。",
      openEpisode: "開啟集數",
      copyLink: "複製連結",
      linkCopied: "連結已複製",
      backToTop: "回到頂部",
      platform: "平台",
      language: "語言",
      imageAlt: "Will Talks 播客封面",
      thumbnailAlt: "《煤氣燈操控：最常被誤用的心理學詞語》集數封面",
      archiveTitle: "你的大腦有時會騙你",
      archiveSummary: "關於認知扭曲的實用對話：為什麼想法有時很有說服力、它們如何影響情緒，以及如何在相信每個念頭之前先停一停。",
      archiveTopic: "認知扭曲",
      archiveAlt: "《你的大腦有時會騙你》集數封面",
      topics: ["認知扭曲", "被誤解的心理學", "煤氣燈操控", "情緒調節", "壓力與因應", "人際關係", "自我覺察", "童年與家庭模式", "個人成長", "學習與動機"]
    },
    "zh-cn": {
      home: "首页",
      back: "返回首页",
      pageLabel: "Will Talks",
      nav: ["最新", "节目", "主题", "关于"],
      eyebrow: "Will Talks",
      title: "把心理学变成日常生活中用得上的理解。",
      intro: "关于情绪、人际关系、行为、学习，以及影响日常选择的心理模式的反思对话。",
      primaryCta: "收听最新一期",
      secondaryCta: "探索主题",
      heroNote: "为成人、教育工作者和好奇听众提供的教育性反思。不能替代治疗、诊断或医疗照护。",
      latestLabel: "最新一期",
      latestTitle: "煤气灯操控：最常被误用的心理学词语 | Psychology Misunderstood S1E1",
      latestTopic: "被误解的心理学",
      latestSummary: "Psychology Misunderstood 第一期把科学理解和流行用语分开。你会了解煤气灯操控真正的意思、为什么它常被误解为说谎或意见不同，以及为什么准确使用心理学语言很重要。",
      listenSpotify: "在 Spotify 收听",
      watchYoutube: "在 YouTube 观看",
      episodeMeta: "Psychology Misunderstood · 第 1 季 · 第 1 期",
      whyTitle: "为什么这一期重要",
      whyText: "煤气灯操控现在被到处使用，但过于宽泛的用法可能让一个严肃的心理模式更难被理解。这一期帮助听众分辨日常冲突和反复操控一个人现实感的模式。",
      useTitle: "在生活中使用",
      useItems: ["分辨说谎、意见不同、忘事情和煤气灯操控之间的差别。", "观察一段时间中的模式，而不是只根据单一时刻下判断。", "描述关系时，谨慎使用心理学词语。"],
      episodesTitle: "节目与对话",
      episodesLead: "Will Talks 会慢慢、慎重地建立。每一期都应该让心理学更容易理解、记得住，也能用在生活里。",
      filterLabel: "按主题筛选节目",
      allTopics: "所有主题",
      topicsTitle: "涵盖主题",
      topicsLead: "节目会回到影响家庭、课堂、人际关系和自我理解的实用主题。",
      aboutTitle: "关于 Will Talks",
      aboutText: "Will Talks 的建立，是为了让心理学和心理健康概念更容易理解，但不把它们简化得失去深度。目标不是听起来很厉害，而是帮助人们想得更清楚、回应得更温和，并把心理知识用在日常生活中。",
      promiseTitle: "编辑承诺",
      promiseItems: ["以证据为基础，不夸大。", "重视反思，不煽情。", "实用，而不是表演式。", "有人味、温暖且诚实。"],
      followTitle: "延续这场对话",
      followText: "追踪新节目、实用反思，以及关于日常人类行为的深度对话。",
      comingSoon: "频道链接即将提供",
      subscribe: "订阅",
      emailPlaceholder: "电子邮箱地址",
      searchPlaceholder: "搜索节目",
      noResults: "目前没有符合搜索的节目。",
      openEpisode: "打开节目",
      copyLink: "复制链接",
      linkCopied: "链接已复制",
      backToTop: "回到顶部",
      platform: "平台",
      language: "语言",
      imageAlt: "Will Talks 播客封面",
      thumbnailAlt: "《煤气灯操控：最常被误用的心理学词语》节目封面",
      archiveTitle: "你的大脑有时会骗你",
      archiveSummary: "关于认知扭曲的实用对话：为什么想法有时很有说服力、它们如何影响情绪，以及如何在相信每个念头之前先停一停。",
      archiveTopic: "认知扭曲",
      archiveAlt: "《你的大脑有时会骗你》节目封面",
      topics: ["认知扭曲", "被误解的心理学", "煤气灯操控", "情绪调节", "压力与应对", "人际关系", "自我觉察", "童年与家庭模式", "个人成长", "学习与动机"]
    },
    ja: {
      home: "ホーム",
      back: "ホームへ戻る",
      pageLabel: "Will Talks",
      nav: ["最新", "エピソード", "テーマ", "概要"],
      eyebrow: "Will Talks",
      title: "心理学を、毎日の生活で使える理解に。",
      intro: "感情、人間関係、行動、学び、そして日々の選択を形づくる心のパターンについて考える対話です。",
      primaryCta: "最新回を聴く",
      secondaryCta: "テーマを見る",
      heroNote: "大人、教育者、学びたい人のための教育的な振り返りです。治療、診断、医療ケアの代わりではありません。",
      latestLabel: "最新回",
      latestTitle: "ガスライティング：最も誤用されている心理学用語 | Psychology Misunderstood S1E1",
      latestTopic: "誤解されやすい心理学",
      latestSummary: "Psychology Misunderstoodの第1回では、科学的な意味と流行語としての使われ方を分けて考えます。ガスライティングとは本来何か、なぜ嘘や意見の違いと混同されやすいのか、正確な言葉づかいがなぜ大切なのかを扱います。",
      listenSpotify: "Spotifyで聴く",
      watchYoutube: "YouTubeで見る",
      episodeMeta: "Psychology Misunderstood · シーズン1 · エピソード1",
      whyTitle: "この回が大切な理由",
      whyText: "ガスライティングという言葉は広く使われていますが、あいまいな使い方は深刻な心理的パターンの理解を難しくします。この回は、日常の対立と、相手の現実感を繰り返し揺さぶる操作との違いを考える助けになります。",
      useTitle: "生活で使うには",
      useItems: ["嘘、意見の違い、忘れたこと、ガスライティングの違いを学ぶ。", "一つの出来事だけでなく、時間をかけて見えるパターンに注目する。", "人間関係を説明するとき、心理学用語を慎重に使う。"],
      episodesTitle: "エピソードと対話",
      episodesLead: "Will Talksは、ゆっくり丁寧につくっていきます。各回は、心理学を理解しやすく、覚えやすく、生活に生かしやすくするためのものです。",
      filterLabel: "テーマでエピソードを絞り込む",
      allTopics: "すべてのテーマ",
      topicsTitle: "扱うテーマ",
      topicsLead: "家庭、教室、人間関係、自己理解に関わる実用的なテーマを繰り返し扱います。",
      aboutTitle: "Will Talksについて",
      aboutText: "Will Talksは、心理学と心の健康に関する考えを、浅くせずに分かりやすくするためにつくられました。目的は立派に聞こえることではありません。人がより明確に考え、より穏やかに反応し、心理学の知識を日常生活で使えるようにすることです。",
      promiseTitle: "編集上の約束",
      promiseItems: ["根拠を大切にし、誇張しない。", "煽らず、振り返りを大切にする。", "見せかけではなく、実用的である。", "人間らしく、温かく、正直である。"],
      followTitle: "対話を続ける",
      followText: "新しいエピソード、実用的な振り返り、日常の人間行動についての丁寧な対話をフォローしてください。",
      comingSoon: "チャンネルリンクは準備中です",
      subscribe: "登録",
      emailPlaceholder: "メールアドレス",
      searchPlaceholder: "エピソードを検索",
      noResults: "一致するエピソードはまだありません。",
      openEpisode: "エピソードを開く",
      copyLink: "リンクをコピー",
      linkCopied: "リンクをコピーしました",
      backToTop: "トップへ戻る",
      platform: "プラットフォーム",
      language: "言語",
      imageAlt: "Will Talksのポッドキャスト画像",
      thumbnailAlt: "「ガスライティング：最も誤用されている心理学用語」のエピソード画像",
      archiveTitle: "脳はときどき私たちをだます",
      archiveSummary: "認知のゆがみについての実用的な対話です。考えがなぜ強く感じられるのか、感情にどう影響するのか、そして心が語る物語をすぐ信じる前にどう立ち止まるかを扱います。",
      archiveTopic: "認知のゆがみ",
      archiveAlt: "「脳はときどき私たちをだます」のエピソード画像",
      topics: ["認知のゆがみ", "誤解されやすい心理学", "ガスライティング", "感情の調整", "ストレスと対処", "人間関係", "自己理解", "幼少期と家族のパターン", "自己成長", "学びと動機づけ"]
    },
    ko: {
      home: "홈",
      back: "홈으로 돌아가기",
      pageLabel: "Will Talks",
      nav: ["최신", "에피소드", "주제", "소개"],
      eyebrow: "Will Talks",
      title: "심리학을 일상에서 사용할 수 있는 이해로 바꿉니다.",
      intro: "감정, 관계, 행동, 배움, 그리고 일상의 선택을 만드는 마음의 패턴에 대해 차분히 나누는 대화입니다.",
      primaryCta: "최신 에피소드 듣기",
      secondaryCta: "주제 살펴보기",
      heroNote: "성인, 교육자, 호기심 있는 청취자를 위한 교육적 성찰입니다. 치료, 진단 또는 의료적 돌봄을 대신하지 않습니다.",
      latestLabel: "최신 에피소드",
      latestTitle: "가스라이팅: 가장 많이 오해되는 심리학 단어 | Psychology Misunderstood S1E1",
      latestTopic: "오해받는 심리학",
      latestSummary: "Psychology Misunderstood 첫 번째 에피소드는 과학적 의미와 유행어로 쓰이는 방식을 구분합니다. 가스라이팅이 실제로 무엇을 뜻하는지, 왜 거짓말이나 의견 차이와 혼동되는지, 정확한 언어 사용이 왜 중요한지 다룹니다.",
      listenSpotify: "Spotify에서 듣기",
      watchYoutube: "YouTube에서 보기",
      episodeMeta: "Psychology Misunderstood · 시즌 1 · 에피소드 1",
      whyTitle: "이 에피소드가 중요한 이유",
      whyText: "가스라이팅이라는 말은 이제 어디에서나 쓰이지만, 너무 넓게 사용하면 심각한 심리적 패턴을 이해하기 더 어려워질 수 있습니다. 이 에피소드는 일상적인 갈등과 한 사람의 현실감을 반복적으로 흔드는 조작의 차이를 살펴봅니다.",
      useTitle: "일상에서 사용하기",
      useItems: ["거짓말, 의견 차이, 잊어버림, 가스라이팅의 차이를 배웁니다.", "한 순간만 판단하지 말고 시간 속에서 반복되는 패턴을 봅니다.", "관계를 설명할 때 심리학 용어를 신중하게 사용합니다."],
      episodesTitle: "에피소드와 대화",
      episodesLead: "Will Talks는 천천히, 신중하게 만들어집니다. 각 에피소드는 심리학을 더 이해하기 쉽고, 기억하기 쉽고, 삶에 적용하기 쉽게 해야 합니다.",
      filterLabel: "주제별로 에피소드 필터링",
      allTopics: "모든 주제",
      topicsTitle: "다루는 주제",
      topicsLead: "가정, 교실, 관계, 자기 이해에 영향을 주는 실용적인 주제로 계속 돌아옵니다.",
      aboutTitle: "Will Talks 소개",
      aboutText: "Will Talks는 심리학과 정신 건강 개념을 더 쉽게 이해하되 얕게 만들지 않기 위해 시작되었습니다. 목적은 인상적으로 들리는 것이 아닙니다. 사람들이 더 분명하게 생각하고, 더 부드럽게 반응하며, 심리학 지식을 일상에서 사용할 수 있도록 돕는 것입니다.",
      promiseTitle: "편집 원칙",
      promiseItems: ["근거를 바탕으로 하며 과장하지 않습니다.", "선정적이지 않고 성찰적입니다.", "보여주기보다 실용적입니다.", "인간적이고 따뜻하며 정직합니다."],
      followTitle: "대화를 이어가기",
      followText: "새 에피소드, 실용적인 성찰, 일상적 인간 행동에 관한 깊이 있는 대화를 팔로우하세요.",
      comingSoon: "채널 링크 준비 중",
      subscribe: "구독",
      emailPlaceholder: "이메일 주소",
      searchPlaceholder: "에피소드 검색",
      noResults: "아직 검색과 일치하는 에피소드가 없습니다.",
      openEpisode: "에피소드 열기",
      copyLink: "링크 복사",
      linkCopied: "링크가 복사되었습니다",
      backToTop: "맨 위로",
      platform: "플랫폼",
      language: "언어",
      imageAlt: "Will Talks 팟캐스트 아트워크",
      thumbnailAlt: "가스라이팅: 가장 많이 오해되는 심리학 단어 에피소드 아트워크",
      archiveTitle: "우리 뇌는 때때로 우리를 속입니다",
      archiveSummary: "인지 왜곡에 대한 실용적인 대화입니다. 생각이 왜 그토록 설득력 있게 느껴지는지, 감정에 어떤 영향을 주는지, 마음이 들려주는 모든 이야기를 믿기 전에 어떻게 멈출 수 있는지 다룹니다.",
      archiveTopic: "인지 왜곡",
      archiveAlt: "우리 뇌는 때때로 우리를 속입니다 에피소드 아트워크",
      topics: ["인지 왜곡", "오해받는 심리학", "가스라이팅", "감정 조절", "스트레스와 대처", "관계", "자기 인식", "어린 시절과 가족 패턴", "개인 성장", "학습과 동기"]
    }
  };

  const t = copy[locale] || copy.en;

  const homeHref = `${prefix}home.html`;

  const episodes = [
    {
      title: t.latestTitle,
      topic: t.latestTopic || t.topics[0],
      summary: t.latestSummary,
      image: `${prefix}images/Gaslighting.webp`,
      alt: t.thumbnailAlt,
      spotify: episodeLinks.spotify,
      youtube: episodeLinks.youtube,
      tags: [t.latestTopic || t.topics[1], t.topics[2], t.topics[4]],
    },
    {
      title: t.archiveTitle || copy.en.archiveTitle,
      topic: t.archiveTopic || copy.en.archiveTopic,
      summary: t.archiveSummary || copy.en.archiveSummary,
      image: `${prefix}images/will-talks-brain-lies-thumbnail.jpg`,
      alt: t.archiveAlt || copy.en.archiveAlt,
      spotify: archiveLinks.spotify,
      youtube: archiveLinks.youtube,
      tags: [t.archiveTopic || copy.en.archiveTopic, t.topics[1], t.topics[4]],
    },
  ];

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function list(items) {
    return items.map((item) => `<li>${esc(item)}</li>`).join("");
  }

  function chip(topic, index) {
    const isFirst = index === 0;
    return `<button class="wt-chip${isFirst ? " is-active" : ""}" type="button" data-topic="${esc(topic)}" aria-pressed="${isFirst ? "true" : "false"}">${esc(topic)}</button>`;
  }

  function topicButton(topic, index) {
    const isFirst = index === 0;
    return `<button class="wt-topic-button${isFirst ? " is-active" : ""}" type="button" data-topic-choice="${esc(topic)}" aria-pressed="${isFirst ? "true" : "false"}">
      <span class="wt-topic-button__mark" aria-hidden="true">${index + 1}</span>
      <span>${esc(topic)}</span>
    </button>`;
  }

  function renderEpisodeCard(episode) {
    return `<article class="wt-episode-card" data-card data-topics="${esc(episode.tags.join("||"))}" data-title="${esc(episode.title.toLowerCase())}">
      <img src="${esc(episode.image)}" alt="${esc(episode.alt)}" loading="lazy" />
      <div class="wt-episode-card__body">
        <p class="wt-kicker">${esc(episode.topic)}</p>
        <h3>${esc(episode.title)}</h3>
        <p>${esc(episode.summary)}</p>
        <div class="wt-card-actions">
          <a class="wt-button wt-button--small" href="${esc(episode.spotify)}" target="_blank" rel="noopener">${esc(t.listenSpotify)}</a>
          <a class="wt-button wt-button--small wt-button--ghost" href="${esc(episode.youtube)}" target="_blank" rel="noopener">${esc(t.watchYoutube)}</a>
          <button class="wt-button wt-button--small wt-button--quiet" type="button" data-copy-link="${esc(episode.youtube)}">${esc(t.copyLink)}</button>
        </div>
      </div>
    </article>`;
  }

  root.innerHTML = `
    <header class="wt-header">
      <a class="wt-brand" href="${esc(homeHref)}" aria-label="Healthy Little Minds">
        <img src="${esc(prefix)}images/logo-icon.webp" alt="" />
        <span>Healthy Little Minds</span>
      </a>
      <nav class="wt-nav" aria-label="Will Talks">
        <a href="#latest">${esc(t.nav[0])}</a>
        <a href="#episodes">${esc(t.nav[1])}</a>
        <a href="#topics">${esc(t.nav[2])}</a>
        <a href="#about">${esc(t.nav[3])}</a>
      </nav>
      <div class="wt-header-actions">
        <a class="wt-button wt-button--ghost wt-button--small" href="${esc(homeHref)}">${esc(t.back)}</a>
      </div>
    </header>

    <main>
      <section class="wt-hero" aria-labelledby="will-talks-title">
        <div class="wt-hero__content">
          <p class="wt-eyebrow">${esc(t.eyebrow)}</p>
          <h1 id="will-talks-title">${esc(t.title)}</h1>
          <p class="wt-lead">${esc(t.intro)}</p>
          <div class="wt-actions">
            <a class="wt-button" href="#latest">${esc(t.primaryCta)}</a>
            <a class="wt-button wt-button--ghost" href="#topics">${esc(t.secondaryCta)}</a>
          </div>
          <p class="wt-note">${esc(t.heroNote)}</p>
        </div>
        <figure class="wt-hero__media">
          <img src="${esc(prefix)}images/will-talks.webp" alt="${esc(t.imageAlt)}" />
        </figure>
      </section>

      <section class="wt-section wt-latest" id="latest" aria-labelledby="latest-title">
        <div class="wt-section-heading">
          <p class="wt-eyebrow">${esc(t.latestLabel)}</p>
          <h2 id="latest-title">${esc(t.latestTitle)}</h2>
          <p>${esc(t.latestSummary)}</p>
          <p class="wt-meta">${esc(t.episodeMeta)}</p>
        </div>

        <div class="wt-latest-grid">
          <article class="wt-feature-card">
            <img src="${esc(prefix)}images/Gaslighting.webp" alt="${esc(t.thumbnailAlt)}" />
            <div class="wt-card-actions">
              <a class="wt-button" href="${esc(episodeLinks.spotify)}" target="_blank" rel="noopener">${esc(t.listenSpotify)}</a>
              <a class="wt-button wt-button--ghost" href="${esc(episodeLinks.youtube)}" target="_blank" rel="noopener">${esc(t.watchYoutube)}</a>
            </div>
          </article>

          <div class="wt-insight-card">
            <h3>${esc(t.whyTitle)}</h3>
            <p>${esc(t.whyText)}</p>
            <h3>${esc(t.useTitle)}</h3>
            <ul>${list(t.useItems)}</ul>
          </div>
        </div>

        <div class="wt-embed-grid" aria-label="${esc(t.latestTitle)}">
          <iframe class="wt-embed wt-embed--spotify" title="${esc(t.listenSpotify)}" src="${esc(episodeLinks.spotifyEmbed)}" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <iframe class="wt-embed wt-embed--youtube" title="${esc(t.watchYoutube)}" src="${esc(episodeLinks.youtubeEmbed)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>

      <section class="wt-section" id="topics" aria-labelledby="topics-title">
        <div class="wt-section-heading">
          <p class="wt-eyebrow">${esc(t.secondaryCta)}</p>
          <h2 id="topics-title">${esc(t.topicsTitle)}</h2>
          <p>${esc(t.topicsLead)}</p>
        </div>
        <div class="wt-topic-explorer" data-topic-explorer>
          <div class="wt-topic-list" role="list" aria-label="${esc(t.topicsTitle)}">
            ${t.topics.map(topicButton).join("")}
          </div>
          <article class="wt-topic-panel" aria-live="polite">
            <p class="wt-eyebrow">${esc(t.nav[2])}</p>
            <h3 data-topic-title>${esc(t.topics[0])}</h3>
            <p data-topic-summary>${esc(t.topicsLead)}</p>
            <div class="wt-card-actions">
              <a class="wt-button wt-button--small" href="#episodes" data-topic-filter-link>${esc(t.nav[1])}</a>
              <button class="wt-button wt-button--small wt-button--ghost" type="button" data-topic-next>${esc(t.secondaryCta)}</button>
            </div>
          </article>
        </div>
      </section>

      <section class="wt-section" id="episodes" aria-labelledby="episodes-title">
        <div class="wt-section-heading wt-section-heading--row">
          <div>
            <p class="wt-eyebrow">${esc(t.nav[1])}</p>
            <h2 id="episodes-title">${esc(t.episodesTitle)}</h2>
            <p>${esc(t.episodesLead)}</p>
          </div>
          <label class="wt-search">
            <span>${esc(t.searchPlaceholder)}</span>
            <input type="search" id="episode-search" placeholder="${esc(t.searchPlaceholder)}" />
          </label>
        </div>

        <div class="wt-filter" aria-label="${esc(t.filterLabel)}">
          ${[t.allTopics, ...t.topics.slice(0, 5)].map(chip).join("")}
        </div>

        <div class="wt-episode-grid" id="episode-list">
          ${episodes.map(renderEpisodeCard).join("")}
        </div>
        <p class="wt-empty" id="episode-empty" hidden>${esc(t.noResults)}</p>
      </section>

      <section class="wt-section wt-about" id="about" aria-labelledby="about-title">
        <div>
          <p class="wt-eyebrow">${esc(t.nav[3])}</p>
          <h2 id="about-title">${esc(t.aboutTitle)}</h2>
          <p>${esc(t.aboutText)}</p>
        </div>
        <aside class="wt-promise">
          <h3>${esc(t.promiseTitle)}</h3>
          <ul>${list(t.promiseItems)}</ul>
        </aside>
      </section>

      <section class="wt-section wt-follow" aria-labelledby="follow-title">
        <div>
          <p class="wt-eyebrow">${esc(t.subscribe)}</p>
          <h2 id="follow-title">${esc(t.followTitle)}</h2>
          <p>${esc(t.followText)}</p>
        </div>
        <form class="wt-subscribe" data-subscribe>
          <label class="visually-hidden" for="wt-email">${esc(t.emailPlaceholder)}</label>
          <input id="wt-email" type="email" placeholder="${esc(t.emailPlaceholder)}" autocomplete="email" />
          <button class="wt-button" type="submit">${esc(t.subscribe)}</button>
          <p class="wt-form-note" role="status" aria-live="polite"></p>
        </form>
      </section>

      <button class="wt-back-to-top" type="button" aria-label="${esc(t.backToTop)}">
        ↑
      </button>

      <p class="wt-toast" role="status" aria-live="polite" hidden></p>
    </main>
  `;

  const cards = Array.from(root.querySelectorAll("[data-card]"));
  const chips = Array.from(root.querySelectorAll(".wt-chip"));
  const topicButtons = Array.from(root.querySelectorAll(".wt-topic-button"));
  const topicTitle = root.querySelector("[data-topic-title]");
  const topicSummary = root.querySelector("[data-topic-summary]");
  const topicNext = root.querySelector("[data-topic-next]");
  const search = root.querySelector("#episode-search");
  const empty = root.querySelector("#episode-empty");
  const header = root.querySelector(".wt-header");
  const navLinks = Array.from(root.querySelectorAll(".wt-nav a"));
  const sections = Array.from(root.querySelectorAll("main section[id]"));
  const toast = root.querySelector(".wt-toast");
  const backToTop = root.querySelector(".wt-back-to-top");
  let activeTopic = t.allTopics;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 220);
    }, 1800);
  }

  function applyFilters() {
    const query = (search?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const topics = card.dataset.topics || "";
      const topicList = topics.split("||").filter(Boolean);
      const title = card.dataset.title || "";
      const matchesTopic = activeTopic === t.allTopics || topicList.includes(activeTopic);
      const matchesSearch = !query || title.includes(query) || topics.toLowerCase().includes(query);
      const visible = matchesTopic && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  }

  chips.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTopic(button.dataset.topic || t.allTopics);
    });
  });

  function setActiveTopic(topic, options = {}) {
    activeTopic = topic || t.allTopics;

    chips.forEach((chipButton) => {
      const active = chipButton.dataset.topic === activeTopic;
      chipButton.classList.toggle("is-active", active);
      chipButton.setAttribute("aria-pressed", String(active));
    });

    topicButtons.forEach((topicButtonEl) => {
      const active = topicButtonEl.dataset.topicChoice === activeTopic;
      topicButtonEl.classList.toggle("is-active", active);
      topicButtonEl.setAttribute("aria-pressed", String(active));
    });

    if (topicTitle) topicTitle.textContent = activeTopic;
    if (topicSummary) {
      topicSummary.textContent =
        activeTopic === t.allTopics
          ? t.topicsLead
          : `${activeTopic}: ${t.episodesLead}`;
    }

    applyFilters();

    if (options.scrollToEpisodes) {
      root.querySelector("#episodes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTopic(button.dataset.topicChoice || t.topics[0]);
    });
  });

  topicNext?.addEventListener("click", () => {
    const currentIndex = Math.max(0, t.topics.indexOf(activeTopic));
    const nextTopic = t.topics[(currentIndex + 1) % t.topics.length];
    setActiveTopic(nextTopic);
  });

  root.querySelector("[data-topic-filter-link]")?.addEventListener("click", () => {
    if (activeTopic !== t.allTopics) setActiveTopic(activeTopic, { scrollToEpisodes: false });
  });

  search?.addEventListener("input", applyFilters);

  root.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-link]");
    if (!copyButton) return;

    const url = copyButton.getAttribute("data-copy-link");
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      showToast(t.linkCopied);
    } catch {
      window.prompt(t.copyLink, url);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY > 12;
      header?.classList.toggle("is-scrolled", scrolled);
      backToTop?.classList.toggle("is-visible", window.scrollY > 650);
    },
    { passive: true },
  );

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    root
      .querySelectorAll(".wt-hero, .wt-section, .wt-topic-card, .wt-episode-card")
      .forEach((element) => {
        element.classList.add("wt-reveal");
        revealObserver.observe(element);
      });

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  root.querySelector("[data-subscribe]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = event.currentTarget.querySelector(".wt-form-note");
    if (note) note.textContent = t.comingSoon;
  });
})();
