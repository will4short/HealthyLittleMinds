(function () {
  var DEFAULT_BOOK = "audiobooks/ella/book.json";
  var state = {
    book: null,
    pages: [],
    pageIndex: 0,
    bookUrl: "",
    baseUrl: "",
    isPlaying: false,
    userStartedPlayback: false,
    activeLanguage: "",
    backgroundMusic: null
  };

  var els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    bindEvents();
    loadBook(getBookUrl());
  }

  function cacheElements() {
    els.shell = document.querySelector(".reader-shell");
    els.loading = document.getElementById("readerLoading");
    els.error = document.getElementById("readerError");
    els.errorText = document.getElementById("readerErrorText");
    els.layout = document.getElementById("readerLayout");
    els.bookTitle = document.getElementById("bookTitle");
    els.bookSeries = document.getElementById("bookSeries");
    els.bookDescription = document.getElementById("bookDescription");
    els.pageCounter = document.getElementById("pageCounter");
    els.progressFill = document.getElementById("progressFill");
    els.figureWrap = document.getElementById("figureWrap");
    els.pageImage = document.getElementById("pageImage");
    els.imageCaption = document.getElementById("imageCaption");
    els.imageState = document.getElementById("imageState");
    els.storyText = document.getElementById("storyText");
    els.audio = document.getElementById("audioPlayer");
    els.audioError = document.getElementById("audioError");
    els.currentTime = document.getElementById("currentTime");
    els.durationTime = document.getElementById("durationTime");
    els.seekBar = document.getElementById("seekBar");
    els.prevBtn = document.getElementById("prevBtn");
    els.nextBtn = document.getElementById("nextBtn");
    els.playPauseBtn = document.getElementById("playPauseBtn");
    els.playPauseIcon = document.getElementById("playPauseIcon");
    els.playPauseText = document.getElementById("playPauseText");
    els.autoPlayToggle = document.getElementById("autoPlayToggle");
    els.musicToggle = document.getElementById("musicToggle");
    els.fullscreenBtn = document.getElementById("fullscreenBtn");
  }

  function bindEvents() {
    els.prevBtn.addEventListener("click", function () { goToPage(state.pageIndex - 1); });
    els.nextBtn.addEventListener("click", function () { goToPage(state.pageIndex + 1); });
    els.playPauseBtn.addEventListener("click", togglePlayback);
    els.seekBar.addEventListener("input", seekAudio);
    els.fullscreenBtn.addEventListener("click", toggleFullScreen);
    els.musicToggle.addEventListener("change", toggleBackgroundMusic);

    els.audio.addEventListener("loadedmetadata", updateDuration);
    els.audio.addEventListener("timeupdate", onTimeUpdate);
    els.audio.addEventListener("play", function () {
      state.isPlaying = true;
      state.userStartedPlayback = true;
      updatePlayButton();
    });
    els.audio.addEventListener("pause", function () {
      state.isPlaying = false;
      updatePlayButton();
    });
    els.audio.addEventListener("ended", function () {
      state.isPlaying = false;
      updatePlayButton();
      if (els.autoPlayToggle.checked && state.pageIndex < state.pages.length - 1) {
        goToPage(state.pageIndex + 1, { autoPlay: true });
      }
    });
    els.audio.addEventListener("error", function () {
      showAudioError(true);
      els.playPauseBtn.disabled = true;
    });

    els.pageImage.addEventListener("error", function () {
      els.imageState.hidden = false;
      els.pageImage.hidden = true;
    });
    els.pageImage.addEventListener("load", function () {
      els.imageState.hidden = true;
      els.pageImage.hidden = false;
    });

    document.addEventListener("keydown", function (event) {
      if (event.target && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
      if (event.key === "ArrowLeft") goToPage(state.pageIndex - 1);
      if (event.key === "ArrowRight") goToPage(state.pageIndex + 1);
      if (event.key === " ") {
        event.preventDefault();
        togglePlayback();
      }
    });
  }

  function getBookUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("book") || DEFAULT_BOOK;
  }

  async function loadBook(bookUrl) {
    setLoading(true);
    hideError();
    state.bookUrl = bookUrl;
    state.baseUrl = new URL(".", new URL(bookUrl, window.location.href)).href;

    try {
      var response = await fetch(bookUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("Book JSON returned " + response.status);
      var book = await response.json();
      validateBook(book);

      state.book = book;
      state.pages = book.pages;
      state.activeLanguage = book.language || "en";
      setupBookMeta();
      setupBackgroundMusic();
      setLoading(false);
      goToPage(0);
    } catch (error) {
      console.error("[Audiobook] Unable to load book", error);
      setLoading(false);
      showError("The audiobook JSON could not be loaded. Check the URL, JSON format, and file paths.");
    }
  }

  function validateBook(book) {
    if (!book || typeof book !== "object") throw new Error("Missing book object");
    if (!book.title) throw new Error("Book needs a title");
    if (!Array.isArray(book.pages) || book.pages.length === 0) {
      throw new Error("Book needs at least one page");
    }
  }

  function setupBookMeta() {
    document.title = state.book.title + " | Healthy Little Minds Audiobook";
    els.bookTitle.textContent = state.book.title;
    els.bookSeries.textContent = state.book.series || "Audiobook";
    els.bookDescription.textContent = state.book.description || "";
  }

  function setupBackgroundMusic() {
    if (state.backgroundMusic) {
      state.backgroundMusic.pause();
      state.backgroundMusic = null;
    }

    if (!state.book.backgroundMusic) {
      els.musicToggle.disabled = true;
      els.musicToggle.checked = false;
      return;
    }

    els.musicToggle.disabled = false;
    state.backgroundMusic = new Audio(resolveAsset(state.book.backgroundMusic));
    state.backgroundMusic.loop = true;
    state.backgroundMusic.volume = Number(state.book.backgroundMusicVolume || 0.16);
  }

  function goToPage(nextIndex, options) {
    if (!state.pages.length) return;
    if (nextIndex < 0 || nextIndex >= state.pages.length) return;

    var shouldPlay = Boolean(options && options.autoPlay);
    var page = state.pages[nextIndex];
    state.pageIndex = nextIndex;

    els.figureWrap.classList.add("is-changing");
    els.storyText.classList.add("is-changing");

    window.setTimeout(function () {
      renderPage(page);
      els.figureWrap.classList.remove("is-changing");
      els.storyText.classList.remove("is-changing");
      if (shouldPlay) playAudio();
    }, 160);
  }

  function renderPage(page) {
    var total = state.pages.length;
    var pageNumber = state.pageIndex + 1;
    var imageUrl = resolveAsset(page.image);
    var audioUrl = resolveAsset(page.audio);

    els.pageCounter.textContent = "Page " + pageNumber + " of " + total;
    els.progressFill.style.width = Math.round((pageNumber / total) * 100) + "%";

    els.pageImage.hidden = false;
    els.imageState.hidden = true;
    els.pageImage.src = imageUrl;
    els.pageImage.alt = page.alt || (state.book.title + " illustration, page " + pageNumber);
    els.imageCaption.textContent = page.caption || ("Page " + pageNumber + " illustration");

    renderStoryText(page);

    els.audio.pause();
    els.audio.removeAttribute("src");
    els.audio.load();
    showAudioError(false);
    els.playPauseBtn.disabled = !page.audio;
    els.seekBar.value = 0;
    els.currentTime.textContent = "0:00";
    els.durationTime.textContent = "0:00";

    if (page.audio) {
      els.audio.src = audioUrl;
      els.audio.load();
    } else {
      showAudioError(true);
      els.playPauseBtn.disabled = true;
    }

    els.prevBtn.disabled = state.pageIndex === 0;
    els.nextBtn.disabled = state.pageIndex === total - 1;
    updatePlayButton();
  }

  function renderStoryText(page) {
    var text = getPageText(page);
    var timings = Array.isArray(page.timings) ? page.timings : [];

    els.storyText.innerHTML = "";
    if (!text) {
      els.storyText.textContent = "Story text for this page is ready to be added in book.json.";
      return;
    }

    if (timings.length) {
      timings.forEach(function (segment, index) {
        var span = document.createElement("span");
        span.className = "read-segment read-segment--timed";
        span.dataset.start = Number(segment.start || 0);
        span.dataset.end = Number(segment.end || 0);
        span.textContent = segment.text || "";
        els.storyText.appendChild(span);
        if (index < timings.length - 1) els.storyText.appendChild(document.createTextNode(" "));
      });
      return;
    }

    renderAutoHighlightedText(text);
  }

  function renderAutoHighlightedText(text) {
    var parts = text.split(/(\s+)/);
    var wordIndex = 0;

    parts.forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        els.storyText.appendChild(document.createTextNode(part));
        return;
      }

      var span = document.createElement("span");
      span.className = "read-segment read-segment--auto";
      span.dataset.wordIndex = String(wordIndex);
      span.textContent = part;
      els.storyText.appendChild(span);
      wordIndex += 1;
    });

    els.storyText.dataset.wordCount = String(wordIndex);
  }

  function getPageText(page) {
    if (state.activeLanguage && page.textByLanguage && page.textByLanguage[state.activeLanguage]) {
      return page.textByLanguage[state.activeLanguage];
    }
    return page.text || "";
  }

  function resolveAsset(path) {
    if (!path) return "";
    return new URL(path, state.baseUrl).href;
  }

  async function togglePlayback() {
    if (els.playPauseBtn.disabled) return;
    if (els.audio.paused) {
      await playAudio();
    } else {
      els.audio.pause();
    }
  }

  async function playAudio() {
    try {
      await els.audio.play();
      if (state.backgroundMusic && els.musicToggle.checked) {
        state.backgroundMusic.play().catch(function () {});
      }
    } catch (error) {
      console.warn("[Audiobook] Playback blocked or unavailable", error);
      showAudioError(true, "Tap Play again, or check that the narration file exists for this page.");
    }
  }

  function seekAudio() {
    if (!Number.isFinite(els.audio.duration)) return;
    els.audio.currentTime = (Number(els.seekBar.value) / 100) * els.audio.duration;
  }

  function updateDuration() {
    els.durationTime.textContent = formatTime(els.audio.duration);
  }

  function onTimeUpdate() {
    if (Number.isFinite(els.audio.duration) && els.audio.duration > 0) {
      els.seekBar.value = String((els.audio.currentTime / els.audio.duration) * 100);
    }
    els.currentTime.textContent = formatTime(els.audio.currentTime);
    highlightReadAlongSegment(els.audio.currentTime);
  }

  function highlightReadAlongSegment(currentTime) {
    var segments = els.storyText.querySelectorAll(".read-segment");
    if (!segments.length) return;

    var autoSegments = els.storyText.querySelectorAll(".read-segment--auto");
    if (autoSegments.length) {
      highlightAutoSegments(currentTime, autoSegments);
      return;
    }

    segments.forEach(function (segment) {
      var start = Number(segment.dataset.start || 0);
      var end = Number(segment.dataset.end || 0);
      var active = currentTime >= start && currentTime <= end;
      segment.classList.toggle("is-active", active);
      segment.classList.toggle("is-read", end > 0 && currentTime > end);
    });
  }

  function highlightAutoSegments(currentTime, segments) {
    var duration = Number(els.audio.duration || 0);
    var wordCount = segments.length;
    if (!duration || !wordCount) return;

    var progress = Math.min(Math.max(currentTime / duration, 0), 1);
    var activeIndex = Math.min(wordCount - 1, Math.floor(progress * wordCount));

    segments.forEach(function (segment, index) {
      segment.classList.toggle("is-read", index < activeIndex);
      segment.classList.toggle("is-active", index === activeIndex && !els.audio.paused && !els.audio.ended);
    });
  }

  function updatePlayButton() {
    var playing = !els.audio.paused && !els.audio.ended;
    els.playPauseIcon.textContent = playing ? "||" : ">";
    els.playPauseText.textContent = playing ? "Pause" : "Play";
    els.playPauseBtn.setAttribute("aria-label", playing ? "Pause narration" : "Play narration");
  }

  function toggleBackgroundMusic() {
    if (!state.backgroundMusic) return;
    if (els.musicToggle.checked && !els.audio.paused) {
      state.backgroundMusic.play().catch(function () {});
    } else {
      state.backgroundMusic.pause();
    }
  }

  async function toggleFullScreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        els.fullscreenBtn.setAttribute("aria-label", "Exit full screen");
      } else {
        await document.exitFullscreen();
        els.fullscreenBtn.setAttribute("aria-label", "Enter full screen");
      }
    } catch (error) {
      console.warn("[Audiobook] Fullscreen unavailable", error);
    }
  }

  function setLoading(isLoading) {
    els.shell.dataset.state = isLoading ? "loading" : "ready";
    els.loading.hidden = !isLoading;
    if (!isLoading && state.book) els.layout.hidden = false;
  }

  function showError(message) {
    els.layout.hidden = true;
    els.error.hidden = false;
    els.errorText.textContent = message;
    els.shell.dataset.state = "error";
  }

  function hideError() {
    els.error.hidden = true;
  }

  function showAudioError(show, message) {
    els.audioError.hidden = !show;
    if (message) els.audioError.textContent = message;
  }

  function formatTime(value) {
    if (!Number.isFinite(value)) return "0:00";
    var minutes = Math.floor(value / 60);
    var seconds = Math.floor(value % 60).toString().padStart(2, "0");
    return minutes + ":" + seconds;
  }
})();
