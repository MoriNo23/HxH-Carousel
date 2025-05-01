const colores = {
  gon: {
    primario: "#2ecc71",
    segundario: "#fbe072",
  },
  killua: {
    primario: "#FFFFFF",
    segundario: "#2196F3",
  },
  kurapika: {
    primario: "#F44336",
    segundario: "#000000",
  },
  leorio: {
    primario: "#3F51B5",
    segundario: "#8BC34A",
  },
  hisoka: {
    primario: "#E91E63",
    segundario: "#FFEB3B",
  },
};
const innerBg = {
  gon: "url(assets/image62193.svg)",
  killua: "url(assets/killuaassets/killuapattern.png)",
  kurapika: "url(assets/kurapika/kurapattern.png)",
  leorio: "url(assets/leorio/leoriopattern.png)",
  hisoka: "url(assets/hisoka/hisokapattern.png)",
};
const carouselitems = document.querySelectorAll(".carousel-item");
const btnBefore = document.querySelector(".carousel-before");
const btnNext = document.querySelector(".carousel-next");
let value = 0;
btnBefore.addEventListener("click", () => changePosition(-1));
btnNext.addEventListener("click", () => changePosition(1));

function changePosition(change) {
  const currentElement = Number(
    document.querySelector(".carousel-item--show").dataset.id
  );
  value = currentElement;
  value += change;
  console.log(value);
  if (value === 0 || value == carouselitems.length + 1) {
    value = value === 0 ? carouselitems.length : 1;
  }
  console.log(change);
  carouselitems[currentElement - 1].classList.toggle("carousel-item--show");
  carouselitems[value - 1].classList.toggle("carousel-item--show");
  nextPersonaje(value - 1);
}

function nextPersonaje(index) {
  const characters = ["gon", "killua", "kurapika", "leorio", "hisoka"];
  const characterName = characters[index];
  const colors = colores[characterName];
  const bgs = innerBg[characterName];
  document.documentElement.style.setProperty(
    "--character-primario",
    colors.primario
  );
  document.documentElement.style.setProperty(
    "--character-segundario",
    colors.segundario
  );
  document.body.style.backgroundImage = bgs;
}

// Lista de archivos FLAC (modifica con tus archivos)
const songs = [
  "./assets/music/Vanilla - Swept Away.flac",
  "./assets/music/Yuki Ame - MAKOTO.flac",
  "./assets/music/DIGITAL WAVES - Talkin.flac",
  "./assets/music/essence - Marquinch Mogule.flac",
];

const audioPlayer = document.getElementById("audioPlayer");
const songInfo = document.getElementById("songInfo");
let currentSongIndex = 0;

// Función para reproducir una canción
function playSong(index) {
  if (index >= 0 && index < songs.length) {
    currentSongIndex = index;
    audioPlayer.src = songs[index];
    audioPlayer.play();
    songInfo.textContent = songs[index].replace(".flac", "");
  }
}

// Cuando termina una canción, pasa a la siguiente
audioPlayer.addEventListener("ended", () => {
  const nextIndex = (currentSongIndex + 1) % songs.length;
  playSong(nextIndex);
});

// Reproducir la primera canción al cargar
playSong(0);

// Controles de teclado ocultos (opcional)
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
  } else if (e.code === "ArrowRight") {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  } else if (e.code === "ArrowLeft") {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  }
});
