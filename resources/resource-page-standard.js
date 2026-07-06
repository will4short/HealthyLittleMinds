(function () {
  "use strict";

  function getCopy() {
    var lang = (document.documentElement.lang || "en").toLowerCase();
    if (lang.indexOf("ja") === 0) return {
      skip: "主な内容へ移動",
      boundary: "このページは一般的な教育情報です。個別の診断、治療、危機対応に代わるものではありません。心配が続く場合や安全が心配な場合は、適切な専門家や地域の支援先に相談してください。",
      useTitle: "このガイドの使い方", notice: "状況を見る", noticeText: "決めつけず、いつ、どこで、誰といるときに起きるかを見ます。",
      choose: "小さく試す", chooseText: "ページから安全で現実的な方法を一つ選び、必要に応じて調整します。",
      review: "振り返って調整する", reviewText: "何が役立ったか、何が合わなかったかを確かめ、次の一歩を選びます。",
      urgent: "自分や他の人を傷つける話、虐待、暴力、重い物質使用、または差し迫った危険がある場合は、信頼できる大人に伝え、地域の緊急・医療・安全保護支援を利用してください。"
    };
    if (lang.indexOf("ko") === 0) return {
      skip: "주요 내용으로 건너뛰기",
      boundary: "이 페이지는 일반적인 교육 정보입니다. 개별 진단, 치료 또는 위기 대응을 대신하지 않습니다. 걱정이 계속되거나 안전이 염려되면 적절한 전문가나 지역 지원 기관에 문의하세요.",
      useTitle: "이 안내를 사용하는 방법", notice: "맥락 살피기", noticeText: "진단하거나 단정하지 말고 언제, 어디서, 누구와 있을 때 일어나는지 살펴보세요.",
      choose: "작게 시도하기", chooseText: "페이지에서 안전하고 실현 가능한 방법 하나를 고르고 필요에 맞게 조정하세요.",
      review: "확인하고 조정하기", reviewText: "무엇이 도움이 되었고 무엇이 맞지 않았는지 확인한 뒤 다음 한 걸음을 고르세요.",
      urgent: "자신이나 다른 사람을 해치는 말, 학대, 폭력, 심각한 물질 사용 또는 즉각적인 위험이 있다면 믿을 수 있는 어른에게 알리고 지역 응급·의료·보호 지원에 연락하세요."
    };
    if (lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0) return {
      skip: "跳到主要內容",
      boundary: "本頁提供一般教育資訊，不能取代個別診斷、治療或危機介入。如果擔心持續，或對安全有疑慮，請聯絡合適的專業人員或當地支援服務。",
      useTitle: "如何使用本指南", notice: "留意情境", noticeText: "不急著診斷或下結論，先觀察何時、何地、與誰相處時會出現。",
      choose: "嘗試小步驟", chooseText: "從頁面中選一個安全可行的方法，並按實際需要調整。",
      review: "回顧與調整", reviewText: "留意什麼有幫助、什麼不適合，再選擇下一個步驟。",
      urgent: "如果出現傷害自己或他人的言論、虐待、暴力、嚴重物質使用或迫切危險，請告訴信任的成人，並聯絡當地緊急、醫療或安全保護支援。"
    };
    if (lang.indexOf("zh") === 0) return {
      skip: "跳到主要内容",
      boundary: "本页提供一般教育信息，不能代替个别诊断、治疗或危机干预。如果担心持续，或对安全有疑虑，请联系合适的专业人员或当地支持服务。",
      useTitle: "如何使用本指南", notice: "留意情境", noticeText: "不急于诊断或下结论，先观察何时、何地、与谁相处时会出现。",
      choose: "尝试小步骤", chooseText: "从页面中选一个安全可行的方法，并按实际需要调整。",
      review: "回顾与调整", reviewText: "留意什么有帮助、什么不合适，再选择下一个步骤。",
      urgent: "如果出现伤害自己或他人的言论、虐待、暴力、严重物质使用或紧迫危险，请告诉信任的成人，并联系当地紧急、医疗或安全保护支持。"
    };
    return {
      skip: "Skip to main content",
      boundary: "This page provides general education. It does not replace individual diagnosis, treatment, or crisis support. If a concern continues or anyone may be unsafe, contact an appropriate professional or local support service.",
      useTitle: "How to use this guide", notice: "Notice the context", noticeText: "Observe when, where, and with whom a pattern occurs without diagnosing or deciding what it means too quickly.",
      choose: "Try one small step", chooseText: "Choose one safe, realistic strategy from the page and adapt it to the person, setting, and available support.",
      review: "Review and adapt", reviewText: "Notice what helped, what did not fit, and whether another step or additional support is needed.",
      urgent: "If there is talk of harming oneself or others, abuse, violence, serious substance use, or immediate danger, tell a trusted adult and contact appropriate local emergency, medical, or safeguarding support."
    };
  }

  function getMoodLabels() {
    var lang = (document.documentElement.lang || "en").toLowerCase();
    if (lang.indexOf("ja") === 0) return { happy: "うれしい", sad: "悲しい", angry: "怒っている", worried: "心配", calm: "落ち着いている" };
    if (lang.indexOf("ko") === 0) return { happy: "기뻐요", sad: "슬퍼요", angry: "화가 나요", worried: "걱정돼요", calm: "차분해요" };
    if (lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0) return { happy: "開心", sad: "難過", angry: "生氣", worried: "擔心", calm: "平靜" };
    if (lang.indexOf("zh") === 0) return { happy: "开心", sad: "难过", angry: "生气", worried: "担心", calm: "平静" };
    return { happy: "Happy", sad: "Sad", angry: "Angry", worried: "Worried", calm: "Calm" };
  }

  function getMoodMessages() {
    var lang = (document.documentElement.lang || "en").toLowerCase();
    if (lang.indexOf("ja") === 0) return {
      happy: "心地よい気持ちがここにあります。体のどこに感じるか、安心して育てる助けになることは何かを見てみましょう。",
      sad: "悲しさは、いたわり、静けさ、誰かといること、安心できる関わりを求めている合図かもしれません。小さな次の一歩を選びましょう。",
      angry: "怒りは、何かが不公平、行き詰まり、または安全でないと感じている合図かもしれません。反応する前に止まり、安全な行動を選びましょう。",
      worried: "心配は警報のように働くことがあります。何が事実で、何がまだ分からないか、助けになる小さな一歩を確認しましょう。",
      calm: "落ち着きは、休む、練習する、読む、誰かとつながるための大切な時間になります。"
    };
    if (lang.indexOf("ko") === 0) return {
      happy: "기분 좋은 감정이 여기에 있어요. 몸 어디에서 느껴지는지, 그 감정이 안전하게 자라도록 돕는 것이 무엇인지 살펴보세요.",
      sad: "슬픔은 돌봄, 조용한 시간, 함께 있어 주는 사람, 위로가 필요하다는 신호일 수 있어요. 작은 다음 단계를 하나 골라 보세요.",
      angry: "화는 무언가가 불공평하거나 막혔거나 안전하지 않게 느껴진다는 신호일 수 있어요. 반응하기 전에 잠시 멈추고 안전한 행동을 선택하세요.",
      worried: "걱정은 경보처럼 작동할 수 있어요. 무엇이 실제이고, 무엇이 아직 불확실한지, 도움이 되는 작은 한 걸음은 무엇인지 확인해 보세요.",
      calm: "차분함은 쉬거나, 연습하거나, 읽거나, 누군가와 연결될 수 있는 좋은 순간이에요."
    };
    if (lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0) return {
      happy: "一種舒服的感覺正在這裡。留意它出現在身體哪裡，以及什麼能讓它安全地延伸。",
      sad: "難過可能是在提醒我們需要照顧、安靜、陪伴或安慰。選一個合適的小小下一步。",
      angry: "生氣可能表示某件事感覺不公平、受阻或不安全。先停一停，再選擇安全的行動。",
      worried: "擔心有時像警報。看看什麼是真實的，什麼還不確定，以及哪一個小步驟會有幫助。",
      calm: "平靜可以是休息、練習、閱讀或與人連結的好時刻。"
    };
    if (lang.indexOf("zh") === 0) return {
      happy: "一种舒服的感觉正在这里。留意它出现在身体哪里，以及什么能让它安全地延伸。",
      sad: "难过可能是在提醒我们需要照顾、安静、陪伴或安慰。选一个合适的小小下一步。",
      angry: "生气可能表示某件事感觉不公平、受阻或不安全。先停一停，再选择安全的行动。",
      worried: "担心有时像警报。看看什么是真实的，什么还不确定，以及哪一个小步骤会有帮助。",
      calm: "平静可以是休息、练习、阅读或与人连接的好时刻。"
    };
    return {
      happy: "A pleasant feeling is here. Notice where it shows up in your body, and what helps it grow safely.",
      sad: "Sadness can ask for care, quiet, company, or comfort. Choose one kind next step.",
      angry: "Anger can show that something feels unfair, blocked, or unsafe. Pause and choose a safe action before responding.",
      worried: "Worry can be an alarm signal. Check what is real, what is uncertain, and one small step that helps.",
      calm: "Calm can be a useful moment to rest, practise, read, or connect."
    };
  }

  function normalizeLegacyPresentation() {
    document.querySelectorAll("footer[style]").forEach(function (footer) {
      footer.removeAttribute("style");
      footer.classList.add("hlm-resource-footer");
    });
    document.querySelectorAll(".disclaimer[style]").forEach(function (disclaimer) {
      disclaimer.removeAttribute("style");
    });
    var emojiContainer = document.getElementById("emoji-container");
    if (emojiContainer) emojiContainer.removeAttribute("style");
    var moodResponse = document.getElementById("mood-response");
    if (moodResponse) {
      moodResponse.removeAttribute("style");
      moodResponse.setAttribute("role", "status");
      moodResponse.setAttribute("aria-live", "polite");
      moodResponse.setAttribute("aria-atomic", "true");
    }
    var moodLabels = getMoodLabels();
    document.querySelectorAll(".mood-btn").forEach(function (button) {
      button.removeAttribute("style");
      button.type = "button";
      var mood = button.dataset.mood;
      if (moodLabels[mood]) button.setAttribute("aria-label", moodLabels[mood]);
    });
    document.querySelectorAll('img[style*="max-width:260px"]').forEach(function (image) {
      image.removeAttribute("style");
      image.classList.add("hlm-resource-book-cover");
    });
  }

  function initMoodPicker() {
    var response = document.getElementById("mood-response");
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".mood-btn[data-mood]"));
    if (!response || !buttons.length || response.dataset.hlmMoodReady === "1") return;
    response.dataset.hlmMoodReady = "1";
    response.setAttribute("role", "status");
    response.setAttribute("aria-live", "polite");
    response.setAttribute("aria-atomic", "true");
    var messages = getMoodMessages();
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var mood = button.getAttribute("data-mood");
        response.textContent = messages[mood] || response.textContent;
        buttons.forEach(function (item) {
          item.classList.remove("is-selected");
          item.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
      });
      if (!button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", "false");
    });
  }

  function initQuickAnchors() {
    var offset = 88;
    var nav = document.querySelector(".quick-nav");
    if (!nav || nav.dataset.hlmAnchorReady === "1") return;
    nav.dataset.hlmAnchorReady = "1";
    function smoothTo(hash) {
      if (!hash) return;
      var target = document.querySelector(hash);
      if (!target) return;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
    nav.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;
      var url = new URL(link.href, location.href);
      if (url.pathname !== location.pathname || !document.querySelector(url.hash)) return;
      event.preventDefault();
      history.pushState({}, "", url.hash);
      smoothTo(url.hash);
    });
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var pairs = links.map(function (link) {
      return { link: link, target: document.querySelector(link.getAttribute("href")) };
    }).filter(function (pair) { return pair.target; });
    if ("IntersectionObserver" in window && pairs.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var active = pairs.find(function (pair) { return pair.target === entry.target; });
          if (!active) return;
          links.forEach(function (link) { link.classList.remove("is-active"); });
          active.link.classList.add("is-active");
        });
      }, { rootMargin: "-" + (offset + 10) + "px 0px -60% 0px", threshold: 0.01 });
      pairs.forEach(function (pair) { observer.observe(pair.target); });
    }
    if (location.hash) window.setTimeout(function () { smoothTo(location.hash); }, 0);
  }

  function init() {
    document.body.classList.add("hlm-resource-page");
    document.body.dataset.resourceStandard = "1";
    normalizeLegacyPresentation();
    var copy = getCopy();
    var main = document.querySelector("main") || document.querySelector(".topic-main");
    if (main) {
      if (main.tagName !== "MAIN") main.setAttribute("role", "main");
      if (!main.id) main.id = "main-content";
      if (!document.querySelector(".hlm-resource-skip")) {
        var skip = document.createElement("a");
        skip.className = "hlm-resource-skip";
        skip.href = "#" + main.id;
        skip.textContent = copy.skip;
        document.body.insertBefore(skip, document.body.firstChild);
      }
      if (!document.querySelector(".hlm-resource-boundary")) {
        var boundary = document.createElement("aside");
        boundary.className = "hlm-resource-boundary";
        var paragraph = document.createElement("p");
        paragraph.textContent = copy.boundary;
        boundary.appendChild(paragraph);
        main.appendChild(boundary);
      }
      var sensitiveTopics = new Set(["bullying", "grief", "parents", "self-esteem", "stress", "substance-use", "trauma", "worry-anxiety", "youth-teens"]);
      var topic = (document.body.className.match(/topic-page--([a-z-]+)/) || [])[1];
      if (sensitiveTopics.has(topic) && !document.querySelector(".hlm-resource-urgent")) {
        var urgent = document.createElement("aside");
        urgent.className = "hlm-resource-urgent";
        urgent.setAttribute("role", "note");
        urgent.textContent = copy.urgent;
        main.appendChild(urgent);
      }
      if (!document.querySelector(".hlm-resource-use")) {
        var use = document.createElement("section");
        use.className = "hlm-resource-use";
        use.setAttribute("aria-labelledby", "hlmResourceUseTitle");
        use.innerHTML = '<h2 id="hlmResourceUseTitle">' + copy.useTitle + '</h2>'
          + '<div class="hlm-resource-use__grid">'
          + '<article><h3>' + copy.notice + '</h3><p>' + copy.noticeText + '</p></article>'
          + '<article><h3>' + copy.choose + '</h3><p>' + copy.chooseText + '</p></article>'
          + '<article><h3>' + copy.review + '</h3><p>' + copy.reviewText + '</p></article>'
          + '</div>';
        main.insertBefore(use, main.firstChild);
      }
    }
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      var rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      link.setAttribute("rel", Array.from(rel).join(" "));
    });
    initMoodPicker();
    initQuickAnchors();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
