const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ' + categoriesEl.length);

const h2NamesEl = categoriesEl.forEach(element => {
    console.log('Category: ' + element.firstElementChild.innerText);
    console.log('Elements: ' + element.lastElementChild.childElementCount);
    return '' //element.firstElementChild.innerText;
});

// const categoriesEl = Array.from(document.querySelectorAll('.item'));
// console.log('Number of categories: ' + categoriesEl.length);

// const h2NamesEl = categoriesEl.map(element => {
//     console.log('Category: ' + element.firstElementChild.innerText);
//     console.log('Elements: ' + element.lastElementChild.childElementCount);
//     return element.firstElementChild.innerText;
// });





