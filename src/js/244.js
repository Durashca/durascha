function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Оформим код изящнее:
let result = test([1, 2, 3], function(num) {
    return num ** 3;
});

console.log(result); // выведет [1, 4, 9]