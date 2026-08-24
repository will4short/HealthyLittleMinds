(function () {
  "use strict";

  var locales = ["ja", "ko", "zh-cn", "zh-tw"];

  function localePrefix() {
    var first = window.location.pathname.split("/").filter(Boolean)[0] || "";
    return locales.indexOf(first.toLowerCase()) >= 0 ? "/" + first.toLowerCase() : "";
  }

  function landingUrl(reason) {
    var url = localePrefix() + "/index.html";
    return reason ? url + "?reason=" + encodeURIComponent(reason) : url;
  }

  async function requireEntitlement(productKey) {
    try {
      var status = await window.HLMAuth.accessStatus(productKey);
      if (status.allowed) return status;
      window.location.replace(landingUrl(status.state));
      return status;
    } catch (error) {
      return { state: "check-failed", allowed: false, error: error };
    }
  }

  window.HLMAccess = {
    landingUrl: landingUrl,
    requireEntitlement: requireEntitlement
  };
})();
