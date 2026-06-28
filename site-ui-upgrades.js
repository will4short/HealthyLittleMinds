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
      eyebrow: "Start here",
      title: "What do you need today?",
      more: "Help me choose",
      items: [["CALM", "Calm down", "interactive-tools.html"], ["STORY", "Read a story", "#emotional-literacy"], ["FEEL", "Understand a feeling", "#explore-feelings"], ["GROWN", "Parent support", "parents.html"]],
      libraryTitle: "Every friend has a character library",
      libraryText: "Open a character to discover their books, audiobooks, and activities.",
      libraryCount: "6 libraries"
    },
    ja: {
      eyebrow: "ここから",
      title: "今日は何が必要ですか？",
      more: "選び方ガイド",
      items: [["CALM", "落ち着く", "interactive-tools.html"], ["STORY", "物語を読む", "#books"], ["FEEL", "気持ちを知る", "#feelings"], ["GROWN", "保護者サポート", "parents.html"]],
      libraryTitle: "キャラクターの本棚",
      libraryText: "キャラクターを開くと、本・オーディオブック・活動が見つかります。",
      libraryCount: "6つの本棚"
    },
    ko: {
      eyebrow: "여기서 시작",
      title: "오늘 무엇이 필요한가요?",
      more: "선택 도우미",
      items: [["CALM", "마음 가라앉히기", "interactive-tools.html"], ["STORY", "이야기 읽기", "#books"], ["FEEL", "감정 이해하기", "#feelings"], ["GROWN", "보호자 지원", "parents.html"]],
      libraryTitle: "친구마다 캐릭터 도서관이 있어요",
      libraryText: "캐릭터를 열어 책, 오디오북, 활동을 찾아보세요.",
      libraryCount: "도서관 6개"
    },
    zhCN: {
      eyebrow: "从这里开始",
      title: "今天你需要什么？",
      more: "帮我选择",
      items: [["CALM", "平静下来", "interactive-tools.html"], ["STORY", "读一个故事", "#books"], ["FEEL", "了解一种情绪", "#feelings"], ["GROWN", "家长支持", "parents.html"]],
      libraryTitle: "每位朋友都有角色图书馆",
      libraryText: "打开角色，发现他们的图书、有声书和活动。",
      libraryCount: "6个图书馆"
    },
    zhHant: {
      eyebrow: "從這裡開始",
      title: "今天你需要什麼？",
      more: "幫我選擇",
      items: [["CALM", "平靜下來", "interactive-tools.html"], ["STORY", "讀一個故事", "#books"], ["FEEL", "了解一種情緒", "#feelings"], ["GROWN", "家長支持", "parents.html"]],
      libraryTitle: "每位朋友都有角色圖書館",
      libraryText: "打開角色，探索他們的圖書、有聲書和活動。",
      libraryCount: "6個圖書館"
    }
  }[locale];

  function addJourney() {
    var guide = document.getElementById("support-guide");
    if (!guide || document.querySelector(".hlm-journey")) return;
    var section = document.createElement("section");
    section.className = "hlm-journey";
    section.setAttribute("aria-labelledby", "hlmJourneyTitle");
    section.innerHTML = '<div class="hlm-journey__head"><div><p class="hlm-journey__eyebrow">' + copy.eyebrow + '</p><h2 id="hlmJourneyTitle">' + copy.title + '</h2></div><a class="hlm-journey__more" href="#support-guide">' + copy.more + '</a></div><div class="hlm-journey__grid">' + copy.items.map(function (item, index) {
      var backgrounds = ["#eef9ff", "#fff3f6", "#f0fbf7", "#fff8e8"];
      return '<a class="hlm-journey__item" style="--journey-bg:' + backgrounds[index] + '" href="' + item[2] + '"><span class="hlm-journey__mark" aria-hidden="true">' + item[0] + '</span><span>' + item[1] + '</span></a>';
    }).join("") + "</div>";
    guide.parentNode.insertBefore(section, guide);
  }

  function addLibraryIntro() {
    var grid = document.querySelector("#characters .character-grid");
    if (!grid || document.querySelector(".character-library-intro")) return;
    var intro = document.createElement("div");
    intro.className = "character-library-intro";
    intro.innerHTML = '<div><strong>' + copy.libraryTitle + '</strong><span>' + copy.libraryText + '</span></div><span class="character-library-intro__count">' + copy.libraryCount + '</span>';
    grid.parentNode.insertBefore(intro, grid);
  }

  addJourney();
  addLibraryIntro();
}());
