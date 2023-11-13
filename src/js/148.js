'use strict'
//1
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr.length - 1; i++){
    console.log( 't1 ' + arr[i])
}

//2

for (let i = 1; i < arr.length - 1; i++){
    console.log('t2 ' + arr[i])
}

//3

for (let i = arr.length - 1; i >= 0 ;i--){
    console.log('t3 ' + arr[i])
}

//4

for (let i = 0; i <= arr.length - 1; i++) {
    console.log('t4 ' + arr[i]);
}