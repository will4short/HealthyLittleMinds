(function () {
  "use strict";

  document.body.classList.add("ui-upgraded");

  var lang = (document.documentElement.lang || "en").toLowerCase();
  var locale = lang.indexOf("ja") === 0 ? "ja"
    : lang.indexOf("ko") === 0 ? "ko"
    : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "zhHant"
    : lang.indexOf("zh") === 0 ? "zhCN"
    : "en";

  var copy = {
    en: {
      libraryTitle: "Every friend has a character library",
      libraryText: "Open a character to discover their books, audiobooks, and activities.",
      libraryCount: "6 libraries"
    },
    ja: {
      libraryTitle: "キャラクターごとの本棚",
      libraryText: "キャラクターを開くと、本・オーディオブック・活動が見つかります。",
      libraryCount: "6つの本棚"
    },
    ko: {
      libraryTitle: "친구마다 캐릭터 도서관이 있어요",
      libraryText: "캐릭터를 열어 책, 오디오북, 활동을 찾아보세요.",
      libraryCount: "도서관 6개"
    },
    zhCN: {
      libraryTitle: "每位朋友都有角色图书馆",
      libraryText: "打开角色，发现他们的图书、有声书和活动。",
      libraryCount: "6个图书馆"
    },
    zhHant: {
      libraryTitle: "每位朋友都有角色圖書館",
      libraryText: "打開角色，探索他們的圖書、有聲書和活動。",
      libraryCount: "6個圖書館"
    }
  }[locale];

  function addLibraryIntro() {
    var grid = document.querySelector("#characters .character-grid");
    if (!grid || document.querySelector(".character-library-intro")) return;
    var intro = document.createElement("div");
    intro.className = "character-library-intro";
    intro.innerHTML = '<div><strong>' + copy.libraryTitle + '</strong><span>' + copy.libraryText + '</span></div><span class="character-library-intro__count">' + copy.libraryCount + '</span>';
    grid.parentNode.insertBefore(intro, grid);
  }

  function initLanguageSwitcher() {
    var switcher = document.querySelector(".language-switcher");
    if (!switcher || switcher.dataset.toggleReady === "true") return;

    var toggle = switcher.querySelector(".language-switcher__toggle");
    if (!toggle) return;

    switcher.dataset.toggleReady = "true";
    var openLabel = toggle.getAttribute("aria-label") || "Open language choices";
    var closeLabel = toggle.dataset.closeLabel || "Close language choices";

    function setOpen(open, returnFocus) {
      switcher.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? closeLabel : openLabel);
      if (!open && returnFocus) toggle.focus({ preventScroll: true });
    }

    toggle.addEventListener("click", function () {
      setOpen(!switcher.classList.contains("is-open"), false);
    });

    switcher.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false, false);
    });

    document.addEventListener("click", function (event) {
      if (!switcher.contains(event.target)) setOpen(false, false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && switcher.classList.contains("is-open")) {
        setOpen(false, true);
      }
    });
  }

  function initAnnouncementDismissal() {
    if (document.body.dataset.announcementDismissReady === "true") return;
    document.body.dataset.announcementDismissReady = "true";

    document.addEventListener("click", function (event) {
      var dismissButton = event.target.closest('[data-home-action="dismiss-announcement"], #dismissBtn');
      if (!dismissButton) return;

      var bar = dismissButton.closest("#announcementBar");
      if (!bar || bar.hidden) return;

      bar.classList.add("is-dismissing");
      window.setTimeout(function () {
        bar.classList.add("is-dismissed");
        bar.hidden = true;
        bar.style.setProperty("display", "none", "important");
      }, 180);
    });
  }

  addLibraryIntro();
  initLanguageSwitcher();
  initAnnouncementDismissal();
}());
