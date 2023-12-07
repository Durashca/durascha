//1
let arr = [1, 2, 3, 4, 5]

let res = arr.some(elem => elem >= 0)

console.log(res)

//2

res = arr.some((elem, index) => elem * index <= 30)
console.log(res)


