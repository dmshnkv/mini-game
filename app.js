const board = document.querySelector("#board");

const colors = [
  "#808080",
  "#ffa07a",
  "#cd5c5c",
  "#d2b48c",
  "#daa520",
  "#ffefd5",
  "#ffd700",
  "#7fff00",
  "#008080",
  "#00ffff",
  "#b0e0e6",
  "#87ceeb",
  "#7b68ee",
  "#00008b",
  "#191970",
  "#483d8b",
  "#d8bfd8",
  "#ff00ff",
  "#9370db",
  "#9400d3",
  "#ffc0cb",
  "#ff69b4",
  "#ff1493",
  "#ffc0cb",
];

const SQUARES_NUMBERS = 500;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
