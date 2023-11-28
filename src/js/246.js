//1
function test(num1, num2) {
    function func() {
        console.log(num1 + num2); //3
    }

    func();
}

test(1, 2);
//2
function test2(num1, num2) {
    function func() {
        console.log(num1 + num2); //4
    }

    num1 = 2;
    func();
}

test2(1, 2);