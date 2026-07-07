(function () {
  "use strict";

  function setYear() {
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = new Date().getFullYear();
    });
  }

  function updateButton(button, video, type) {
    if (type === "play") button.textContent = video.paused ? button.dataset.playLabel : button.dataset.pauseLabel;
    if (type === "mute") button.textContent = video.muted ? button.dataset.unmuteLabel : button.dataset.muteLabel;
  }

  function setupVideoControls() {
    document.querySelectorAll("[data-video-card]").forEach(function (card) {
      var video = card.querySelector("video");
      if (!video) return;
      var play = card.querySelector("[data-video-play]");
      var mute = card.querySelector("[data-video-mute]");
      if (play) {
        updateButton(play, video, "play");
        play.addEventListener("click", function () {
          if (video.paused) video.play(); else video.pause();
          updateButton(play, video, "play");
        });
        video.addEventListener("play", function () { updateButton(play, video, "play"); });
        video.addEventListener("pause", function () { updateButton(play, video, "play"); });
      }
      if (mute) {
        updateButton(mute, video, "mute");
        mute.addEventListener("click", function () {
          video.muted = !video.muted;
          updateButton(mute, video, "mute");
        });
      }
    });
  }

  function setupCopyButtons() {
    document.querySelectorAll("[data-copy-url]").forEach(function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-copy-url") || window.location.href;
        var success = button.getAttribute("data-copy-success") || "Link copied";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(function () { button.textContent = success; });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setYear();
    setupVideoControls();
    setupCopyButtons();
  });
})();
