//1
let arr = [...'12345'];
console.log(arr); //1, 2, 3, 4, 5
//2
arr = ['a', ...'12345'];
console.log(arr); // a, 1, 2, 3, 4, 5
//3
arr = [...'12345', ...'56789']; // 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(arr);
//4
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];

console.log(arr2); //a, b, c, 1, 2, 3, 4, 5