// Завдання 1
let drinkName = prompt("Напишіть назву напою. (Кава, Чай, Сік)");
switch (drinkName) {

    case 'Кава':
        console.log("Ви вибрали каву")
        alert("Ви вибрали каву")
        break;
    
    case 'Чай':
        console.log("Ви вибрали чай")
        alert("Ви вибрали чай")
        break;
    
    case 'Сік':
        console.log("Ви вибрали сік")
        alert("Ви вибрали сік")
        break;
    
    default:
        console.log("Ви ввели неправильну назву напою. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
        alert("Ви ввели неправильну назву напою. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
}
// Завдання 2
let dayName = prompt("Напишіть день тижня. (Понеділок, Вівторок, Середа, Четвер, Пятниця, Субота, Неділя)");
switch (dayName) {

    case 'Понеділок':
    case 'Вівторок':
    case 'Середа':
    case 'Четвер':
    case 'Пятниця':
        console.log("Сьогодні вам вставати о 7:00😔. Поставити будильник?")
        alert("Сьогодні вам вставати о 7:00😔. Поставити будильник?")
        break;
    
    case 'Субота':
    case 'Неділя':
        console.log("Сьогодні ви можете поспати подовше🎊")
        alert("Сьогодні ви можете поспати подовше🎊")
        break;
    
    default:
        console.log("Ви ввели неправильний день тижня. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
        alert("Ви ввели неправильний день тижня. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
}
// Завдання 3
let monthName = prompt("Напишіть місяць. (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)");
switch (monthName) {

    case '12':
    case '1':
    case '2':
        console.log("Це зимовий місяць")
        alert("Це зимовий місяць")
        break;

    case '3':
    case '4':
    case '5':
        console.log("Це весняний місяць")
        alert("Це весняний місяць")
        break;
    
    case '6':
    case '7':
    case '8':
        console.log("Це літній місяць")
        alert("Це літній місяць")
        break;
    
    case '9':
    case '10':
    case '11':
        console.log("Це осінній місяць")
        alert("Це осінній місяць")
        break;
    
    default:
        console.log("Ви ввели неправильний місяць. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
        alert("Ви ввели неправильний місяць. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
}
// Завдання 4
let colorName = prompt("Напишіть назву кольору. (Зелений, Жовтий, Червоний)");
switch (colorName) {

    case 'Зелений':
        console.log("Йти")
        alert("Йти")
        break;
    
    case 'Жовтий':
        console.log("Чекати")
        alert("Чекати")
        break;
    
    case 'Червоний':
        console.log("Стоп")
        alert("Стоп")
        break;
    
    default:
        console.log("Ви ввели неправильну назву напою. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
        alert("Ви ввели неправильну назву кольору. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
}
// Завдання 5  (+, -, /, *)
let num1 = Number(prompt("Напишіть перше число"));
let num2 = Number(prompt("Напишіть друге число"));
let operator = prompt("Напишіть дію. (+, -, /, *)")

switch (operator) {

    case '+':
        resultAdd = num1 + num2
        console.log(resultAdd)
        alert(resultAdd)
        break;
    
    case '-':
        resultMinus = num1 - num2
        console.log(resultMinus)
        alert(resultMinus)
        break;
    
    case '/':
        resultDivision = num1 / num2
        console.log(resultDivision)
        alert(resultDivision)
        if (num2 === '0') {
            console.log("Ділення на 0 не можливе!")
            alert("Ділення на 0 не можливе!")
        } else {
            resultDivision = num1 / num2
            console.log(resultDivision)
            alert(resultDivision)
        }
        console.log("Ділення на 0 не можливе!")
        alert("Ділення на 0 не можливе!")
        break;
    
    case '/':
        num2 === '0'
        console.log("Ділення на 0 не можливе!")
        alert("Ділення на 0 не можливе!")
        break;
    
    case '*':
        resultMultiplication = num1 * num2
        console.log(resultMultiplication)
        alert(resultMultiplication)
        break;
    
    default:
        console.log("Ви ввели неправильну назву напою. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
        alert("Ви ввели неправильну назву кольору. Будь ласка, скопіюйте її з дужок в питанні. Код помилки: 1")
}