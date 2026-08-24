(function () {
  "use strict";

  var supportedLocales = ["ja", "ko", "zh-cn", "zh-tw"];

  function locale() {
    var first = window.location.pathname.split("/").filter(Boolean)[0] || "";
    return supportedLocales.indexOf(first.toLowerCase()) >= 0 ? first.toLowerCase() : "en";
  }

  function page(name, query) {
    var prefix = locale() === "en" ? "/" : "/" + locale() + "/";
    var result = prefix + name.replace(/^\/+/, "");
    if (query) result += "?" + new URLSearchParams(query).toString();
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
