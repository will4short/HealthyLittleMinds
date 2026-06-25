(() => {
  if (localStorage.getItem("isMember") === "true") return;

  // Keep local design previews viewable while preserving the live member gate.
  const localPreview = window.location.protocol === "file:" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";
  if (localPreview) return;

  const locale = window.location.pathname.split("/")[1];
  const translated = ["zh-tw", "zh-cn", "ja", "ko"].includes(locale);
  window.location.replace(translated ? `/${locale}/index.html` : "/index.html");
})();

(() => {
  if (!("serviceWorker" in navigator) || window.__HLM_PARENT_SW_BOOTSTRAPPED__) return;
  window.__HLM_PARENT_SW_BOOTSTRAPPED__ = true;

  const locale = window.location.pathname.split("/")[1];
  const messages = {
    en: { update: "New version available. Tap to refresh.", refreshing: "Updating..." },
    "zh-tw": { update: "有新版本可用，點擊重新整理", refreshing: "正在更新..." },
    "zh-cn": { update: "有新版本可用，点击刷新", refreshing: "正在更新..." },
    ja: { update: "新しいバージョンがあります。タップして更新", refreshing: "更新中..." },
    ko: { update: "새 버전이 있습니다. 탭해서 새로고침하세요.", refreshing: "업데이트 중..." }
  };
  const copy = messages[locale] || messages.en;
  let updateToast = null;

  function makeUpdateToast(text) {
    if (updateToast) updateToast.remove();
    updateToast = document.createElement("button");
    updateToast.type = "button";
    updateToast.textContent = text;
    updateToast.setAttribute("aria-label", text);
    Object.assign(updateToast.style, {
      position: "fixed",
      left: "50%",
      bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
      transform: "translateX(-50%)",
      zIndex: "2147483647",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "min(92vw, 460px)",
      minHeight: "48px",
      padding: "13px 18px",
      border: "1px solid rgba(255,255,255,.35)",
      borderRadius: "999px",
      background: "#ff9800",
      color: "#fff",
      boxShadow: "0 12px 30px rgba(37,78,112,.28)",
      cursor: "pointer",
      font: "800 .95rem/1.2 system-ui, sans-serif",
      textAlign: "center"
    });
    document.body.appendChild(updateToast);
    return updateToast;
  }

  function showUpdate(worker) {
    const toast = makeUpdateToast(copy.update);
    const activate = () => {
      toast.textContent = copy.refreshing;
      toast.disabled = true;
      try { worker.postMessage({ type: "SKIP_WAITING" }); }
      catch { window.location.reload(); }
    };
    toast.addEventListener("click", activate, { once: true });
  }

  navigator.serviceWorker.register("/service-worker.js").then((registration) => {
    const checkForUpdate = () => {
      try { registration.update(); } catch {}
    };
    checkForUpdate();
    if (registration.waiting && navigator.serviceWorker.controller) {
      showUpdate(registration.waiting);
    }
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          showUpdate(worker);
        }
      });
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
    window.addEventListener("focus", checkForUpdate);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") checkForUpdate();
    });
  }).catch(() => {});
})();
