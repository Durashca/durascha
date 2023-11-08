//1
console.log( typeof {x: 1, y: 2, z: 3} ); //object
//2
console.log( typeof {} ); //object
//3
let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj ); //object
//4
obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] ); //number