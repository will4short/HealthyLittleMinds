(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const lightbox = document.querySelector(".lightbox");
  const image = lightbox?.querySelector("img");
  const closeButton = lightbox?.querySelector(".lightbox__close");
  if (!lightbox || !image || !closeButton) return;

  const close = () => {
    lightbox.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
    image.alt = "";
    document.documentElement.style.overflow = "";
  };

  document.querySelectorAll(".gallery-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const source = button.querySelector("img");
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      lightbox.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") close();
  });
})();
