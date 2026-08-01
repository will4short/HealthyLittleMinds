(function () {
  "use strict";

  const selector = "[data-brand-motion]";

  function replay(element) {
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.classList.remove("is-brand-animating");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => element.classList.add("is-brand-animating"));
    });
  }

  document.addEventListener("pointerdown", (event) => {
    replay(event.target.closest(selector));
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    replay(event.target.closest(selector));
  });

  document.addEventListener("animationend", (event) => {
    if (event.target.matches(selector)) event.target.classList.remove("is-brand-animating");
  });
})();
