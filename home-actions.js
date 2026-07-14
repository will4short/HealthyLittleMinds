(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    var control = event.target.closest("[data-home-action], [data-slide-index], [data-slide-direction]");
    if (!control) return;

    if (control.dataset.slideIndex !== undefined && typeof window.showSlide === "function") {
      window.showSlide(Number(control.dataset.slideIndex), true);
      return;
    }

    if (control.dataset.slideDirection && typeof window.changeSlide === "function") {
      window.changeSlide(Number(control.dataset.slideDirection), true);
      return;
    }

    var action = control.dataset.homeAction;
    if (action === "dismiss-announcement" && typeof window.hideBar === "function") window.hideBar();
    if (action === "clear-mood" && typeof window.clearMood === "function") window.clearMood();
    if (action === "dismiss-parent") control.parentElement.remove();
  });

  var testimonialRoot = document.querySelector("[data-testimonials]");
  if (testimonialRoot) {
    var testimonialTabs = Array.prototype.slice.call(testimonialRoot.querySelectorAll("[data-testimonial-index]"));
    var testimonialLabel = testimonialRoot.querySelector("[data-testimonial-label]");
    var testimonialQuote = testimonialRoot.querySelector("[data-testimonial-quote]");
    var testimonialMeta = testimonialRoot.querySelector("[data-testimonial-meta]");
    var testimonialDots = Array.prototype.slice.call(testimonialRoot.querySelectorAll(".testimonial-dots span"));
    var activeTestimonialIndex = 0;

    function setTestimonial(index, shouldFocus) {
      if (!testimonialTabs.length) return;
      activeTestimonialIndex = (index + testimonialTabs.length) % testimonialTabs.length;
      var activeTab = testimonialTabs[activeTestimonialIndex];

      testimonialTabs.forEach(function (tab, tabIndex) {
        var isActive = tabIndex === activeTestimonialIndex;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      testimonialDots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === activeTestimonialIndex);
      });

      if (testimonialLabel) testimonialLabel.textContent = activeTab.dataset.label || "";
      if (testimonialQuote) testimonialQuote.textContent = activeTab.dataset.quote || "";
      if (testimonialMeta) testimonialMeta.textContent = activeTab.dataset.meta || "";
      if (shouldFocus) activeTab.focus({ preventScroll: true });
    }

    testimonialTabs.forEach(function (tab, index) {
      tab.tabIndex = index === 0 ? 0 : -1;
      tab.addEventListener("click", function () {
        setTestimonial(index, false);
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
        event.preventDefault();
        if (event.key === "Home") setTestimonial(0, true);
        else if (event.key === "End") setTestimonial(testimonialTabs.length - 1, true);
        else setTestimonial(index + (event.key === "ArrowRight" ? 1 : -1), true);
      });
    });

    testimonialRoot.addEventListener("click", function (event) {
      var control = event.target.closest("[data-testimonial-direction]");
      if (!control) return;
      setTestimonial(activeTestimonialIndex + Number(control.dataset.testimonialDirection || 0), false);
    });

    setTestimonial(0, false);
  }

  var feelingExplorer = document.querySelector("[data-feeling-explorer]");
  if (feelingExplorer) {
    var feelingCards = Array.prototype.slice.call(feelingExplorer.querySelectorAll("[data-feeling-card]"));
    var feelingTitle = feelingExplorer.querySelector("[data-feeling-preview-title]");
    var feelingSummary = feelingExplorer.querySelector("[data-feeling-preview-summary]");
    var feelingLink = feelingExplorer.querySelector("[data-feeling-preview-link]");

    function setFeelingPreview(card) {
      if (!card) return;
      feelingCards.forEach(function (item) {
        item.classList.toggle("is-active", item === card);
      });
      if (feelingTitle) feelingTitle.textContent = card.dataset.feelingTitle || card.textContent.trim();
      if (feelingSummary) feelingSummary.textContent = card.dataset.feelingSummary || "";
      if (feelingLink) {
        feelingLink.href = card.getAttribute("href") || "#";
        feelingLink.textContent = card.dataset.feelingAction || "Open support";
      }
    }

    feelingCards.forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        setFeelingPreview(card);
      });
      card.addEventListener("focus", function () {
        setFeelingPreview(card);
      });
    });

    setFeelingPreview(feelingCards[0]);
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var setHeaderState = function () {
      document.body.classList.toggle("home-header-scrolled", window.scrollY > 8);
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }
}());
