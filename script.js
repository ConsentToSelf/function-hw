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
    if (check % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
    return check;
};
let answer = proparityCheck(3);
console.log(answer);
// // ! Задание 3.1

const number = (num) => {
    let result = num * num;
    return result;
};
console.log(number(4));

//  ! Задание 3.2
// const number = (num) => {
//     let result = num * num;
//     return result;
// };
// number();

// ! Задание четвертое

const checkYearsOld = (question) => {
    if (isNaN(question)) {
        console.log("Вы ввели неправильное значение!");
    } else if (question <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
    return question;
};
checkYearsOld(12);

// ! Задание пятое

const twoNum = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        console.log("Одно или оба значения не являются числом");
    } else {
        let result = a * b;
        console.log(result);
    }
};
twoNum(3, 5);

// // ! Задание шестое

const returnSquare = (num) => {
    if (isNaN(num)) {
        console.log("Переданный параметр не является числом");
    } else if (num > 10) {
        console.log("необходимо ввести число меньше 10");
    } else {
        let result = Math.pow(num, 3);
        return console.log(`${num} в кубе равняется ${result}`);
    }
};
returnSquare(4);