//1

let arr = [1, 2, -3, -1, 4, -3, 6]

let res = arr.filter(function (elem) {
    if (elem >= 0) {
        console.log(elem)
    }
})

console.log(arr)

/*arr.map(function (elem){
    if (elem >= 0){
        console.log(elem)
    }
})

console.log(arr)*/

//2
res = arr.filter(function (elem) {
    if (elem <= 0) {
        console.log(elem)
    }
})

//3

arr = [2, 3, 6, 7, 9, 22, 3333, 444, 55555]

res = arr.filter(function (elem){
    if (elem < 10){
        console.log(elem)
    }
})
//4

str = ['ababab', 'aacca', 'qwert', '"poiu"','a', 'asa']

res = str.filter(elem => {
    if (elem.length > 5){
        console.log(elem)
    }
})

//5
arr = []

for (let i = 0; i < 40; i++){
    arr.push(i)
}

arr = [1, 2, 3, 4, 5, 6];
res = arr.filter((num, index) => num * index < 30)
console.log(res);


//6

arr =  [1, 2, [3, 4], 5, [6, 7]]

res = arr.filter(function (elem){
    if (typeof(elem) == 'object'){
      //!!!!!!!!!
    }else {
        res.push(elem)
    }
    return res
})

console.log(res)




