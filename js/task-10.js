'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  dataCreateEl: document.querySelector('[data-create]'),
  dataDestroyEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
};

const variables = {
  amount: 0,
  size: 30,
  arrayForMarkup: [],
  markup: '',
};

refs.inputEl.addEventListener('input', getInputValue);
refs.dataCreateEl.addEventListener('click', createBoxes);
refs.dataDestroyEl.addEventListener('click', destroyBoxes)

function getInputValue(event) {
  if (event.currentTarget.value > 96) {
    alert('Максимально допустимое число - 96');
  }
    variables.amount = event.currentTarget.value;
};

function createBoxes() {
   for (let i = 0; i < variables.amount; i += 1) {
    const color = getRandomHexColor();
    variables.arrayForMarkup.push(`<div style="background-color: ${color}; width: ${variables.size}px; height: ${variables.size}px"></div>`);
    variables.size += 10;
  };

  variables.markup = variables.arrayForMarkup.join('');
  refs.divBoxesEl.innerHTML = variables.markup;

  refs.inputEl.value = '';
  variables.amount = 0;
  variables.size = 30;
  variables.arrayForMarkup = [];
  variables.markup = '';
};

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
  };