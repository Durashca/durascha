//1
let num = 1;

function func() {
    console.log(num);
}

func(); // 1
//2
num = 1;

function func2() {
    console.log(num);
}

num = 2;
func2(); // 2
//3
function func3() {
    console.log(num);
}

/*let num;*/

num = 1;
func3(); //1

num = 2;
func3(); //2

