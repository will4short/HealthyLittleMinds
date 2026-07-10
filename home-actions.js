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

  var impactTabs = Array.prototype.slice.call(document.querySelectorAll("[data-impact-target]"));
  var impactPanels = Array.prototype.slice.call(document.querySelectorAll(".impact-detail__panel"));
  var impactDetail = document.querySelector(".impact-detail");

  function activateImpactTab(tab, shouldScroll) {
    if (!tab) return;
    var targetId = tab.getAttribute("data-impact-target");

    impactTabs.forEach(function (item) {
      var active = item === tab;
      var hint = item.querySelector(".impact-point__hint");
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
      if (hint) hint.textContent = active ? "Selected" : "View guidance";
    });

    impactPanels.forEach(function (panel) {
      var active = panel.id === targetId;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    if (shouldScroll && impactDetail) {
      impactDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  impactTabs.forEach(function (tab, index) {
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.addEventListener("click", function () {
      activateImpactTab(tab, true);
    });
    tab.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      var direction = event.key === "ArrowRight" ? 1 : -1;
      var nextIndex = (index + direction + impactTabs.length) % impactTabs.length;
      impactTabs[nextIndex].focus();
      activateImpactTab(impactTabs[nextIndex], true);
    });
  });
}());
