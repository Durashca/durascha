//1
let test = {x: 1, y: 2, z: 3};
console.log(test); //object
//2
test = {x: 1, y: 2, z: 3};
console.log(test.x); //number(1)
//3
test = [1, 2, 3];
console.log(test); //object(массив)
//4
test = [1, 2, 3];
console.log(test[1]); //number(2)
//5
let test1 = [1, 2, 3];
let test2 = 1;

console.log(test1); //object(массив)
//6
test1 = [1, 2, 3];
test2 = 1;

console.log(test1[test2]); //number(2)
//7
// number (целочисленные), string(стороковые), boolean(логические), null(нулевое), undifiend(неопределенное значение), infinity, -infinity(бесконечность)
