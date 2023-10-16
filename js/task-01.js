const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const position = item.querySelectorAll('li')
    console.log(`Category: ${title}`);
    console.log(`Elements: ${position.length}`);
});


