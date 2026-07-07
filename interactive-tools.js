(function () {
  "use strict";

  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function setupAudio() {
    var player = new Audio();
    var label = qs("#nowPlayingLabel");

    qsa("[data-sound-src]").forEach(function (button) {
      button.addEventListener("click", function () {
        var src = button.dataset.soundSrc;
        var soundLabel = button.dataset.soundLabel || button.textContent.trim();
        player.pause();
        player = new Audio(src);
        player.loop = true;
        player.play()
          .then(function () {
            if (label) label.textContent = button.dataset.playingText || soundLabel;
          })
          .catch(function () {
            if (label) label.textContent = button.dataset.tapAgain || "Tap again to start audio.";
          });
      });
    });

    qsa("[data-stop-sound]").forEach(function (button) {
      button.addEventListener("click", function () {
        player.pause();
        player.currentTime = 0;
        if (label) label.textContent = "";
      });
    });
  }

  function setupBreathing() {
    var circle = qs("#breathing-circle");
    var text = qs("#breathing-text");
    var stage = qs("[data-breathing-stage]");
    var interval = null;
    if (!circle || !text || !stage) return;

    var breatheIn = stage.dataset.breatheIn || "Breathe in...";
    var hold = stage.dataset.hold || "Hold...";
    var breatheOut = stage.dataset.breatheOut || "Breathe out...";

    qsa("[data-start-breathing]").forEach(function (button) {
      button.addEventListener("click", function () {
        var state = "in";
        text.textContent = breatheIn;
        circle.style.transform = "scale(1.4)";
        if (interval) clearInterval(interval);
        interval = setInterval(function () {
          if (state === "in") {
            state = "hold";
            text.textContent = hold;
            circle.style.transform = "scale(1.4)";
          } else if (state === "hold") {
            state = "out";
            text.textContent = breatheOut;
            circle.style.transform = "scale(1)";
          } else {
            state = "in";
            text.textContent = breatheIn;
            circle.style.transform = "scale(1.4)";
          }
        }, 4000);
      });
    });
  }

  function setupMoodStory() {
    var output = qs("#storyOutput");
    var title = qs("#moodTitle");
    var message = qs("#moodMessage");
    if (!output || !title || !message) return;

    qsa("[data-mood]").forEach(function (button) {
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", function () {
        qsa("[data-mood]").forEach(function (choice) {
          var selected = choice === button;
          choice.classList.toggle("is-selected", selected);
          choice.setAttribute("aria-pressed", String(selected));
        });
        title.textContent = button.dataset.moodTitle || "";
        message.textContent = button.dataset.moodMessage || "";
        output.classList.add("is-visible");
      });
    });

    qsa("[data-reset-story]").forEach(function (button) {
      button.addEventListener("click", function () {
        output.classList.remove("is-visible");
        title.textContent = "";
        message.textContent = "";
        qsa("[data-mood]").forEach(function (choice) {
          choice.classList.remove("is-selected");
          choice.setAttribute("aria-pressed", "false");
        });
      });
    });
  }

  function setupReflection() {
    var result = qs("#reflectionResult");
    var summary = qs("#reflectionSummary");
    var practice = qs("#practiceStep");
    var build = qs("#buildReflectionBtn");
    var reset = qs("#resetReflectionBtn");
    if (!result || !summary || !practice || !build || !reset) return;

    var state = { feeling: "", help: "" };
    var defaultText = summary.textContent;

    qsa("[data-reflection-group]").forEach(function (button) {
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", function () {
        var group = button.dataset.reflectionGroup;
        state[group] = button.dataset.reflectionValue || button.textContent.trim();
        qsa('[data-reflection-group="' + group + '"]').forEach(function (choice) {
          var selected = choice === button;
          choice.classList.toggle("is-selected", selected);
          choice.setAttribute("aria-pressed", String(selected));
        });
      });
    });

    build.addEventListener("click", function () {
      var template = result.dataset.template || "Ella felt {feeling}. {help} I can practise {practice}, one small step at a time.";
      var text = template
        .replace("{feeling}", state.feeling || result.dataset.fallbackFeeling || "unsure")
        .replace("{help}", state.help || result.dataset.fallbackHelp || "She found one small way to keep going.")
        .replace("{practice}", practice.value.trim() || result.dataset.fallbackPractice || "one small thing I care about");
      summary.textContent = text;
      result.classList.add("is-visible");
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    reset.addEventListener("click", function () {
      state.feeling = "";
      state.help = "";
      practice.value = "";
      summary.textContent = defaultText;
      result.classList.remove("is-visible");
      qsa("[data-reflection-group]").forEach(function (choice) {
        choice.classList.remove("is-selected");
        choice.setAttribute("aria-pressed", "false");
      });
    });
  }

  function setupDrawing() {
    var canvas = qs("#drawingCanvas");
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext("2d");
    var colorPicker = qs("#inkColor");
    var eraserBtn = qs("#eraserBtn");
    var clearBtn = qs("#clearBtn");
    var saveBtn = qs("#saveBtn");
    var eraserSize = qs("#eraserSize");
    var drawing = false;
    var erasing = false;
    var lastX = 0;
    var lastY = 0;

    function fillCanvas() {
      var rect = canvas.getBoundingClientRect();
      ctx.fillStyle = "#fffbea";
      ctx.fillRect(0, 0, rect.width, rect.height);
    }

    function sizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      var scale = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * scale));
      canvas.height = Math.max(1, Math.floor(rect.height * scale));
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      fillCanvas();
    }

    function getXY(event) {
      var point = event.touches ? event.touches[0] : event;
      var rect = canvas.getBoundingClientRect();
      return { x: point.clientX - rect.left, y: point.clientY - rect.top };
    }

    function start(event) {
      drawing = true;
      var pos = getXY(event);
      lastX = pos.x;
      lastY = pos.y;
    }

    function draw(event) {
      if (!drawing) return;
      event.preventDefault();
      var pos = getXY(event);
      ctx.strokeStyle = erasing ? "#fffbea" : (colorPicker ? colorPicker.value : "#254E70");
      ctx.lineWidth = erasing ? parseInt(eraserSize ? eraserSize.value : "10", 10) : 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      lastX = pos.x;
      lastY = pos.y;
    }

    function stop() {
      drawing = false;
    }

    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseout", stop);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stop);

    if (eraserBtn) {
      eraserBtn.addEventListener("click", function () {
        erasing = !erasing;
        eraserBtn.textContent = erasing ? (eraserBtn.dataset.activeLabel || "Erasing...") : (eraserBtn.dataset.label || "Eraser");
        eraserBtn.setAttribute("aria-pressed", String(erasing));
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", fillCanvas);
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = saveBtn.dataset.filename || "my_drawing.png";
        link.click();
        var original = saveBtn.dataset.label || saveBtn.textContent;
        saveBtn.textContent = saveBtn.dataset.savedLabel || "Saved";
        setTimeout(function () { saveBtn.textContent = original; }, 2000);
      });
    }
  }

  function setupEmail() {
    var button = qs("#send-email");
    if (!button) return;
    button.addEventListener("click", function () {
      var subject = encodeURIComponent(button.dataset.mailSubject || "My Drawing from Healthy Little Minds");
      var body = encodeURIComponent(button.dataset.mailBody || "Please help me attach the drawing I saved from Healthy Little Minds.");
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupAudio();
    setupBreathing();
    setupMoodStory();
    setupReflection();
    setupDrawing();
    setupEmail();
  });
})();
