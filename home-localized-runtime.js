(function () {
  "use strict";

  var isLocal = window.location.protocol === "file:"
    || window.location.hostname === "localhost"
    || window.location.hostname === "127.0.0.1";
  var isMember = window.localStorage.getItem("isMember") === "true";
  var hasPreview = Boolean(window.HLMPreview && window.HLMPreview.isActive());

  if (!isLocal && !isMember && !hasPreview) {
    var path = window.location.pathname;
    var locale = path.split("/")[1];
    var redirectTo = locale && path.indexOf("/" + locale + "/") !== -1
      ? "/" + locale + "/index.html"
      : "/index.html";
    window.location.replace(redirectTo);
    return;
  }

  if (!isMember && hasPreview) window.HLMPreview.scheduleExpiryRedirect();

  if (window.location.hash === "#about") {
    window.location.replace("about_me.html");
    return;
  }

  function init() {
    document.querySelectorAll(".scroll-right").forEach(function (button) {
      if (button.dataset.horizontalScrollReady === "true") return;
      var container = button.closest("section, div")?.querySelector(".scroll-container")
        || document.querySelector(".scroll-container");
      if (!container) return;
      button.dataset.horizontalScrollReady = "true";
      button.addEventListener("click", function () {
        container.scrollBy({
          left: 200,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
