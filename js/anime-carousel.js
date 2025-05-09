const personajes = {
  gon: {
    primario: "#2ecc71",
    segundario: "#fbe072",
    outerbg: "url(assets/characters/gon/gonpattern.png)",
    innerbg: "url(assets/characters/gon/backgroundinner.png)",
    portrait: "./assets/characters/gon/gon.png",
  },
  killua: {
    primario: "#FFFFFF",
    segundario: "#2196F3",
    outerbg: "url(assets/characters/killua/killua_pattern.png)",
    innerbg: "url(assets/characters/killua/killua_bg.png)",
    portrait: "./assets/characters/killua/killua.png",
  },
  kurapika: {
    primario: "#F44336",
    segundario: "#000000",
    outerbg: "url(assets/characters/kurapika/kura_pattern.png)",
    innerbg: "url(assets/characters/kurapika/kurapika_bg.png)",
    portrait: "./assets/characters/kurapika/kurapika.png",
  },
  leorio: {
    primario: "#3F51B5",
    segundario: "#8BC34A",
    outerbg: "url(assets/characters/leorio/leorio_pattern.png)",
    innerbg: "url(assets/characters/leorio/leorio_bg.png)",
    portrait: "./assets/characters/leorio/leorio.png",
  },
  hisoka: {
    primario: "#E91E63",
    segundario: "#FFEB3B",
    outerbg: "url(assets/characters/hisoka/hisoka_pattern.png)",
    innerbg: "url(assets/characters/hisoka/hisoka_bg.png)",
    portrait: "./assets/characters/hisoka/hisoka.png",
  },
};

var carouselItems = document.querySelector(".carousel-item");
const btnBefore = document.querySelectorAll(".arrow-before");
const btnNext = document.querySelectorAll(".arrow-next");
const text = document.querySelectorAll(".text-container");
let value = 0;
btnBefore.forEach((before) =>
  before.addEventListener("click", () => {
    changePosition(-1);
    document
      .querySelector(".overlay-icon")
      .classList.remove("slide-in-blurred-top-normal");

    // Forzar el reflujo para reiniciar la animación
    void document.querySelector(".overlay-icon").offsetWidth; // Esto provoca un reflujo

    // Volver a agregar la clase para reiniciar la animación
    document
      .querySelector(".overlay-icon")
      .classList.add("slide-in-blurred-top-normal");
  })
);
btnNext.forEach((next) =>
  next.addEventListener("click", () => {
    changePosition(1);
    document
      .querySelector(".overlay-icon")
      .classList.remove("slide-in-blurred-top-normal");

    // Forzar el reflujo para reiniciar la animación
    void document.querySelector(".overlay-icon").offsetWidth; // Esto provoca un reflujo

    // Volver a agregar la clase para reiniciar la animación
    document
      .querySelector(".overlay-icon")
      .classList.add("slide-in-blurred-top-normal");
  })
);

function changePosition(change) {
  const totalItems = text.length; // Usamos la cantidad real de items
  value += change;

  // Lógica circular mejorada
  if (value < 0) {
    value = totalItems - 1;
  } else if (value >= totalItems) {
    value = 0;
  }

  // Remover clase de TODOS los textos primero
  text.forEach((t) => t.classList.remove("text--show"));

  // Añadir clase solo al texto activo
  text[value].classList.add("text--show");

  nextPersonaje(value);
}
console.log(btnNext); // ¿Devuelve null o el elemento correcto?
console.log(btnNext.classList); // ¿Muestra las 3 clases?
console.log(
  `Índice actual: ${value}, Cambio: ${change}, Total items: ${totalItems}`
);
function nextPersonaje(index) {
  const characters = ["gon", "killua", "kurapika", "leorio", "hisoka"];
  const characterName = characters[index];
  const colors = personajes[characterName];
  const bgs = personajes[characterName].outerbg;
  const innerbg = personajes[characterName].innerbg;
  const portrait = personajes[characterName].portrait;
  const portraitContainer = document.querySelector(".overlay-icon");
  document.documentElement.style.setProperty(
    "--character-primario",
    colors.primario
  );
  document.documentElement.style.setProperty(
    "--character-segundario",
    colors.segundario
  );
  document.body.style.backgroundImage = bgs;
  carouselItems.style.backgroundImage = innerbg;
  portraitContainer.src = portrait;
  console.log(bgs);
}
