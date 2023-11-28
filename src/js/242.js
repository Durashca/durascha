//1
// Выведет 27:
test(function(num) {
    return num ** 3;
});

function test(func) {
    console.log(func(3));
}
//2
// Выведет 27:
test2(function func2(num) {
    return num ** 3;
});

function test2(func2) {
    console.log(func2(3));
}
//3
// Выведет 27:
test3(func3  = function (num) {
    return num ** 3;
});

function test3(func3) {
    console.log(func3(3));
}
//4
test4( function (num1){return num1 },function (num2){ return num2})

function test4 (func1, func2){
    console.log(func1(2) + func2(3))
}
