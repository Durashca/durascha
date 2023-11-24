//1
function func(num) {
    return num;   // выведет 3

    let res = num ** 2; // досюда даже не дойдет
    return res;
}

console.log( func(3) );

//2
function func(num) {
    if (num <= 0) {
        return Math.abs(num); // вотрым выведет 5
    } else {
        return num ** 2; // сперва выведет 100
    }
}

console.log( func(10) );
console.log( func(-5) );

//3
function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    }

    return num ** 2;
}

console.log( func(10) ); // 100
console.log( func(-5) ); // 5