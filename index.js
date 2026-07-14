(function () {
  "use strict";

  function setupLandingStandard() {
    const lang = (document.documentElement.lang || "en").toLowerCase();
    const skipLabel = lang.startsWith("ja") ? "主な内容へ移動"
      : lang.startsWith("ko") ? "주요 내용으로 건너뛰기"
      : lang.startsWith("zh-tw") || lang.startsWith("zh-hant") ? "跳到主要內容"
      : lang.startsWith("zh") ? "跳到主要内容"
      : "Skip to main content";

    document.body.classList.add("hlm-landing-page");
    const loading = document.getElementById("loading-screen");
    if (loading) {
      loading.setAttribute("role", "status");
      loading.setAttribute("aria-live", "polite");
      loading.setAttribute("aria-atomic", "true");
      loading.querySelector(".spinner")?.setAttribute("aria-hidden", "true");
    }

    let main = document.querySelector("main");
    const sections = Array.from(document.querySelectorAll(".page-container > section"));
    if (!main && sections.length) {
      main = document.createElement("main");
      main.id = "main-content";
      sections[0].parentNode.insertBefore(main, sections[0]);
      sections.forEach((section) => main.appendChild(section));
    } else if (main && !main.id) {
      main.id = "main-content";
    }

    if (main && !document.querySelector(".landing-skip-link")) {
      const skip = document.createElement("a");
      skip.className = "landing-skip-link";
      skip.href = "#" + main.id;
      skip.textContent = skipLabel;
      document.body.insertBefore(skip, document.body.firstChild);
    }

    const accessInput = document.getElementById("password-input");
    const accessButton = document.getElementById("loginButton");
    if (accessInput && accessButton && !accessInput.closest("form")) {
      const accessLabels = lang.startsWith("ja") ? { field: "アクセスコード", submit: "ライブラリを開く" }
        : lang.startsWith("ko") ? { field: "이용 코드", submit: "라이브러리 열기" }
        : lang.startsWith("zh-tw") || lang.startsWith("zh-hant") ? { field: "存取碼", submit: "開啟資源庫" }
        : lang.startsWith("zh") ? { field: "访问码", submit: "打开资源库" }
        : { field: "Access code", submit: "Open library" };
      const form = document.createElement("form");
      form.className = "landing-access-form";
      form.noValidate = true;
      const label = document.createElement("label");
      label.className = "sr-only";
      label.htmlFor = accessInput.id;
      label.textContent = accessLabels.field;
      accessInput.parentNode.insertBefore(form, accessInput);
      form.appendChild(label);
      form.appendChild(accessInput);
      form.appendChild(accessButton);
      accessInput.autocomplete = "current-password";
      accessButton.type = "submit";
      accessButton.setAttribute("aria-label", accessLabels.submit);
    }

    document.querySelectorAll(".character-showcase > p[style]").forEach((paragraph) => {
      paragraph.classList.add("character-showcase__action");
      paragraph.removeAttribute("style");
      const link = paragraph.querySelector("a[style]");
      if (link) {
        link.classList.add("character-showcase__link");
        link.removeAttribute("style");
      }
    });

    const languageSwitcher = document.querySelector(".language-switcher");
    if (languageSwitcher) {
      languageSwitcher.querySelectorAll("a").forEach((link) => link.removeAttribute("aria-current"));
      const currentFile = window.location.pathname.replace(/\\/g, "/");
      let currentLink = Array.from(languageSwitcher.querySelectorAll("a")).find((link) => {
        const target = new URL(link.href, window.location.href).pathname.replace(/\\/g, "/");
        return target === currentFile;
      });
      if (!currentLink && !lang.startsWith("ja") && !lang.startsWith("ko") && !lang.startsWith("zh")) {
        currentLink = document.createElement("a");
        currentLink.href = "index.html";
        currentLink.title = "English";
        currentLink.setAttribute("aria-label", "English");
        const flag = document.createElement("img");
        flag.src = "images/flag-en.webp";
        flag.alt = "";
        flag.width = 24;
        flag.loading = "lazy";
        currentLink.appendChild(flag);
        languageSwitcher.insertBefore(currentLink, languageSwitcher.firstChild);
      }
      currentLink?.setAttribute("aria-current", "page");

      const languageCopy = lang.startsWith("ja")
        ? { button: "言語", open: "言語の選択肢を開く", close: "言語の選択肢を閉じる" }
        : lang.startsWith("ko")
          ? { button: "언어", open: "언어 선택 열기", close: "언어 선택 닫기" }
          : lang.startsWith("zh-tw") || lang.startsWith("zh-hant")
            ? { button: "語言", open: "開啟語言選項", close: "關閉語言選項" }
            : lang.startsWith("zh")
              ? { button: "语言", open: "打开语言选项", close: "关闭语言选项" }
              : { button: "Language", open: "Open language choices", close: "Close language choices" };

      languageSwitcher.querySelector(".language-switcher__label")?.remove();
      let languageToggle = languageSwitcher.querySelector(".language-switcher__toggle");
      if (!languageToggle) {
        languageToggle = document.createElement("button");
        languageToggle.className = "language-switcher__toggle";
        languageToggle.type = "button";
        languageToggle.innerHTML = '<span aria-hidden="true">🌐</span><span>' + languageCopy.button + '</span><span class="language-switcher__chevron" aria-hidden="true"></span>';
        languageSwitcher.prepend(languageToggle);
      }
      languageToggle.setAttribute("aria-expanded", "false");
      languageToggle.setAttribute("aria-label", languageCopy.open);
      languageSwitcher.classList.add("has-language-toggle");

      const setLanguageMenuOpen = (open) => {
        languageSwitcher.classList.toggle("is-open", open);
        languageToggle.setAttribute("aria-expanded", String(open));
        languageToggle.setAttribute("aria-label", open ? languageCopy.close : languageCopy.open);
      };

      languageToggle.addEventListener("click", () => {
        setLanguageMenuOpen(!languageSwitcher.classList.contains("is-open"));
      });
      document.addEventListener("click", (event) => {
        if (!languageSwitcher.classList.contains("is-open") || languageSwitcher.contains(event.target)) return;
        setLanguageMenuOpen(false);
      });
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !languageSwitcher.classList.contains("is-open")) return;
        setLanguageMenuOpen(false);
        languageToggle.focus();
      });
    }

    const sectionMap = [
      [".access-hero", "introduction"],
      [".trailer-section", "trailer"],
      [".member-entry", "member-entry"],
      [".library-preview", "free-resources"],
      [".pathways-section", "audiences"],
      [".journey-section", "learning-path"],
      [".member-benefits", "access-options"],
      [".character-showcase", "stories"],
      [".trust-note", "scope"],
      [".faq-section", "questions"]
    ];
    sectionMap.forEach(([selector, value]) => {
      document.querySelector(selector)?.setAttribute("data-landing-section", value);
    });

    // Testimonials require documented, reviewable consent and provenance.
    // Keep them out of the public landing experience until that evidence exists.
    document.querySelector(".testimonials")?.remove();
  }

  function setupLandingBehaviors() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll([
      ".access-hero",
      ".trailer-section",
      ".member-entry",
      ".library-preview",
      ".pathways-section",
      ".journey-section",
      ".member-benefits",
      ".character-showcase",
      ".trust-note",
      ".faq-section"
    ].join(",")));

    revealTargets.forEach((section, index) => {
      section.classList.add("landing-reveal");
      section.style.setProperty("--reveal-index", String(Math.min(index, 6)));
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((section) => section.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      revealTargets.forEach((section) => observer.observe(section));
    }

    const pathwayCards = Array.from(document.querySelectorAll(".pathway-card"));
    pathwayCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        pathwayCards.forEach((item) => item.classList.toggle("is-active", item === card));
      });
      card.addEventListener("focusin", () => {
        pathwayCards.forEach((item) => item.classList.toggle("is-active", item === card));
      });
    });
    document.querySelector(".pathways-section")?.addEventListener("mouseleave", () => {
      pathwayCards.forEach((item) => item.classList.remove("is-active"));
    });

    const journeySteps = Array.from(document.querySelectorAll(".journey-step"));
    const setJourneyStep = (selected) => {
      journeySteps.forEach((step) => {
        const active = step === selected;
        step.classList.toggle("is-active", active);
        step.setAttribute("aria-pressed", String(active));
      });
    };
    journeySteps.forEach((step, index) => {
      step.tabIndex = 0;
      step.setAttribute("role", "button");
      step.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      step.addEventListener("click", () => setJourneyStep(step));
      step.addEventListener("focus", () => setJourneyStep(step));
      step.addEventListener("mouseenter", () => setJourneyStep(step));
      step.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        setJourneyStep(step);
      });
    });
    if (journeySteps.length) setJourneyStep(journeySteps[0]);

    const faqItems = Array.from(document.querySelectorAll(".faq-grid details"));
    faqItems.forEach((item) => {
      item.addEventListener("toggle", () => {
        item.classList.toggle("is-open", item.open);
        if (!item.open) return;
        faqItems.forEach((other) => {
          if (other !== item) {
            other.open = false;
            other.classList.remove("is-open");
          }
        });
      });
    });

    const videos = Array.from(document.querySelectorAll(".trailer-video"));
    videos.forEach((video) => {
      const card = video.closest(".trailer-card");
      video.muted = true;
      video.dataset.autoScrollVideo = "true";
      video.addEventListener("play", () => {
        videos.forEach((other) => {
          if (other !== video) other.pause();
        });
        card?.classList.add("is-playing");
      });
      ["pause", "ended"].forEach((eventName) => {
        video.addEventListener(eventName, () => {
          card?.classList.remove("is-playing");
        });
      });
    });

    if (!reducedMotion && "IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            return;
          }
          if (!video.paused) video.pause();
        });
      }, { threshold: 0.55, rootMargin: "-8% 0px -8% 0px" });
      videos.forEach((video) => videoObserver.observe(video));
    }
  }

  // ─────────────────────────────────────────────────────────────
  // LOGIN
  // CHANGED: error alert now includes a "Get Access" link so a
  // visitor who typed the wrong password has an immediate path
  // to purchase rather than a dead end.
  // All IDs (password-input, loginButton) are untouched.
  // ─────────────────────────────────────────────────────────────
  function checkLogin() {
    const input    = document.getElementById("password-input");
    const password = (input ? input.value : "").trim();

    if (password === "members123") {
      localStorage.setItem("isMember", "true");
      window.location.href = "home.html";
      return;
    }

    // CHANGED: richer error — uses data-error-message if set,
    // otherwise shows the default with a purchase nudge.
    const customMsg = input && input.dataset.errorMessage
      ? input.dataset.errorMessage
      : null;

    showLoginError(
      customMsg ||
      "Incorrect password. Please check your email for the access code.\n\nDon't have one yet? Visit healthylittleminds.club to get access."
    );
  }

  // ADDED: replaces window.alert() with an inline error message
  // shown directly below the login button — no browser dialog,
  // friendlier on mobile, matches brand personality.
  // D2: inline styles removed — #login-error-msg now styled via style-index.css
  function showLoginError(message) {
    let errorEl = document.getElementById("login-error-msg");
    if (!errorEl) {
      errorEl = document.createElement("p");
      errorEl.id = "login-error-msg";
      errorEl.setAttribute("role", "alert");
      errorEl.setAttribute("aria-live", "assertive");

      // Insert after the login button
      const btn = document.getElementById("loginButton");
      if (btn && btn.parentNode) {
        btn.parentNode.insertBefore(errorEl, btn.nextSibling);
      }
      document.getElementById("password-input")?.setAttribute("aria-describedby", errorEl.id);
    }

    errorEl.textContent = message;
    errorEl.hidden = false;

    // Keep the message available until the visitor edits the code.
    const input = document.getElementById("password-input");
    if (input) {
      input.addEventListener("keydown", () => { errorEl.hidden = true; }, { once: true });
    }
  }

  // ─────────────────────────────────────────────────────────────
  // CHARACTER CARDS (index.html teaser — 3 cards, no filters)
  // UNCHANGED logic — works whether there are 3 or 7 cards.
  // ─────────────────────────────────────────────────────────────
  function setCharacterFilter(name) {
    document.querySelectorAll(".character-card").forEach((card) => {
      const show = name === "all" || card.dataset.name === name;
      card.hidden = !show;
      card.classList.remove("expanded");
      card.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll("[data-character-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.characterFilter === name);
    });
  }

  function toggleCharacter(card) {
    const expanded = !card.classList.contains("expanded");
    card.classList.toggle("expanded", expanded);
    card.setAttribute("aria-expanded", String(expanded));
  }

  function setupCharacters() {
    document.querySelectorAll("[data-character-filter]").forEach((button) => {
      button.addEventListener("click", () => setCharacterFilter(button.dataset.characterFilter));
    });
    document.querySelectorAll(".character-card").forEach((card) => {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      card.addEventListener("click", () => toggleCharacter(card));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleCharacter(card);
        }
      });
    });
    setCharacterFilter("all");
  }

  // ─────────────────────────────────────────────────────────────
  // LOGIN SETUP — UNCHANGED
  // ─────────────────────────────────────────────────────────────
  function setupLogin() {
    const input  = document.getElementById("password-input");
    const button = document.getElementById("loginButton");
    const form = input?.closest("form");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        checkLogin();
      });
    } else if (button) {
      button.addEventListener("click", checkLogin);
    }
    if (input && !form) {
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkLogin();
      });
    }
  }

  // ─────────────────────────────────────────────────────────────
  // THEME TOGGLE — UNCHANGED
  // ─────────────────────────────────────────────────────────────
  function setupTheme() {
    const button = document.getElementById("themeToggle");
    if (!button) return;

    // D3: restore saved preference on every page load
    const saved = localStorage.getItem("hlmTheme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      button.textContent = button.dataset.lightLabel || "Light Mode";
    }

    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const dark = document.body.classList.contains("dark-mode");
      button.textContent = dark
        ? (button.dataset.lightLabel || "Light Mode")
        : (button.dataset.darkLabel || "Dark Mode");
      // D3: persist the preference
      localStorage.setItem("hlmTheme", dark ? "dark" : "light");
    });
  }

  // ─────────────────────────────────────────────────────────────
  // MEDIA — UNCHANGED
  // magicJarVideo is now on home.html; the guard (if video) means
  // this is safely a no-op on index.html.
  // ─────────────────────────────────────────────────────────────
  function setupMedia() {
    const video = document.getElementById("magicJarVideo");
    if (video) {
      video.addEventListener("click", () => {
        video.muted = false;
        video.currentTime = 0;
        video.play().catch(() => {});
      });
    }
  }

  // ─────────────────────────────────────────────────────────────
  // HAMBURGER MENU — UNCHANGED
  // ─────────────────────────────────────────────────────────────
  function setupMenu() {
    const button   = document.getElementById("hamburgerBtn");
    const panel    = document.getElementById("mobileNav") || document.getElementById("menuDropdown");
    const backdrop = document.getElementById("menuBackdrop");
    if (!button || !panel || !backdrop) return;
    const close = () => {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
      backdrop.hidden = true;
      backdrop.classList.remove("show");
      document.body.classList.remove("body-lock");
    };
    button.addEventListener("click", () => {
      const open = !panel.classList.contains("open");
      panel.classList.toggle("open", open);
      panel.setAttribute("aria-hidden", String(!open));
      button.setAttribute("aria-expanded", String(open));
      backdrop.hidden = !open;
      backdrop.classList.toggle("show", open);
      document.body.classList.toggle("body-lock", open);
    });
    backdrop.addEventListener("click", close);
    panel.querySelector(".mobile-nav__close")?.addEventListener("click", close);
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  // ─────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────
  // ADDED: logout helper
  // Exposed on window so any inline onclick="logout()" in HTML
  // works. Clears isMember before redirecting.
  // ─────────────────────────────────────────────────────────────
  window.logout = function () {
    localStorage.removeItem("isMember");
    window.location.href = "index.html";
  };

  // ─────────────────────────────────────────────────────────────
  // BOOT — UNCHANGED call order
  // ─────────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    setupLandingStandard();
    setupLandingBehaviors();
    setupCharacters();
    setupLogin();
    setupTheme();
    setupMedia();
    setupMenu();
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  });

  window.addEventListener("load", () => {
    const loading = document.getElementById("loading-screen");
    if (loading) loading.hidden = true;
    if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    }
  });

})();
