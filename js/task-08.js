'use strict';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        email,
        password,
    };

    if (email && password) {
        console.log(formData);
        formEl.reset()
    }
    else {
        alert('Пожалуйста, заполните все поля!')
    }    
};