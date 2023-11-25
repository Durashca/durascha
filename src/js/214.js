//1
function func1() {
    return 3
}
function func2() {
    return 5
}

console.log(func1() + func2() );
//2
function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));
//3
let arr3 = [1, 2, 3, 4, 5];

function func(arr3) {
    let res = 0;

    for (let elem of arr3) {
        res += elem;
    }

    console.log(res);
}

func(arr3)
//4
function func1() {
    return 3;
}
function func2() {
    return 5;
}

console.log( func1() + func2() );
//5
sum = [1, 2, 3, 4, 5];

function sum_f(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}
console.log(sum_f(sum));

//6
let res = [1, 2, 3, 4, 5];
console.log(sum_func(res));

function sum_func(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum
}
//7
function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num
}

console.log(add(3))
console.log(add(10))
//8
let arr = [1, 2, 3, 4, 5];
console.log(sum_fon(arr));

function sum_fon(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}
//9
let num = 12345;
res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
    num = String(num).slice('')
    let sum = 0;

    for (let elem in num) {
        sum += +num[elem];
    }

    return sum;
}


console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i !== 0) {
            return true;
        }
    }
    return false;

}