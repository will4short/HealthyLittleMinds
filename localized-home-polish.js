(function () {
  function initSupportGuide() {
    var guide = document.querySelector(".localized-support-guide");
    if (!guide || guide.dataset.guideReady === "true") return;

    guide.dataset.guideReady = "true";

    var lang = (document.documentElement.lang || "en").toLowerCase();
    var locale = lang.indexOf("zh-hant") === 0 ? "zhHant"
      : lang.indexOf("zh-cn") === 0 ? "zhCN"
      : lang.indexOf("ja") === 0 ? "ja"
      : lang.indexOf("ko") === 0 ? "ko"
      : "zhCN";

    var copy = {
      zhCN: {
        calm: ["合适的第一步", "试试平静工具", "先用呼吸、轻柔声音或画画帮助身体慢下来，再选择更长的活动。", "interactive-tools.html"],
        story: ["故事支持", "读一个情绪故事", "故事能帮助孩子为感受找到语言，也让之后的对话更容易开始。", "#books"],
        printable: ["动手支持", "一起使用练习单", "练习单可以把感受变成孩子能命名、涂色、书写或分享的东西。", "#worksheets"],
        grownup: ["给大人的支持", "打开家长指南", "当情绪变大时，用简短句子和实际方法温柔回应孩子。", "parents.html"],
        worry: ["担心支持", "探索担心与焦虑", "先试一个平静工具，再用担心主题帮助反复出现的想法慢下来。", "resources/worry-anxiety.html"],
        confidence: ["自信支持", "建立更温柔的内在声音", "当孩子觉得卡住、不够好或害怕尝试时，可以从自尊主题开始。", "resources/self-esteem.html"],
        friendship: ["关系支持", "练习朋友关系中的时刻", "用故事和关系主题谈谈分享、修复和归属感。", "resources/relationships.html"],
        teacher: ["课堂支持", "打开适合课堂的资源", "从情绪主题和练习单开始，把情绪学习变成小小的课堂习惯。", "resources/emotions.html"]
      },
      zhHant: {
        calm: ["合適的第一步", "試試平靜工具", "先用呼吸、輕柔聲音或畫畫幫助身體慢下來，再選擇更長的活動。", "interactive-tools.html"],
        story: ["故事支持", "讀一個情緒故事", "故事能幫助孩子為感受找到語言，也讓之後的對話更容易開始。", "#books"],
        printable: ["動手支持", "一起使用學習單", "學習單可以把感受變成孩子能命名、塗色、書寫或分享的東西。", "#worksheets"],
        grownup: ["給大人的支持", "打開家長指南", "當情緒變大時，用簡短句子和實際方法溫柔回應孩子。", "parents.html"],
        worry: ["擔心支持", "探索擔心與焦慮", "先試一個平靜工具，再用擔心主題幫助反覆出現的想法慢下來。", "resources/worry-anxiety.html"],
        confidence: ["自信支持", "建立更溫柔的內在聲音", "當孩子覺得卡住、不夠好或害怕嘗試時，可以從自尊主題開始。", "resources/self-esteem.html"],
        friendship: ["關係支持", "練習朋友關係中的時刻", "用故事和關係主題談談分享、修復和歸屬感。", "resources/relationships.html"],
        teacher: ["課堂支持", "打開適合課堂的資源", "從情緒主題和學習單開始，把情緒學習變成小小的課堂習慣。", "resources/emotions.html"]
      },
      ja: {
        calm: ["はじめの一歩", "落ち着くツールを試す", "呼吸、やさしい音、または描く活動で体をゆっくり落ち着かせてから、次の活動を選びましょう。", "interactive-tools.html"],
        story: ["お話でサポート", "気持ちのお話を読む", "お話は、子どもが気持ちに言葉をつける助けになり、次の会話を始めやすくします。", "#books"],
        printable: ["手を動かすサポート", "ワークシートを一緒に使う", "ワークシートは、気持ちを名前・色・言葉・共有できる形にしてくれます。", "#worksheets"],
        grownup: ["大人向けサポート", "保護者向けガイドを開く", "気持ちが大きくなったとき、短い声かけと実践的な方法でやさしく支えます。", "parents.html"],
        worry: ["心配へのサポート", "心配と不安を見てみる", "まず落ち着くツールを試し、そのあと心配がぐるぐるするときのガイドへ進みましょう。", "resources/worry-anxiety.html"],
        confidence: ["自信へのサポート", "やさしい内なる声を育てる", "うまくできない、十分ではない、挑戦が怖いと感じるときに役立ちます。", "resources/self-esteem.html"],
        friendship: ["つながりのサポート", "友だち関係を練習する", "分け合うこと、仲直り、居場所について、物語と関係のテーマで話してみましょう。", "resources/relationships.html"],
        teacher: ["教室サポート", "教室で使いやすい資料を開く", "感情テーマとワークシートから始めて、心の学びを小さな教室習慣にできます。", "resources/emotions.html"]
      },
      ko: {
        calm: ["좋은 첫걸음", "진정 도구를 사용해 보세요", "호흡, 부드러운 소리, 그림 그리기로 몸과 마음을 먼저 천천히 가라앉혀 보세요.", "interactive-tools.html"],
        story: ["이야기 도움", "감정 이야기를 읽어 보세요", "이야기는 아이가 감정에 이름을 붙이고 다음 대화를 시작하는 데 도움을 줍니다.", "#books"],
        printable: ["활동 도움", "활동지를 함께 사용해 보세요", "활동지는 감정을 이름 붙이고, 색칠하고, 쓰고, 나눌 수 있는 형태로 바꿔 줍니다.", "#worksheets"],
        grownup: ["어른을 위한 도움", "보호자 가이드를 열어 보세요", "감정이 커질 때 짧은 말과 실제적인 방법으로 아이를 부드럽게 도울 수 있습니다.", "parents.html"],
        worry: ["걱정 도움", "걱정과 불안 자료 보기", "먼저 진정 도구를 사용한 뒤, 반복되는 생각을 다루는 걱정 자료로 이동해 보세요.", "resources/worry-anxiety.html"],
        confidence: ["자신감 도움", "더 다정한 내면의 목소리 만들기", "막막하거나 충분하지 않다고 느끼거나 시도하기 두려울 때 도움이 됩니다.", "resources/self-esteem.html"],
        friendship: ["관계 도움", "친구 관계 순간을 연습해요", "나누기, 회복하기, 소속감에 대해 이야기와 관계 자료로 함께 이야기해 보세요.", "resources/relationships.html"],
        teacher: ["교실 도움", "교실에서 쓰기 좋은 자료 열기", "감정 주제와 활동지로 감정 학습을 작은 교실 루틴으로 만들 수 있습니다.", "resources/emotions.html"]
      }
    }[locale];

    var kicker = guide.querySelector("#guideResultKicker");
    var title = guide.querySelector("#guideResultTitle");
    var text = guide.querySelector("#guideResultText");
    var link = guide.querySelector("#guideResultLink");

    function getValue(groupName) {
      var active = guide.querySelector('[data-guide-group="' + groupName + '"] button[aria-pressed="true"]');
      return active ? active.dataset.guideValue : "";
    }

    function pickKey() {
      var audience = getValue("audience");
      var moment = getValue("moment");
      var help = getValue("help");

      if (audience === "teacher") return "teacher";
      if (audience === "parent" || help === "grownup") return "grownup";
      if (help !== "calm") return help;
      if (moment !== "big-feelings") return moment;
      return "calm";
    }

    function render() {
      var recommendation = copy[pickKey()] || copy.calm;
      if (!kicker || !title || !text || !link) return;
      kicker.textContent = recommendation[0];
      title.textContent = recommendation[1];
      text.textContent = recommendation[2];
      link.href = recommendation[3];
    }

    guide.querySelectorAll("[data-guide-group] button").forEach(function (button) {
      button.addEventListener("click", function () {
        var group = button.closest("[data-guide-group]");
        if (!group) return;
        group.querySelectorAll("button").forEach(function (item) {
          item.setAttribute("aria-pressed", String(item === button));
        });
        render();
      });
    });

    render();
  }

  function initBookShelf() {
    var rail = document.querySelector(".auto-book-rail");
    if (!rail || rail.dataset.glidingReady === "true") return;

    rail.dataset.glidingReady = "true";
    var originalCards = Array.prototype.filter.call(rail.children, function (card) {
      return card.tagName !== "STYLE" && card.tagName !== "SCRIPT";
    });
    if (originalCards.length < 2) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var compact = window.matchMedia("(max-width: 720px)");
    var pausedUntil = 0;
    var dragging = false;
    var touchStart = 0;
    var startScroll = 0;
    var loopWidth = 0;
    var previousTime = 0;

    // Keep automatic rotation for users who have not requested reduced motion.
    if (!reduceMotion.matches) {
      originalCards.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("a, button").forEach(function (interactive) {
          interactive.setAttribute("tabindex", "-1");
        });
        rail.appendChild(clone);
      });
    }

    function measureLoop() {
      var firstClone = rail.children[originalCards.length];
      loopWidth = firstClone ? firstClone.offsetLeft - originalCards[0].offsetLeft : 0;
    }

    function pause(duration) {
      pausedUntil = Date.now() + duration;
    }

    function normalizeScroll() {
      if (loopWidth && rail.scrollLeft >= loopWidth) rail.scrollLeft -= loopWidth;
      if (loopWidth && rail.scrollLeft < 0) rail.scrollLeft += loopWidth;
    }

    function frame(time) {
      if (!previousTime) previousTime = time;
      var elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      if (!reduceMotion.matches && !dragging && Date.now() > pausedUntil) {
        rail.scrollLeft += elapsed * (compact.matches ? 0.024 : 0.032);
        normalizeScroll();
      }
      window.requestAnimationFrame(frame);
    }

    document.querySelectorAll("[data-localized-book-scroll]").forEach(function (button) {
      button.addEventListener("click", function () {
        pause(2600);
        var direction = button.dataset.localizedBookScroll === "prev" ? -1 : 1;
        var card = originalCards[0];
        rail.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "auto" });
        normalizeScroll();
      });
    });

    rail.addEventListener("pointerenter", function () { pause(1600); });
    rail.addEventListener("focusin", function () { pause(2400); });
    rail.addEventListener("touchstart", function (event) {
      if (!event.touches.length) return;
      dragging = true;
      touchStart = event.touches[0].clientX;
      startScroll = rail.scrollLeft;
    }, { passive: true });
    rail.addEventListener("touchmove", function (event) {
      if (!dragging || !event.touches.length) return;
      rail.scrollLeft = startScroll + touchStart - event.touches[0].clientX;
    }, { passive: true });

    function finishTouch() {
      dragging = false;
      normalizeScroll();
      pause(compact.matches ? 2600 : 1800);
    }

    rail.addEventListener("touchend", finishTouch, { passive: true });
    rail.addEventListener("touchcancel", finishTouch, { passive: true });
    window.addEventListener("resize", measureLoop);
    measureLoop();
    window.requestAnimationFrame(frame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initSupportGuide();
      initBookShelf();
    });
  } else {
    initSupportGuide();
    initBookShelf();
  }
})();
