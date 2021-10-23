'use strict';

const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),    
};

const changeName = (event) => {
    let inputCurrentValue = event.currentTarget.value;

    if (inputCurrentValue === '') {
        refs.spanEl.innerHTML = 'Anonymous';
    }
    else {
        refs.spanEl.textContent = inputCurrentValue;
    } 
};

refs.inputEl.addEventListener('input', changeName);