//1
function func1 (){
    return 3
}
//2
let func2 = func1
console.log(func2)
//3
console.log(func1() + func2())