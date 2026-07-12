(function () {
  "use strict";

  function isMember() {
    try {
      return window.localStorage.getItem("isMember") === "true";
    } catch (_) {
      return false;
    }
  }

  function membershipHrefFor(link) {
    var href = link.getAttribute("href") || "";
    var match = href.match(/^(\.\/|(?:\.\.\/)*|)(home|index)\.html$/);
    if (!match) return "";
    return (match[1] || "") + (isMember() ? "home.html" : "index.html");
  }

  function shouldUpdate(link) {
    if (!link || link.dataset.membershipHome === "false") return false;
    if (link.dataset.membershipHome === "true") return true;

    var classes = link.className || "";
    var label = [
      link.getAttribute("aria-label") || "",
      link.getAttribute("title") || "",
      link.textContent || ""
    ].join(" ").toLowerCase();

    return /\b(brand|logo|site-title|home)\b/i.test(classes)
      || label.indexOf("healthy little minds") !== -1
      || /\bhome\b/.test(label)
      || label.indexOf("\u9996\u9801") !== -1
      || label.indexOf("\u9996\u9875") !== -1
      || label.indexOf("\u30db\u30fc\u30e0") !== -1
      || label.indexOf("\ud648") !== -1;
  }

  function updateMembershipLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      var target = membershipHrefFor(link);
      if (!target || !shouldUpdate(link)) return;
      link.setAttribute("href", target);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateMembershipLinks);
  } else {
    updateMembershipLinks();
  }
})();
