(function () {
  "use strict";

  var hasPreview = Boolean(window.HLMPreview && window.HLMPreview.isActive());

  if (hasPreview) window.HLMPreview.scheduleExpiryRedirect();

  if (window.location.hash === "#about") {
    window.location.replace("about_me.html");
    return;
  }

  function init() {
    document.querySelectorAll(".scroll-right").forEach(function (button) {
      if (button.dataset.horizontalScrollReady === "true") return;
      var container = button.closest("section, div")?.querySelector(".scroll-container")
        || document.querySelector(".scroll-container");
      if (!container) return;
      button.dataset.horizontalScrollReady = "true";
      button.addEventListener("click", function () {
        container.scrollBy({
          left: 200,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      });
    });

    var lang = (document.documentElement.lang || "en").toLowerCase();
    var emailError = lang.indexOf("ja") === 0 ? "有効なメールアドレスを入力してください。"
      : lang.indexOf("ko") === 0 ? "올바른 이메일 주소를 입력해 주세요."
      : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "請輸入有效的電子郵件地址。"
      : "请输入有效的电子邮箱地址。";
    document.querySelectorAll(".home-subscribe-form").forEach(function (form) {
      var input = form.querySelector('input[type="email"]');
      if (!input || form.dataset.validationReady === "true") return;
      form.dataset.validationReady = "true";
      var status = document.createElement("p");
      status.className = "home-form-status";
      status.setAttribute("role", "alert");
      status.hidden = true;
      form.appendChild(status);
      input.addEventListener("invalid", function () {
        input.setAttribute("aria-invalid", "true");
        status.textContent = emailError;
        status.hidden = false;
      });
      input.addEventListener("input", function () {
        if (!input.validity.valid) return;
        input.removeAttribute("aria-invalid");
        status.hidden = true;
        status.textContent = "";
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
