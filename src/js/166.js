//1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//2

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//3

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//4

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

//5

let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res);

//6

res = 1;

for (let i = 1; i <= 10; i++) {
    res *= i;
}

console.log(res);

//7

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); // должно вывести 15

//8

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); // должно вывести 15

//9

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); // должно вывести 15

//10

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN

//11

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15

//12

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15

//13

arr = [1, 2, 3, 4, 5];

for (let elem in arr) {
    arr[elem] = arr[elem] ** 2;
}

console.log(arr);

//14

arr = []

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

//15

let obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}

console.log(sum);

//16

obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let key in obj) {
    sum += obj[key];
}

console.log(sum);

//17

arr = [1, 2, 3, 4, 5];
res = '';

for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break
    } else {
        res = '---';
    }
}

console.log(res);

//18
arr = []

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

//19

arr = [1, 2, 3, 4, 5];
res = false;

for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}

console.log(res);

//20

arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}

//21

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = []
for (let elem of arr) {
    if (elem % 2 !== 0) {
        res.push(elem);
    }
}

console.log(res);