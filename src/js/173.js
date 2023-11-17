//1

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = []

for (let i = 0; i <= 2; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr)

//2

    /* [
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x']
    ] */
arr = []

for (let i = 0; i < 3; i++){
    arr[i] = []
    for (let j = 0; j < 4; j++){
        arr[i].push('x')

    }
}

console.log(arr)

//3

    /* [
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
        [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ],
      ] */

arr = []

for (let i = 0; i < 3;i++){
    arr[i]  = []
    for (let j = 0; j < 2; j++){
        arr[i] [j] = []
        for (let k = 1; k <= 5; k++){
        arr[i] [j].push(k)
        }
    }
}

console.log(arr)