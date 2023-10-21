const value = document.querySelector("#font-size-control");
const text = document.querySelector('#text')
text.style.fontSize = value.value + "px";
value.addEventListener('input', change)
console.log(value.value);
function change(evt) {
    text.style.fontSize = evt.currentTarget.value.toString() + "px";
    console.log(evt.currentTarget.value.toString() + "px");
}