const refs = {
    inputEl: document.querySelector('#name-input'),
    nameInSpanEl: document.querySelector('#name-output'),
};

const changeName = (event) => {
    refs.nameInSpanEl.textContent = event.currentTarget.value;
};

refs.inputEl.addEventListener('input', changeName);