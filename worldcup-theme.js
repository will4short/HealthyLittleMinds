(function () {
  "use strict";

  const STORAGE_KEY = "hlmWorldCupThemeDismissed";
  const SCRIPT_ID = "hlm-worldcup-theme";
  const STYLE_ID = "hlm-worldcup-theme-styles";

  if (document.getElementById(SCRIPT_ID) || localStorage.getItem(STORAGE_KEY) === "true") return;

  function getAssetPath(fileName) {
    const scripts = Array.from(document.scripts);
    const current = document.currentScript || scripts.find((script) => /worldcup-theme\.js/i.test(script.src));
    if (!current || !current.src) return fileName;
    return new URL(fileName, current.src).toString();
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .hlm-worldcup {
        --wc-green: #15803d;
        --wc-lime: #84cc16;
        --wc-yellow: #facc15;
        --wc-red: #ef4444;
        --wc-blue: #2563eb;
        --wc-ink: #18312f;
        position: fixed;
        inset: auto max(0.8rem, env(safe-area-inset-right)) max(0.8rem, env(safe-area-inset-bottom)) auto;
        z-index: 1000;
        display: grid;
        gap: 0.6rem;
        width: min(320px, calc(100vw - 1.6rem));
        color: var(--wc-ink);
        font-family: "DM Sans", "Nunito", Arial, sans-serif;
        pointer-events: none;
      }

      .hlm-worldcup__card {
        position: relative;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        gap: 0.75rem;
        align-items: center;
        overflow: hidden;
        padding: 0.82rem 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.78);
        border-radius: 18px;
        background:
          radial-gradient(circle at 18% 22%, rgba(250, 204, 21, 0.32), transparent 34%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(220, 252, 231, 0.94));
        box-shadow: 0 18px 42px rgba(24, 49, 47, 0.18);
        backdrop-filter: blur(14px);
        pointer-events: auto;
      }

      .hlm-worldcup__card::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, var(--wc-green), var(--wc-yellow), var(--wc-red), var(--wc-blue));
        height: 4px;
      }

      .hlm-worldcup__ball {
        position: relative;
        width: 48px;
        aspect-ratio: 1;
        border: 3px solid #10201d;
        border-radius: 50%;
        background:
          radial-gradient(circle at 50% 50%, #17211f 0 15%, transparent 16%),
          conic-gradient(from 18deg, #fff 0 12%, #111 12% 18%, #fff 18% 36%, #111 36% 42%, #fff 42% 62%, #111 62% 68%, #fff 68% 86%, #111 86% 92%, #fff 92% 100%);
        box-shadow: inset -8px -10px 0 rgba(0, 0, 0, 0.12), 0 8px 16px rgba(21, 128, 61, 0.22);
        animation: hlm-worldcup-roll 4.8s ease-in-out infinite;
      }

      .hlm-worldcup__copy {
        min-width: 0;
      }

      .hlm-worldcup__copy strong {
        display: block;
        font-size: 0.92rem;
        line-height: 1.15;
      }

      .hlm-worldcup__copy span {
        display: block;
        margin-top: 0.16rem;
        color: rgba(24, 49, 47, 0.78);
        font-size: 0.78rem;
        line-height: 1.3;
      }

      .hlm-worldcup__close {
        display: inline-grid;
        place-items: center;
        width: 34px;
        height: 34px;
        padding: 0;
        border: 0;
        border-radius: 999px;
        background: rgba(24, 49, 47, 0.1);
        color: var(--wc-ink);
        cursor: pointer;
        font: 900 1.1rem/1 Arial, sans-serif;
      }

      .hlm-worldcup__close:hover,
      .hlm-worldcup__close:focus-visible {
        background: rgba(24, 49, 47, 0.18);
      }

      .hlm-worldcup__flags,
      .hlm-worldcup__confetti {
        position: fixed;
        inset: 0;
        z-index: 999;
        pointer-events: none;
        overflow: hidden;
      }

      .hlm-worldcup__flag,
      .hlm-worldcup__dot {
        position: absolute;
        opacity: 0.9;
      }

      .hlm-worldcup__flag {
        top: clamp(76px, 11vh, 130px);
        width: 42px;
        height: 28px;
        border-radius: 5px 5px 5px 1px;
        background: linear-gradient(90deg, var(--wc-green) 0 33%, #fff 33% 66%, var(--wc-red) 66%);
        box-shadow: 0 8px 20px rgba(24, 49, 47, 0.16);
        transform-origin: left center;
        animation: hlm-worldcup-wave 3s ease-in-out infinite;
      }

      .hlm-worldcup__flag::before {
        content: "";
        position: absolute;
        left: -5px;
        top: -2px;
        width: 3px;
        height: 42px;
        border-radius: 999px;
        background: #18312f;
      }

      .hlm-worldcup__flag:nth-child(1) { left: 5vw; animation-delay: -0.3s; }
      .hlm-worldcup__flag:nth-child(2) { left: 28vw; background: linear-gradient(90deg, #2563eb 0 33%, #fff 33% 66%, #ef4444 66%); animation-delay: -1.1s; }
      .hlm-worldcup__flag:nth-child(3) { right: 24vw; background: linear-gradient(90deg, #facc15 0 33%, #16a34a 33% 66%, #ef4444 66%); animation-delay: -1.8s; }
      .hlm-worldcup__flag:nth-child(4) { right: 6vw; background: linear-gradient(90deg, #ef4444 0 33%, #fff 33% 66%, #2563eb 66%); animation-delay: -0.7s; }

      .hlm-worldcup__dot {
        width: 9px;
        aspect-ratio: 1;
        top: -20px;
        border-radius: 999px;
        background: var(--wc-yellow);
        animation: hlm-worldcup-fall 7s linear infinite;
      }

      .hlm-worldcup__dot:nth-child(1) { left: 8%; background: var(--wc-yellow); animation-delay: -1.2s; }
      .hlm-worldcup__dot:nth-child(2) { left: 18%; background: var(--wc-green); animation-delay: -4.8s; }
      .hlm-worldcup__dot:nth-child(3) { left: 32%; background: var(--wc-red); animation-delay: -2.4s; }
      .hlm-worldcup__dot:nth-child(4) { left: 47%; background: var(--wc-blue); animation-delay: -6.1s; }
      .hlm-worldcup__dot:nth-child(5) { left: 59%; background: var(--wc-yellow); animation-delay: -3.5s; }
      .hlm-worldcup__dot:nth-child(6) { left: 73%; background: var(--wc-green); animation-delay: -5.6s; }
      .hlm-worldcup__dot:nth-child(7) { left: 84%; background: var(--wc-red); animation-delay: -0.7s; }
      .hlm-worldcup__dot:nth-child(8) { left: 94%; background: var(--wc-blue); animation-delay: -4.1s; }

      body.hlm-worldcup-theme::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 8% 14%, rgba(132, 204, 22, 0.12), transparent 18%),
          radial-gradient(circle at 92% 10%, rgba(250, 204, 21, 0.12), transparent 18%),
          linear-gradient(135deg, rgba(21, 128, 61, 0.04), transparent 34%, rgba(37, 99, 235, 0.04));
      }

      @keyframes hlm-worldcup-roll {
        0%, 100% { transform: translateY(0) rotate(-8deg); }
        45% { transform: translateY(-8px) rotate(16deg); }
      }

      @keyframes hlm-worldcup-wave {
        0%, 100% { transform: rotate(-4deg) skewY(0deg); }
        50% { transform: rotate(5deg) skewY(5deg); }
      }

      @keyframes hlm-worldcup-fall {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
        12% { opacity: 0.85; }
        100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
      }

      @media (max-width: 560px) {
        .hlm-worldcup {
          inset: auto 0.7rem calc(max(0.7rem, env(safe-area-inset-bottom)) + 4.9rem) 0.7rem;
          width: auto;
        }

        .hlm-worldcup__flag {
          display: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .hlm-worldcup__ball,
        .hlm-worldcup__flag,
        .hlm-worldcup__dot {
          animation: none;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function buildTheme() {
    if (document.getElementById(SCRIPT_ID)) return;

    injectStyles();
    document.body.classList.add("hlm-worldcup-theme");

    const flags = document.createElement("div");
    flags.className = "hlm-worldcup__flags";
    flags.setAttribute("aria-hidden", "true");
    flags.innerHTML = "<span class=\"hlm-worldcup__flag\"></span>".repeat(4);

    const confetti = document.createElement("div");
    confetti.className = "hlm-worldcup__confetti";
    confetti.setAttribute("aria-hidden", "true");
    confetti.innerHTML = "<span class=\"hlm-worldcup__dot\"></span>".repeat(8);

    const widget = document.createElement("aside");
    widget.id = SCRIPT_ID;
    widget.className = "hlm-worldcup";
    widget.setAttribute("aria-label", "World Cup celebration theme");
    widget.innerHTML = `
      <div class="hlm-worldcup__card">
        <span class="hlm-worldcup__ball" aria-hidden="true"></span>
        <span class="hlm-worldcup__copy">
          <strong>World Cup spirit is on</strong>
          <span>Cheer, breathe, and keep growing together.</span>
        </span>
        <button class="hlm-worldcup__close no-loader" type="button" aria-label="Hide World Cup theme">×</button>
      </div>
    `;

    widget.querySelector(".hlm-worldcup__close").addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "true");
      document.body.classList.remove("hlm-worldcup-theme");
      flags.remove();
      confetti.remove();
      widget.remove();
    });

    document.body.append(flags, confetti, widget);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildTheme);
  } else {
    buildTheme();
  }
})();
