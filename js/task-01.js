const categoriesItemEl = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesItemEl.length}`);

const categoryEl = document.querySelectorAll(`h2`);
const categorySectionEl = document.querySelectorAll(`.item ul`);

console.log(`Category: ${categoryEl[0].innerText}`);
console.log(`Elements: ${categorySectionEl[0].childElementCount}`);

console.log(`Category: ${categoryEl[1].innerText}`);
console.log(`Elements: ${categorySectionEl[1].childElementCount}`);

console.log(`Category: ${categoryEl[2].innerText}`);
console.log(`Elements: ${categorySectionEl[2].childElementCount}`);