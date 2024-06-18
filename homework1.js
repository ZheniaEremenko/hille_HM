// Функція для прикладу 'number' + 3 + 3
function example1() {
    // 'number' є рядком, тому відбувається конкатенація:
    // 'number3' + 3 -> 'number33'
    return 'number' + 3 + 3; // 'number33'
}

// Функція для прикладу null + 3
function example2() {
    // null при приведенні до числа стає 0, тому:
    // 0 + 3 -> 3
    return null + 3; // 3
}

// Функція для прикладу 5 && "qwerty"
function example3() {
    // 5 є істинним значенням, тому результатом буде "qwerty"
    return 5 && "qwerty"; // "qwerty"
}

// Функція для прикладу +'40' + +'2' + "hillel"
function example4() {
    // +'40' і +'2' приводять рядки до чисел, тому:
    // 40 + 2 -> 42
    // Потім відбувається конкатенація з "hillel":
    // 42 + "hillel" -> "42hillel"
    return +'40' + +'2' + "hillel"; // '42hillel'
}

// Функція для прикладу '10' - 5 === 6
function example5() {
    // '10' приводиться до числа, тому:
    // 10 - 5 -> 5
    // 5 === 6 -> false
    return '10' - 5 === 6; // false
}

// Функція для прикладу true + false
function example6() {
    // true і false приводяться до чисел 1 і 0, відповідно:
    // 1 + 0 -> 1
    return true + false; // 1
}

// Функція для прикладу '4px' - 3
function example7() {
    // '4px' не може бути приведена до числа, тому результат буде NaN
    return '4px' - 3; // NaN
}

// Функція для прикладу '4' - 3
function example8() {
    // '4' приводиться до числа:
    // 4 - 3 -> 1
    return '4' - 3; // 1
}

// Функція для прикладу '6' + 3 ** 0
function example9() {
    // 3 ** 0 -> 1 (степінь)
    // '6' + 1 -> '61' (конкатенація)
    return '6' + 3 ** 0; // '61'
}

// Функція для прикладу 12 / '6'
function example10() {
    // '6' приводиться до числа:
    // 12 / 6 -> 2
    return 12 / '6'; // 2
}

// Функція для прикладу '10' + (5 === 6)
function example11() {
    // 5 === 6 -> false
    // '10' + false -> '10false' (конкатенація)
    return '10' + (5 === 6); // '10false'
}

// Функція для прикладу null == ''
function example12() {
    // null не дорівнює порожньому рядку, тому:
    // false
    return null == ''; // false
}

// Функція для прикладу 3 ** (9 / 3)
function example13() {
    // 9 / 3 -> 3
    // 3 ** 3 -> 27
    return 3 ** (9 / 3); // 27
}

// Функція для прикладу !!'false' == !!'true'
function example14() {
    // !!'false' і !!'true' обидва приводяться до true, тому:
    // true == true -> true
    return !!'false' == !!'true'; // true
}

// Функція для прикладу 0 || '0' && 1
function example15() {
    // 0 є хибним значенням, тому перевіряється '0' && 1:
    // '0' є істинним, тому перевіряється 1 -> 1
    return 0 || '0' && 1; // 1
}

// Функція для прикладу (+null == false) < 1
function example16() {
    // +null -> 0, false -> 0, тому:
    // 0 == 0 -> true
    // true < 1 -> true
    return (+null == false) < 1; // true
}

// Функція для прикладу false && true || true
function example17() {
    // false && true -> false
    // false || true -> true
    return false && true || true; // true
}

// Функція для прикладу false && (false || true)
function example18() {
    // false || true -> true
    // false && true -> false
    return false && (false || true); // false
}

// Функція для прикладу (+null == false) < 1 ** 5
function example19() {
    // +null -> 0, false -> 0, тому:
    // 0 == 0 -> true
    // 1 ** 5 -> 1
    // true < 1 -> true
    return (+null == false) < 1 ** 5; // true
}

// Виклик кожної функції та виведення результату в консоль
console.log(example1()); // 'number33'
console.log(example2()); // 3
console.log(example3()); // "qwerty"
console.log(example4()); // '42hillel'
console.log(example5()); // false
console.log(example6()); // 1
console.log(example7()); // NaN
console.log(example8()); // 1
console.log(example9()); // '61'
console.log(example10()); // 2
console.log(example11()); // '10false'
console.log(example12()); // false
console.log(example13()); // 27
console.log(example14()); // true
console.log(example15()); // 1
console.log(example16()); // true
console.log(example17()); // true
console.log(example18()); // false
console.log(example19()); // true
