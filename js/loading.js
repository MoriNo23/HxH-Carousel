document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("loading-container");
  document.body.prepend(loaderContainer);
  loaderContainer.innerHTML = "<div class='custom-loader'></div>";
  loaderContainer.addEventListener("animationend", () => {
    loaderContainer.remove();
  });
});

/*  const loaderContainer = document.querySelector(".loading-container");
    const loader = document.querySelector(".custom-loader");

    // Aplica animación de salida programáticamente
    loaderContainer.style.animation = "fadeOut 0.5s forwards";

    loaderContainer.addEventListener("animationend", () => {
      loaderContainer.remove();
    }); */
setTimeout(() => {
  observador1.observe(carouselItems, {
    attributes: true,
  });
}, "4000");
const observador1 = new MutationObserver(() => {
  console.log("La imagen ha cambiado");
  const loaderContainerInner = document.createElement("div");
  loaderContainerInner.classList.add("loading-container-inner");
  carouselItems.appendChild(loaderContainerInner);
  loaderContainerInner.innerHTML = "<div class='custom-loader-inner'></div>";
  setTimeout(() => {
    loaderContainerInner.remove();
  }, 1000);
});

// call `observe()`, passing it the element to observe, and the options object
