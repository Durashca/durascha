//1
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2); //['a', 2, 3]
//2
arr1 = [1, 2, 3];
arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1); //['a', 'b', 3]
//3
arr1 = [1, 2, 3];
arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2); //['b', 2, 3]