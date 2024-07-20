// Регулярний вираз для перевірки
var regex = /^(?!.*[Aa])[A-Za-z]{6,}$/;

// Тестові рядки
var testStrings = [
    "Wonderful",
    "Joyful",
    "Happiness",
    "Time",
    "Task",
    "Apple"
];

var matches = testStrings.filter(str => regex.test(str));
console.log(matches);