const formEl = document.querySelector('form');

// console.log(form);

formEl.addEventListener('submit', onFormSubmint);

function onFormSubmint (event) {
    event.preventDefault();
    
    const {elements: {email, password}} = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Pleace fill in all the fields!');
    }
    console.log (`email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
}
