
/*  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

let number = (a,b,c) => {
    if (a < b && a < c)
        console.log(a)

    else if (c < a && c < b)
        console.log(c)

    else
        console.log(b)
}
number(3,1,2)

/*створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

let number1 = (a,b,c) => {
    if (a > b && a > c)
        console.log(a)

    else if (c > a && c > b)
        console.log(c)

    else
        console.log(b)
}
number1(2,3,1)

/*- створити функцію яка повертає найбільше число з масиву*/

let anyarr = [1,2,3,4,5,6]
let number2 = (arr) => {
    let max = arr[0];
    for (let item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}
document.write(`<h2>Найбільший елемент масиву: ${number2(anyarr)}</h2>`)

/*- створити функцію яка повертає найменьше число з масиву*/

let anyarr1 = [1,2,3,4,5,6]
let number3 = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
document.write(`<h2>Найменший елемент масиву: ${number3(anyarr1)}</h2>`)

/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

let numbers = [1,2,10]
let sumarr = (nums) => {
    let result = 0
    for (let num of nums) {
        result=result+num;
    }
    return result;
}
document.write(sumarr(numbers))

/* - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

let nums = [2,4,6]
let arr = (numbers) => {
    let result = 0
    for (const number of numbers) {
        result = result+number;
    }
    return result/numbers.length
}
console.log(arr(nums))

/* створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/

let numer = (...arr) => {
    let min = arr[0]
    let max = arr[0]
    for (let item of arr) {
        if (item < min) {
            min = item;
        }
        if (item > max) {
            max = item;
        }
    }
    console.log('maximum', max)
    return min;
    }
console.log(numer(25,14,17,89,2,5,89))

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/
let arrelement = []
let randomizer = (arr) => {
    for (let i = 0; i < arr; i++) {
        arrelement.push(Math.round(Math.random()*100));
    }
    return arrelement
}
console.log(randomizer(5))


/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
який характеризує кінцеве значення діапазону.*/
let element1 = []
let arrrandom = (arr,limit) => {
    for (let i = 0; i < arr; i++) {
        element1.push(Math.round(Math.random()*limit));
    }
    return element1
}
console.log(arrrandom(10,100))

/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

let arr1 = [1,2,3]
let item = (erey) => {
    let newarr = []
        for (let i = erey.length - 1, ri = 0; i >= 0; i--, ri++) {
        newarr[ri]=erey[i];
    }
    return newarr;
}
console.log(item(arr1))