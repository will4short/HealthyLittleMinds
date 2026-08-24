(function () {
  "use strict";

  var productKey = "full-library";
  var state = { recovery: false, lastEmail: "", openingLibrary: false };
  var initialParams = new URLSearchParams(window.location.search);
  var initialReason = initialParams.get("reason") || "";
  var requestedReturn = initialParams.get("returnTo") || "";

  function t(key) {
    return window.HLMAccountI18n ? window.HLMAccountI18n.t(key) : key;
  }

  function safeReturnTo() {
    return requestedReturn.charAt(0) === "/" && requestedReturn.slice(0, 2) !== "//"
      ? requestedReturn
      : "";
  }

  function accountCallback(query) {
    var destination = Object.assign({}, query);
    if (safeReturnTo()) destination.returnTo = safeReturnTo();
    return window.HLMRouting.absolutePage("account.html", destination);
  }

  function element(id) { return document.getElementById(id); }

  function setAlert(message, tone) {
    var alert = element("accountAlert");
    alert.textContent = message || "";
    alert.dataset.tone = tone || "info";
    alert.hidden = !message;
  }

  function friendlyError(error, fallback) {
    var message = String(error && error.message || "").toLowerCase();
    if (message.indexOf("invalid login") >= 0) return t("invalidLogin");
    if (message.indexOf("email not confirmed") >= 0) return t("confirmEmail");
    if (message.indexOf("already registered") >= 0 || message.indexOf("already been registered") >= 0) return t("alreadyRegistered");
    if (message.indexOf("password") >= 0 && message.indexOf("short") >= 0) return t("shortPassword");
    if (message.indexOf("rate") >= 0 || message.indexOf("too many") >= 0) return t("tooMany");
    return fallback || t("genericError");
  }

  function reasonMessage(reason) {
    if (reason === "signed-out") return t("signedOut");
    if (reason === "email-unconfirmed") return t("emailUnconfirmed");
    if (reason === "access-required") return t("accessRequired");
    if (reason === "account-unavailable") return t("accountUnavailable");
    if (reason === "check-failed" || reason === "guard-missing") return t("checkFailed");
    return "";
  }

  function setBusy(form, busy) {
    form.querySelectorAll("button, input, select").forEach(function (control) { control.disabled = busy; });
    var submit = form.querySelector("button[type='submit']");
    if (!submit) return;
    if (!submit.dataset.label) submit.dataset.label = submit.textContent;
    submit.textContent = busy ? t("wait") : submit.dataset.label;
  }

  function selectPanel(name) {
    document.querySelectorAll("[data-account-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.accountPanel !== name;
    });
    document.querySelectorAll("[data-account-tab]").forEach(function (tab) {
      tab.setAttribute("aria-selected", String(tab.dataset.accountTab === name));
    });
    setAlert("");
  }

  function showSignedIn(status) {
    element("accountControls").hidden = true;
    var session = element("accountSession");
    session.hidden = false;
    element("sessionEmail").textContent = status.user.email || t("yourAccount");
    element("sessionName").textContent = status.profile && status.profile.full_name ? status.profile.full_name : t("member");
    element("sessionTitle").firstChild.nodeValue = t("hello") + " ";

    var badge = element("accessBadge");
    var description = element("accessDescription");
    if (status.allowed) {
      badge.textContent = t("activeBadge");
      description.textContent = t("activeDescription");
      element("openLibraryButton").hidden = false;
      element("purchaseButton").hidden = true;
    } else {
      badge.textContent = t("inactiveBadge");
      description.textContent = t("inactiveDescription");
      element("openLibraryButton").hidden = true;
      element("purchaseButton").hidden = false;
    }
  }

  function libraryDestination() {
    return safeReturnTo() || window.HLMRouting.page("home.html", { account: "1" });
  }

  function openLibraryAutomatically() {
    if (state.openingLibrary || state.recovery) return;
    state.openingLibrary = true;
    window.setTimeout(function () {
      window.location.replace(libraryDestination());
    }, 650);
  }

  async function refreshAccount() {
    setAlert(t("checkingAccount"), "info");
    try {
      var status = await window.HLMAuth.accessStatus(productKey);
      if (status.state !== "signed-out" && window.HLMSupabase) {
        var client = window.HLMSupabase.getClient();
        var claimResult = await client.rpc("claim_current_user_purchases");
        if (claimResult.error && String(claimResult.error.message || "").toLowerCase().indexOf("jwt") < 0) {
          console.warn("Purchase claim could not be completed", claimResult.error.code || "unknown");
        }
        status = await window.HLMAuth.accessStatus(productKey);
      }
      if (status.state === "signed-out") {
        element("accountControls").hidden = false;
        element("accountSession").hidden = true;
        setAlert(reasonMessage(initialReason), "info");
        return;
      }
      showSignedIn(status);
      setAlert("");
      if (status.allowed) openLibraryAutomatically();
    } catch (error) {
      setAlert(friendlyError(error, t("checkFailed")), "error");
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var values = new FormData(form);
    state.lastEmail = String(values.get("email") || "").trim();
    setBusy(form, true);
    setAlert("");
    try {
      var result = await window.HLMAuth.signIn(state.lastEmail, String(values.get("password") || ""));
      if (result.error) throw result.error;
      await refreshAccount();
    } catch (error) {
      setAlert(friendlyError(error), "error");
    } finally {
      setBusy(form, false);
    }
  }

  async function handleSignup(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var values = new FormData(form);
    var password = String(values.get("password") || "");
    if (password.length < 8) {
      setAlert(t("shortPassword"), "error");
      return;
    }
    state.lastEmail = String(values.get("email") || "").trim();
    setBusy(form, true);
    setAlert("");
    try {
      var result = await window.HLMAuth.signUp({
        fullName: values.get("full_name"),
        accountType: values.get("account_type"),
        email: state.lastEmail,
        password: password,
        emailRedirectTo: accountCallback({ confirmed: "1" })
      });
      if (result.error) throw result.error;
      setAlert(t("signupSent"), "success");
      form.reset();
    } catch (error) {
      setAlert(friendlyError(error), "error");
    } finally {
      setBusy(form, false);
    }
  }

  async function handleResetRequest() {
    var entered = element("loginEmail").value.trim() || state.lastEmail;
    if (!entered) {
      setAlert(t("enterEmailForgot"), "error");
      element("loginEmail").focus();
      return;
    }
    try {
      var result = await window.HLMAuth.requestPasswordReset(entered, accountCallback({ recovery: "1" }));
      if (result.error) throw result.error;
      setAlert(t("resetSent"), "success");
    } catch (error) {
      setAlert(friendlyError(error), "error");
    }
  }

  async function handleResend() {
    var entered = element("loginEmail").value.trim() || state.lastEmail;
    if (!entered) {
      setAlert(t("enterEmailResend"), "error");
      element("loginEmail").focus();
      return;
    }
    try {
      var result = await window.HLMAuth.resendConfirmation(entered, accountCallback({ confirmed: "1" }));
      if (result.error) throw result.error;
      setAlert(t("resendSent"), "success");
    } catch (error) {
      setAlert(friendlyError(error), "error");
    }
  }

  async function handleNewPassword(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var password = String(new FormData(form).get("password") || "");
    if (password.length < 8) {
      setAlert(t("shortPassword"), "error");
      return;
    }
    setBusy(form, true);
    try {
      var result = await window.HLMAuth.updatePassword(password);
      if (result.error) throw result.error;
      state.recovery = false;
      setAlert(t("passwordUpdated"), "success");
      await refreshAccount();
    } catch (error) {
      setAlert(friendlyError(error), "error");
    } finally {
      setBusy(form, false);
    }
  }

  async function start() {
    if (window.HLMAccountI18n) window.HLMAccountI18n.apply();
    document.querySelectorAll("[data-account-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () { selectPanel(tab.dataset.accountTab); });
    });
    element("loginForm").addEventListener("submit", handleLogin);
    element("signupForm").addEventListener("submit", handleSignup);
    element("recoveryForm").addEventListener("submit", handleNewPassword);
    element("forgotPassword").addEventListener("click", handleResetRequest);
    element("resendConfirmation").addEventListener("click", handleResend);
    element("refreshAccess").addEventListener("click", refreshAccount);
    element("openLibraryButton").addEventListener("click", function () {
      window.location.href = libraryDestination();
    });
    element("signOutButton").addEventListener("click", async function () { await window.HLMAuth.signOut(); window.location.replace(window.HLMRouting.page("index.html")); });

    window.HLMAuth.onAuthStateChange(function (event) {
      if (event === "PASSWORD_RECOVERY") {
        state.recovery = true;
        element("accountControls").hidden = false;
        element("accountSession").hidden = true;
        selectPanel("recovery");
      }
    });

    if (new URLSearchParams(window.location.search).get("recovery") === "1") {
      state.recovery = true;
      selectPanel("recovery");
    } else if (new URLSearchParams(window.location.search).get("mode") === "signup") {
      selectPanel("signup");
    }
    await refreshAccount();
  }

  document.addEventListener("DOMContentLoaded", function () {
    start().catch(function () {
      setAlert(t("servicesPreparing"), "error");
    });
  });
})();
