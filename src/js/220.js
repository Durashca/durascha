//1
function func(localNum) {
    console.log(localNum);
}

func(1); //1
//2
function func2(localNum) {
    console.log(localNum);
}

let num = 1;
func2(num); //1
//3
function func3(localNum) {
    console.log(localNum);
}

let num3 = 1;
func3(num3); //1
num3 = 2;
//4
let num4 = 1;

function func4(localNum) {
    console.log(localNum);
}

num4 = 2;
func4(num4); //2
//5
function func5(localNum) {
    localNum = 2;
}

let num5 = 1;
func(num5);
console.log( num5);// 1
//6
function func6(localNum) {
    num6 = 2;
}

let num6 = 1;
func6(num6);
console.log(num6); //2
//7
function func7(localNum) {
    let num7 = 2;
}

let num7 = 1;
func7(num7);
console.log(num7); // 1