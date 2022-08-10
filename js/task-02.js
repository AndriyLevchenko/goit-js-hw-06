const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoryEl = document.querySelector(`ul`);

const elements = ingredients.map(categ => {
  const elemItemEl = document.createElement(`li`);
  elemItemEl.classList.add(`item`);
  elemItemEl.textContent = categ;

return elemItemEl;

}); 

console.log(elements);

categoryEl.append(...elements);


