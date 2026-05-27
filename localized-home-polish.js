(function () {
  function initBookShelf() {
    var rail = document.querySelector(".auto-book-rail");
    if (!rail || rail.dataset.glidingReady === "true") return;

    rail.dataset.glidingReady = "true";
    var originalCards = Array.prototype.filter.call(rail.children, function (card) {
      return card.tagName !== "STYLE" && card.tagName !== "SCRIPT";
    });
    if (originalCards.length < 2) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var compact = window.matchMedia("(max-width: 720px)");
    var pausedUntil = 0;
    var dragging = false;
    var touchStart = 0;
    var startScroll = 0;
    var loopWidth = 0;
    var previousTime = 0;

    if (!reduceMotion.matches) {
      originalCards.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("a, button").forEach(function (interactive) {
          interactive.setAttribute("tabindex", "-1");
        });
        rail.appendChild(clone);
      });
    }

    function measureLoop() {
      var firstClone = rail.children[originalCards.length];
      loopWidth = firstClone ? firstClone.offsetLeft - originalCards[0].offsetLeft : 0;
    }

    function pause(duration) {
      pausedUntil = Date.now() + duration;
    }

    function normalizeScroll() {
      if (loopWidth && rail.scrollLeft >= loopWidth) rail.scrollLeft -= loopWidth;
      if (loopWidth && rail.scrollLeft < 0) rail.scrollLeft += loopWidth;
    }

    function frame(time) {
      if (!previousTime) previousTime = time;
      var elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      if (!reduceMotion.matches && !dragging && Date.now() > pausedUntil) {
        rail.scrollLeft += elapsed * (compact.matches ? 0.018 : 0.032);
        normalizeScroll();
      }
      window.requestAnimationFrame(frame);
    }

    document.querySelectorAll("[data-localized-book-scroll]").forEach(function (button) {
      button.addEventListener("click", function () {
        pause(2600);
        var direction = button.dataset.localizedBookScroll === "prev" ? -1 : 1;
        var card = originalCards[0];
        rail.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "auto" });
        normalizeScroll();
      });
    });

    rail.addEventListener("pointerenter", function () { pause(1600); });
    rail.addEventListener("focusin", function () { pause(2400); });
    rail.addEventListener("touchstart", function (event) {
      if (!event.touches.length) return;
      dragging = true;
      touchStart = event.touches[0].clientX;
      startScroll = rail.scrollLeft;
    }, { passive: true });
    rail.addEventListener("touchmove", function (event) {
      if (!dragging || !event.touches.length) return;
      rail.scrollLeft = startScroll + touchStart - event.touches[0].clientX;
    }, { passive: true });

    function finishTouch() {
      dragging = false;
      normalizeScroll();
      pause(compact.matches ? 2600 : 1800);
    }

    rail.addEventListener("touchend", finishTouch, { passive: true });
    rail.addEventListener("touchcancel", finishTouch, { passive: true });
    window.addEventListener("resize", measureLoop);
    measureLoop();
    window.requestAnimationFrame(frame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBookShelf);
  } else {
    initBookShelf();
  }
})();
