(function () {
  "use strict";

  var body = document.body;
  if (!body || document.querySelector(".site-language-picker, .language-switcher, .about-languages, .social-languages")) {
    return;
  }

  var path = window.location.pathname.replace(/\\/g, "/");
  var file = path.slice(path.lastIndexOf("/") + 1);
  var languageMatch = path.match(/\/(ja|ko|zh-tw|zh-cn)\/[^/]+$/i);
  var currentLanguage = languageMatch ? languageMatch[1].toLowerCase() : "en";
  var prefix = languageMatch ? "../" : "";
  var text = {
    en: { choose: "Choose language", button: "Language" },
    ja: { choose: "言語を選択", button: "言語" },
    ko: { choose: "언어 선택", button: "언어" },
    "zh-tw": { choose: "選擇語言", button: "語言" },
    "zh-cn": { choose: "选择语言", button: "语言" }
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
  style.href = prefix + "shared-language-switcher.css?v=1";
  document.head.appendChild(style);

  var wrapper = document.createElement("div");
  wrapper.className = "site-language-picker";

  var details = document.createElement("details");
  var summary = document.createElement("summary");
  summary.setAttribute("aria-label", text[currentLanguage].choose);
  summary.textContent = "\uD83C\uDF10 " + text[currentLanguage].button;
  details.appendChild(summary);

  var menu = document.createElement("nav");
  menu.className = "site-language-picker__menu";
  menu.setAttribute("aria-label", text[currentLanguage].choose);

  languages.forEach(function (language) {
    var link = document.createElement("a");
    link.href = prefix + (language.code === "en" ? "" : language.code + "/") + file;
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

    var label = document.createElement("span");
    label.textContent = language.short;

    link.appendChild(flag);
    link.appendChild(label);
    menu.appendChild(link);
  });

  details.appendChild(menu);
  wrapper.appendChild(details);
  body.classList.add("has-site-language-picker");
  body.appendChild(wrapper);
}());
