//1
function func(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}

console.log(func(2)(3)(4))

//2
function func2(num1) {
    return function (num2) {
        return function (num3) {
            return function (num4) {
                return function () {
                    return [num1, num2, num3, num4];
                };
            };
        };
    };
}

console.log(func2(2)(3)(4)(5)());