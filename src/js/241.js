//1 //2
function get1() {
    return 1
}

function get2() {
    return 2
}

function get3() {
    return 3
}

test(get1, get2, get3)

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3())
}

//3
let Get1 = function () {
    return 1
}
let Get2 = function () {
    return 2
}
let Get3 = function () {
    return 3
}

test2(Get1, Get2, Get3)

function test2(func1, func2, func3) {
    console.log(func1() + func2() + func3())
}