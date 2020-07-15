let userInput = prompt("Введите страну доставки")
let cost
let country = userInput.toLowerCase()
switch (country) {
  case "китай":
    cost = 100
    break
  case "чили ":
    cost = 250
    break
  case "австралия":
    cost = 170
    break
  case "индия ":
    cost = 80
    break
  case "ямайка":
    cost = 120
    break

  default:
    alert("В вашей стране доставка не доступна.")
}
console.log(`Доставка в ${country} будет стоить ${cost} кредитов`)
