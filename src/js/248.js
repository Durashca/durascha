//1
function test1(num) {
    function func(localNum) {
        console.log(localNum); // 1
    }

    func(num);
}

test1(1);
//2
function test2(num) {
    function func(localNum) {
        console.log(localNum); // 2
    }

    func(num + 1);
}

test2(1);
//3
function test3(num) {
    function func(localNum) {
        console.log(num); // 1
    }

    func(num + 1);
}

test3(1);
//4
function test4(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    console.log(num); //1
}

test4(1);
//5
function test5(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    /*console.log(localNum);*/ //ошибка
}

test5(1);
//6
function test6(num) {
    function func(localNum) {
        num = 2;
    }

    func(num);
    console.log(num); //2
}

test6(1);