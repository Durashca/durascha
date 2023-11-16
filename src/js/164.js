let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0

for (let elem of arr){
    if (String(elem)[0] === '1' || String(elem)[0] === '2'){
        sum += elem
    }
}

console.log(sum)