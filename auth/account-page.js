(function () {
  "use strict";

  var productKey = "full-library";
  var state = { recovery: false, lastEmail: "", openingLibrary: false };
  var initialParams = new URLSearchParams(window.location.search);
  var initialReason = initialParams.get("reason") || "";
  var requestedReturn = initialParams.get("returnTo") || "";

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
    if (message.indexOf("invalid login") >= 0) return "The email or password was not correct. Please try again or reset your password.";
    if (message.indexOf("email not confirmed") >= 0) return "Please confirm your email before logging in. You can resend the confirmation below.";
    if (message.indexOf("already registered") >= 0 || message.indexOf("already been registered") >= 0) return "If an account already exists for this email, you can log in or reset the password.";
    if (message.indexOf("password") >= 0 && message.indexOf("short") >= 0) return "Choose a password with at least eight characters.";
    if (message.indexOf("rate") >= 0 || message.indexOf("too many") >= 0) return "Too many attempts were made. Please wait a little while and try again.";
    return fallback || "We could not complete that request. Please check your connection and try again.";
  }

  function reasonMessage(reason) {
    if (reason === "signed-out") return "Log in to open the member library.";
    if (reason === "email-unconfirmed") return "Confirm your email before opening the member library.";
    if (reason === "access-required") return "Your account is ready, but full-library access is not connected yet.";
    if (reason === "account-unavailable") return "This account cannot currently open the member library. Contact support if you need help.";
    return "";
  }

  function setBusy(form, busy) {
    form.querySelectorAll("button, input, select").forEach(function (control) { control.disabled = busy; });
    var submit = form.querySelector("button[type='submit']");
    if (!submit) return;
    if (!submit.dataset.label) submit.dataset.label = submit.textContent;
    submit.textContent = busy ? "Please wait…" : submit.dataset.label;
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
    element("sessionEmail").textContent = status.user.email || "your account";
    element("sessionName").textContent = status.profile && status.profile.full_name ? status.profile.full_name : "Member";

    var badge = element("accessBadge");
    var description = element("accessDescription");
    if (status.allowed) {
      badge.textContent = "Full library access active";
      description.textContent = "Access confirmed — opening your member library…";
      element("openLibraryButton").hidden = false;
      element("purchaseButton").hidden = true;
    } else {
      badge.textContent = "Account ready — access not connected";
      description.textContent = "If you already purchased, make sure this is the same email used at Payhip and check access again.";
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
    setAlert("Checking your account…", "info");
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
      setAlert(friendlyError(error, "We could not check your account. Please try again."), "error");
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
      setAlert("Choose a password with at least eight characters.", "error");
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
      setAlert("Check your email to confirm your account. Return here after selecting the confirmation link.", "success");
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
      setAlert("Enter your email above, then select Forgot password again.", "error");
      element("loginEmail").focus();
      return;
    }
    try {
      var result = await window.HLMAuth.requestPasswordReset(entered, accountCallback({ recovery: "1" }));
      if (result.error) throw result.error;
      setAlert("If an account is associated with that email, a password-reset message will arrive shortly.", "success");
    } catch (error) {
      setAlert(friendlyError(error), "error");
    }
  }

  async function handleResend() {
    var entered = element("loginEmail").value.trim() || state.lastEmail;
    if (!entered) {
      setAlert("Enter your email above, then select Resend confirmation again.", "error");
      element("loginEmail").focus();
      return;
    }
    try {
      var result = await window.HLMAuth.resendConfirmation(entered, accountCallback({ confirmed: "1" }));
      if (result.error) throw result.error;
      setAlert("If the account still needs confirmation, a new message will arrive shortly. Check Spam or Junk too.", "success");
    } catch (error) {
      setAlert(friendlyError(error), "error");
    }
  }

  async function handleNewPassword(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var password = String(new FormData(form).get("password") || "");
    if (password.length < 8) {
      setAlert("Choose a password with at least eight characters.", "error");
      return;
    }
    setBusy(form, true);
    try {
      var result = await window.HLMAuth.updatePassword(password);
      if (result.error) throw result.error;
      state.recovery = false;
      setAlert("Your password has been updated. Your account is ready.", "success");
      await refreshAccount();
    } catch (error) {
      setAlert(friendlyError(error), "error");
    } finally {
      setBusy(form, false);
    }
  }

  async function start() {
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
      setAlert("Account services are being prepared. Please return to the main page and try again later.", "error");
    });
  });
})();
