'use strict';

const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ' + categoriesEl.length);

categoriesEl.forEach(element => {
    console.log('Category: ' + element.firstElementChild.innerText);
    console.log('Elements: ' + element.lastElementChild.childElementCount);    
});