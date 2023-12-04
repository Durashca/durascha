/*#1*/
function func2(arr) {
     for(let elem in arr){
         if (typeof arr[elem] == 'object'){
             func2(arr[elem])
         }else {
             console.log(arr[elem])
         }
     }
}
let arr = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
func2(arr)

//2
let mas = []

arr = ([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])
function func3(arr) {

    for(let elem of arr){
        if (typeof elem === 'object'){
            func3(elem)
        }else {
            mas.push(elem)
        }
    }
    return mas
}
console.log(func3(arr))