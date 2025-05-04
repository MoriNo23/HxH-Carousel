document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("loading-container");
  document.body.prepend(loaderContainer);
  loaderContainer.innerHTML = "<div class='custom-loader'></div>";
});

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(".loading-container");
  const loader = document.querySelector(".custom-loader");

  // Aplica animación de salida programáticamente
  loaderContainer.style.animation = "fadeOut 0.5s forwards";

  loaderContainer.addEventListener("animationend", () => {
    loaderContainer.remove();
  });
});
