const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (ingredient, index) {
  const elemItemEl = document.createElement(`li`);
elemItemEl.classList.add(`item`);
elemItemEl.textContent = ingredient;

console.log(elemItemEl);

const categoryEl = document.querySelector(`ul`);

categoryEl.appendChild(elemItemEl);
}); 