(function () {
  "use strict";

  const key = "hlmHomePreviewUntil";
  const durationMs = 3 * 60 * 1000;
  const locales = ["ko", "ja", "zh-cn", "zh-tw"];

  const labels = {
    en: {
      notice: "Preview pass",
      remaining: "remaining",
      fullAccess: "Get full access",
      back: "Back to access"
    },
    ko: {
      notice: "미리보기 이용",
      remaining: "남음",
      fullAccess: "전체 이용권",
      back: "접근 페이지로"
    },
    ja: {
      notice: "プレビューパス",
      remaining: "残り",
      fullAccess: "すべてを利用する",
      back: "アクセスページへ"
    },
    "zh-cn": {
      notice: "预览通行证",
      remaining: "剩余",
      fullAccess: "获取完整访问",
      back: "返回访问页"
    },
    "zh-tw": {
      notice: "預覽通行證",
      remaining: "剩餘",
      fullAccess: "取得完整存取權",
      back: "返回存取頁"
    }
  };

  function locale() {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    return locales.includes(first) ? first : "en";
  }

  function localizedIndexUrl() {
    return locale() === "en" ? "index.html" : "index.html";
  }

  function remainingMs() {
    return Math.max(0, Number(localStorage.getItem(key) || 0) - Date.now());
  }

  function isActive() {
    return remainingMs() > 0;
  }

  function clear() {
    localStorage.removeItem(key);
  }

  function start() {
    localStorage.setItem(key, String(Date.now() + durationMs));
    window.location.href = "home.html";
  }

  function formatTime(ms) {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function redirectToIndex() {
    clear();
    window.location.href = localizedIndexUrl();
  }

  function scheduleExpiryRedirect() {
    if (!isActive()) return;
    window.setTimeout(redirectToIndex, remainingMs() + 250);
  }

  function setupPreviewButtons() {
    document.querySelectorAll("[data-preview-home]").forEach((button) => {
      button.addEventListener("click", start);
    });
  }

  function injectNoticeStyles() {
    if (document.getElementById("hlm-preview-styles")) return;
    const style = document.createElement("style");
    style.id = "hlm-preview-styles";
    style.textContent = `
      .preview-pass-notice {
        position: fixed;
        right: clamp(0.75rem, 3vw, 1.5rem);
        bottom: clamp(0.75rem, 3vw, 1.5rem);
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        max-width: min(92vw, 540px);
        padding: 0.75rem 0.85rem;
        border: 1px solid rgba(37, 78, 112, 0.16);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.96);
        color: #254e70;
        box-shadow: 0 16px 36px rgba(37, 78, 112, 0.18);
        font-family: "DM Sans", Arial, sans-serif;
        font-size: 0.94rem;
      }

      .preview-pass-notice strong {
        font-weight: 900;
      }

      .preview-pass-notice a,
      .preview-pass-notice button {
        border: 0;
        border-radius: 999px;
        padding: 0.55rem 0.8rem;
        font: inherit;
        font-weight: 900;
        text-decoration: none;
      }

      .preview-pass-notice a {
        background: #ff6b6b;
        color: #fff;
      }

      .preview-pass-notice button {
        background: #e9fbf7;
        color: #087c72;
        cursor: pointer;
      }

      @media (max-width: 640px) {
        .preview-pass-notice {
          left: 0.75rem;
          right: 0.75rem;
          bottom: 0.75rem;
          display: grid;
          grid-template-columns: 1fr auto;
          border-radius: 18px;
        }

        .preview-pass-notice a,
        .preview-pass-notice button {
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setupNotice() {
    if (localStorage.getItem("isMember") === "true" || !isActive()) return;

    injectNoticeStyles();

    const text = labels[locale()] || labels.en;
    const notice = document.createElement("div");
    notice.className = "preview-pass-notice";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    notice.innerHTML = `
      <strong>${text.notice}</strong>
      <span data-preview-time>${formatTime(remainingMs())} ${text.remaining}</span>
      <a href="https://payhip.com/b/j6uL8" target="_blank" rel="noopener">${text.fullAccess}</a>
      <button type="button" data-preview-exit>${text.back}</button>
    `;
    document.body.appendChild(notice);

    const timer = notice.querySelector("[data-preview-time]");
    const interval = window.setInterval(() => {
      const left = remainingMs();
      if (!left) {
        window.clearInterval(interval);
        redirectToIndex();
        return;
      }
      timer.textContent = `${formatTime(left)} ${text.remaining}`;
    }, 1000);

    notice.querySelector("[data-preview-exit]").addEventListener("click", redirectToIndex);
  }

  window.HLMPreview = {
    clear,
    isActive,
    remainingMs,
    scheduleExpiryRedirect,
    start
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupPreviewButtons();
    setupNotice();
  });
})();
