(function () {
  "use strict";

  if (window.HLM_PROTECTED_GUARD_ACTIVE) return;

  var isLocalFile = window.location.protocol === "file:";
  var path = window.location.pathname || "";
  var parts = path.split("/").filter(Boolean);
  var supportedLocales = ["ja", "ko", "zh-cn", "zh-tw"];
  var locale = parts.find(function (part) {
    return supportedLocales.indexOf(part) !== -1;
  });

  var redirectTo = isLocalFile
    ? "index.html"
    : (locale ? "/" + locale + "/index.html" : "/index.html");

  window.location.replace(isLocalFile ? redirectTo : "/account.html?reason=guard-missing");
})();
