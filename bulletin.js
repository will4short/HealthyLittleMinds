(function () {
  "use strict";

  function requireMember() {
    if (localStorage.getItem("isMember") === "true") return;
    var isLocalFile = window.location.protocol === "file:";
    var parts = window.location.pathname.split("/").filter(Boolean);
    var locale = parts.length > 1 ? parts[0] : "";
    var supported = ["ja", "ko", "zh-cn", "zh-tw"];
    var target = isLocalFile
      ? "index.html"
      : supported.indexOf(locale) >= 0
        ? "/" + locale + "/index.html"
        : "/index.html";
    window.location.replace(target);
  }

  function setupMobileNav() {
    var button = document.querySelector("[data-bulletin-menu]");
    var menu = document.querySelector("[data-bulletin-mobile-nav]");
    if (!button || !menu) return;

    function setOpen(open) {
      button.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
    }

    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  requireMember();
  document.addEventListener("DOMContentLoaded", setupMobileNav);
})();
