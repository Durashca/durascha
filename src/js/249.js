//1
function test1(num) {
    function func(num) {
        console.log(num); //1
    }

    func(num);
}

test1(1);
//2
function test2(num) {
    function func(num) {
        num = 2;
    }

    func(num);
    console.log(num); // 1
}

test2(1);
//3
function test3(num) {
    function func(num) {
        console.log(num); //2
    }

    num = 2;
    func(num);
}

test3(1);
//4
function test4(num) {
    function func(num) {
        console.log(num); //1
    }

    func(num);
    num = 2;
}

test4(1);