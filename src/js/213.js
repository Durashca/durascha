arr = [2, 3, 4, 5]
function divide_sum(arr) {
    let res = 0;

    for (elem of arr) {
        res += elem;
    }

    return res / arr.length;
}

console.log(divide_sum(arr))

//2
function func(arr1, arr2) {
    let res1 = 0;

    for (let elem of arr1) {
        res1 += elem;
    }

    let res2 = 0;

    for (let elem of arr2) {
        res2 += elem;
    }

    return res1 / res2;
}

console.log(func([2, 3, 4, 5, 6], [3, 5, 6, 7]))

//3
function getSum(arr) {
    let res = 1;

    for (let elem of arr) {
        res *= +elem;
    }

    return res;
}

let mas = [2, 3, 4 ,5]
console.log(getSum(mas))