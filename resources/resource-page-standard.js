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
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
