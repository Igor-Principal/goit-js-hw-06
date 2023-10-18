const value = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counterValue = 0;

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

function increment(evt) {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrement(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
}
