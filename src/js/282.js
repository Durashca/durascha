//1
let arr = [1, 2, -3, -4, 5]

let res = arr.every(function (elem) {
    return elem > 0;
})

console.log(res)

//2
res = arr.every(function (elem, index){
    return elem  * index < 30
})

console.log(res)