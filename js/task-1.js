const categories = document.querySelector('#categories');
const li = document.querySelectorAll('li.item');

console.log(`Number of categories: ${li.length}`);

for (const category of li) {
const h2 = category.querySelector('h2');
const title = h2.textContent;
const elements = category.querySelectorAll('li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);
}