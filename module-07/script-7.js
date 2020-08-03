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

// const ingredientsHolder = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => {
//     let elRef = document.createElement('li');
//     elRef.textContent = ingredient;
//     ingredientsHolder.append(elRef);
// });

//*____________version 2, why doesnt work?__________________________
// const ingredientsList = ingredients.map(ingredient => {
//   let elRef = document.createElement('li');
//   elRef.textContent = ingredient;
//   return elRef;
// });

// const ingredientsHolder = document.querySelector('#ingredients');
// ingredientsHolder.append(ingredientsList);

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
