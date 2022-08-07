function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector('.color');
console.log (changeColorEl);

const changeColorBtnEl = document.querySelector('.change-color');
console.log (changeColorBtnEl);

const changeColorBodyEl = document.querySelector('body');
console.log (changeColorBodyEl);

changeColorBtnEl.addEventListener('click', (event) => {
  const newColor = getRandomHexColor();
  changeColorBodyEl.style.backgroundColor = newColor;
  changeColorEl.textContent = newColor;
});


