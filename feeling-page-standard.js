(function () {
  "use strict";

  function copyForLanguage() {
    var lang = (document.documentElement.lang || "en").toLowerCase();
    if (lang.indexOf("ja") === 0) return {
      skip: "主な内容へ移動",
      boundary: "このページは一般的な心理教育のためのもので、診断や治療に代わるものではありません。心配が続く場合や、安全が心配な場合は、信頼できる大人や適切な専門家に相談してください。"
    };
    if (lang.indexOf("ko") === 0) return {
      skip: "주요 내용으로 건너뛰기",
      boundary: "이 페이지는 일반적인 심리 교육을 위한 자료이며 진단이나 치료를 대신하지 않습니다. 걱정이 계속되거나 안전이 염려되면 믿을 수 있는 어른이나 적절한 전문가와 상의하세요."
    };
    if (lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0) return {
      skip: "跳到主要內容",
      boundary: "本頁提供一般心理教育資訊，不能取代診斷或治療。如果擔心持續，或對安全有疑慮，請向信任的成人或合適的專業人員尋求支持。"
    };
    if (lang.indexOf("zh") === 0) return {
      skip: "跳到主要内容",
      boundary: "本页提供一般心理教育信息，不能代替诊断或治疗。如果担心持续，或对安全有疑虑，请向信任的成人或合适的专业人员寻求支持。"
    };
    return {
      skip: "Skip to main content",
      boundary: "This page provides general psychology education. It does not replace diagnosis or treatment. If a concern continues or anyone may be unsafe, seek support from a trusted adult or an appropriate professional."
    };
  }

  function init() {
    document.body.classList.add("hlm-feeling-page");
    document.body.dataset.feelingStandard = "1";
    var copy = copyForLanguage();
    var main = document.querySelector("main") || document.querySelector(".feeling-support-panel");
    if (main) {
      if (main.tagName !== "MAIN") main.setAttribute("role", "main");
      if (!main.id) main.id = "main-content";
      if (!document.querySelector(".hlm-feeling-skip")) {
        var skip = document.createElement("a");
        skip.className = "hlm-feeling-skip";
        skip.href = "#" + main.id;
        skip.textContent = copy.skip;
        document.body.insertBefore(skip, document.body.firstChild);
      }
      if (!document.querySelector(".hlm-feeling-boundary")) {
        var boundary = document.createElement("aside");
        boundary.className = "hlm-feeling-boundary";
        boundary.setAttribute("aria-label", copy.boundary);
        var paragraph = document.createElement("p");
        paragraph.textContent = copy.boundary;
        boundary.appendChild(paragraph);
        main.appendChild(boundary);
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
