const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const items = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
list.insertAdjacentHTML("beforeend", items);

// ingredients.map(ingredient => {
//   const li = document.createElement('li')
//   li.textContent = ingredient;
//   li.classList.add('item');
//   list.append(li)
// })
