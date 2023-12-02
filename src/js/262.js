//1
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

func()(); //0
func()(); //0
func()(); //0
//2
function func2() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

let test2 = func2;

test2()();//0
test2()();//0
test2()();//0