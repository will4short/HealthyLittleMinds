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

  window.HLMRouting = {
    absolutePage: absolutePage,
    locale: locale,
    page: page
  };
})();
