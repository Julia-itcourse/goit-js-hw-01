//? TASK 1

// const categoriesHolder = document.querySelector('#categories');
// const categories = Array.from(categoriesHolder.children);
// console.log(`В списке ${categories.length} категории.`);

// categories.forEach(category => {
//   const title = category.querySelector('h2');
//   console.log(`Категория: ${title.textContent}`);
//   console.log(
//     `Количество элементов: ${category.querySelector('ul').children.length}`,
//   );
// });

//? TASK 2
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
//*Corrected version
// const ingredientsHolder = document.querySelector('#ingredients');
// const ingredientsList = ingredients.map(ingredient => {
//   let elRef = document.createElement('li');
//   elRef.textContent = ingredient;
//   return elRef;
// });
// ingredientsHolder.append(...ingredientsList);

//*Old version
// const ingredientsHolder = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => {
//     let elRef = document.createElement('li');
//     elRef.textContent = ingredient;
//     ingredientsHolder.append(elRef);
// });

//? TASK 3

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// let imagesList = '';
// images.forEach(imageItem => {
//   imagesList += `<li><img src='${imageItem.url}' alt='${imageItem.alt}'/></li>`;
// });
// const imagesHolder = document.querySelector('#gallery');
// imagesHolder.insertAdjacentHTML('afterbegin', imagesList);

// imagesHolder.style.display = 'flex';
// let imgItems = imagesHolder.querySelectorAll('li');
// imgItems.forEach(imgItem => (imgItem.style.listStyleType = 'none'));
// let img = imagesHolder.querySelectorAll('img');
// img.forEach(
//   imgEl => ((imgEl.style.width = '250px'), (imgEl.style.margin = '15px')),
// );

//? TASK 4

// let textValue = document.querySelector('#value');
// let incrementEl = document.querySelector("[data-action='increment']");
// let decrementEl = document.querySelector("[data-action='decrement']");

// let updateTextValue = function () {
//   textValue.textContent = counterValue;
// };
// let counterValue = 0;
// let increment = function () {
//   updateCounterValue('increment');
//   updateTextValue();
// };

// let decrement = function () {
//   updateCounterValue('decrement');
//   updateTextValue();
// };

// let updateCounterValue = function (str) {
//   if (str === 'increment') {
//     counterValue++;
//   } else {
//     counterValue--;
//   }
// };
// decrementEl.addEventListener('click', decrement);
// incrementEl.addEventListener('click', increment);

//? TASK 5

// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');

// const updateSpanValue = () => {
//   const inputValue = input.value;

//   inputValue === ''
//     ? (span.textContent = 'незнакомец')
//     : (span.textContent = inputValue);
// };

// input.addEventListener('input', updateSpanValue);

//? TASK 6

// const input = document.querySelector('#validation-input');
// input.addEventListener('blur', () => {
//   console.log(input.value.length);
//   console.log(input.getAttribute('data-length'));

//   input.value.length === +input.getAttribute('data-length')
//     ? (input.className = 'valid')
//     : (input.className = 'invalid');
// });

//? TASK 7

// const input = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');
// input.addEventListener(
//   'input',
//   () => (span.style.fontSize = input.value + 'px'),
// );

//? TASK 8

// const boxesHolder = document.querySelector('#boxes');
// const inputElem = document.querySelector('.inputNumber');

// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');

// const createBoxes = function () {
//   let color;
//   let width = 30;
//   let height = 30;
//   for (let i = 0; i < inputElem.value; i += 1) {
//     color =
//       'rgb(' +
//       Math.round(Math.random() * 255) +
//       ',' +
//       Math.round(Math.random() * 255) +
//       ',' +
//       Math.round(Math.random() * 255) +
//       ')';
//     width += 10;
//     height += 10;
//     boxesHolder.innerHTML += `<div style = "margin: 10px; background-color:${color}; width: ${width}px; height: ${height}px"></div>`;
//   }
// };
// const destroyBoxes = function () {
//   boxesHolder.innerHTML = '';
// };

// render.addEventListener('click', createBoxes);
// destroy.addEventListener('click', destroyBoxes);
