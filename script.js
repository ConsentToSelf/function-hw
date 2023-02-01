// !Задание первое
const lesserNumber = (a, b) => {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
};
let result = lesserNumber(8, 7);
console.log(result);

// ! Задание второе

const proparityCheck = (check) => {
    check = prompt("Введите число");
    if (check % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
    return check;
};
proparityCheck();

// ! Задание 3.1

const number = (num = prompt("Введите цифру, я возвращу квадрат")) => {
    let result = num * num;
    return result;
};
console.log(number());
//  ! Задание 3.2
const number = (num) => {
    let result = num * num;
    return result;
};
number();

// ! Задание четвертое

const checkYearsOld = (question) => {
    question = prompt("Сколько вам лет?");
    if (question === isNaN) {
        console.log("Вы ввели неправильное значение!");
    } else if (question <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать");
    }
    return question;
};
checkYearsOld();

// ! Задание пятое

const twoNum = (a, b) => {
    a = prompt("Введите первое число");
    b = prompt("Введите второе число");
    if (isNaN(a) && isNaN(b)) {
        console.log("Одно или оба значения не являются числом");
    } else {
        let result = a * b;
        console.log(result);
    }
};
twoNum();

// ! Задание шестое

const returnSquare = (num) => {
    num = prompt("Введите число");
    if (isNaN(num)) {
        console.log("Переданный параметр не является числом");
    } else if (num > 10) {
        console.log("необходимо ввести число меньше 10");
    } else {
        let result = Math.pow(num, 3);
        return console.log(`n в кубе равняется ${result}`);
    }
};
returnSquare();

// ! Задание 7

const seasonsTimes = (num) => {
    num = Number(prompt("Введите число месяца"));
    if (num == 1 || num == 2 || num == 12) {
        console.log("Зима");
    } else if (num > 2 && num < 6) {
        console.log("Весна");
    } else if (num > 6 && num < 9) {
        console.log("Лето");
    } else if (num == 9 || num == 10 || num == 11) {
        console.log("Осень");
    } else if (isNaN(num)) {
        console.log("Переданный параметр не является числом");
    } else {
        console.log("Такого месяца не существует");
    }
};
seasonsTimes();