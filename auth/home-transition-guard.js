(function () {
  "use strict";

  var productKey = "full-library";

  function previewAccess() {
    try { return Number(window.localStorage.getItem("hlmHomePreviewUntil") || 0) > Date.now(); }
    catch (_) { return false; }
  }

  function grant(source) {
    document.documentElement.dataset.hlmAccessGranted = "true";
    document.documentElement.dataset.hlmAccessSource = source;
    document.documentElement.classList.remove("hlm-access-pending", "hlm-access-failed");
    var loader = document.getElementById("hlmAccessLoader");
    if (loader) loader.hidden = true;
    window.dispatchEvent(new CustomEvent("hlm:access-granted", { detail: { source: source } }));
  }

  function accountUrl(reason) {
    if (window.HLMRouting) return window.HLMRouting.page("account.html", { reason: reason });
    return "/account.html?reason=" + encodeURIComponent(reason);
  }

  function legacyLandingUrl() {
    return window.HLMRouting ? window.HLMRouting.page("index.html") : "/index.html";
  }

  function showFailure() {
    document.documentElement.classList.remove("hlm-access-pending");
    document.documentElement.classList.add("hlm-access-failed");
    var loader = document.getElementById("hlmAccessLoader");
    if (!loader) return;
    loader.hidden = false;
    loader.innerHTML = "";

    var panel = document.createElement("section");
    panel.className = "hlm-access-loader__panel";
    panel.setAttribute("role", "alert");
    var title = document.createElement("h1");
    title.textContent = "We couldn’t check your access";
    var message = document.createElement("p");
    message.textContent = "Your membership has not been removed. Check your connection and try again.";
    var retry = document.createElement("button");
    retry.type = "button";
    retry.textContent = "Try again";
    retry.addEventListener("click", function () { window.location.reload(); });
    var publicLink = document.createElement("a");
    publicLink.href = legacyLandingUrl();
    publicLink.textContent = "Return to public resources";
    panel.append(title, message, retry, publicLink);
    loader.appendChild(panel);
  }

  async function check() {
    if (previewAccess()) {
      grant("preview");
      if (window.HLMPreview) window.HLMPreview.scheduleExpiryRedirect();
      return;
    }

    try {
      var status = await window.HLMAuth.accessStatus(productKey);
      if (status.allowed) {
        try {
          window.localStorage.removeItem("hlmHomePreviewUntil");
          window.localStorage.removeItem("hlmPreviewSelectedBook");
        } catch (_) {}
        grant("supabase");
        return;
      }
      window.location.replace(accountUrl(status.state));
    } catch (error) {
      showFailure();
    }
  }

  check();
})();
