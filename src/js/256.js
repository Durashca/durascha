//1
function test1() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        return num1 + num2;
    }
}

let func1 = test1();
console.log(func1()); // 3
//2
function test2() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        return num1 + num2;
    }
}

console.log(test2()()); //3
//3
function test3() {
    let num1 = 1;

    return function() {
        return num1 + num2;
    }
}

 num2 = 2;
 func3 = test3();
console.log(func3()); //3
//4
function test4() {
    let num = 1;

    return function() {
        return num;
    }
}

num = 2;
let func4 = test4();
console.log(func4()); //1