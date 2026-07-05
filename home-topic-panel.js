(function () {
  "use strict";

  function initTopicPanel(panel) {
    if (panel.dataset.topicPanelReady === "true") return;
    panel.dataset.topicPanelReady = "true";

    var list = panel.querySelector(".hlm-tp__list");
    if (!list) return;
    var items = Array.prototype.slice.call(list.querySelectorAll("li"));
    var input = panel.querySelector('.hlm-tp__search input[type="search"]');
    var upButton = panel.querySelector(".hlm-tp__up");
    var downButton = panel.querySelector(".hlm-tp__down");
    var track = panel.querySelector(".hlm-tp__track");
    var thumb = track ? track.querySelector(".hlm-tp__thumb") : null;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var lang = (document.documentElement.lang || "en").toLowerCase();
    var emptyText = lang.indexOf("ja") === 0 ? "一致するトピックはありません"
      : lang.indexOf("ko") === 0 ? "일치하는 주제가 없습니다"
      : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "沒有相符的主題"
      : lang.indexOf("zh") === 0 ? "没有匹配的主题"
      : "No matching topics";
    var holdTimer;
    var dragging = false;
    var dragStartY = 0;
    var dragStartScrollTop = 0;

    list.setAttribute("aria-live", "polite");
    list.setAttribute("data-empty-text", emptyText);

    function syncThumb() {
      if (!track || !thumb) return;
      var view = list.clientHeight;
      var full = list.scrollHeight;
      var trackHeight = track.clientHeight;
      var thumbHeight = Math.max(28, Math.round(trackHeight * (view / Math.max(full, 1))));
      var maxScroll = Math.max(full - view, 1);
      var maxThumbY = Math.max(trackHeight - thumbHeight, 1);
      thumb.style.height = thumbHeight + "px";
      thumb.style.transform = "translateY(" + Math.round((list.scrollTop / maxScroll) * maxThumbY) + "px)";
      track.hidden = full <= view + 1;
    }

    function layoutTrack() {
      if (!track) return;
      track.style.top = list.offsetTop + "px";
      track.style.height = list.clientHeight + "px";
      syncThumb();
    }

    function applyFilter() {
      var query = input ? input.value.trim().toLowerCase() : "";
      var visible = 0;
      items.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        var tags = (item.dataset.tags || "").toLowerCase();
        var show = !query || text.indexOf(query) !== -1 || tags.indexOf(query) !== -1;
        item.hidden = !show;
        if (show) visible += 1;
      });
      list.dataset.empty = visible === 0 ? "true" : "false";
      list.setAttribute("aria-busy", "false");
      list.scrollTop = 0;
      syncThumb();
    }

    function scrollByAmount(amount) {
      list.scrollBy({ top: amount, behavior: reducedMotion.matches ? "auto" : "smooth" });
    }

    function startHold(direction) {
      scrollByAmount(direction * 90);
      window.clearInterval(holdTimer);
      holdTimer = window.setInterval(function () { scrollByAmount(direction * 90); }, 150);
    }

    function endHold() {
      window.clearInterval(holdTimer);
      holdTimer = null;
    }

    function bindScrollButton(button, direction) {
      if (!button) return;
      button.addEventListener("pointerdown", function () { startHold(direction); });
      button.addEventListener("pointerup", endHold);
      button.addEventListener("pointercancel", endHold);
      button.addEventListener("pointerleave", endHold);
      button.addEventListener("click", function () { scrollByAmount(direction * 90); });
    }

    bindScrollButton(upButton, -1);
    bindScrollButton(downButton, 1);

    panel.addEventListener("keydown", function (event) {
      var amount;
      if (event.key === "ArrowUp") amount = -90;
      else if (event.key === "ArrowDown") amount = 90;
      else if (event.key === "PageUp") amount = -list.clientHeight;
      else if (event.key === "PageDown") amount = list.clientHeight;
      else if (event.key === "Home") amount = -list.scrollHeight;
      else if (event.key === "End") amount = list.scrollHeight;
      else return;
      event.preventDefault();
      scrollByAmount(amount);
    });

    function thumbDown(event) {
      if (!track || !thumb) return;
      dragging = true;
      dragStartY = event.clientY;
      dragStartScrollTop = list.scrollTop;
      if (thumb.setPointerCapture) thumb.setPointerCapture(event.pointerId);
      event.preventDefault();
    }

    function thumbMove(event) {
      if (!dragging || !track || !thumb) return;
      var maxThumbY = Math.max(track.clientHeight - thumb.offsetHeight, 1);
      var maxScroll = Math.max(list.scrollHeight - list.clientHeight, 1);
      list.scrollTop = Math.min(maxScroll, Math.max(0,
        dragStartScrollTop + ((event.clientY - dragStartY) / maxThumbY) * maxScroll));
      syncThumb();
      event.preventDefault();
    }

    function thumbUp() { dragging = false; }
    if (thumb) {
      thumb.addEventListener("pointerdown", thumbDown);
      thumb.addEventListener("pointermove", thumbMove);
      thumb.addEventListener("pointerup", thumbUp);
      thumb.addEventListener("pointercancel", thumbUp);
    }
    list.addEventListener("scroll", syncThumb);
    window.addEventListener("resize", layoutTrack);
    if (input) input.addEventListener("input", function () {
      list.setAttribute("aria-busy", "true");
      applyFilter();
    });
    layoutTrack();
    applyFilter();
  }

  function init() {
    document.querySelectorAll(".hlm-topic-panel").forEach(initTopicPanel);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
