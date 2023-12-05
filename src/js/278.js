let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]]

function func(arr) {
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'object'){
            func(arr[i])
        }else {
            arr[i] **= 2
        }
    }
    return arr
}

console.log(func(arr))