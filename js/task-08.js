const formEl = document.querySelector('form');

// console.log(form);

formEl.addEventListener('submit', onFormSubmint);

function onFormSubmint (event) {
    event.preventDefault();
    
    const {elements: {email, password}} = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Pleace fill in all the fields!');
    }
    
    const objectData = {};
    objectData.email = email.value;
    objectData.password = password.value;

    console.log (objectData);
    event.currentTarget.reset();
}
