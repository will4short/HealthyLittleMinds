(function () {
  "use strict";

  const previewKey = "hlmHomePreviewUntil";
  const durationMs = 3 * 60 * 1000;
  const locales = ["ko", "ja", "zh-cn", "zh-tw"];

  const labels = {
    en: {
      notice: "Preview pass",
      remaining: "remaining",
      fullAccess: "Get full access",
      back: "Back to access",
      endedKicker: "Preview ended",
      endedTitle: "Want to keep exploring?",
      endedBody: "Your 3-minute look inside the member library has ended. You can unlock the full library, try the free audiobook, or keep browsing open resources.",
      tryAudio: "Try free audiobook",
      freeResources: "Browse free resources",
      close: "Close"
    },
    ko: {
      notice: "미리보기 이용",
      remaining: "남음",
      fullAccess: "전체 이용권",
      back: "접근 페이지로",
      endedKicker: "미리보기 종료",
      endedTitle: "계속 둘러보시겠어요?",
      endedBody: "3분 회원 자료실 미리보기가 끝났습니다. 전체 자료실을 열거나, 무료 오디오북을 들어보거나, 공개 자료를 계속 볼 수 있어요.",
      tryAudio: "무료 오디오북 듣기",
      freeResources: "무료 자료 보기",
      close: "닫기"
    },
    ja: {
      notice: "プレビューパス",
      remaining: "残り",
      fullAccess: "すべてを利用する",
      back: "アクセスページへ",
      endedKicker: "プレビュー終了",
      endedTitle: "このまま続けて見てみますか？",
      endedBody: "3分間のメンバーライブラリープレビューが終了しました。全ライブラリーを開く、無料オーディオブックを試す、公開リソースを見ることができます。",
      tryAudio: "無料オーディオを試す",
      freeResources: "無料リソースを見る",
      close: "閉じる"
    },
    "zh-cn": {
      notice: "预览通行证",
      remaining: "剩余",
      fullAccess: "获取完整访问",
      back: "返回访问页",
      endedKicker: "预览已结束",
      endedTitle: "想继续探索吗？",
      endedBody: "您的 3 分钟会员资源库预览已结束。您可以解锁完整资源库，试听免费有声书，或继续浏览公开资源。",
      tryAudio: "试听免费有声书",
      freeResources: "浏览免费资源",
      close: "关闭"
    },
    "zh-tw": {
      notice: "預覽通行證",
      remaining: "剩餘",
      fullAccess: "取得完整存取權",
      back: "返回存取頁",
      endedKicker: "預覽已結束",
      endedTitle: "想繼續探索嗎？",
      endedBody: "您的 3 分鐘會員資源庫預覽已結束。您可以解鎖完整資源庫、試聽免費有聲書，或繼續瀏覽公開資源。",
      tryAudio: "試聽免費有聲書",
      freeResources: "瀏覽免費資源",
      close: "關閉"
    }
  };

  function getLocale() {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    return locales.includes(first) ? first : "en";
  }

  function getCopy() {
    return labels[getLocale()] || labels.en;
  }

  function indexUrl() {
    return "index.html";
  }

  function audiobookUrl() {
    return getLocale() === "en"
      ? "audiobook.html?book=audiobooks/ella/book.json"
      : "../audiobook.html?book=audiobooks/ella/book.json";
  }

  function remainingMs() {
    return Math.max(0, Number(localStorage.getItem(previewKey) || 0) - Date.now());
  }

  function isActive() {
    return remainingMs() > 0;
  }

  function clear() {
    localStorage.removeItem(previewKey);
  }

  function start() {
    localStorage.setItem(previewKey, String(Date.now() + durationMs));
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
    window.location.href = `${indexUrl()}?preview=ended#login`;
  }

  function scheduleExpiryRedirect() {
    if (!isActive()) return;
    window.setTimeout(redirectToIndex, remainingMs() + 250);
  }

  function injectStyles() {
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

      .preview-ended-offer {
        width: min(920px, 92vw);
        margin: 1.5rem auto 0;
        padding: clamp(1.2rem, 3vw, 1.75rem);
        border: 1px solid rgba(37, 78, 112, 0.12);
        border-radius: 18px;
        background:
          linear-gradient(135deg, rgba(255, 221, 89, 0.2), rgba(25, 183, 166, 0.14)),
          #fff;
        color: #254e70;
        box-shadow: 0 16px 42px rgba(37, 78, 112, 0.12);
        text-align: center;
      }

      .preview-ended-offer__kicker {
        margin: 0 0 0.45rem;
        color: #ff6b6b;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .preview-ended-offer h2 {
        margin: 0 0 0.55rem;
        font-family: "Nunito", "DM Sans", Arial, sans-serif;
        font-size: clamp(1.65rem, 4vw, 2.4rem);
        line-height: 1.1;
      }

      .preview-ended-offer p {
        max-width: 680px;
        margin: 0 auto;
        color: #587286;
        line-height: 1.6;
      }

      .preview-ended-offer__actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.1rem;
      }

      .preview-ended-offer__actions a,
      .preview-ended-offer__actions button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 46px;
        padding: 0.7rem 1rem;
        border: 0;
        border-radius: 999px;
        font: inherit;
        font-weight: 900;
        text-decoration: none;
        cursor: pointer;
      }

      .preview-ended-offer__actions a:first-child {
        background: #ff6b6b;
        color: #fff;
        box-shadow: 0 12px 24px rgba(255, 107, 107, 0.22);
      }

      .preview-ended-offer__actions a:not(:first-child),
      .preview-ended-offer__actions button {
        background: #e9fbf7;
        color: #087c72;
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
        .preview-pass-notice button,
        .preview-ended-offer__actions a,
        .preview-ended-offer__actions button {
          width: 100%;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setupPreviewButtons() {
    document.querySelectorAll("[data-preview-home]").forEach((button) => {
      button.addEventListener("click", start);
    });
  }

  function setupNotice() {
    if (localStorage.getItem("isMember") === "true" || !isActive()) return;

    injectStyles();

    const text = getCopy();
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

  function setupExitOffer() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") !== "ended") return;

    injectStyles();

    const text = getCopy();
    const offer = document.createElement("section");
    offer.className = "preview-ended-offer";
    offer.setAttribute("aria-labelledby", "previewEndedTitle");
    offer.innerHTML = `
      <p class="preview-ended-offer__kicker">${text.endedKicker}</p>
      <h2 id="previewEndedTitle">${text.endedTitle}</h2>
      <p>${text.endedBody}</p>
      <div class="preview-ended-offer__actions">
        <a href="https://payhip.com/b/j6uL8" target="_blank" rel="noopener">${text.fullAccess}</a>
        <a href="${audiobookUrl()}">${text.tryAudio}</a>
        <a href="#free-library">${text.freeResources}</a>
        <button type="button" data-preview-offer-close>${text.close}</button>
      </div>
    `;

    const target = document.querySelector(".member-entry") || document.querySelector(".access-hero");
    if (target && target.parentNode) {
      target.parentNode.insertBefore(offer, target);
    } else {
      document.body.prepend(offer);
    }

    offer.querySelector("[data-preview-offer-close]").addEventListener("click", () => {
      offer.remove();
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    });
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
    setupExitOffer();
  });
})();
