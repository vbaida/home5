/* створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
let  rectangle = (a,b) => a*b
console.log(rectangle(10, 20));


/*створити функцію яка обчислює та повертає площу кола з радіусом r S = πR²*/
let  round = (r) => p * r**2
let p = 3.14
console.log(round(10));

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r S= 2πRH*/
let cylinder = (r,h) => p*r*h
console.log(cylinder(10,5))

/*створити функцію яка приймає масив та виводить кожен його елемент*/
let array = [1,2,3,4,5, 'hello world', 'okten'];
const dataArray =  (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
dataArray(array)

/* - створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
const dataP =  (text) => {
    document.write(`<p>${text}</p>`);
    }
dataP('Vova super');


/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
let stovp = (Vova,size) => {
    document.write(`<ul>`)
    for (let i = 0; i < size; i++)
    {
        document.write(`<li>${Vova}</li>`)
    }
}
stovp ('Хацепетівка', 3)


/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
let anyarry = [1,'Vova',true, 345,'kgvkvjl']
let element = (arry) => {
    document.write(`<ol>`);
    for (const arrElement of arry) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ol>`)
}
element(anyarry)

/*створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

let user = [
    {
        id: 3,
        name: 'Vova',
        age: 12
    },
    {
        id:53,
        name: 'Vitaliy',
        age: 22
    }
]

let user1 = (user2)=> {

    for (let item of user2) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
    }
}
user1(user)
