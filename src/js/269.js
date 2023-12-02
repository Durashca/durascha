//1
(function() {
    return function (){
        return function (){
            return console.log('!')
        }
    }
})()()();

//2
(function(num1, num2) {
    return console.log(num1 + num2)
})(1, 2);

//3
(function(num1, num2, num3) {
    return console.log(num1 + num2 + num3)
})(1, 2, 3);
