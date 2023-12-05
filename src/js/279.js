//1
let arr = [1, 2, 3, 4, 5];

let res = arr.map(function (elem){
    return elem ** 2
})

console.log(res)

//2
arr = [1, 2, 3, 4, 5]

res = arr.map(function (str){
    return str + '!'
})

console.log(res)
//3
arr = [1, 2, 3, 4, 5]

res = arr.map(function (elem) {
    return elem;
}).reverse();


console.log(res)

//4
arr = ['123', '456', '789'];
res = arr.map(function (elem) {
    return elem.split('').map(function (digit) {
        return parseInt(digit);
    });
});

console.log(res);//5

arr = [1, 2, 3, 4, 5]

res = arr.map(function (elem, index){
    return elem * index
})

console.log(res)

