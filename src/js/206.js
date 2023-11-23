//1
function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

console.log(round(sqrt(2)))

//2
function sqrt2(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let res = sum(sqrt2(2) ,sqrt2(3), sqrt2(4))

console.log(res)

//3
function round3(num) {
    return num.toFixed(3);
}
console.log(round3(res))
