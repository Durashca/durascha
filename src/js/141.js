//1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
    console.log('1+++');
} else {
    console.log('---');
}
//2
num1 = '1';
num2 = '2';

if (Number(num1) + Number(num2) === 3) {
    console.log('2+++');
} else {
    console.log('---');
}
//3
num1 = '1';
num2 = '2';

if (Number(num1) + Number(num2) === 3) {
    console.log('3+++');
} else {
    console.log('---');
}
//4
let num = 123;

if (String(num)[0] == 1) {
    console.log('4+++');
} else {
    console.log('---');
}
//5
num = 123;

if (String(num)[0] == 1) {
    console.log('5+++');
} else {
    console.log('---');
}
//6
num = 123;

if (String(num)[0] == 1) {
    console.log('6+++');
} else {
    console.log('---');
}
//7
num = 123;
let first = String(num)[0];

if (first == 1) {
    console.log('7+++');
} else {
    console.log('---');
}
//8
num = 12;

if (String(num).length == 2) {
    console.log('8+++');
} else {
    console.log('---');
}
//9
num = 12;
let str = String(num);

if (str.length == 2) {
    console.log('9+++');
} else {
    console.log('---');
}
//10
num = 12;

if (String(num).length === 2) {
    console.log('10+++');
} else {
    console.log('---');
}
//11
num = 12;

if (String(num).length == String(2)) {
    console.log('11+++');
} else {
    console.log('---');
}
//12
num = 12;

if (String(num).length === 2) {
    console.log('12+++');
} else {
    console.log('---');
}
//13
num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 === sum2) {
    console.log('13суммы равны');
} else {
    console.log('суммы не равны');
}