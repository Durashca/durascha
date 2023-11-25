//1
let num = 1;

function func() {
    num = 2;
}
func(); //

console.log(num); //2

//2
num = 1;

function func2() {
    let num = 2;
}
func2(); //

console.log(num);  //1