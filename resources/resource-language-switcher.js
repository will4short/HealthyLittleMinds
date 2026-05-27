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
