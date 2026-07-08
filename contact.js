(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var year = document.getElementById("contactYear");
    var form = document.getElementById("contactForm");
    var success = document.getElementById("contactSuccess");
    var error = document.getElementById("contactError");
    var button = form && form.querySelector(".contact-submit");
    if (year) year.textContent = new Date().getFullYear();
    if (!form || !success || !error || !button) return;
    var originalButtonText = button.textContent;
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      success.classList.remove("is-visible");
      error.classList.remove("is-visible");
      button.disabled = true;
      button.textContent = button.dataset.sendingText || "Sending...";
      try {
        var response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } });
        if (!response.ok) throw new Error("Form request failed");
        form.reset();
        form.classList.add("is-hidden");
        success.classList.add("is-visible");
      } catch (err) {
        error.classList.add("is-visible");
        button.disabled = false;
        button.textContent = originalButtonText;
      }
    });
  });
})();
