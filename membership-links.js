(function () {
  "use strict";

  var previewKey = "hlmHomePreviewUntil";
  var localeCodes = ["ja", "ko", "zh-cn", "zh-tw"];
  var previewPageNames = ["home", "index", "about_me", "will-talks", "teachers", "parents", "social"];

  function activePreview() {
    try {
      return Number(window.localStorage.getItem(previewKey) || 0) > Date.now();
    } catch (_) {
      return false;
    }
  }

  function currentLocale() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    for (var index = 0; index < parts.length; index += 1) {
      if (localeCodes.indexOf(parts[index].toLowerCase()) !== -1) return parts[index].toLowerCase();
    }
    return "";
  }

  function isPreviewEntryPath() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    var allowedPages = previewPageNames.join("|");
    return path === "/"
      || new RegExp("^/(?:" + allowedPages + ")\\.html$", "i").test(path)
      || new RegExp("^/(?:ja|ko|zh-cn|zh-tw)(?:/(?:" + allowedPages + ")\\.html)?$", "i").test(path);
  }

  function previewHomeUrl() {
    var locale = currentLocale();
    return locale ? "/" + locale + "/home.html" : "/home.html";
  }

  function isAllowedPreviewLink(link) {
    var value = link.dataset.previewRestrictedHref || link.getAttribute("href") || "";
    if (!value || value.charAt(0) === "#" || /^(mailto:|tel:|javascript:)/i.test(value)) return true;

    try {
      var url = new URL(value, window.location.href);
      if (/\.(pdf|zip|docx?|xlsx?|pptx?|mp4)(?:$|[?#])/i.test(url.href) || link.hasAttribute("download")) return false;
      if (url.origin !== window.location.origin) return !/heyzine\.com\/flip-book\//i.test(url.href);

      var path = url.pathname.replace(/\/+$/, "") || "/";
      var allowedPages = previewPageNames.join("|");
      return path === "/"
        || new RegExp("^/(?:" + allowedPages + ")\\.html$", "i").test(path)
        || new RegExp("^/(?:ja|ko|zh-cn|zh-tw)(?:/(?:" + allowedPages + ")\\.html)?$", "i").test(path);
    } catch (_) {
      return false;
    }
  }

  if (activePreview() && !isMember() && !isPreviewEntryPath()) {
    window.location.replace(previewHomeUrl() + "?preview=restricted");
    return;
  }

  if (activePreview() && !isMember() && /\/(?:about_me|will-talks|teachers|parents|social)\.html$/i.test(window.location.pathname)) {
    var preparePreviewLinks = function () {
      document.querySelectorAll("a").forEach(function (link) {
        if (link.hasAttribute("data-preview-book-href") || isAllowedPreviewLink(link)) return;
        if (!link.dataset.previewRestrictedHref) link.dataset.previewRestrictedHref = link.href;
        link.removeAttribute("href");
        link.setAttribute("role", "link");
        link.setAttribute("tabindex", "0");
        link.setAttribute("aria-disabled", "true");
      });
    };

    var openPreviewRestriction = function (link, event) {
      if (!link || isAllowedPreviewLink(link)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = previewHomeUrl() + "?preview=restricted";
    };

    document.addEventListener("click", function (event) {
      var link = event.target.closest && event.target.closest("a");
      openPreviewRestriction(link, event);
    }, true);

    document.addEventListener("auxclick", function (event) {
      var link = event.target.closest && event.target.closest("a");
      openPreviewRestriction(link, event);
    }, true);

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      var link = event.target.closest && event.target.closest("a");
      openPreviewRestriction(link, event);
    }, true);

    preparePreviewLinks();
    new MutationObserver(preparePreviewLinks).observe(document.body, { childList: true, subtree: true });
  }

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
