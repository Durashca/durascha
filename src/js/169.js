//1

let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
let sum = 0

for (i of arr){
    for (j of i){
        for (q of j){
            sum += q
        }
    }
}
console.log(sum)