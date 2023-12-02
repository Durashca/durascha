//1
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

let test = func;

test()(); // 0
test()(); // 0
test()(); // 0
//2
function test2() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func2 = test2()();

let func1 = func2;
let func3 = func2;
func1(); //0
func3(); //1
func1(); //2
func3(); //3
//3
function test3() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func_l3 = test3();

let func_l1 = func_l3();
let func_l2 = func_l3();
func1(); // 4
func2(); // 5
func1(); // 6
func2(); // 7