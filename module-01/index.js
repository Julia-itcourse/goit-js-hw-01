'use strict';

//Task 1
const name = 'Генератор защитного поля';
let price = 1000;
let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);
price = 2000;
message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);

//Task 2
const total = 100;
const ordered = 50;
const message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер.';
console.log(message);

//Task 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пароль');

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

//Task 4
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

while (true) {
  let userInput = prompt('Введите колличество');
  if (userInput === null) {
    console.log('Отменено пользователем!');
    break;
  }

  userInput = Number(userInput);
  const notANumber = Number.isNaN(userInput);
  if (notANumber) {
    console.log('Необходимо ввести число!');
    continue;
  }

  totalPrice = userInput * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let balanceLeft = credits - totalPrice;
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${balanceLeft} кредитов.`,
    );
    break;
  }
}

//Task 5
let userInput = prompt('Введите страну доставки');
let cost;
let country = userInput.toLowerCase();
switch (country) {
  case 'китай':
    cost = 100;
    break;
  case 'чили ':
    cost = 250;
    break;
  case 'австралия':
    cost = 170;
    break;
  case 'индия ':
    cost = 80;
    break;
  case 'ямайка':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна.');
}
console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);

//Task 6
let input;
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  total += input;
}
alert(`Общая сумма чисел равна ${total}`);
