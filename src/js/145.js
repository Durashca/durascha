//1
let obj = {x: 1, y: 2, z: 3};

for (let key in obj){
    console.log(key)
}

//2
obj = {x: 1, y: 2, z: 3};

for (let key in obj){
    console.log(obj[key])
}