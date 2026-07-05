(function () {
  "use strict";

  var nav = document.getElementById("mobileNav");
  var backdrop = document.getElementById("navBackdrop");
  var menuButton = document.querySelector(".hamburger, .menu-toggle");
  var languageNav = document.querySelector(".language-switcher");
  if (!nav || !menuButton) return;

  var lang = (document.documentElement.lang || "en").toLowerCase();
  var locale = lang.indexOf("ja") === 0 ? "ja"
    : lang.indexOf("ko") === 0 ? "ko"
    : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "zhHant"
    : lang.indexOf("zh") === 0 ? "zhCN"
    : "en";
  var copy = {
    en: { menu: "Menu", open: "Open menu", close: "Close menu", language: "Languages", light: "Light mode", dark: "Dark mode" },
    ja: { menu: "メニュー", open: "メニューを開く", close: "メニューを閉じる", language: "言語", light: "ライトモード", dark: "ダークモード" },
    ko: { menu: "메뉴", open: "메뉴 열기", close: "메뉴 닫기", language: "언어", light: "라이트 모드", dark: "다크 모드" },
    zhCN: { menu: "菜单", open: "打开菜单", close: "关闭菜单", language: "语言", light: "浅色模式", dark: "深色模式" },
    zhHant: { menu: "選單", open: "開啟選單", close: "關閉選單", language: "語言", light: "淺色模式", dark: "深色模式" }
  }[locale];
  var focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
  var previousFocus = null;

  document.body.classList.add("home-mobile-ui");
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", copy.open);
  nav.setAttribute("aria-label", copy.menu);

  var head = nav.querySelector(".mobile-nav__head");
  if (!head) {
    head = document.createElement("div");
    head.className = "mobile-nav__head";
    var title = document.createElement("strong");
    title.textContent = copy.menu;
    head.appendChild(title);
    nav.insertBefore(head, nav.firstChild);
  }

  var closeButton = head.querySelector(".mobile-nav__close");
  if (!closeButton) {
    closeButton = document.createElement("button");
    closeButton.className = "mobile-nav__close no-loader";
    closeButton.type = "button";
    closeButton.textContent = "×";
    head.appendChild(closeButton);
  }
  closeButton.setAttribute("aria-label", copy.close);

  function setNavFocusable(enabled) {
    nav.querySelectorAll(focusableSelector).forEach(function (element) {
      if (enabled) {
        if (element.dataset.closedTabindex !== undefined) {
          var oldValue = element.dataset.closedTabindex;
          delete element.dataset.closedTabindex;
          if (oldValue) element.setAttribute("tabindex", oldValue);
          else element.removeAttribute("tabindex");
        }
      } else {
        if (element.dataset.closedTabindex === undefined) {
          element.dataset.closedTabindex = element.getAttribute("tabindex") || "";
        }
        element.setAttribute("tabindex", "-1");
      }
    });
  }

  function setMenu(open, returnFocus) {
    nav.classList.toggle("open", open);
    document.body.classList.toggle("body-lock", open);
    if (backdrop) backdrop.classList.toggle("show", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? copy.close : copy.open);
    nav.setAttribute("aria-hidden", String(!open));
    setNavFocusable(open);
    if (open) {
      previousFocus = document.activeElement;
      closeButton.focus();
    } else if (returnFocus && previousFocus && previousFocus.focus) {
      previousFocus.focus();
    }
  }

  window.toggleMobileMenu = function (force) {
    var open = typeof force === "boolean" ? force : !nav.classList.contains("open");
    setMenu(open, !open);
  };

  menuButton.addEventListener("click", function () {
    window.toggleMobileMenu();
  });
  closeButton.addEventListener("click", function () { setMenu(false, true); });
  if (backdrop) backdrop.addEventListener("click", function () { setMenu(false, true); });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false, false);
  });
  nav.addEventListener("keydown", function (event) {
    if (event.key !== "Tab" || !nav.classList.contains("open")) return;
    var items = Array.prototype.filter.call(nav.querySelectorAll(focusableSelector), function (item) {
      return item.getAttribute("tabindex") !== "-1";
    });
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("open")) setMenu(false, true);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && nav.classList.contains("open")) setMenu(false, false);
  });
  setNavFocusable(false);

  document.querySelectorAll("[data-home-logout]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("isMember");
      window.location.href = control.dataset.homeLogout || "index.html";
    });
  });

  document.querySelectorAll("[id$='-copy-year']").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  var desktopThemeButton = locale === "en" ? null : document.getElementById("homeThemeToggle");
  var mobileThemeButton = locale === "en" ? null : document.getElementById("homeThemeToggleMob");
  function syncThemeButtons(dark) {
    if (desktopThemeButton) {
      desktopThemeButton.textContent = "";
      desktopThemeButton.setAttribute("aria-label", dark ? copy.light : copy.dark);
      desktopThemeButton.title = dark ? copy.light : copy.dark;
    }
    if (mobileThemeButton) mobileThemeButton.textContent = dark ? copy.light : copy.dark;
  }
  function toggleTheme() {
    var dark = !document.documentElement.classList.contains("dark-mode");
    document.documentElement.classList.toggle("dark-mode", dark);
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("hlmTheme", dark ? "dark" : "light");
    syncThemeButtons(dark);
  }
  var themeIsDark = localStorage.getItem("hlmTheme") === "dark";
  syncThemeButtons(themeIsDark);
  if (desktopThemeButton) desktopThemeButton.addEventListener("click", toggleTheme);
  if (mobileThemeButton) mobileThemeButton.addEventListener("click", toggleTheme);

  if (languageNav) {
    if (!languageNav.id) languageNav.id = "homeLanguageMenu";
    var languageButton = document.createElement("button");
    languageButton.className = "home-language-toggle no-loader";
    languageButton.type = "button";
    languageButton.setAttribute("aria-controls", languageNav.id);
    languageButton.setAttribute("aria-expanded", "false");
    languageButton.setAttribute("aria-label", copy.language);
    languageButton.textContent = copy.language;
    document.body.appendChild(languageButton);

    function setLanguages(open) {
      languageNav.classList.toggle("is-open", open);
      languageButton.setAttribute("aria-expanded", String(open));
    }

    languageButton.addEventListener("click", function () {
      setLanguages(!languageNav.classList.contains("is-open"));
    });
    document.addEventListener("click", function (event) {
      if (!languageNav.classList.contains("is-open")) return;
      if (!languageNav.contains(event.target) && event.target !== languageButton) setLanguages(false);
    });
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && languageNav.classList.contains("is-open")) {
        setLanguages(false);
        languageButton.focus();
      }
    });
  }
}());
