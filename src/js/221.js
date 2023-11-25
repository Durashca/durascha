//1
function func(num) {
    num = 2;
}

let num = 1;
func(num);
console.log(num); //1
//2
function func2() {
    num2 = 2;
}

let num2 = 1;
func2();
console.log(num2); //2
//3
function func3() {
    let num3 = 2;
}

let num3 = 1;
func3();
console.log(num3); //1
