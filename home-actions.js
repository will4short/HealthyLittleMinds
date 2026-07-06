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
    if (action === "open-express" && typeof window.openExpressModal === "function") window.openExpressModal();
    if (action === "close-express" && typeof window.closeExpressModal === "function") window.closeExpressModal();
    if (action === "save-express" && typeof window.saveExpress === "function") window.saveExpress();
    if (action === "dismiss-parent") control.parentElement.remove();
  });
}());
