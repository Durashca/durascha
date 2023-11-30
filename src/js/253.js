//1
function each (arr, callback){
   let res = []

    for (elem of arr){
        res.push(callback(elem))
    }
    return res
}

console.log(each([1, 2, 3, 4], function (num){ return num * 2}))

//2

console.log(each(['a', 'b', 'c', 'd'], function (str){ return str.toUpperCase()}))

//3

/*function each2 (arr, callback){
    let res = []

    for (let elem in arr){
        callback = res.push(arr[elem])
    }
    return res
}

console.log(each2(['a', 'b', 'c', 'd'], function (){}))*/
