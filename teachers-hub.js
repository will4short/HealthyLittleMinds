(function () {
  "use strict";
  var locale = document.documentElement.lang.toLowerCase();
  var code =
    locale === "zh-tw"
      ? "zh-tw"
      : locale === "zh-cn"
        ? "zh-cn"
        : locale.indexOf("ja") === 0
          ? "ja"
          : locale.indexOf("ko") === 0
            ? "ko"
            : "en";
  var copy = {
    en: {
      title: "Teachers Hub",
      home: "Home",
      back: "Back to Home",
      nav: ["Categories", "Strategies", "Toolbox", "Will Talks"],
      kicker: "Made for busy classrooms",
      headline: "Practical Emotional Learning Tools for the Classroom",
      lead: "Teacher-friendly resources, classroom strategies, and emotional regulation tools to help children feel safe, supported, and ready to learn.",
      explore: "Explore Teacher Resources",
      image: "Classroom image or illustration placeholder",
      replace: "Replace with: images/teachers-hub-hero.webp",
      catsTitle: "Teacher resource categories",
      catsLead:
        "Find focused, practical support for the moment in front of you.",
      cats: [
        [
          "🧭",
          "Classroom Behavior",
          "Clear, respectful strategies for routines, transitions, and challenging moments.",
        ],
        [
          "🌿",
          "Emotional Regulation",
          "Short co-regulation tools children can practise during the school day.",
        ],
        [
          "🤝",
          "Social-Emotional Learning",
          "Activities that build emotional vocabulary, empathy, and relationship skills.",
        ],
        [
          "💬",
          "ESL Classroom Support",
          "Visual, low-language tools that make feelings and routines easier to understand.",
        ],
        [
          "☕",
          "Teacher Wellbeing",
          "Realistic ways to protect your energy and steady yourself on demanding days.",
        ],
        [
          "✂️",
          "Free Printables",
          "Ready-to-use classroom visuals, reflection pages, and routine supports.",
        ],
      ],
      strTitle: "Featured classroom strategies",
      strLead:
        "Small, repeatable practices designed for real classrooms—not perfect ones.",
      strategies: [
        [
          "3-Step Emotional Regulation Routine",
          "Notice, name, and choose one calming action together.",
        ],
        [
          "How to Calm a Noisy Classroom",
          "Lower the energy with cues, connection, and predictable reset steps.",
        ],
        [
          "Morning Check-ins for Children",
          "Use a two-minute routine to spot needs before learning begins.",
        ],
        [
          "Positive Behavior Support Without Shame",
          "Guide limits, repair, and accountability while protecting dignity.",
        ],
      ],
      read: "Read strategy",
      toolsTitle: "Teacher Toolbox",
      toolsLead:
        "Downloadable classroom materials you can print, display, and reuse.",
      tools: [
        ["🃏", "Emotion Cards"],
        ["🌡️", "Feelings Scale"],
        ["🪴", "Calm Down Corner Posters"],
        ["📝", "Behavior Reflection Sheets"],
        ["🗓️", "Classroom Routine Cards"],
      ],
      soon: "Download placeholder",
      talkTitle: "Will Talks for Teachers",
      talkLead:
        "Short psychology-based ideas that translate child development into useful classroom action.",
      talks: [
        [
          "Quick tips for teachers",
          "Brief, practical ideas you can try between lessons.",
        ],
        [
          "Why behavior happens",
          "Clear explanations of what children may be communicating through behavior.",
        ],
        [
          "Emotional wellbeing insights",
          "Warm, evidence-informed notes on regulation, relationships, and development.",
        ],
      ],
      ctaTitle: "Bring emotional learning into your classroom.",
      ctaText:
        "Use simple, practical tools to help children name feelings, regulate emotions, build empathy, and develop healthy classroom habits.",
      browse: "Browse Resources",
      footer: "Practical emotional learning resources for caring classrooms.",
    },
    "zh-tw": {
      title: "教師資源中心",
      home: "首頁",
      back: "返回首頁",
      nav: ["資源分類", "課堂策略", "教師工具箱", "Will 教師講堂"],
      kicker: "為忙碌的課堂而設",
      headline: "課堂中的實用情緒學習工具",
      lead: "提供教師容易使用的資源、課堂策略與情緒調節工具，幫助孩子感到安全、獲得支持，並準備好學習。",
      explore: "探索教師資源",
      image: "課堂照片或插圖預留位置",
      replace: "替換路徑：images/teachers-hub-hero.webp",
      catsTitle: "教師資源分類",
      catsLead: "針對眼前的課堂需要，快速找到實用支援。",
      cats: [
        [
          "🧭",
          "課堂行為",
          "以清晰、尊重的策略支援常規、轉換活動與具挑戰性的時刻。",
        ],
        ["🌿", "情緒調節", "孩子可在上課期間練習的簡短共同調節工具。"],
        ["🤝", "社會情緒學習", "培養情緒詞彙、同理心與人際技巧的活動。"],
        [
          "💬",
          "ESL 課堂支援",
          "以視覺化、低語言負荷的工具幫助理解感受與常規。",
        ],
        ["☕", "教師身心健康", "在忙碌日子中保護精力、穩定自己的可行方法。"],
        ["✂️", "免費列印教材", "可直接使用的課堂圖卡、反思單與常規支援。"],
      ],
      strTitle: "精選課堂策略",
      strLead: "為真實課堂設計、簡單而可重複的做法。",
      strategies: [
        ["三步情緒調節法", "一起察覺、命名，再選擇一個平靜行動。"],
        [
          "如何讓吵鬧的課堂安靜下來",
          "運用提示、連結和可預期的重整步驟降低課堂能量。",
        ],
        ["孩子的晨間情緒報到", "用兩分鐘的流程，在學習開始前了解孩子需要。"],
        ["不帶羞辱的正向行為支持", "在維護尊嚴的同時，引導界線、修復與責任。"],
      ],
      read: "閱讀策略",
      toolsTitle: "教師工具箱",
      toolsLead: "可下載、列印、展示並重複使用的課堂教材。",
      tools: [
        ["🃏", "情緒圖卡"],
        ["🌡️", "感受量表"],
        ["🪴", "冷靜角海報"],
        ["📝", "行為反思單"],
        ["🗓️", "課堂常規卡"],
      ],
      soon: "下載預留位置",
      talkTitle: "Will 教師講堂",
      talkLead: "以簡短的心理學觀點，把兒童發展知識轉化為實用的課堂行動。",
      talks: [
        ["給教師的短篇技巧", "可在課堂之間快速嘗試的實用點子。"],
        ["理解行為背後的原因", "清楚說明孩子可能透過行為傳達甚麼。"],
        ["情緒健康與發展洞見", "關於調節、關係與發展的溫暖實證分享。"],
      ],
      ctaTitle: "把情緒學習帶進你的課堂。",
      ctaText:
        "運用簡單實用的工具，幫助孩子說出感受、調節情緒、培養同理心，並建立健康的課堂習慣。",
      browse: "瀏覽資源",
      footer: "為關懷孩子的課堂提供實用情緒學習資源。",
    },
    "zh-cn": {
      title: "教师资源中心",
      home: "首页",
      back: "返回首页",
      nav: ["资源分类", "课堂策略", "教师工具箱", "Will 教师讲堂"],
      kicker: "为忙碌的课堂而设",
      headline: "课堂中的实用情绪学习工具",
      lead: "为教师提供易用资源、课堂策略与情绪调节工具，帮助孩子感到安全、获得支持，并做好学习准备。",
      explore: "探索教师资源",
      image: "课堂照片或插图占位区域",
      replace: "替换路径：images/teachers-hub-hero.webp",
      catsTitle: "教师资源分类",
      catsLead: "针对眼前的课堂需要，快速找到实用支持。",
      cats: [
        ["🧭", "课堂行为", "以清晰、尊重的策略支持常规、活动过渡和挑战时刻。"],
        ["🌿", "情绪调节", "孩子可在上课期间练习的简短共同调节工具。"],
        ["🤝", "社会情绪学习", "培养情绪词汇、同理心和人际技能的活动。"],
        [
          "💬",
          "ESL 课堂支持",
          "用视觉化、低语言负担的工具帮助理解感受和常规。",
        ],
        ["☕", "教师身心健康", "在忙碌日子里保护精力、稳定自己的可行方法。"],
        ["✂️", "免费打印材料", "可直接使用的课堂图卡、反思表和常规支持。"],
      ],
      strTitle: "精选课堂策略",
      strLead: "为真实课堂设计、简单且可重复的做法。",
      strategies: [
        ["三步情绪调节法", "一起觉察、命名，再选择一个平静行动。"],
        [
          "如何让吵闹的课堂安静下来",
          "运用提示、连接和可预期的重整步骤降低课堂能量。",
        ],
        ["孩子的晨间情绪签到", "用两分钟流程，在学习开始前了解孩子需要。"],
        ["不带羞辱的正向行为支持", "在维护尊严的同时，引导界限、修复和责任。"],
      ],
      read: "阅读策略",
      toolsTitle: "教师工具箱",
      toolsLead: "可下载、打印、展示并重复使用的课堂材料。",
      tools: [
        ["🃏", "情绪卡"],
        ["🌡️", "感受量表"],
        ["🪴", "冷静角海报"],
        ["📝", "行为反思表"],
        ["🗓️", "课堂常规卡"],
      ],
      soon: "下载占位链接",
      talkTitle: "Will 教师讲堂",
      talkLead: "用简短的心理学观点，把儿童发展知识转化为实用课堂行动。",
      talks: [
        ["给教师的短篇技巧", "可在课间快速尝试的实用点子。"],
        ["理解行为背后的原因", "清楚解释孩子可能通过行为表达什么。"],
        ["情绪健康与发展洞见", "关于调节、关系和发展的温暖循证分享。"],
      ],
      ctaTitle: "把情绪学习带进你的课堂。",
      ctaText:
        "使用简单实用的工具，帮助孩子说出感受、调节情绪、培养同理心，并建立健康的课堂习惯。",
      browse: "浏览资源",
      footer: "为关爱孩子的课堂提供实用情绪学习资源。",
    },
    ja: {
      title: "先生向けリソース",
      home: "ホーム",
      back: "ホームへ戻る",
      nav: ["カテゴリー", "授業アイデア", "ツールボックス", "Will Talks"],
      kicker: "忙しい教室のために",
      headline: "教室で使える実践的な感情学習ツール",
      lead: "子どもが安心し、支えられ、学ぶ準備を整えられるようにする、先生向けの教材、教室での工夫、感情調整ツールです。",
      explore: "先生向けリソースを見る",
      image: "教室の写真・イラスト用プレースホルダー",
      replace: "差し替え先：images/teachers-hub-hero.webp",
      catsTitle: "先生向けリソースカテゴリー",
      catsLead: "今、教室で必要な実践的サポートを見つけましょう。",
      cats: [
        [
          "🧭",
          "教室での行動支援",
          "日課、活動の切り替え、難しい場面に役立つ明確で尊重ある方法。",
        ],
        ["🌿", "感情の調整", "学校生活の中で練習できる短い共同調整ツール。"],
        [
          "🤝",
          "社会性と感情の学習（SEL）",
          "感情語彙、共感、関係づくりを育てる活動。",
        ],
        [
          "💬",
          "ESL教室サポート",
          "気持ちや日課を理解しやすくする視覚的で言葉に頼りすぎないツール。",
        ],
        [
          "☕",
          "先生のウェルビーイング",
          "忙しい日にエネルギーを守り、自分を整える現実的な方法。",
        ],
        [
          "✂️",
          "無料プリント教材",
          "すぐ使える教室掲示、振り返りシート、日課サポート。",
        ],
      ],
      strTitle: "おすすめの教室ストラテジー",
      strLead:
        "完璧な教室ではなく、実際の教室のための小さく繰り返せる実践です。",
      strategies: [
        [
          "3ステップ感情調整ルーティン",
          "気づく、名前をつける、落ち着く行動を一つ選ぶ。",
        ],
        [
          "にぎやかな教室を落ち着かせる方法",
          "合図、つながり、予測できるリセットで教室のエネルギーを下げます。",
        ],
        [
          "子どもの朝のチェックイン",
          "2分の習慣で、学びの前に必要な支援を見つけます。",
        ],
        [
          "恥を与えないポジティブ行動支援",
          "尊厳を守りながら、境界、修復、責任を導きます。",
        ],
      ],
      read: "詳しく見る",
      toolsTitle: "先生のツールボックス",
      toolsLead: "印刷、掲示、繰り返し使用できるダウンロード教材。",
      tools: [
        ["🃏", "感情カード"],
        ["🌡️", "気持ちスケール"],
        ["🪴", "クールダウンコーナーのポスター"],
        ["📝", "行動振り返りシート"],
        ["🗓️", "教室ルーティンカード"],
      ],
      soon: "ダウンロード準備中",
      talkTitle: "Will Talks for Teachers",
      talkLead:
        "子どもの発達を教室での行動につなげる、心理学に基づく短いヒント。",
      talks: [
        [
          "先生向けショートヒント",
          "授業の合間にも試せる簡潔で実践的なアイデア。",
        ],
        [
          "行動が起こる理由",
          "子どもが行動を通して伝えていることを分かりやすく解説。",
        ],
        [
          "心の健康と発達の洞察",
          "感情調整、関係性、発達についての温かく根拠ある解説。",
        ],
      ],
      ctaTitle: "教室に感情学習を取り入れましょう。",
      ctaText:
        "シンプルで実践的なツールを使い、子どもが気持ちを言葉にし、感情を整え、共感を育み、健やかな教室習慣を身につけるのを支えます。",
      browse: "リソースを見る",
      footer: "思いやりのある教室のための実践的な感情学習リソース。",
    },
    ko: {
      title: "교사용 자료실",
      home: "홈",
      back: "홈으로",
      nav: ["자료 분야", "교실 전략", "교사 도구함", "Will Talks"],
      kicker: "바쁜 교실을 위해",
      headline: "교실에서 바로 쓰는 실용적인 정서 학습 도구",
      lead: "아이들이 안전하고 지지받으며 배울 준비를 할 수 있도록 돕는 교사 친화적 자료, 교실 전략, 감정 조절 도구입니다.",
      explore: "교사 자료 둘러보기",
      image: "교실 사진 또는 일러스트 자리",
      replace: "교체 경로: images/teachers-hub-hero.webp",
      catsTitle: "교사 자료 분야",
      catsLead: "지금 교실에 필요한 실용적인 지원을 찾아보세요.",
      cats: [
        [
          "🧭",
          "교실 행동",
          "일과, 전환, 어려운 순간을 위한 명확하고 존중하는 전략.",
        ],
        ["🌿", "감정 조절", "수업 중 아이들과 짧게 연습하는 공동 조절 도구."],
        ["🤝", "사회정서학습", "감정 어휘, 공감, 관계 기술을 기르는 활동."],
        [
          "💬",
          "ESL 교실 지원",
          "감정과 일과를 쉽게 이해하도록 돕는 시각적이고 언어 부담이 적은 도구.",
        ],
        [
          "☕",
          "교사 웰빙",
          "바쁜 날에 에너지를 보호하고 마음을 안정시키는 현실적인 방법.",
        ],
        [
          "✂️",
          "무료 인쇄 자료",
          "바로 쓰는 교실 시각 자료, 성찰지, 일과 지원 카드.",
        ],
      ],
      strTitle: "추천 교실 전략",
      strLead:
        "완벽한 교실이 아닌 실제 교실을 위한 작고 반복 가능한 실천입니다.",
      strategies: [
        [
          "3단계 감정 조절 루틴",
          "알아차리고, 이름 붙이고, 진정 행동 하나를 함께 선택합니다.",
        ],
        [
          "시끄러운 교실을 차분하게 만드는 법",
          "신호, 연결, 예측 가능한 재정비 단계로 에너지를 낮춥니다.",
        ],
        [
          "아이들을 위한 아침 체크인",
          "2분 루틴으로 학습 전 필요한 지원을 살핍니다.",
        ],
        [
          "수치심 없는 긍정적 행동 지원",
          "존엄을 지키며 한계, 회복, 책임을 안내합니다.",
        ],
      ],
      read: "전략 읽기",
      toolsTitle: "교사 도구함",
      toolsLead: "인쇄하고 게시하며 반복해서 쓸 수 있는 교실 자료입니다.",
      tools: [
        ["🃏", "감정 카드"],
        ["🌡️", "감정 척도"],
        ["🪴", "진정 공간 포스터"],
        ["📝", "행동 성찰지"],
        ["🗓️", "교실 일과 카드"],
      ],
      soon: "다운로드 자리",
      talkTitle: "Will Talks for Teachers",
      talkLead:
        "아동 발달 지식을 유용한 교실 행동으로 바꾸는 짧은 심리학 기반 팁입니다.",
      talks: [
        [
          "교사를 위한 짧은 팁",
          "수업 사이에도 시도할 수 있는 짧고 실용적인 아이디어.",
        ],
        [
          "행동이 일어나는 이유",
          "아이들이 행동으로 무엇을 전하는지 명확하게 설명합니다.",
        ],
        [
          "정서 웰빙과 발달 인사이트",
          "조절, 관계, 발달에 관한 따뜻하고 근거 있는 이야기.",
        ],
      ],
      ctaTitle: "교실에 정서 학습을 더해 보세요.",
      ctaText:
        "간단하고 실용적인 도구로 아이들이 감정에 이름을 붙이고, 조절하고, 공감하며, 건강한 교실 습관을 기르도록 도와주세요.",
      browse: "자료 둘러보기",
      footer: "아이를 돌보는 교실을 위한 실용적인 정서 학습 자료.",
    },
  };
  var featureCopy = {
    en: {
      label: "60-second classroom reset",
      title: "Can one minute change your classroom’s emotional tone?",
      intro:
        "Yes—when that minute is a structured check-in. Use this quick routine after arrivals, between activities, or whenever the room needs a gentle reset.",
      steps: [
        [
          "Notice",
          "10–15 seconds",
          "Invite students to choose a simple signal: a colour, emoji, or one-to-three-word check-in. A visual chart keeps responses quick and private.",
        ],
        [
          "Name",
          "15–20 seconds",
          "Model the language first: “I’m feeling a bit tired.” Naming emotions builds vocabulary and can reduce their intensity.",
        ],
        [
          "Breathe & Reset",
          "25–30 seconds",
          "Lead one short round of box breathing or 4–4 breathing, then calmly cue the next activity.",
        ],
      ],
      alt: "Infographic for the three-step, 60-second classroom emotional check-in",
      caption: "A visual prompt for your classroom reset routine.",
      missing: "Add the infographic at images/5-steps.jpg",
    },
    "zh-tw": {
      label: "60 秒課堂重整",
      title: "一分鐘能改變課堂的情緒氛圍嗎？",
      intro:
        "可以——只要這一分鐘是一個有結構的情緒報到。可在學生抵達後、活動轉換時，或課堂需要溫和重整時使用。",
      steps: [
        [
          "察覺",
          "10–15 秒",
          "請學生選擇簡單訊號：顏色、表情符號，或一至三個詞的情緒報到。用視覺圖表讓回應快速又私密。",
        ],
        [
          "命名",
          "15–20 秒",
          "由教師先示範語言：「我感到有點累。」為情緒命名能建立詞彙，也能降低情緒強度。",
        ],
        [
          "呼吸與重整",
          "25–30 秒",
          "帶領一次簡短的箱式呼吸或 4–4 呼吸，再平靜地提示下一個活動。",
        ],
      ],
      alt: "三步驟、60 秒課堂情緒報到資訊圖",
      caption: "課堂重整流程的視覺提示。",
      missing: "請把資訊圖放在 images/5-steps.jpg",
    },
    "zh-cn": {
      label: "60 秒课堂重整",
      title: "一分钟能改变课堂的情绪氛围吗？",
      intro:
        "可以——只要这一分钟是一次有结构的情绪签到。可在学生到校后、活动过渡时，或课堂需要温和重整时使用。",
      steps: [
        [
          "觉察",
          "10–15 秒",
          "请学生选择简单信号：颜色、表情符号，或一至三个词的情绪签到。视觉图表能让回应快速又私密。",
        ],
        [
          "命名",
          "15–20 秒",
          "由教师先示范语言：“我感觉有点累。”为情绪命名能积累词汇，也能降低情绪强度。",
        ],
        [
          "呼吸与重整",
          "25–30 秒",
          "带领一次简短的箱式呼吸或 4–4 呼吸，再平静地提示下一个活动。",
        ],
      ],
      alt: "三步骤、60 秒课堂情绪签到信息图",
      caption: "课堂重整流程的视觉提示。",
      missing: "请将信息图放在 images/5-steps.jpg",
    },
    ja: {
      label: "60秒の教室リセット",
      title: "たった1分で、教室の感情的な雰囲気は変わる？",
      intro:
        "はい。その1分が、流れのあるチェックインなら可能です。登校後、活動の切り替え時、教室をやさしく整えたい時に使えます。",
      steps: [
        [
          "気づく",
          "10〜15秒",
          "色、絵文字、または1〜3語のチェックインから簡単なサインを選んでもらいます。視覚チャートなら、すばやく個別に答えられます。",
        ],
        [
          "名前をつける",
          "15〜20秒",
          "先生が先に言葉を示します。「少し疲れています。」感情に名前をつけることで語彙が増え、強さが和らぎます。",
        ],
        [
          "呼吸してリセット",
          "25〜30秒",
          "ボックス呼吸または4–4呼吸を短く1回行い、落ち着いて次の活動へ案内します。",
        ],
      ],
      alt: "3ステップ・60秒の教室感情チェックインのインフォグラフィック",
      caption: "教室のリセットルーティンに使える視覚プロンプト。",
      missing: "インフォグラフィックを images/5-steps.jpg に追加してください",
    },
    ko: {
      label: "60초 교실 리셋",
      title: "단 1분이 교실의 정서적 분위기를 바꿀 수 있을까요?",
      intro:
        "네. 그 1분이 구조화된 체크인이라면 가능합니다. 등교 직후, 활동 전환 시간, 또는 교실에 부드러운 재정비가 필요할 때 사용하세요.",
      steps: [
        [
          "알아차리기",
          "10–15초",
          "색깔, 이모지, 또는 한두 마디 체크인 중 간단한 신호를 고르게 합니다. 시각 차트를 사용하면 빠르고 사적으로 답할 수 있습니다.",
        ],
        [
          "이름 붙이기",
          "15–20초",
          "교사가 먼저 말로 보여 주세요. “저는 조금 피곤해요.” 감정에 이름을 붙이면 어휘가 늘고 감정의 강도가 낮아집니다.",
        ],
        [
          "호흡하고 리셋하기",
          "25–30초",
          "박스 호흡이나 4–4 호흡을 짧게 한 번 진행한 뒤 차분하게 다음 활동을 안내합니다.",
        ],
      ],
      alt: "3단계 60초 교실 감정 체크인 인포그래픽",
      caption: "교실 리셋 루틴을 위한 시각적 안내.",
      missing: "인포그래픽을 images/5-steps.jpg에 추가해 주세요",
    },
  };
  var regulationCopy = {
    en: {
      topic: "Child Development",
      title: "3-Step Emotional Regulation Routine for Classrooms",
      intro:
        "Children rarely benefit from simply being told to “calm down.” They need a short, predictable routine that teaches them to name a feeling, read their body’s signals, and choose a helpful next step.",
      steps: [
        [
          "Name",
          "15–20 seconds",
          "Offer a specific emotion word: “I notice you’re upset—you look frustrated.” Invite the child to repeat or choose the word.",
          "Feelings become easier to manage when they have a name.",
        ],
        [
          "Notice",
          "20–30 seconds",
          "Gently direct attention to the body or trigger: “What is happening in your body? Do your hands feel tight?”",
          "This builds interoceptive awareness without demanding an explanation.",
        ],
        [
          "Navigate",
          "1–2 minutes",
          "Offer a small menu: three slow breaths, the quiet corner, a movement break, or asking for help. Rehearse the same choices daily until they feel familiar.",
          "Keep the choices few, visual, and achievable.",
        ],
      ],
      tipsTitle: "Make it work in a real classroom",
      tips: "Use an emotion chart for quick check-ins, practise during transitions, and keep teacher language consistent. Aim for a 3–5 minute response when support is needed, plus 2–5 minutes of daily practice when children are calm.",
      takeaway:
        "Classroom-ready for ages 4–10: teach regulation as a skill, not only as a response to behaviour.",
      alt: "Three-step Name, Notice, Navigate emotional regulation infographic",
      caption:
        "Name, Notice, Navigate—a repeatable path from emotion to action.",
      missing: "Add the infographic at images/3-steps.jpg",
    },
    "zh-tw": {
      topic: "兒童發展",
      title: "課堂三步情緒調節法",
      intro:
        "只叫孩子「冷靜下來」通常幫助不大。他們需要一套簡短、可預期的流程，練習為感受命名、讀懂身體訊號，並選擇有幫助的下一步。",
      steps: [
        [
          "命名",
          "15–20 秒",
          "提供具體情緒詞：「我注意到你很不開心——你好像很挫折。」邀請孩子重複或選擇這個詞。",
          "感受有了名字，就更容易處理。",
        ],
        [
          "察覺",
          "20–30 秒",
          "溫和地把注意力帶到身體或觸發點：「你的身體現在怎麼了？雙手是不是握得很緊？」",
          "這能培養內感受覺察，而不強迫孩子立即解釋。",
        ],
        [
          "選擇方向",
          "1–2 分鐘",
          "提供少量選項：三次慢呼吸、到安靜角落、短暫活動身體，或請求幫助。每天練習同一組選項，直到熟悉。",
          "選項要少、視覺化，而且孩子做得到。",
        ],
      ],
      tipsTitle: "讓它在真實課堂中有效",
      tips: "用情緒圖表快速報到，在活動轉換時練習，並保持教師語句一致。需要支援時以 3–5 分鐘完成流程；孩子平靜時，每天再練習 2–5 分鐘。",
      takeaway: "適合 4–10 歲課堂：把情緒調節當作技能來教，而不只是處理行為。",
      alt: "命名、察覺、選擇方向三步情緒調節資訊圖",
      caption: "命名、察覺、選擇方向——從情緒走向行動的可重複路徑。",
      missing: "請把資訊圖放在 images/3-steps.jpg",
    },
    "zh-cn": {
      topic: "儿童发展",
      title: "课堂三步情绪调节法",
      intro:
        "只叫孩子“冷静下来”通常帮助不大。他们需要一套简短、可预期的流程，练习为感受命名、读懂身体信号，并选择有帮助的下一步。",
      steps: [
        [
          "命名",
          "15–20 秒",
          "提供具体情绪词：“我注意到你很难过——你好像很挫败。”邀请孩子重复或选择这个词。",
          "感受有了名字，就更容易处理。",
        ],
        [
          "觉察",
          "20–30 秒",
          "温和地把注意力带到身体或触发点：“你的身体现在怎么了？双手是不是握得很紧？”",
          "这能培养内感受觉察，而不强迫孩子马上解释。",
        ],
        [
          "选择方向",
          "1–2 分钟",
          "提供少量选项：三次慢呼吸、去安静角、短暂活动身体，或请求帮助。每天练习同一组选项，直到熟悉。",
          "选项要少、视觉化，而且孩子做得到。",
        ],
      ],
      tipsTitle: "让它在真实课堂中有效",
      tips: "用情绪图表快速签到，在活动过渡时练习，并保持教师用语一致。需要支持时用 3–5 分钟完成流程；孩子平静时，每天再练习 2–5 分钟。",
      takeaway: "适合 4–10 岁课堂：把情绪调节当作技能来教，而不只是处理行为。",
      alt: "命名、觉察、选择方向三步情绪调节信息图",
      caption: "命名、觉察、选择方向——从情绪走向行动的可重复路径。",
      missing: "请将信息图放在 images/3-steps.jpg",
    },
    ja: {
      topic: "子どもの発達",
      title: "教室で使える3ステップ感情調整ルーティン",
      intro:
        "子どもに「落ち着いて」と言うだけでは、ほとんど役に立ちません。気持ちに名前をつけ、体のサインに気づき、次の対処を選ぶための短く予測できる流れが必要です。",
      steps: [
        [
          "名前をつける",
          "15〜20秒",
          "具体的な感情語を示します。「つらそうだね。悔しい気持ちかな。」その言葉を繰り返すか選んでもらいます。",
          "名前がつくと、気持ちは扱いやすくなります。",
        ],
        [
          "気づく",
          "20〜30秒",
          "体やきっかけへやさしく注意を向けます。「体の中で何が起きている？手に力が入っているかな？」",
          "説明を求めすぎず、内受容感覚を育てます。",
        ],
        [
          "進み方を選ぶ",
          "1〜2分",
          "ゆっくり3回呼吸、静かなコーナー、体を動かす休憩、助けを求める、という少数の選択肢を示します。慣れるまで毎日同じ選択肢を練習します。",
          "選択肢は少なく、見える形で、実行可能にします。",
        ],
      ],
      tipsTitle: "実際の教室で続けるコツ",
      tips: "感情チャートで素早く確認し、活動の切り替え時に練習し、先生の声かけを統一します。支援が必要な時は3〜5分、落ち着いている時の日課練習は2〜5分を目安にします。",
      takeaway:
        "4〜10歳向け。行動を抑えるだけでなく、感情調整を一つのスキルとして教えます。",
      alt: "名前をつける・気づく・進み方を選ぶ3ステップ感情調整インフォグラフィック",
      caption: "感情から行動へ進む、繰り返し使える3ステップ。",
      missing: "インフォグラフィックを images/3-steps.jpg に追加してください",
    },
    ko: {
      topic: "아동 발달",
      title: "교실을 위한 3단계 감정 조절 루틴",
      intro:
        "아이에게 단순히 “진정해”라고 말하는 것은 큰 도움이 되지 않습니다. 감정에 이름을 붙이고, 몸의 신호를 알아차리고, 도움이 되는 다음 행동을 선택하는 짧고 예측 가능한 루틴이 필요합니다.",
      steps: [
        [
          "이름 붙이기",
          "15–20초",
          "구체적인 감정 단어를 제시합니다. “속상해 보이네. 답답한 마음인 것 같아.” 아이가 그 단어를 말하거나 선택하게 합니다.",
          "감정에 이름이 생기면 다루기가 쉬워집니다.",
        ],
        [
          "알아차리기",
          "20–30초",
          "몸이나 촉발 요인으로 부드럽게 주의를 돌립니다. “몸에서 어떤 느낌이 나니? 손에 힘이 들어갔니?”",
          "설명을 강요하지 않으면서 내수용 감각을 기릅니다.",
        ],
        [
          "방법 선택하기",
          "1–2분",
          "천천히 세 번 호흡하기, 조용한 공간, 움직임 휴식, 도움 요청하기 중 적은 수의 선택지를 줍니다. 익숙해질 때까지 매일 같은 선택지를 연습합니다.",
          "선택지는 적고, 눈에 보이며, 실행 가능해야 합니다.",
        ],
      ],
      tipsTitle: "실제 교실에서 활용하는 법",
      tips: "감정 차트로 빠르게 확인하고, 활동 전환 때 연습하며, 교사의 문장을 일관되게 유지하세요. 지원이 필요한 순간에는 3–5분, 아이가 차분할 때는 매일 2–5분 연습합니다.",
      takeaway:
        "4–10세 교실에 적합합니다. 행동을 관리하는 데 그치지 말고 감정 조절을 하나의 기술로 가르치세요.",
      alt: "이름 붙이기, 알아차리기, 방법 선택하기 3단계 감정 조절 인포그래픽",
      caption: "감정에서 행동으로 나아가는 반복 가능한 3단계.",
      missing: "인포그래픽을 images/3-steps.jpg에 추가해 주세요",
    },
  };
  var everydayCopy = {
    en: {
      topic: "Everyday classroom practice",
      title: "Three Small Routines That Build Emotional Skills",
      intro:
        "Emotional skills grow through repetition, not one-off lessons. These three brief routines can fit into the week you already have—and become familiar enough for children to use independently.",
      steps: [
        [
          "Micro-lessons",
          "2–5 minutes",
          "Twice a week, introduce one emotion with a child-friendly definition and a concrete classroom example. Revisit the same language across several weeks.",
          "Start small: one feeling, one example, one useful phrase.",
        ],
        [
          "Quick emotion check-ins",
          "About 1 minute",
          "At transitions, let students choose a colour, face, or card that matches how they feel. When appropriate, invite a single-sentence reflection.",
          "A quick visual choice builds self-awareness without putting children on the spot.",
        ],
        [
          "Model and rehearse",
          "3–5 minutes",
          "Demonstrate one coping action—breathing, asking for help, taking a movement break, or using the calming corner—then let students practise in pairs or small groups.",
          "Practise regulation when the room is calm, so it is easier to use when feelings rise.",
        ],
      ],
      tipsTitle: "Keep it simple enough to repeat",
      tips: "Use the same cues, visuals, and teacher language each time. Track small changes with brief observation notes rather than formal tests: Who names a feeling? Who reaches for a strategy? Who asks for help sooner?",
      takeaway:
        "Predictable, brief practice gradually creates a classroom culture where emotional skills grow naturally.",
      alt: "Teacher and children practising everyday emotional skills in a classroom",
      caption:
        "Tiny, repeated practices turn emotional learning into part of classroom life.",
    },
    "zh-tw": {
      topic: "日常課堂實踐",
      title: "培養情緒能力的三個小常規",
      intro:
        "情緒能力來自反覆練習，而不是一次性的課程。這三個簡短常規可以融入現有教學週，逐漸熟悉到孩子能自行使用。",
      steps: [
        [
          "微型課堂",
          "2–5 分鐘",
          "每週兩次介紹一種情緒，提供孩子易懂的定義和具體課堂例子，並在接下來幾週重複相同語言。",
          "從小處開始：一種感受、一個例子、一句實用語。",
        ],
        [
          "快速情緒報到",
          "約 1 分鐘",
          "在活動轉換時，讓學生選擇符合感受的顏色、表情或圖卡；合適時，再用一句話反思。",
          "快速視覺選擇能建立自我覺察，又不會讓孩子感到被點名。",
        ],
        [
          "示範與演練",
          "3–5 分鐘",
          "示範呼吸、求助、活動身體或使用冷靜角，再讓學生兩人或小組練習。",
          "在課堂平靜時練習，情緒升高時才更容易使用。",
        ],
      ],
      tipsTitle: "簡單，才能持續重複",
      tips: "每次使用相同提示、視覺工具和教師語句。用簡短觀察筆記記錄小變化，不必正式測驗：誰能說出感受？誰會選擇策略？誰能更早求助？",
      takeaway: "可預期而簡短的練習，會逐步建立讓情緒能力自然成長的課堂文化。",
      alt: "教師與孩子在課堂中練習日常情緒能力",
      caption: "微小而重複的實踐，讓情緒學習成為課堂生活的一部分。",
    },
    "zh-cn": {
      topic: "日常课堂实践",
      title: "培养情绪能力的三个小常规",
      intro:
        "情绪能力来自反复练习，而不是一次性的课程。这三个简短常规可以融入现有教学周，逐渐熟悉到孩子能够独立使用。",
      steps: [
        [
          "微型课堂",
          "2–5 分钟",
          "每周两次介绍一种情绪，提供孩子易懂的定义和具体课堂例子，并在接下来几周重复相同语言。",
          "从小处开始：一种感受、一个例子、一句实用语。",
        ],
        [
          "快速情绪签到",
          "约 1 分钟",
          "在活动过渡时，让学生选择符合感受的颜色、表情或卡片；合适时，再用一句话反思。",
          "快速视觉选择能建立自我觉察，又不会让孩子感到被点名。",
        ],
        [
          "示范与演练",
          "3–5 分钟",
          "示范呼吸、求助、活动身体或使用冷静角，再让学生两人或小组练习。",
          "在课堂平静时练习，情绪升高时才更容易使用。",
        ],
      ],
      tipsTitle: "保持简单，才能持续重复",
      tips: "每次使用相同提示、视觉工具和教师用语。用简短观察笔记记录小变化，无需正式测试：谁能说出感受？谁会选择策略？谁能更早求助？",
      takeaway: "可预期而简短的练习，会逐步建立让情绪能力自然成长的课堂文化。",
      alt: "教师和孩子在课堂中练习日常情绪能力",
      caption: "微小而重复的实践，让情绪学习成为课堂生活的一部分。",
    },
    ja: {
      topic: "毎日の教室実践",
      title: "感情スキルを育てる3つの小さな習慣",
      intro:
        "感情スキルは、一度きりの授業ではなく繰り返しで育ちます。今ある一週間に組み込め、子どもが自分で使えるほど親しみやすい3つの短い習慣です。",
      steps: [
        [
          "ミニレッスン",
          "2〜5分",
          "週2回、感情を一つ選び、子ども向けの定義と具体的な教室例を示します。同じ言葉を数週間繰り返します。",
          "一つの気持ち、一つの例、一つの役立つ言葉から。",
        ],
        [
          "クイック感情チェックイン",
          "約1分",
          "活動の切り替え時に、気持ちに合う色、顔、カードを選び、必要に応じて一文だけ振り返ります。",
          "短い視覚選択なら、子どもを追い詰めず自己認識を育てられます。",
        ],
        [
          "手本とリハーサル",
          "3〜5分",
          "呼吸、助けを求める、体を動かす、落ち着くコーナーを使うなど一つの対処を示し、ペアや小グループで練習します。",
          "落ち着いている時に練習すると、感情が高まった時に使いやすくなります。",
        ],
      ],
      tipsTitle: "繰り返せるシンプルさを",
      tips: "毎回同じ合図、視覚教材、先生の言葉を使います。正式なテストではなく短い観察メモで、気持ちを言えたか、方法を選べたか、早めに助けを求めたかを見ます。",
      takeaway:
        "予測できる短い実践が、感情スキルが自然に育つ教室文化をつくります。",
      alt: "教室で日常的な感情スキルを練習する先生と子どもたち",
      caption: "小さな反復が、感情学習を教室の日常に変えます。",
    },
    ko: {
      topic: "일상 교실 실천",
      title: "정서 기술을 키우는 세 가지 작은 루틴",
      intro:
        "정서 기술은 일회성 수업보다 반복을 통해 자랍니다. 기존 수업 주간에 쉽게 넣고, 아이들이 스스로 사용할 만큼 익숙해질 수 있는 짧은 루틴입니다.",
      steps: [
        [
          "미니 수업",
          "2–5분",
          "주 2회 감정 하나를 정해 아이 눈높이의 뜻과 구체적인 교실 예를 보여 주세요. 같은 표현을 몇 주 동안 반복합니다.",
          "감정 하나, 예 하나, 유용한 문장 하나로 시작하세요.",
        ],
        [
          "빠른 감정 체크인",
          "약 1분",
          "활동 전환 때 느낌과 맞는 색, 얼굴, 카드를 고르고 적절할 때 한 문장으로 돌아보게 합니다.",
          "빠른 시각 선택은 부담 없이 자기 인식을 키웁니다.",
        ],
        [
          "시범과 연습",
          "3–5분",
          "호흡, 도움 요청, 움직임 휴식, 진정 공간 사용 중 한 가지 행동을 보여 주고 짝이나 소그룹으로 연습합니다.",
          "교실이 차분할 때 연습해야 감정이 커졌을 때 더 쉽게 사용할 수 있습니다.",
        ],
      ],
      tipsTitle: "반복할 수 있을 만큼 간단하게",
      tips: "매번 같은 신호, 시각 자료, 교사 문장을 사용하세요. 정식 시험 대신 짧은 관찰 메모로 누가 감정을 말하고, 전략을 선택하고, 더 일찍 도움을 청하는지 기록하세요.",
      takeaway:
        "예측 가능하고 짧은 연습이 쌓이면 정서 기술이 자연스럽게 자라는 교실 문화가 만들어집니다.",
      alt: "교실에서 일상 정서 기술을 연습하는 교사와 아이들",
      caption: "작고 반복되는 실천이 정서 학습을 교실 일상의 일부로 만듭니다.",
    },
  };
  var c = copy[code],
    f = featureCopy[code],
    r = regulationCopy[code],
    e = everydayCopy[code],
    root = document.getElementById("teachers-app"),
    prefix = code === "en" ? "" : "../";
  var agesLabel = {
    en: "Ages 4–10",
    "zh-tw": "適合 4–10 歲",
    "zh-cn": "适合 4–10 岁",
    ja: "4〜10歳向け",
    ko: "4–10세",
  }[code];
  var toolboxDetails = {
    en: { descriptions: ["Explore feelings with child-friendly guidance.", "Use guided activities for naming, rating, and regulating emotions.", "Practise breathing and resetting attention.", "Printable prompts for feelings, triggers, and coping choices.", "A printable activity connecting feelings, kindness, and actions."], actions: ["Open feelings guide", "Open interactive tools", "Open calming activity", "Open workbook", "Open printable"] },
    "zh-tw": { descriptions: ["用孩子易懂的指南探索感受。", "練習命名、評估和調節情緒。", "練習呼吸與重整注意力。", "可列印的感受、觸發點與因應提示。", "連結感受、善意與行動的可列印活動。"], actions: ["開啟情緒指南", "開啟互動工具", "開啟冷靜活動", "開啟練習冊", "開啟教材"] },
    "zh-cn": { descriptions: ["用孩子易懂的指南探索感受。", "练习命名、评估和调节情绪。", "练习呼吸与重整注意力。", "可打印的感受、触发点与应对提示。", "连接感受、善意与行动的可打印活动。"], actions: ["打开情绪指南", "打开互动工具", "打开冷静活动", "打开练习册", "打开材料"] },
    ja: { descriptions: ["子ども向けガイドで気持ちを探ります。", "気持ちに名前をつけ、程度を知り、整えます。", "呼吸と注意のリセットを練習します。", "気持ち、きっかけ、対処の印刷教材。", "気持ちと思いやりを結ぶ印刷教材。"], actions: ["感情ガイドを開く", "ツールを開く", "活動を開く", "ワークブックを開く", "教材を開く"] },
    ko: { descriptions: ["아동 친화적 가이드로 감정을 탐색합니다.", "감정 이름, 강도, 조절을 연습합니다.", "호흡과 주의력 재정비를 연습합니다.", "감정, 촉발 요인, 대처를 위한 인쇄 자료.", "감정과 친절을 연결하는 인쇄 활동."], actions: ["감정 가이드 열기", "도구 열기", "활동 열기", "워크북 열기", "인쇄 자료 열기"] }
  }[code];
  function toolboxCards() {
    var toolboxPath=prefix+"worksheets/teacher-toolbox/"+(code==="en"?"":code+"/");
    var links = [toolboxPath + "emotion-cards.pdf", toolboxPath + "feelings-scale.pdf", toolboxPath + "calm-corner-posters.pdf", toolboxPath + "behavior-reflection-sheet.pdf", toolboxPath + "classroom-routine-cards.pdf"];
    return c.tools.map(function (tool, i) {
      var target = links[i].slice(-4) === ".pdf" ? ' target="_blank" rel="noopener"' : "";
      return '<article class="tool-card"><span aria-hidden="true">' + tool[0] + '</span><h3>' + tool[1] + '</h3><p>' + toolboxDetails.descriptions[i] + '</p><a href="' + links[i] + '"' + target + '>' + toolboxDetails.actions[i] + ' →</a></article>';
    }).join("");
  }
  function cards(items, kind) {
    return items
      .map(function (x, i) {
        if (kind === "cat")
          return (
            '<article class="teacher-card"><span class="teacher-card__icon" aria-hidden="true">' +
            x[0] +
            "</span><h3>" +
            x[1] +
            "</h3><p>" +
            x[2] +
            "</p></article>"
          );
        if (kind === "strategy")
          return (
            '<article class="strategy-card"><span class="strategy-card__number">0' +
            (i + 1) +
            "</span><h3>" +
            x[0] +
            "</h3><p>" +
            x[1] +
            '</p><a href="' +
            (i === 0 ? "#three-step-regulation" : "#toolbox") +
            '">' +
            c.read +
            " →</a></article>"
          );
        if (kind === "tool")
          return (
            '<article class="tool-card"><span aria-hidden="true">' +
            x[0] +
            "</span><h3>" +
            x[1] +
            "</h3><small>" +
            c.soon +
            "</small></article>"
          );
        return (
          '<article class="talk-card"><h3>' +
          x[0] +
          "</h3><p>" +
          x[1] +
          "</p></article>"
        );
      })
      .join("");
  }
  function feature() {
    return (
      '<article class="strategy-feature" id="one-minute-reset"><div class="strategy-feature__content"><p class="teacher-kicker">' +
      f.label +
      "</p><h3>" +
      f.title +
      '</h3><p class="strategy-feature__promise">' +
      f.intro +
      '</p><ol class="strategy-feature__steps">' +
      f.steps
        .map(function (s, i) {
          return (
            '<li class="strategy-feature__step"><span class="strategy-feature__step-number">' +
            (i + 1) +
            "</span><div><strong>" +
            s[0] +
            ' <span class="strategy-feature__time">(' +
            s[1] +
            ")</span></strong><p>" +
            s[2] +
            "</p></div></li>"
          );
        })
        .join("") +
      '</ol></div><figure class="strategy-feature__media"><img src="' +
      prefix +
      'images/5-steps.jpeg" alt="' +
      f.alt +
      '" loading="lazy"><figcaption>' +
      f.caption +
      "</figcaption></figure></article>"
    );
  }
  function regulationFeature() {
    return (
      '<article class="strategy-feature strategy-feature--regulation" id="three-step-regulation"><div class="strategy-feature__content"><div class="strategy-feature__meta"><span class="strategy-feature__tag">' +
      r.topic +
      '</span><span class="strategy-feature__tag">' +
      agesLabel +
      "</span></div><h3>" +
      r.title +
      "</h3><p>" +
      r.intro +
      '</p><ol class="strategy-feature__steps">' +
      r.steps
        .map(function (s, i) {
          return (
            '<li class="strategy-feature__step"><span class="strategy-feature__step-number">' +
            (i + 1) +
            "</span><div><strong>" +
            s[0] +
            ' <span class="strategy-feature__time">(' +
            s[1] +
            ")</span></strong><p>" +
            s[2] +
            '</p><span class="strategy-feature__quote">' +
            s[3] +
            "</span></div></li>"
          );
        })
        .join("") +
      '</ol><div class="strategy-feature__tips"><strong>' +
      r.tipsTitle +
      "</strong><p>" +
      r.tips +
      '</p></div><div class="strategy-feature__takeaway">' +
      r.takeaway +
      '</div></div><figure class="strategy-feature__media"><img src="' +
      prefix +
      'images/3-steps.jpeg" alt="' +
      r.alt +
      '" loading="lazy"><figcaption>' +
      r.caption +
      "</figcaption></figure></article>"
    );
  }
  function everydayFeature() {
    return (
      '<article class="strategy-feature strategy-feature--everyday" id="everyday-emotional-skills"><div class="strategy-feature__content"><div class="strategy-feature__meta"><span class="strategy-feature__tag">' +
      e.topic +
      "</span></div><h3>" +
      e.title +
      "</h3><p>" +
      e.intro +
      '</p><ol class="strategy-feature__steps">' +
      e.steps
        .map(function (s, i) {
          return (
            '<li class="strategy-feature__step"><span class="strategy-feature__step-number">' +
            (i + 1) +
            "</span><div><strong>" +
            s[0] +
            ' <span class="strategy-feature__time">(' +
            s[1] +
            ")</span></strong><p>" +
            s[2] +
            '</p><span class="strategy-feature__quote">' +
            s[3] +
            "</span></div></li>"
          );
        })
        .join("") +
      '</ol><div class="strategy-feature__tips"><strong>' +
      e.tipsTitle +
      "</strong><p>" +
      e.tips +
      '</p></div><div class="strategy-feature__takeaway">' +
      e.takeaway +
      '</div></div><figure class="strategy-feature__media"><img src="' +
      prefix +
      'images/building_emotional_skills_everyday.jpeg" alt="' +
      e.alt +
      '" loading="lazy"><figcaption>' +
      e.caption +
      "</figcaption></figure></article>"
    );
  }
  root.innerHTML =
    '<header class="teacher-header"><div class="teacher-shell teacher-header__inner"><a class="teacher-brand" href="' +
    prefix +
    'home.html"><img src="' +
    prefix +
    'images/logo-icon.webp" alt="" width="37" height="37"><span>Healthy Little Minds</span></a><nav class="teacher-nav" aria-label="' +
    c.title +
    '">' +
    c.nav
      .map(function (n, i) {
        var href = i === 3 ? prefix + "will-talks.html" : "#" + ["categories", "strategies", "toolbox"][i];
        return (
          '<a href="' + href + '">' +
          n +
          "</a>"
        );
      })
      .join("") +
    '</nav><a class="teacher-home-link" href="' +
    prefix +
    'home.html">' +
    c.back +
    '</a></div></header><main class="teacher-shell teacher-main"><nav class="teacher-breadcrumb" aria-label="Breadcrumb"><a href="' +
    prefix +
    'home.html">' +
    c.home +
    "</a><span>/</span><span>" +
    c.title +
    '</span></nav><section class="teacher-hero"><div><p class="teacher-kicker">' +
    c.kicker +
    "</p><h1>" +
    c.headline +
    '</h1><p class="teacher-lead">' +
    c.lead +
    '</p><a class="teacher-btn" href="#categories">' +
    c.explore +
    '</a></div><div class="teacher-visual" role="img" aria-label="' +
    c.image +
    '"><div><svg viewBox="0 0 64 64" aria-hidden="true"><path fill="currentColor" d="M8 10h48a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Zm2 6v28h44V16H10Zm7 23 9-11 7 8 5-6 9 9H17Zm25-17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg><strong>' +
    c.image +
    "</strong><small>" +
    c.replace +
    '</small></div></div></section><section class="teacher-section" id="categories"><div class="teacher-section__head"><h2>' +
    c.catsTitle +
    "</h2><p>" +
    c.catsLead +
    '</p></div><div class="teacher-grid">' +
    cards(c.cats, "cat") +
    '</div></section><section class="teacher-section" id="strategies"><div class="teacher-section__head"><h2>' +
    c.strTitle +
    "</h2><p>" +
    c.strLead +
    '</p></div><div class="strategy-grid">' +
    cards(c.strategies, "strategy") +
    '</div></section><section class="teacher-section" id="toolbox"><div class="toolbox"><div class="teacher-section__head"><h2>' +
    c.toolsTitle +
    "</h2><p>" +
    c.toolsLead +
    '</p></div><div class="tool-grid">' +
    cards(c.tools, "tool") +
    '</div></div></section><section class="teacher-section talks" id="talks"><div class="talk-intro"><p class="teacher-kicker">Healthy Little Minds</p><h2>' +
    c.talkTitle +
    "</h2><p>" +
    c.talkLead +
    '</p></div><div class="talk-list">' +
    cards(c.talks, "talk") +
    '</div></section><section class="teacher-section"><div class="teacher-cta"><div><h2>' +
    c.ctaTitle +
    "</h2><p>" +
    c.ctaText +
    '</p></div><a class="teacher-btn" href="#categories">' +
    c.browse +
    '</a></div></section></main><footer class="teacher-footer">&copy; 2026 Healthy Little Minds. ' +
    c.footer +
    "</footer>";
  var heroVisual = document.querySelector(".teacher-visual");
  heroVisual.classList.add("teacher-visual--photo");
  heroVisual.innerHTML =
    '<img src="' +
    prefix +
    'images/teachers-hub-hero.webp" alt="' +
    c.image +
    '" width="1200" height="800" fetchpriority="high" onerror="this.parentElement.classList.add(\'is-missing\');this.remove()">';
  document.querySelector(".tool-grid").innerHTML = toolboxCards();
  ["emotion-cards.jpg","feelings-scale.jpg","calm-corner-posters.jpg","behavior-reflection-sheet.jpg","classroom-routine-cards.jpg"].forEach(function(name,i){var img=document.createElement("img");img.className="tool-card__cover";img.src=prefix+"images/teacher-toolbox/"+name;img.alt="";img.loading="lazy";img.width=210;img.height=297;document.querySelectorAll(".tool-card")[i].prepend(img)});
  document
    .getElementById("strategies")
    .insertAdjacentHTML(
      "beforeend",
      regulationFeature() + feature() + everydayFeature(),
    );
  var socialMeta=document.createElement("meta");socialMeta.setAttribute("property","og:image");socialMeta.content=new URL(prefix+"images/teachers-hub-social.webp",window.location.href).href;document.head.appendChild(socialMeta);
})();
