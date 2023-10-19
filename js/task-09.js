function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");
buttonChange.addEventListener("click", changeColor);

function changeColor(evt) {
  // за умови що функція не буде більше використовуватись її можна лишити тут
  // function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, 0)}`;
  // }
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}
