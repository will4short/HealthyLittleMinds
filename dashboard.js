(() => {
  if (window.HLM_PROTECTED_GUARD_ACTIVE) return;

  const localPreview = window.location.protocol === "file:" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

  if (localPreview) return;
  const locale = window.location.pathname.split("/")[1];
  const translated = ["zh-tw", "zh-cn", "ja", "ko"].includes(locale);
  window.location.replace("/account.html?reason=guard-missing");
})();
