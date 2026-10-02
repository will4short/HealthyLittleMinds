(function () {
  "use strict";

  var supportedLocales = ["ja", "ko", "zh-cn", "zh-tw"];

  function locale() {
    var requested = new URLSearchParams(window.location.search).get("locale") || "";
    if (supportedLocales.indexOf(requested.toLowerCase()) >= 0) return requested.toLowerCase();
    var first = window.location.pathname.split("/").filter(Boolean)[0] || "";
    return supportedLocales.indexOf(first.toLowerCase()) >= 0 ? first.toLowerCase() : "en";
  }

  function page(name, query) {
    var currentLocale = locale();
    var cleanName = name.replace(/^\/+/, "");
    var isSharedAccount = cleanName === "account.html";
    var prefix = isSharedAccount || currentLocale === "en" ? "/" : "/" + currentLocale + "/";
    var result = prefix + cleanName;
    var destinationQuery = Object.assign({}, query || {});
    if (isSharedAccount && currentLocale !== "en") destinationQuery.locale = currentLocale;
    var encodedQuery = new URLSearchParams(destinationQuery).toString();
    if (encodedQuery) result += "?" + encodedQuery;
    return result;
  }

  function absolutePage(name, query) {
    return new URL(page(name, query), window.location.origin).toString();
  }

  // Returns a same-origin path (with query and hash) or "" when the value could
  // leave this site. Browsers treat "\" like "/" and strip tabs/newlines while
  // parsing, so "/\evil.example" or "/\t/evil.example" would otherwise resolve
  // to another host.
  function safeReturnPath(value) {
    if (typeof value !== "string" || value.charAt(0) !== "/") return "";
    if (/[\\\u0000-\u001f\u007f]/.test(value)) return "";
    var origin = window.location.origin;
    var url;
    try {
      url = new URL(value, origin);
    } catch (_) {
      return "";
    }
    if (url.origin !== origin) return "";
    return url.pathname + url.search + url.hash;
  }

  window.HLMRouting = {
    absolutePage: absolutePage,
    locale: locale,
    page: page,
    safeReturnPath: safeReturnPath
  };
})();
