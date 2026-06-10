(function () {
  "use strict";

  const storagePrefix = "hlmGrowthPlan:";
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const firstPathPart = pathParts[0] || "";
  const locale = ["ko", "ja", "zh-cn", "zh-tw"].includes(firstPathPart) ? firstPathPart : "en";

  const copy = {
    en: {
      resultTitle: "Recommended starting point",
      button: "Open support",
      child: "For a child, keep the next step small and concrete.",
      teen: "For a teen, offer choice and privacy before advice.",
      parent: "For a parent, begin with a script you can say out loud.",
      teacher: "For a teacher, choose a short tool that works for a group reset.",
      fallback: "Open the feeling library to choose a starting point."
    },
    ko: {
      resultTitle: "추천 시작점",
      button: "지원 열기",
      child: "아이에게는 다음 단계를 작고 구체적으로 보여 주세요.",
      teen: "청소년에게는 조언보다 선택권과 개인 공간을 먼저 주세요.",
      parent: "부모에게는 바로 말할 수 있는 문장부터 시작하세요.",
      teacher: "교실에서는 짧게 함께 할 수 있는 리셋 도구를 고르세요.",
      fallback: "감정 도서관에서 시작점을 골라 보세요."
    },
    ja: {
      resultTitle: "おすすめの始め方",
      button: "サポートを開く",
      child: "子どもには、次の一歩を小さく具体的にします。",
      teen: "ティーンには、助言の前に選択肢と余白を渡します。",
      parent: "保護者は、声に出せる短い言葉から始めます。",
      teacher: "教室では、短く全員で使えるリセットを選びます。",
      fallback: "気持ちライブラリから始める場所を選びます。"
    },
    "zh-cn": {
      resultTitle: "推荐起点",
      button: "打开支持",
      child: "给孩子时，把下一步变小、变具体。",
      teen: "给青少年时，先提供选择和空间，再给建议。",
      parent: "给家长时，先从一句能说出口的话开始。",
      teacher: "给老师时，选择适合全班短暂重置的工具。",
      fallback: "打开情绪图书馆，选择一个起点。"
    },
    "zh-tw": {
      resultTitle: "推薦起點",
      button: "打開支持",
      child: "給孩子時，把下一步變小、變具體。",
      teen: "給青少年時，先提供選擇和空間，再給建議。",
      parent: "給家長時，先從一句能說出口的話開始。",
      teacher: "給老師時，選擇適合全班短暫重置的工具。",
      fallback: "打開情緒圖書館，選擇一個起點。"
    }
  };

  function setupChecks() {
    document.querySelectorAll("[data-growth-check]").forEach((input) => {
      const key = storagePrefix + input.dataset.growthCheck;
      input.checked = localStorage.getItem(key) === "true";
      input.addEventListener("change", () => {
        localStorage.setItem(key, String(input.checked));
      });
    });
  }

  function setupWeekCards() {
    const cards = Array.from(document.querySelectorAll(".week-card"));
    if (!cards.length) return;

    function expandCard(card) {
      cards.forEach((item) => {
        const isExpanded = item === card;
        item.classList.toggle("is-expanded", isExpanded);
        item.setAttribute("aria-expanded", String(isExpanded));
      });
    }

    cards.forEach((card) => {
      card.tabIndex = 0;
      card.setAttribute("aria-expanded", "false");

      card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        expandCard(card);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        expandCard(card);
      });
    });

    if (window.matchMedia("(max-width: 640px)").matches) {
      const firstOpenCard = cards.find((card) => !card.querySelector("input")?.checked) || cards[0];
      if (firstOpenCard) expandCard(firstOpenCard);
    }
  }

  const recommendations = {
    worry: {
      story: ["Listen to Ella, then talk about brave small steps.", "audiobook.html?book=audiobooks/ella/book.json"],
      worksheet: ["Open worry support and choose one printable or calming idea.", "resources/worry-anxiety.html"],
      tip: ["Use parent worry support with a calm first sentence.", "resources/worry-anxiety.html"],
      "calming-tool": ["Start with breathing before talking through the worry.", "interactive-tools.html#calm-corner"]
    },
    anger: {
      story: ["Use the mood story builder to name angry feelings safely.", "interactive-tools.html#mood-story-builder"],
      worksheet: ["Draw what anger feels like, then choose one safe action.", "interactive-tools.html#drawing-tool"],
      tip: ["Read the anger page for words and body clues.", "anger.html"],
      "calming-tool": ["Try sound and breathing before problem-solving.", "interactive-tools.html#calm-corner"]
    },
    confidence: {
      story: ["Listen to One More Kick, Ella! for a try-again story.", "audiobook.html?book=audiobooks/ella/book.json"],
      worksheet: ["Use goals and small steps to make progress visible.", "resources/goals.html"],
      tip: ["Read self-esteem support for confidence-building language.", "resources/self-esteem.html"],
      "calming-tool": ["Use Ella's reflection to choose one practice step.", "interactive-tools.html#ella-reflection"]
    },
    sadness: {
      story: ["Start the Feeling Sad interactive story.", "story-sad.html"],
      worksheet: ["Use drawing to show what sadness needs.", "interactive-tools.html#drawing-tool"],
      tip: ["Read the sadness page and name what support would help.", "sadness.html"],
      "calming-tool": ["Try a quiet sound and slow breathing.", "interactive-tools.html#calm-corner"]
    },
    friendship: {
      story: ["Try Bella's choices and feelings story.", "interactive-stories/scene_1_bella_story.html"],
      worksheet: ["Explore relationship support for friendship moments.", "resources/relationships.html"],
      tip: ["Use parent scripts for feeling left out.", "#parent-scripts"],
      "calming-tool": ["Use mood story builder to name the friendship feeling.", "interactive-tools.html#mood-story-builder"]
    }
  };

  const recommendationText = {
    ko: {
      worry: { story: "엘라 이야기를 듣고 용기 있는 작은 단계를 이야기해 보세요.", worksheet: "걱정 지원 페이지에서 활동지나 진정 아이디어를 골라 보세요.", tip: "걱정 지원 문장으로 차분하게 시작해 보세요.", "calming-tool": "걱정을 말하기 전에 호흡으로 시작해 보세요." },
      anger: { story: "무드 이야기 도구로 화난 감정을 안전하게 이름 붙여 보세요.", worksheet: "화를 그림으로 표현한 뒤 안전한 행동을 골라 보세요.", tip: "화 페이지에서 말과 몸의 신호를 살펴보세요.", "calming-tool": "문제 해결 전에 소리와 호흡 도구를 사용해 보세요." },
      confidence: { story: "다시 시도하는 이야기인 엘라 이야기를 들어 보세요.", worksheet: "목표와 작은 단계로 성장을 눈에 보이게 해 보세요.", tip: "자신감을 키우는 언어를 자존감 페이지에서 확인해 보세요.", "calming-tool": "엘라 성찰 도구로 연습할 한 가지를 골라 보세요." },
      sadness: { story: "슬픔 인터랙티브 이야기를 시작해 보세요.", worksheet: "슬픔이 무엇을 필요로 하는지 그림으로 표현해 보세요.", tip: "슬픔 페이지에서 필요한 지원을 이름 붙여 보세요.", "calming-tool": "조용한 소리와 느린 호흡을 시도해 보세요." },
      friendship: { story: "벨라의 선택과 감정 이야기를 해 보세요.", worksheet: "친구 관계 순간을 위한 관계 지원을 살펴보세요.", tip: "소외감을 느낄 때의 부모 문장을 사용해 보세요.", "calming-tool": "무드 이야기 도구로 친구 관계 감정을 이름 붙여 보세요." }
    },
    ja: {
      worry: { story: "エラの物語を聞き、勇気の小さな一歩を話してみましょう。", worksheet: "心配のサポートからワークシートや落ち着くアイデアを選びましょう。", tip: "心配の声かけで、落ち着いて始めましょう。", "calming-tool": "心配を話す前に、呼吸から始めましょう。" },
      anger: { story: "ムードストーリーで怒りを安全に名前にしましょう。", worksheet: "怒りを描いて、安全な行動を一つ選びましょう。", tip: "怒りのページで言葉と体のサインを見ましょう。", "calming-tool": "話し合う前に、音と呼吸を使いましょう。" },
      confidence: { story: "もう一度試すエラの物語を聞きましょう。", worksheet: "目標と小さな一歩で成長を見えるようにしましょう。", tip: "自信を育てる言葉を自尊感情のページで見ましょう。", "calming-tool": "エラのふり返りで練習する一歩を選びましょう。" },
      sadness: { story: "悲しい気持ちのインタラクティブストーリーを始めましょう。", worksheet: "悲しみが何を必要としているか描いてみましょう。", tip: "悲しみのページで必要な支えを名前にしましょう。", "calming-tool": "静かな音とゆっくりした呼吸を試しましょう。" },
      friendship: { story: "ベラの選択と気持ちの物語を試しましょう。", worksheet: "友だち関係のサポートを見てみましょう。", tip: "仲間外れに感じる時の声かけを使いましょう。", "calming-tool": "ムードストーリーで友だち関係の気持ちを名前にしましょう。" }
    },
    "zh-cn": {
      worry: { story: "听Ella的故事，然后聊一个勇敢的小步骤。", worksheet: "打开担心支持页面，选择练习单或平静方法。", tip: "用担心支持话术，先温柔地开始。", "calming-tool": "在谈担心之前，先从呼吸开始。" },
      anger: { story: "用情绪故事工具，安全地说出生气。", worksheet: "画出生气的样子，再选择一个安全行动。", tip: "打开生气页面，了解语言和身体信号。", "calming-tool": "解决问题前，先用声音和呼吸工具。" },
      confidence: { story: "听《One More Kick, Ella!》练习再试一次。", worksheet: "用目标和小步骤，让成长看得见。", tip: "打开自尊支持，学习建立自信的话语。", "calming-tool": "用Ella反思工具，选择一个练习步骤。" },
      sadness: { story: "开始伤心互动故事。", worksheet: "画出伤心需要什么。", tip: "打开伤心页面，说出需要的支持。", "calming-tool": "试试安静的声音和慢呼吸。" },
      friendship: { story: "试试Bella的选择与情绪故事。", worksheet: "打开关系支持，帮助处理朋友关系。", tip: "使用被冷落时的家长话术。", "calming-tool": "用情绪故事工具说出朋友关系中的感受。" }
    },
    "zh-tw": {
      worry: { story: "聽Ella的故事，然後聊一個勇敢的小步驟。", worksheet: "打開擔心支持頁面，選擇練習單或平靜方法。", tip: "用擔心支持話術，先溫柔地開始。", "calming-tool": "在談擔心之前，先從呼吸開始。" },
      anger: { story: "用情緒故事工具，安全地說出生氣。", worksheet: "畫出生氣的樣子，再選擇一個安全行動。", tip: "打開生氣頁面，了解語言和身體信號。", "calming-tool": "解決問題前，先用聲音和呼吸工具。" },
      confidence: { story: "聽《One More Kick, Ella!》練習再試一次。", worksheet: "用目標和小步驟，讓成長看得見。", tip: "打開自尊支持，學習建立自信的話語。", "calming-tool": "用Ella反思工具，選擇一個練習步驟。" },
      sadness: { story: "開始傷心互動故事。", worksheet: "畫出傷心需要什麼。", tip: "打開傷心頁面，說出需要的支持。", "calming-tool": "試試安靜的聲音和慢呼吸。" },
      friendship: { story: "試試Bella的選擇與情緒故事。", worksheet: "打開關係支持，幫助處理朋友關係。", tip: "使用被冷落時的家長話術。", "calming-tool": "用情緒故事工具說出朋友關係中的感受。" }
    }
  };

  function localizeUrl(url) {
    if (/^https?:|^mailto:|^#/.test(url)) return url;
    if (locale === "en") return url;
    if (url.startsWith("worksheets/") || url.startsWith("audiobooks/")) return "../" + url;
    return url;
  }

  function setupFinder() {
    const form = document.querySelector("[data-resource-finder]");
    const result = document.querySelector("[data-finder-result]");
    if (!form || !result) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const audience = data.get("audience");
      const topic = data.get("topic");
      const need = data.get("need");
      const labels = copy[locale] || copy.en;
      const match = recommendations[topic]?.[need] || [labels.fallback, "more-feelings.html"];
      const localizedMatchText = recommendationText[locale]?.[topic]?.[need] || match[0];
      const note = labels[audience] || labels.child;

      result.innerHTML = `
        <h3>${labels.resultTitle}</h3>
        <p>${note} ${localizedMatchText}</p>
        <a class="growth-btn growth-btn--secondary" href="${localizeUrl(match[1])}">${labels.button}</a>
      `;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupChecks();
    setupWeekCards();
    setupFinder();
  });
})();
