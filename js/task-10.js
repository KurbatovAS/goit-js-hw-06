function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  dataCreateEl: document.querySelector('[data-create]'),
  dataDestroyEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
  amount: 0,
  size: 30,
  arrayForMarkup: [],
  markup: '',
};

refs.inputEl.addEventListener('input', getInputValue);
refs.dataCreateEl.addEventListener('click', createBoxes);
refs.dataDestroyEl.addEventListener('click', destroyBoxes)

function getInputValue(event) {
  refs.amount = event.currentTarget.value;
};

function createBoxes() {
   for (let i = 0; i < refs.amount; i += 1) {
    const color = getRandomHexColor();
    refs.arrayForMarkup.push(`<div style="background-color: ${color}; width: ${refs.size}px; height: ${refs.size}px"></div>`);
    refs.size += 10;
  };

  refs.markup = refs.arrayForMarkup.join('');
  refs.divBoxesEl.insertAdjacentHTML('beforeend', refs.markup);  
};

function destroyBoxes() {
  refs.inputEl.value = 0;
  refs.divBoxesEl.innerHTML = '';
  refs.amount = 0;
  refs.size = 30;
  refs.arrayForMarkup = [];
  refs.markup = '';
  };