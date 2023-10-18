const input = document.querySelector("#validation-input");
input.addEventListener("blur", verification);
const valid = Number(input.dataset.length);

function verification(evt) {
  if (valid === evt.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
