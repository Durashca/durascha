//1
    let num = '12345';
let arr = num.split('');
let sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);

//2
num = 12345;
arr = String(num).split('');

sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);

//3
num = 12345;
arr = String(num).split('');

sum = 0;
for (let digit of arr) {
    sum += Number(digit);
}

console.log(sum); // почему-то выводит 5, а не 15

//4
num = 12345;
arr = String(num).split('');

sum = 0;
for (let digit of arr) {
    sum += Number(digit);
}

console.log(sum);

//5
num = 12345;
arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
    prod *= +digit;
}

console.log(prod);