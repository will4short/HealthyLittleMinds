(function () {
  "use strict";

  function getCopy() {
    var lang = (document.documentElement.lang || "en").toLowerCase();
    if (lang.indexOf("ja") === 0) return {
      skip: "主な内容へ移動",
      boundary: "このページは一般的な教育情報です。個別の診断、治療、危機対応に代わるものではありません。心配が続く場合や安全が心配な場合は、適切な専門家や地域の支援先に相談してください。"
    };
    if (lang.indexOf("ko") === 0) return {
      skip: "주요 내용으로 건너뛰기",
      boundary: "이 페이지는 일반적인 교육 정보입니다. 개별 진단, 치료 또는 위기 대응을 대신하지 않습니다. 걱정이 계속되거나 안전이 염려되면 적절한 전문가나 지역 지원 기관에 문의하세요."
    };
    if (lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0) return {
      skip: "跳到主要內容",
      boundary: "本頁提供一般教育資訊，不能取代個別診斷、治療或危機介入。如果擔心持續，或對安全有疑慮，請聯絡合適的專業人員或當地支援服務。"
    };
    if (lang.indexOf("zh") === 0) return {
      skip: "跳到主要内容",
      boundary: "本页提供一般教育信息，不能代替个别诊断、治疗或危机干预。如果担心持续，或对安全有疑虑，请联系合适的专业人员或当地支持服务。"
    };
    return {
      skip: "Skip to main content",
      boundary: "This page provides general education. It does not replace individual diagnosis, treatment, or crisis support. If a concern continues or anyone may be unsafe, contact an appropriate professional or local support service."
    };
  }

  function init() {
    document.body.classList.add("hlm-resource-page");
    document.body.dataset.resourceStandard = "1";
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
