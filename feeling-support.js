(function () {
  "use strict";

  const path = window.location.pathname.replace(/\\/g, "/");
  const parts = path.split("/").filter(Boolean);
  const first = parts[0] || "";
  const locales = new Set(["ko", "ja", "zh-cn", "zh-tw"]);
  const locale = locales.has(first) ? first : "en";
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
      story: "Related story",
      tool: "Related tool",
      printable: "Printable card",
      plan: "7-day growth plan",
      defaultMeaning: "This feeling is a message. It helps children notice what matters, what needs care, or what needs a next step.",
      defaultBody: "It may show up as tight muscles, a busy mind, quietness, tears, fast words, or needing space.",
      defaultChild: "I am feeling this right now, and I need help finding one next step.",
      defaultParent: "I hear you. Your feeling makes sense. We can slow down and choose one helpful step together."
    },
    ko: {
      kicker: "감정 도감",
      title: "이 감정을 이해해요",
      means: "이 감정의 의미",
      body: "몸에서 느껴질 수 있는 모습",
      child: "아이가 말할 수 있는 문장",
      parent: "보호자가 말할 수 있는 문장",
      story: "관련 이야기",
      tool: "관련 도구",
      printable: "인쇄용 카드",
      plan: "7일 성장 계획",
      defaultMeaning: "이 감정은 아이에게 중요한 것, 돌봄이 필요한 것, 다음 단계가 필요한 것을 알려 주는 신호입니다.",
      defaultBody: "몸이 긴장되거나, 생각이 많아지거나, 조용해지거나, 눈물이 나거나, 혼자 있고 싶을 수 있습니다.",
      defaultChild: "지금 이런 감정을 느끼고 있어요. 다음에 무엇을 하면 좋을지 도와주세요.",
      defaultParent: "네 마음을 들었어. 그렇게 느낄 수 있어. 천천히 한 가지 도움이 되는 방법을 함께 찾아보자."
    },
    ja: {
      kicker: "気持ちのガイド",
      title: "この気持ちを理解する",
      means: "この気持ちの意味",
      body: "体にあらわれるサイン",
      child: "子どもが言える言葉",
      parent: "大人がかけられる言葉",
      story: "関連ストーリー",
      tool: "関連ツール",
      printable: "印刷カード",
      plan: "7日間の成長プラン",
      defaultMeaning: "この気持ちは、大切なこと、ケアが必要なこと、次の一歩が必要なことを教えてくれるサインです。",
      defaultBody: "体が固くなる、考えがいっぱいになる、静かになる、涙が出る、少し距離がほしくなることがあります。",
      defaultChild: "今この気持ちがあります。次にできることを一緒に考えてほしいです。",
      defaultParent: "聞いているよ。その気持ちは自然だよ。ゆっくり、一つ助けになることを選ぼう。"
    },
    "zh-cn": {
      kicker: "情绪图书馆",
      title: "理解这种情绪",
      means: "这种情绪是什么意思",
      body: "身体可能有什么感觉",
      child: "孩子可以这样说",
      parent: "大人可以这样说",
      story: "相关故事",
      tool: "相关工具",
      printable: "可打印卡片",
      plan: "7天成长计划",
      defaultMeaning: "这种情绪是在提醒孩子：有什么很重要、需要被照顾，或者需要一个下一步。",
      defaultBody: "身体可能会紧绷，脑子很忙，想安静，想哭，说话变快，或者想要一点空间。",
      defaultChild: "我现在有这种感觉，我需要帮助找到下一步。",
      defaultParent: "我听见你了。你这样感觉是可以理解的。我们慢慢来，一起找一个有帮助的下一步。"
    },
    "zh-tw": {
      kicker: "情緒圖書館",
      title: "理解這種情緒",
      means: "這種情緒是什麼意思",
      body: "身體可能有什麼感覺",
      child: "孩子可以這樣說",
      parent: "大人可以這樣說",
      story: "相關故事",
      tool: "相關工具",
      printable: "可列印卡片",
      plan: "7天成長計畫",
      defaultMeaning: "這種情緒是在提醒孩子：有些事很重要、需要被照顧，或需要一個下一步。",
      defaultBody: "身體可能會緊繃、腦袋很忙、想安靜、想哭、說話變快，或想要一點空間。",
      defaultChild: "我現在有這種感覺，我需要幫忙找到下一步。",
      defaultParent: "我聽見你了。你這樣感覺是可以理解的。我們慢慢來，一起找一個有幫助的下一步。"
    }
  };

  const englishFeelingData = {
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
      story: ["Mood story builder", "interactive-tools.html#mood-story-builder"],
      tool: ["Calm corner", "interactive-tools.html#calm-corner"],
      printable: ["Calm workbook", "worksheets/Calm the Storm Inside - My Feelings Workbook.pdf"]
    },
    calm: {
      meaning: "Calm is a steady feeling that helps the brain listen, choose, and rest.",
      body: "Slower breathing, softer muscles, quieter thoughts, or feeling safe.",
      child: "I feel calmer now. I can choose my next step.",
      parent: "Let's remember what helped your body feel safe.",
      story: ["Calm tools", "interactive-tools.html#calm-corner"],
      tool: ["Sound and breathing", "interactive-tools.html#calm-corner"],
      printable: ["Relaxation guide", "resources/relaxation.html"]
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
      story: ["Feeling Sad story", "story-sad.html"],
      tool: ["Draw the feeling", "interactive-tools.html#drawing-tool"],
      printable: ["Little Acts, Big Feelings", "worksheets/Little-Acts-Big-Feelings-Worksheet.pdf"]
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
      story: ["엘라 이야기", "../audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["감정 도구", "interactive-tools.html"],
      printable: ["7일 성장 계획", "growth-plan.html#weekly-plan"]
    },
    ja: {
      story: ["エラの物語", "../audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["感情ツール", "interactive-tools.html"],
      printable: ["7日間プラン", "growth-plan.html#weekly-plan"]
    },
    "zh-cn": {
      story: ["Ella的故事", "../audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["情绪工具", "interactive-tools.html"],
      printable: ["7天成长计划", "growth-plan.html#weekly-plan"]
    },
    "zh-tw": {
      story: ["Ella的故事", "../audiobook.html?book=audiobooks/ella/book.json"],
      tool: ["情緒工具", "interactive-tools.html"],
      printable: ["7天成長計畫", "growth-plan.html#weekly-plan"]
    }
  };

  function localizeUrl(url) {
    if (/^https?:|^mailto:|^#/.test(url)) return url;
    if (url.startsWith("../")) return url;
    if (locale === "en") return url;
    if (url.startsWith("worksheets/") || url.startsWith("audiobooks/")) return "../" + url;
    return base + url;
  }

  function addStylesheet() {
    if (document.querySelector("link[data-feeling-support]")) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = base + "feeling-support.css";
    link.dataset.feelingSupport = "true";
    document.head.appendChild(link);
  }

  function render() {
    const text = copy[locale] || copy.en;
    const data = locale === "en" ? (englishFeelingData[file] || {}) : {};
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
      </div>
      <div class="feeling-support-links" aria-label="Related support">
        <a href="${localizeUrl(story[1])}">${text.story}: ${story[0]}</a>
        <a href="${localizeUrl(tool[1])}">${text.tool}: ${tool[0]}</a>
        <a href="${localizeUrl(printable[1])}">${text.printable}: ${printable[0]}</a>
        <a href="${base}growth-plan.html">${text.plan}</a>
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
