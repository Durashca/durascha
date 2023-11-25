//1
let num = 1;

function func() {
    num = 2;
}
func(); // изменение

console.log('#1',num); // 2
//2
/*let*/ num = 1;

function func2() {
    num = 2;
}

console.log('#2', num); //1
//3
/*let*/ num = 1;

function func3() {
    let num = 2;
}
func3();

console.log('#3',num); //1
//4
/*let*/ num = 1;

function func4() {
    let num = 2;
}

console.log('#4',num); //1
func4(); //
//5
/*let*/ num = 1;

function func5() {
    num = 2;
}

console.log('#5', num); //1
func5(); //
//6
/*let*/ num = 1;

function func6() {
    num++;
}

func6(); //1
func6(); // 2
func6();  // 3
console.log('#6', num); //4
//7
function func7() {
    num = 2;
}

/*let*/ num = 1;
console.log('#7', num); //1
func();
//8
function func8() {
    num = 2;
}

/*let*/ num = 1;
func8(); //изменение
console.log('#8', num); //2