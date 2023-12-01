function cube(num) {
    return num ** 3;
}

function mas (arr) {
    let res = []

    for (let elem of arr){
        res.push(cube(elem))
    }

    return res
}

console.log(mas([2, 3, 4, 5]))