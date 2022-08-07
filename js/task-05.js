
const outputField = document.querySelector('[id="name-output"]');
const inputField = document.querySelector('[id="name-input"]');

inputField.addEventListener('input', onInputChange);

function onInputChange (event) {
    event.currentTarget.value === '' ? outputField.textContent = 'Anonymous' : 
    outputField.textContent = event.currentTarget.value;
}