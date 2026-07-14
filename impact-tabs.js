(function () {
  "use strict";

  Array.prototype.forEach.call(document.querySelectorAll(".why-matters"), function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-impact-target]"));
    var panels = Array.prototype.slice.call(root.querySelectorAll(".impact-detail__panel"));
    var detail = root.querySelector(".impact-detail");
    var selectedLabel = root.getAttribute("data-impact-selected-label") || "Selected";
    var guidanceLabel = root.getAttribute("data-impact-guidance-label") || "View guidance";

    if (!tabs.length || !panels.length) return;

    function activateTab(tab, shouldScroll) {
      var targetId = tab.getAttribute("data-impact-target");

      tabs.forEach(function (item) {
        var active = item === tab;
        var hint = item.querySelector(".impact-point__hint");
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
        if (hint) hint.textContent = active ? selectedLabel : guidanceLabel;
      });

      panels.forEach(function (panel) {
        var active = panel.id === targetId;
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
      });

      if (shouldScroll && detail) {
        detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    tabs.forEach(function (tab, index) {
      tab.tabIndex = index === 0 ? 0 : -1;
      tab.addEventListener("click", function () {
        activateTab(tab, true);
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex], true);
      });
    });

    activateTab(tabs[0], false);
  });
}());
