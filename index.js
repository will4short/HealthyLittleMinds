(function () {
  "use strict";

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
    }

    errorEl.textContent = message;
    errorEl.hidden = false;

    // Auto-clear after 7 seconds
    clearTimeout(errorEl._timer);
    errorEl._timer = setTimeout(() => { errorEl.hidden = true; }, 7000);

    // Also clear on next keypress in the input
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
    if (button) button.addEventListener("click", checkLogin);
    if (input) {
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
  // welcomeSong is also on home.html; same safe no-op on index.
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
    const audio  = document.getElementById("welcomeSong");
    const toggle = document.getElementById("soundToggle");
    if (!audio || !toggle) return;
    audio.play().catch(() => {});
    toggle.addEventListener("click", () => {
      const enable = audio.muted;
      audio.muted   = !enable;
      toggle.textContent = enable
        ? (toggle.dataset.soundOn  || "Sound On")
        : (toggle.dataset.soundOff || "Sound Off");
      toggle.setAttribute("aria-pressed", String(enable));
      if (enable) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    });
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
  // ANNOUNCEMENT BANNER
  // CHANGED: was hardcoded to year 2026, month 0 (January only).
  // We're now in June 2026 — the banner would never fire.
  // Logic updated: show the banner whenever it exists and has not
  // been dismissed — no date gating. If you want seasonal banners
  // in future, update the HTML content and clear the localStorage
  // key (rename "ny2026Dismissed" to a new key each time).
  // ─────────────────────────────────────────────────────────────
  function setupAnnouncement() {
    const banner = document.getElementById("newYearBanner");
    const close  = document.getElementById("closeNewYear");
    if (!banner || !close) return;

    // CHANGED: removed year/month date gate that made the banner
    // permanently invisible after January 2026.
    // Now: show if not already dismissed by the user this session.
    const dismissed = localStorage.getItem("hlmBannerDismissed");
    if (dismissed) return;

    banner.hidden = false;
    const timer = window.setTimeout(() => { banner.hidden = true; }, 5000);

    close.addEventListener("click", () => {
      window.clearTimeout(timer);
      banner.hidden = true;
      localStorage.setItem("hlmBannerDismissed", "true");
    });
  }

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
    setupCharacters();
    setupLogin();
    setupTheme();
    setupMedia();
    setupMenu();
    setupAnnouncement();
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
