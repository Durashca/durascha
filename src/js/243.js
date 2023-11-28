function test(num, func1, func2) {
    return func1(num) + func2(num);
}

console.log(test(2, function (num){return num ** 2}, function (num){return num ** 3}))