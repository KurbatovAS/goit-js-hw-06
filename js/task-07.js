'use strict';

const inputEl = document.querySelector('input');
const textInSpan = document.querySelector('span');

textInSpan.style.fontSize = `${inputEl.valueAsNumber}px`;

inputEl.addEventListener('input', changeFontSize);

function changeFontSize() {
    textInSpan.style.fontSize = `${inputEl.value}px`;
};