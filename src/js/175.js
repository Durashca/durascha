//1

/*[[1, 2], [3, 4], [5, 6], [7, 8]]*/

let arr = []

for (let i = 0, k = 1; i < 4; i++){
    arr[i] = []
    for (let j = 0; j < 2; j++){
        arr[i].push(k++)

    }
}

console.log(arr)

//2

//    [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

arr = []

for (let i = 0, k = 0; i < 4; i++){
    arr[i] = []
    for (let j = 0; j < 3; j++){
        arr[i].push(k += 2)
    }
}

console.log(arr)

//3

//  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

arr = []

for (let i = 0, number = 0; i < 2; i++){
    arr[i] = []
    for (let j = 0; j < 2; j++){
        arr[i] [j] = []
        for (let k = 0; k < 2; k++){
            arr[i] [j].push(number += 1)
        }
    }
}

console.log(arr)

//4

//    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

console.log(arr);

//5

arr = [];


for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);

//6

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

console.log(arr);

//7

arr = [];

for (let i = 0 ,k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

console.log(arr);

//8

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);

//9

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);

//10

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);

//11

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

console.log(arr);

//12

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}

//13

arr = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}

console.log(arr);

console.log(arr);
