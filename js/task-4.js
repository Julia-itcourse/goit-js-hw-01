let credits = 23580
const pricePerDroid = 3000
let totalPrice

while (true) {
  let userInput = prompt("Введите колличество")
  if (userInput === null) {
    console.log("Отменено пользователем!")
    break
  }

  userInput = Number(userInput)
  const notANumber = Number.isNaN(userInput)
  if (notANumber) {
    console.log("Необходимо ввести число!")
    continue
  }

  totalPrice = userInput * pricePerDroid
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!")
  } else {
    let balanceLeft = credits - totalPrice
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${balanceLeft} кредитов.`
    )
    break
  }
}
