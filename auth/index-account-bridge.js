(function () {
  "use strict";

  function setHidden(selector, hidden) {
    document.querySelectorAll(selector).forEach(function (node) { node.hidden = hidden; });
  }

  function showAccountState(status) {
    var panel = document.getElementById("landingAccountStatus");
    if (!panel) return;
    panel.hidden = false;
    setHidden(".account-entry-signed-out", true);
    setHidden(".legacy-access", true);

    var heading = panel.querySelector("[data-account-status-title]");
    var message = panel.querySelector("[data-account-status-message]");
    var action = panel.querySelector("[data-account-status-action]");
    var name = status.profile && status.profile.full_name ? status.profile.full_name : "Member";

    if (status.allowed) {
      heading.textContent = "Welcome back, " + name;
      message.textContent = "Your full-library access is active.";
      action.textContent = "Open member library";
      action.href = window.HLMRouting.page("home.html", { account: "1" });
      setHidden(".login-actions .get-access-btn", true);
    } else {
      heading.textContent = "Your account is signed in";
      message.textContent = "Full-library access is not connected yet. Use the same email used at Payhip checkout or open your account for help.";
      action.textContent = "View account and access";
      action.href = window.HLMRouting.page("account.html");
    }
  }

  async function start() {
    if (!window.HLMAuth || !window.HLMRouting) return;
    try {
      var status = await window.HLMAuth.accessStatus("full-library");
      if (status.state !== "signed-out") showAccountState(status);
    } catch (_) {
      // The public landing page remains fully usable when account services are
      // unavailable. Do not turn a temporary status check into a page error.
    }
  }

  document.addEventListener("DOMContentLoaded", start);
})();
