(function () {
  "use strict";

  const LOADING_CLASS = "hlm-button-loading";
  const SPINNER_CLASS = "hlm-button-spinner";
  const LABEL_CLASS = "hlm-button-label";
  const RESET_DELAY = 1200;
  const WORLD_CUP_THEME_ENABLED = true;

  function injectStyles() {
    if (document.getElementById("hlm-button-loader-styles")) return;

    const style = document.createElement("style");
    style.id = "hlm-button-loader-styles";
    style.textContent = `
      .${LOADING_CLASS} {
        position: relative;
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        gap: 0.55em;
        pointer-events: none;
      }

      .${LOADING_CLASS} .${SPINNER_CLASS} {
        width: 1em;
        height: 1em;
        flex: 0 0 auto;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 999px;
        animation: hlm-button-spin 0.7s linear infinite;
      }

      .${LOADING_CLASS} .${LABEL_CLASS} {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      @keyframes hlm-button-spin {
        to { transform: rotate(360deg); }
      }

      @media (prefers-reduced-motion: reduce) {
        .${LOADING_CLASS} .${SPINNER_CLASS} {
          animation-duration: 1.4s;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function shouldSkip(element) {
    if (!element || element.classList.contains(LOADING_CLASS)) return true;
    if (element.closest("[data-no-loader], .no-loader")) return true;
    if (element.matches("[disabled], [aria-disabled='true']")) return true;
    if (element.matches("[aria-expanded], [aria-pressed], [data-guide-value], [data-character-filter], [data-book-scroll], [data-growth-check]")) return true;
    if (element.id && /theme|hamburger|dismiss|close|toggle|clear|reset|eraser|sound|scroll/i.test(element.id)) return true;
    if (element.type && /reset/i.test(element.type) && !element.matches("[data-loader]")) return true;

    if (element.tagName === "A") {
      const href = element.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return true;
    }

    return false;
  }

  function wrapContents(element) {
    if (element.querySelector(":scope > ." + LABEL_CLASS)) return;

    const label = document.createElement("span");
    label.className = LABEL_CLASS;
    while (element.firstChild) {
      label.appendChild(element.firstChild);
    }
    element.appendChild(label);
  }

  function showLoader(element) {
    if (shouldSkip(element)) return;

    wrapContents(element);
    const spinner = document.createElement("span");
    spinner.className = SPINNER_CLASS;
    spinner.setAttribute("aria-hidden", "true");

    element.classList.add(LOADING_CLASS);
    element.setAttribute("aria-busy", "true");
    element.prepend(spinner);

    window.setTimeout(() => {
      spinner.remove();
      element.classList.remove(LOADING_CLASS);
      element.removeAttribute("aria-busy");
    }, RESET_DELAY);
  }

  function setupButtonLoaders() {
    injectStyles();
    loadWorldCupTheme();

    document.addEventListener("click", (event) => {
      const target = event.target.closest("a, button");
      if (!target) return;

      window.setTimeout(() => {
        if (!event.defaultPrevented) showLoader(target);
      }, 0);
    });

    document.addEventListener("submit", (event) => {
      const button = event.submitter || event.target.querySelector("button[type='submit'], input[type='submit']");
      if (button) showLoader(button);
    });

    window.addEventListener("pageshow", () => {
      document.querySelectorAll("." + LOADING_CLASS).forEach((element) => {
        element.classList.remove(LOADING_CLASS);
        element.removeAttribute("aria-busy");
        element.querySelectorAll(":scope > ." + SPINNER_CLASS).forEach((spinner) => spinner.remove());
      });
    });
  }

  function loadWorldCupTheme() {
    if (!WORLD_CUP_THEME_ENABLED) return;
    if (document.querySelector("script[src*='worldcup-theme.js']")) return;

    const current = document.currentScript || Array.from(document.scripts).find((script) => /button-loader\.js/i.test(script.src));
    const src = current && current.src
      ? new URL("worldcup-theme.js?v=1", current.src).toString()
      : "worldcup-theme.js?v=1";

    const script = document.createElement("script");
    script.defer = true;
    script.src = src;
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupButtonLoaders);
  } else {
    setupButtonLoaders();
  }
})();
