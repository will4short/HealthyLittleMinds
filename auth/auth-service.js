(function () {
  "use strict";

  var publicAccountTypes = ["parent", "educator"];

  function client() {
    return window.HLMSupabase.getClient();
  }

  function safeAccountType(value) {
    return publicAccountTypes.indexOf(value) >= 0 ? value : "parent";
  }

  async function currentUser() {
    var sessionResult = await client().auth.getSession();
    if (sessionResult.error) throw sessionResult.error;
    if (!sessionResult.data.session) return null;
    var result = await client().auth.getUser();
    if (result.error) throw result.error;
    return result.data.user || null;
  }

  async function accessStatus(productKey) {
    var user = await currentUser();
    if (!user) return { state: "signed-out", allowed: false };
    if (!user.email_confirmed_at) return { state: "email-unconfirmed", allowed: false, user: user };

    var profileResult = await client()
      .from("profiles")
      .select("account_status, account_type, full_name")
      .eq("id", user.id)
      .maybeSingle();
    if (profileResult.error) throw profileResult.error;
    if (!profileResult.data || profileResult.data.account_status !== "active") {
      return { state: "account-unavailable", allowed: false, user: user };
    }

    var entitlementResult = await client().rpc("current_user_has_entitlement", {
      requested_product_key: productKey
    });
    if (entitlementResult.error) throw entitlementResult.error;

    return {
      state: entitlementResult.data ? "active" : "access-required",
      allowed: entitlementResult.data === true,
      user: user,
      profile: profileResult.data
    };
  }

  window.HLMAuth = {
    accessStatus: accessStatus,
    currentUser: currentUser,
    getSession: function () { return client().auth.getSession(); },
    onAuthStateChange: function (callback) { return client().auth.onAuthStateChange(callback); },
    signIn: function (email, password) {
      return client().auth.signInWithPassword({ email: email, password: password });
    },
    signUp: function (details) {
      return client().auth.signUp({
        email: details.email,
        password: details.password,
        options: {
          emailRedirectTo: details.emailRedirectTo,
          data: {
            full_name: String(details.fullName || "").trim(),
            requested_account_type: safeAccountType(details.accountType)
          }
        }
      });
    },
    signInWithGoogle: function (redirectTo) {
      return client().auth.signInWithOAuth({ provider: "google", options: { redirectTo: redirectTo } });
    },
    requestPasswordReset: function (email, redirectTo) {
      return client().auth.resetPasswordForEmail(email, { redirectTo: redirectTo });
    },
    resendConfirmation: function (email, emailRedirectTo) {
      return client().auth.resend({
        type: "signup",
        email: email,
        options: { emailRedirectTo: emailRedirectTo }
      });
    },
    updatePassword: function (password) { return client().auth.updateUser({ password: password }); },
    signOut: function () { return client().auth.signOut(); }
  };
})();
