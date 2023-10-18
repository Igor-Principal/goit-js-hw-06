const userName = document.querySelector("#name-input");
const change = document.querySelector('#name-output')
userName.addEventListener("input", rename);

function rename(evt) {
    change.textContent = evt.currentTarget.value;
}