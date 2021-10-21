const inputEl = document.querySelector('input');
const textInSpan = document.querySelector('span');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize() {
    textInSpan.style.fontSize = `${inputEl.value}px`;
};