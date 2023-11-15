//1

let obj = {x: 1, y: 2, z: 3};
let newObj = {}

for (let key in obj){
    newObj[key] = obj[key] ** 2
}

console.log(newObj)

//2

obj = {x: 1, y: 2, z: 3};
newObj = {}

for (let key in obj){
    newObj[key] = obj[key] + 1
}

console.log(newObj)