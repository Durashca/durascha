//1
let arr = [[1, 2, 3], [4, 5], [6]];

for (let i of arr){
    for (let j of i){
        console.log(j)
    }
}

//2

arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let i of arr){
    for (let j of i){
        for (let k of j){
            console.log(k)
        }
    }
}
