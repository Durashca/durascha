//1
function func(a, b) {
    return a === b
}

console.log('#1', func(3, 4))
console.log('#1', func(3, 3))

//2
function func2(a, b) {
    return a !== b
}

console.log('#2', func2(3, 3))
console.log('#2', func2(4, 3))

//3
function func3(a, b) {
    return a + b >= 10
}

console.log('#3', func3(3, 6))
console.log('#3', func3(3, 7))

//4
function func4(num) {
    return num >= 0
}

console.log('#4', func4(-3))
console.log('#4', func4(3))