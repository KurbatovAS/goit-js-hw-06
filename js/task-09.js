function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('button'),
  spanEl: document.querySelector('span'),
}
  
refs.buttonEl.addEventListener('click', changeBodyBgColor);

function changeBodyBgColor() {
  const randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.spanEl.textContent = randomColor;
};