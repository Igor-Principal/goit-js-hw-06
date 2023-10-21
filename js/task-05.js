const userName = document.querySelector("#name-input");
const change = document.querySelector("#name-output");
userName.addEventListener("input", rename);

function rename(evt) {
  if (evt.currentTarget.value === "") {
    change.textContent = "Anonymous";
  } else {
    change.textContent = evt.currentTarget.value;
  }
}
