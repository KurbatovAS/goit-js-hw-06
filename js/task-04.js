const refs = {
    decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
    counterValue: 0,
};

refs.decrementBtnEl.addEventListener('click', onDecrementBtnClick);
refs.incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    // console.log('Произошло нажатие на кнопку мыши');
    refs.counterValue -= 1;
    // console.log(refs.counterValue);
    refs.valueEl.textContent = refs.counterValue;
};

function onIncrementBtnClick() {
    // console.log('Произошло нажатие на кнопку мыши');
    refs.counterValue += 1;
    // console.log(refs.counterValue);
    refs.valueEl.textContent = refs.counterValue;
};

