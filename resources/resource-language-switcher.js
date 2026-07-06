(function () {
  "use strict";

  var body = document.body;
  if (!body || !body.classList.contains("topic-page") || document.querySelector(".resource-languages")) {
    return;
  }

  var path = window.location.pathname.replace(/\\/g, "/");
  var file = path.slice(path.lastIndexOf("/") + 1) || "emotions.html";
  var languageMatch = path.match(/\/(ja|ko|zh-tw|zh-cn)\/resources\/[^/]+$/i);
  var currentLanguage = languageMatch ? languageMatch[1].toLowerCase() : "en";
  var prefix = languageMatch ? "../../" : "../";
  var labels = {
    en: "Choose language",
    ja: "言語を選択",
    ko: "언어 선택",
    "zh-tw": "選擇語言",
    "zh-cn": "选择语言"
  };
  var shortLabels = {
    en: "Language",
    ja: "言語",
    ko: "언어",
    "zh-tw": "語言",
    "zh-cn": "语言"
  };
  var languages = [
    { code: "en", short: "EN", title: "English", flag: "flag-en.webp" },
    { code: "zh-tw", short: "繁", title: "繁體中文", flag: "flag-tw.webp" },
    { code: "zh-cn", short: "简", title: "简体中文", flag: "flag-cn.webp" },
    { code: "ja", short: "日", title: "日本語", flag: "flag-jp.webp" },
    { code: "ko", short: "한", title: "한국어", flag: "flag-kr.webp" }
  ];

  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = prefix + "resources/resource-language-switcher.css?v=1";
  document.head.appendChild(style);

  var polishStyle = document.querySelector('link[href*="resource-polish.css"]');
  if (polishStyle) {
    var polishUrl = new URL(polishStyle.href, window.location.href);
    polishUrl.searchParams.set("v", "9");
    polishStyle.href = polishUrl.href;
  }

  if (!document.querySelector('link[href*="resource-page-standard.css"]')) {
    var standardStyle = document.createElement("link");
    standardStyle.rel = "stylesheet";
    standardStyle.href = prefix + "resources/resource-page-standard.css?v=11";
    document.head.appendChild(standardStyle);
  }
  if (!document.querySelector('script[src*="resource-page-standard.js"]')) {
    var standardScript = document.createElement("script");
    standardScript.src = prefix + "resources/resource-page-standard.js?v=3";
    standardScript.defer = true;
    document.head.appendChild(standardScript);
  }
  if (!document.querySelector('script[src*="resource-content-library.js"]')) {
    var loadContentLibrary = function () {
      if (document.querySelector('script[src*="resource-content-library.js"]')) return;
      var contentScript = document.createElement("script");
      contentScript.src = prefix + "resources/resource-content-library.js?v=2";
      contentScript.defer = true;
      document.head.appendChild(contentScript);
    };
    var translationScript = document.createElement("script");
    translationScript.src = prefix + "resources/resource-content-locales.js?v=1";
    translationScript.defer = true;
    var loadLocaleSupplement = function () {
      var supplement = document.createElement("script");
      supplement.src = prefix + "resources/resource-content-zh-tw.js?v=1";
      supplement.defer = true;
      supplement.addEventListener("load", loadContentLibrary, { once: true });
      supplement.addEventListener("error", loadContentLibrary, { once: true });
      document.head.appendChild(supplement);
    };
    translationScript.addEventListener("load", loadLocaleSupplement, { once: true });
    translationScript.addEventListener("error", loadContentLibrary, { once: true });
    document.head.appendChild(translationScript);
  }

  var nav = document.createElement("nav");
  nav.className = "resource-languages";
  nav.setAttribute("aria-label", labels[currentLanguage]);

  var label = document.createElement("span");
  label.className = "resource-languages__label";
  label.textContent = shortLabels[currentLanguage];
  nav.appendChild(label);

  languages.forEach(function (language) {
    var link = document.createElement("a");
    link.href = prefix + (language.code === "en" ? "resources/" : language.code + "/resources/") + file;
    link.title = language.title;
    link.setAttribute("aria-label", language.title);
    if (language.code === currentLanguage) {
      link.setAttribute("aria-current", "page");
    }

    var flag = document.createElement("img");
    flag.src = prefix + "images/" + language.flag;
    flag.alt = "";
    flag.width = 19;
    flag.height = 19;
    flag.loading = "lazy";
    flag.decoding = "async";

    var text = document.createElement("span");
    text.textContent = language.short;

    link.appendChild(flag);
    link.appendChild(text);
    nav.appendChild(link);
  });

  body.classList.add("has-resource-language-switcher");
  body.appendChild(nav);
}());
