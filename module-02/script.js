'use strict';

//? TASK 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const elementNumber = i + 1;
//     console.log(`${elementNumber} - ${array[i]}`);
//   }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//? TASK 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const myArray = message.split(' ');
//   const cost = myArray.length * pricePerWord;
//   return cost;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

//? TASK 3

// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// //? TASK 4

const formatString = function (string) {
  //* -----старый вариант-----
  //  if (string.length <= 40) {
  //    return string;
  //   } else {
  //     const newString = Array.from(string);
  //     newString.splice(39, string.length - 39, '...');
  //     return newString.join('');
  // }

  //* -----новый вариант-----
  if (string.length > 40) {
    string = string.substring(0, 40) + '...';
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

//? TASK 5

// const checkForSpam = function (message) {
//   const newMessage = message.toLowerCase();
//* -----новый вариант-----
//   return newMessage.includes('sale') || newMessage.includes('spam');
// };
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//? TASK 6

// let input;
// const numbers = [];
// let total = 0;
// while (input !== null) {
//   input = prompt('Введите число');
//   if (Number.isNaN(+input)) {
//     prompt('Было введено не число, попробуйте еще раз');
//   } else if (!Number.isNaN(+input) && input !== null) {
//     numbers.push(+input);
//   }
// }
// if (numbers.length >= 1) {
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//     console.log(numbers);
//     console.log(total);
//   }
// }
// console.log(`Общая сумма чисел равна  ${total}`);

// //? TASK 7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   return login.length >= 4 && login.length <= 16;
// };
// console.log(isLoginValid('hi'));

// const isLoginUnique = function (allLogins, login) {
//   return allLogins.includes(login);
// };
// console.log(isLoginUnique(logins, 'Poly'));

// const addLogin = function (allLogins, login) {
//   if (!isLoginValid(login)) {
//     console.log('Ошибка! Логин должен быть от 4 до 16 символов');
//   } else if (!isLoginUnique(allLogins, login)) {
//     console.log('Такой логин уже используется!');
//   } else {
//     logins.push(login);
//     console.log('Логин успешно добавлен!');
//   }
// };

// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
