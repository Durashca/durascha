//1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, 'b', 'c', ...arr2]; // a , 1, 2, 3, b, c, 4,5, 6
console.log(arr);

//2
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

arr = ['a', ...arr1, ...arr1, 'b', 'c']; // a, 1,2, 3 ,1, 2 ,3 ,b, c,
console.log(arr);
//3
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6];

arr = ['a', 'b', 'c', ...arr2];
console.log(arr);  // a ,b, c, 1, 2, 3, 4, 5, 6
//4
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];
arr = [0, ...arr3];
console.log(arr); // //0, 2, 3, 4, 5, 6, 7, 8, 9
//5
arr1 = [1, 2, 3];
arr2 = [...arr1];

console.log(arr2); //1, 2, 3