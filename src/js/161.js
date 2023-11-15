//1

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}

console.log(obj);
//2

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj) {
    if (obj[key] % 2 === 0) {
        newObj[key] = obj[key];
    }
}

console.log(newObj);

//3

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
newObj = {};

for (let key in obj) {
    newObj[obj[key]] = key;
}

console.log(newObj);