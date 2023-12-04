//1
let arr = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

function func(arr) {
    let sum = 0;

    for (let elem in arr) {
        if (typeof arr[elem] == 'object') {
            sum += func(arr[elem]);
        } else {
            sum += arr[elem];
        }
    }

    return sum;
}


console.log(func(arr))

//2

arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]

function func2(arr){
    let sum = ''
    for (let elem in arr){
        if (typeof arr[elem] == 'object'){
            sum += func2(arr[elem])
        }else {
            sum += arr[elem]
        }
    }

    return sum
}

console.log(func2(arr))