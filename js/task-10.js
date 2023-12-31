function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector('input[type="number"]');
const container = document.querySelector("#controls");
createButton.addEventListener("click", create);
destroyButton.addEventListener("click", destroy);
let amount = input.value;

function create(evt) {
  let amount = input.value;
  destroy();
  createBoxes(amount);
}
function createBoxes(amount) {
  let allBoxes = "";
  for (let i = 1; i <= Number(amount); i += 1) {
    const example = `<div class="box" style="width:${30 + 10 * i}px; height:${
      30 + 10 * i
    }px; background-color:${getRandomHexColor()}"></div>`;
    allBoxes += example;
  }
  container.insertAdjacentHTML("beforeend", allBoxes);
}

function destroy() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
}
