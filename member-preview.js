(function () {
  "use strict";

  const previewKey = "hlmHomePreviewUntil";
  const previewBookKey = "hlmPreviewSelectedBook";
  const durationMs = 3 * 60 * 1000;
  const locales = ["ko", "ja", "zh-cn", "zh-tw"];

  function hasFullAccess() {
    return document.documentElement.dataset.hlmAccessGranted === "true";
  }

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

  const bookLimitLabels = {
    en: {
      title: "One-book preview",
      body: "Your preview includes one book. You can reopen the book you chose, or get full access to explore every book.",
      reopen: "Reopen chosen book",
      fullAccess: "Get full access",
      close: "Close"
    },
    ja: {
      title: "1冊プレビュー",
      body: "プレビューでは1冊の本を読むことができます。選んだ本をもう一度開くか、すべての本を読むにはフルアクセスをご利用ください。",
      reopen: "選んだ本をもう一度開く",
      fullAccess: "すべてを利用する",
      close: "閉じる"
    },
    ko: {
      title: "한 권 미리보기",
      body: "미리보기에서는 책 한 권을 읽을 수 있습니다. 선택한 책을 다시 열거나, 전체 이용권으로 모든 책을 살펴보세요.",
      reopen: "선택한 책 다시 열기",
      fullAccess: "전체 이용권 받기",
      close: "닫기"
    },
    "zh-cn": {
      title: "单本预览",
      body: "预览期间可以阅读一本书。你可以重新打开已选择的书，或获取完整访问权限以浏览所有图书。",
      reopen: "重新打开已选图书",
      fullAccess: "获取完整访问权限",
      close: "关闭"
    },
    "zh-tw": {
      title: "單本預覽",
      body: "預覽期間可以閱讀一本書。你可以重新開啟已選擇的書，或取得完整存取權以瀏覽所有圖書。",
      reopen: "重新開啟已選圖書",
      fullAccess: "取得完整存取權",
      close: "關閉"
    }
  };

  const routeLimitLabels = {
    en: {
      title: "This is outside the preview",
      body: "The 3-minute preview includes the home library tour and one book. Worksheets, downloads, dashboards, tools, and the rest of the member library require full access.",
      fullAccess: "Get full access",
      continue: "Continue preview"
    },
    ja: {
      title: "プレビュー対象外です",
      body: "3分間のプレビューには、ホームのライブラリーツアーと本1冊が含まれます。ワークシート、ダウンロード、ダッシュボード、ツール、その他の会員教材にはフルアクセスが必要です。",
      fullAccess: "すべてを利用する",
      continue: "プレビューを続ける"
    },
    ko: {
      title: "미리보기 범위를 벗어났습니다",
      body: "3분 미리보기에는 홈 라이브러리 둘러보기와 책 한 권이 포함됩니다. 워크시트, 다운로드, 대시보드, 도구 및 나머지 회원 자료는 전체 이용권이 필요합니다.",
      fullAccess: "전체 이용권 받기",
      continue: "미리보기 계속하기"
    },
    "zh-cn": {
      title: "此内容不在预览范围内",
      body: "3 分钟预览包含主页资源库导览和一本书。练习单、下载内容、仪表板、工具及其他会员资源需要完整访问权限。",
      fullAccess: "获取完整访问权限",
      continue: "继续预览"
    },
    "zh-tw": {
      title: "此內容不在預覽範圍內",
      body: "3 分鐘預覽包含首頁資源庫導覽和一本書。學習單、下載內容、儀表板、工具及其他會員資源需要完整存取權。",
      fullAccess: "取得完整存取權",
      continue: "繼續預覽"
    }
  };

  function getLocale() {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    return locales.includes(first) ? first : "en";
  }

  function getCopy() {
    return labels[getLocale()] || labels.en;
  }

  function getBookLimitCopy() {
    return bookLimitLabels[getLocale()] || bookLimitLabels.en;
  }

  function getRouteLimitCopy() {
    return routeLimitLabels[getLocale()] || routeLimitLabels.en;
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

      .preview-book-locked {
        cursor: not-allowed !important;
        opacity: 0.62;
      }

      .preview-route-locked {
        cursor: not-allowed !important;
        opacity: 0.68;
      }

      .preview-book-limit {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: grid;
        place-items: center;
        padding: 1rem;
        background: rgba(12, 35, 50, 0.58);
        backdrop-filter: blur(5px);
      }

      .preview-book-limit__dialog {
        width: min(92vw, 520px);
        padding: clamp(1.25rem, 4vw, 2rem);
        border: 1px solid rgba(37, 78, 112, 0.15);
        border-radius: 22px;
        background: #fff;
        color: #254e70;
        box-shadow: 0 24px 60px rgba(12, 35, 50, 0.28);
        font-family: "DM Sans", Arial, sans-serif;
        text-align: center;
      }

      .preview-book-limit__icon {
        display: grid;
        place-items: center;
        width: 54px;
        height: 54px;
        margin: 0 auto 0.8rem;
        border-radius: 16px;
        background: #fff5c7;
        font-size: 1.45rem;
      }

      .preview-book-limit h2 {
        margin: 0;
        font: 900 clamp(1.45rem, 5vw, 2rem)/1.15 "Nunito", "DM Sans", sans-serif;
      }

      .preview-book-limit p {
        margin: 0.75rem auto 0;
        color: #587286;
        line-height: 1.6;
      }

      .preview-book-limit__actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.65rem;
        margin-top: 1.15rem;
      }

      .preview-book-limit__actions a,
      .preview-book-limit__actions button {
        display: inline-flex;
        min-height: 44px;
        align-items: center;
        justify-content: center;
        padding: 0.7rem 0.9rem;
        border: 0;
        border-radius: 999px;
        font: 900 0.9rem "DM Sans", Arial, sans-serif;
        text-decoration: none;
        cursor: pointer;
      }

      .preview-book-limit__actions a:first-child {
        background: #ff6b6b;
        color: #fff;
      }

      .preview-book-limit__actions a:nth-child(2),
      .preview-book-limit__actions button {
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

  function isMemberHomePage() {
    return /\/home\.html$/i.test(window.location.pathname);
  }

  function canonicalBookUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.href);
      if (!/^(www\.)?heyzine\.com$/i.test(url.hostname)) return "";
      if (!/^\/flip-book\/[^/]+\.html$/i.test(url.pathname)) return "";
      return url.origin + url.pathname;
    } catch (error) {
      return "";
    }
  }

  function bookUrlForLink(link) {
    return canonicalBookUrl(link.dataset.previewBookHref || link.getAttribute("href"));
  }

  function showBookLimit(selectedBook) {
    document.querySelector(".preview-book-limit")?.remove();
    injectStyles();

    const text = getBookLimitCopy();
    const overlay = document.createElement("div");
    overlay.className = "preview-book-limit";
    overlay.innerHTML = `
      <section class="preview-book-limit__dialog" role="dialog" aria-modal="true" aria-labelledby="previewBookLimitTitle">
        <span class="preview-book-limit__icon" aria-hidden="true">📖</span>
        <h2 id="previewBookLimitTitle">${text.title}</h2>
        <p>${text.body}</p>
        <div class="preview-book-limit__actions">
          <a href="https://payhip.com/b/j6uL8" target="_blank" rel="noopener">${text.fullAccess}</a>
          <a href="${selectedBook}" target="_blank" rel="noopener">${text.reopen}</a>
          <button type="button" data-preview-book-close>${text.close}</button>
        </div>
      </section>
    `;
    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    overlay.querySelector("[data-preview-book-close]").addEventListener("click", close);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    const onEscape = (event) => {
      if (event.key !== "Escape" || !overlay.isConnected) return;
      close();
      document.removeEventListener("keydown", onEscape);
    };
    document.addEventListener("keydown", onEscape);
    overlay.querySelector("[data-preview-book-close]").focus();
  }

  function setupBookLimit() {
    if (!isMemberHomePage() || hasFullAccess() || !isActive()) return;

    const prepareBookLinks = () => {
      const selectedBook = canonicalBookUrl(localStorage.getItem(previewBookKey));

      document.querySelectorAll("a").forEach((link) => {
        const bookUrl = bookUrlForLink(link);
        if (!bookUrl) return;
        if (!link.dataset.previewBookHref) link.dataset.previewBookHref = link.href;
        link.removeAttribute("href");
        link.setAttribute("role", "link");
        link.setAttribute("tabindex", "0");

        const locked = Boolean(selectedBook && bookUrl !== selectedBook);
        link.classList.toggle("preview-book-locked", locked);
        if (locked) {
          link.setAttribute("aria-disabled", "true");
        } else {
          link.removeAttribute("aria-disabled");
        }
      });
    };

    const attemptBookOpen = (link, event) => {
      if (!link || hasFullAccess() || !isActive()) return;

      const bookUrl = bookUrlForLink(link);
      if (!bookUrl) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const selectedBook = canonicalBookUrl(localStorage.getItem(previewBookKey));
      if (!selectedBook) {
        localStorage.setItem(previewBookKey, bookUrl);
        prepareBookLinks();
        window.open(bookUrl, "_blank", "noopener,noreferrer");
        return;
      }
      if (selectedBook === bookUrl) {
        window.open(bookUrl, "_blank", "noopener,noreferrer");
        return;
      }

      showBookLimit(selectedBook);
    };

    const handleBookOpen = (event) => {
      attemptBookOpen(event.target.closest("a[data-preview-book-href]"), event);
    };

    document.addEventListener("click", handleBookOpen, true);
    document.addEventListener("auxclick", handleBookOpen, true);
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      attemptBookOpen(event.target.closest("a[data-preview-book-href]"), event);
    }, true);
    prepareBookLinks();

    const observer = new MutationObserver(prepareBookLinks);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function showRouteLimit() {
    document.querySelector(".preview-route-limit")?.remove();
    injectStyles();

    const text = getRouteLimitCopy();
    const overlay = document.createElement("div");
    overlay.className = "preview-book-limit preview-route-limit";
    overlay.innerHTML = `
      <section class="preview-book-limit__dialog" role="dialog" aria-modal="true" aria-labelledby="previewRouteLimitTitle">
        <span class="preview-book-limit__icon" aria-hidden="true">🔒</span>
        <h2 id="previewRouteLimitTitle">${text.title}</h2>
        <p>${text.body}</p>
        <div class="preview-book-limit__actions">
          <a href="https://payhip.com/b/j6uL8" target="_blank" rel="noopener">${text.fullAccess}</a>
          <button type="button" data-preview-route-close>${text.continue}</button>
        </div>
      </section>
    `;
    document.body.appendChild(overlay);

    const closeButton = overlay.querySelector("[data-preview-route-close]");
    const close = () => overlay.remove();
    closeButton.addEventListener("click", close);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    const onEscape = (event) => {
      if (event.key !== "Escape" || !overlay.isConnected) return;
      close();
      document.removeEventListener("keydown", onEscape);
    };
    document.addEventListener("keydown", onEscape);
    closeButton.focus();
  }

  function setupRouteLimit() {
    if (!isMemberHomePage() || hasFullAccess() || !isActive()) return;

    const isAllowedDestination = (link, value) => {
      if (!value || value.charAt(0) === "#") return true;
      if (/^(mailto:|tel:|javascript:)/i.test(value)) return true;

      try {
        const url = new URL(value, window.location.href);
        if (/\.(pdf|zip|docx?|xlsx?|pptx?|mp4)(?:$|[?#])/i.test(url.href) || link.hasAttribute("download")) return false;
        if (url.origin !== window.location.origin) return true;
        if (url.pathname === window.location.pathname && url.hash) return true;
        if (/^\/(?:home|index|about_me|will-talks|teachers|parents|social)\.html$/i.test(url.pathname)) return true;
        if (/^\/(?:ja|ko|zh-cn|zh-tw)\/(?:home|index|about_me|will-talks|teachers|parents|social)\.html$/i.test(url.pathname)) return true;
        return false;
      } catch (error) {
        return false;
      }
    };

    const prepareRestrictedLinks = () => {
      document.querySelectorAll("a").forEach((link) => {
        if (link.hasAttribute("data-preview-book-href")) return;
        const value = link.dataset.previewRestrictedHref || link.getAttribute("href");
        if (!value || isAllowedDestination(link, value)) return;
        if (!link.dataset.previewRestrictedHref) link.dataset.previewRestrictedHref = link.href;
        link.removeAttribute("href");
        link.setAttribute("role", "link");
        link.setAttribute("tabindex", "0");
        link.setAttribute("aria-disabled", "true");
        link.classList.add("preview-route-locked");
      });
    };

    const attemptRestrictedRoute = (link, event) => {
      if (!link || hasFullAccess() || !isActive()) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      showRouteLimit();
    };

    const handleRestrictedRoute = (event) => {
      attemptRestrictedRoute(event.target.closest("a[data-preview-restricted-href]"), event);
    };

    document.addEventListener("click", handleRestrictedRoute, true);
    document.addEventListener("auxclick", handleRestrictedRoute, true);
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      attemptRestrictedRoute(event.target.closest("a[data-preview-restricted-href]"), event);
    }, true);
    prepareRestrictedLinks();

    const observer = new MutationObserver(prepareRestrictedLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "restricted") {
      showRouteLimit();
      params.delete("preview");
      const query = params.toString();
      window.history.replaceState({}, document.title, window.location.pathname + (query ? "?" + query : "") + window.location.hash);
    }
  }

  function setupNotice() {
    if (hasFullAccess() || !isActive()) return;

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
    setupBookLimit();
    setupRouteLimit();
    setupExitOffer();
  });
})();
