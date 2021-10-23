'use strict';

const refs = {
    decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value'),    
};
let counterValue = 0;

refs.decrementBtnEl.addEventListener('click', onDecrementBtnClick);
refs.incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {   
    counterValue -= 1;    
    refs.valueEl.textContent = counterValue;
};

function onIncrementBtnClick() {    
    counterValue += 1;  
    refs.valueEl.textContent = counterValue;
};

