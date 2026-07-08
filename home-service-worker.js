(function () {
  "use strict";

  if (window.__HLM_SW_BOOTSTRAPPED__) return;
  window.__HLM_SW_BOOTSTRAPPED__ = true;

  var lang = (document.documentElement.lang || "en").toLowerCase();
  var locale = lang.indexOf("ja") === 0 ? "ja"
    : lang.indexOf("ko") === 0 ? "ko"
    : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "zhHant"
    : lang.indexOf("zh") === 0 ? "zhCN"
    : "en";
  var messages = {
    en: {
      online: "You are back online.", offline: "You are offline.",
      offlineInitial: "You are currently offline.",
      update: "A new version is available. Select to refresh.", updating: "Updating…"
    },
    ja: {
      online: "オンラインに戻りました。", offline: "オフラインです。",
      offlineInitial: "現在オフラインです。",
      update: "新しいバージョンがあります。選択して更新してください。", updating: "更新中…"
    },
    ko: {
      online: "다시 온라인 상태입니다.", offline: "오프라인 상태입니다.",
      offlineInitial: "현재 오프라인 상태입니다.",
      update: "새 버전이 있습니다. 선택하여 새로고침하세요.", updating: "업데이트 중…"
    },
    zhCN: {
      online: "已恢复网络连接。", offline: "当前处于离线状态。",
      offlineInitial: "当前处于离线状态。",
      update: "有新版本可用。选择以刷新。", updating: "正在更新…"
    },
    zhHant: {
      online: "已恢復網路連線。", offline: "目前處於離線狀態。",
      offlineInitial: "目前處於離線狀態。",
      update: "有新版本可用。選取以重新整理。", updating: "正在更新…"
    }
  }[locale];
  var updateNotice;

  function removeExistingNotice() {
    var existing = document.getElementById("home-status-notice");
    if (existing) existing.remove();
  }

  function showStatus(message, kind) {
    removeExistingNotice();
    var notice = document.createElement("div");
    notice.id = "home-status-notice";
    notice.className = "home-status-notice home-status-notice--" + kind;
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    notice.textContent = message;
    document.body.appendChild(notice);
    window.setTimeout(function () { notice.remove(); }, 4000);
  }

  function showUpdate(worker) {
    removeExistingNotice();
    updateNotice = document.createElement("button");
    updateNotice.id = "home-status-notice";
    updateNotice.className = "home-status-notice home-status-notice--update";
    updateNotice.type = "button";
    updateNotice.textContent = messages.update;
    updateNotice.addEventListener("click", function () {
      updateNotice.disabled = true;
      updateNotice.textContent = messages.updating;
      try { worker.postMessage({ type: "SKIP_WAITING" }); }
      catch (error) { window.location.reload(); }
    }, { once: true });
    document.body.appendChild(updateNotice);
  }

  function hideLoadingScreen() {
    var loading = document.getElementById("loading-screen");
    if (loading) loading.hidden = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hideLoadingScreen, { once: true });
  } else {
    hideLoadingScreen();
  }

  window.setTimeout(hideLoadingScreen, 3500);

  window.addEventListener("load", function () {
    hideLoadingScreen();
    if (!navigator.onLine) showStatus(messages.offlineInitial, "offline");
  });
  window.addEventListener("online", function () { showStatus(messages.online, "online"); });
  window.addEventListener("offline", function () { showStatus(messages.offline, "offline"); });

  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
    registration.update().catch(function () {});
    if (registration.waiting && navigator.serviceWorker.controller) showUpdate(registration.waiting);
    registration.addEventListener("updatefound", function () {
      var worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", function () {
        if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdate(worker);
      });
    });
    navigator.serviceWorker.addEventListener("controllerchange", function () { window.location.reload(); });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) registration.update().catch(function () {});
    });
  }).catch(function (error) {
    console.warn("Service worker registration failed:", error);
  });
}());
