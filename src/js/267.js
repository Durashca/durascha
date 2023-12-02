//1
let result1 = (function() {
    return '!';
}());

console.log(result1); // !
//2
let result2 = (function() {
    return '!';
})();

console.log(result2); // !
//3
let result3 = (function() {
    return '!';
});

console.log(result3); // fnc
//4
let result4 = (function() {
    return '!';
});

console.log(result4()); // !