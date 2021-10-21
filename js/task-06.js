const inputEl = document.querySelector('input');
const inputDataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlurEffect);

function onBlurEffect() {
    if (inputEl.value.length === inputDataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        // inputEl.id = 'validation-input.valid';
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
        // inputEl.id = 'validation-input.invalid';
    }

    // console.log('Потеря фокуса!');
    // console.log(`Введона строка: "${inputEl.value}". Длина строки: "${inputEl.value.length}"`);   
};