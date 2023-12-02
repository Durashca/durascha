//1
let result1 = function() {
    return '!';
}();

console.log(result1); // !
//2
let result2 = function() {
    return '!';
};

console.log(result2); // func
//3
let result3 = function() {
    return '!';
};

console.log(result3()); // !