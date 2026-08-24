(function () {
  "use strict";

  window.HLM_PROTECTED_GUARD_ACTIVE = true;
  document.documentElement.classList.add("hlm-protected-pending");

  var style = document.createElement("style");
  style.textContent = "html.hlm-protected-pending body{visibility:hidden!important}";
  document.head.appendChild(style);

  function load(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function accountUrl(reason) {
    var params = new URLSearchParams({
      reason: reason,
      returnTo: window.location.pathname + window.location.search + window.location.hash
    });
    return "/account.html?" + params.toString();
  }

  async function check() {
    try {
      await load("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
      await load("/config/supabase-config.js");
      await load("/auth/supabase-client.js");
      await load("/auth/auth-service.js");
      var status = await window.HLMAuth.accessStatus("full-library");
      if (!status.allowed) {
        window.location.replace(accountUrl(status.state));
        return;
      }
      document.documentElement.dataset.hlmAccessGranted = "true";
      document.documentElement.dataset.hlmAccessSource = "supabase";
      document.documentElement.classList.remove("hlm-protected-pending");
    } catch (_) {
      window.location.replace(accountUrl("check-failed"));
    }
  }

  check();
})();
