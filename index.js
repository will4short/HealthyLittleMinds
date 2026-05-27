(function () {
  "use strict";

  function checkLogin() {
    const input = document.getElementById("password-input");
    const password = (input ? input.value : "").trim();
    if (password === "members123") {
      localStorage.setItem("isMember", "true");
      window.location.href = "home.html";
      return;
    }
    window.alert(input && input.dataset.errorMessage
      ? input.dataset.errorMessage
      : "Incorrect password. Please check your email for access.");
  }

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

  function setupLogin() {
    const input = document.getElementById("password-input");
    const button = document.getElementById("loginButton");
    if (button) button.addEventListener("click", checkLogin);
    if (input) {
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkLogin();
      });
    }
  }

  function setupTheme() {
    const button = document.getElementById("themeToggle");
    if (!button) return;
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const dark = document.body.classList.contains("dark-mode");
      button.textContent = dark
        ? (button.dataset.lightLabel || "Light Mode")
        : (button.dataset.darkLabel || "Dark Mode");
    });
  }

  function setupMedia() {
    const video = document.getElementById("magicJarVideo");
    if (video) {
      video.addEventListener("click", () => {
        video.muted = false;
        video.currentTime = 0;
        video.play().catch(() => {});
      });
    }
    const audio = document.getElementById("welcomeSong");
    const toggle = document.getElementById("soundToggle");
    if (!audio || !toggle) return;
    audio.play().catch(() => {});
    toggle.addEventListener("click", () => {
      const enable = audio.muted;
      audio.muted = !enable;
      toggle.textContent = enable
        ? (toggle.dataset.soundOn || "Sound On")
        : (toggle.dataset.soundOff || "Sound Off");
      toggle.setAttribute("aria-pressed", String(enable));
      if (enable) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    });
  }

  function setupMenu() {
    const button = document.getElementById("hamburgerBtn");
    const panel = document.getElementById("menuDropdown");
    const backdrop = document.getElementById("menuBackdrop");
    if (!button || !panel || !backdrop) return;
    const close = () => {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
      backdrop.hidden = true;
    };
    button.addEventListener("click", () => {
      const open = !panel.classList.contains("open");
      panel.classList.toggle("open", open);
      panel.setAttribute("aria-hidden", String(!open));
      button.setAttribute("aria-expanded", String(open));
      backdrop.hidden = !open;
    });
    backdrop.addEventListener("click", close);
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function setupAnnouncement() {
    const banner = document.getElementById("newYearBanner");
    const close = document.getElementById("closeNewYear");
    if (!banner || !close) return;
    const now = new Date();
    const show = now.getFullYear() === 2026 && now.getMonth() === 0 &&
      !localStorage.getItem("ny2026Dismissed");
    if (!show) return;
    banner.hidden = false;
    const timer = window.setTimeout(() => { banner.hidden = true; }, 4000);
    close.addEventListener("click", () => {
      window.clearTimeout(timer);
      banner.hidden = true;
      localStorage.setItem("ny2026Dismissed", "true");
    });
  }

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
