const value = document.querySelector("#font-size-control");
const text = document.querySelector('#text')
value.addEventListener('input', change)

function change(evt) {
    text.style.fontSize = evt.currentTarget.value.toString() + "px";
    console.log(evt.currentTarget.value.toString() + "px");
}