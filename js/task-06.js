const inputReviceValid = document.querySelector('input');
const inputTextFocus = document.querySelector('[data-length]');
const lightValid = document.querySelector('#validation-input');

inputReviceValid.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    console.log(event.currentTarget.value.length);
    
    if (event.currentTarget.value.length === 
        Number(inputTextFocus.dataset.length)) {
            lightValid.classList.remove('invalid');
            lightValid.classList.add('valid');
    } else {
        lightValid.classList.remove('valid');
        lightValid.classList.add('invalid');
    }
}


