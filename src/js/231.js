//1
function func() { // Function Declaration
    console.log('!');
}

//2
let func = function () { // Function Expression
        console.log('!');
    }
//3
+ function () { // Function Expression
        console.log('!');
    }
//4
!function func() { // Function Expression
    console.log('!');
}
//5
- function func() { // Function Expression
    console.log('!');
}
//6
1 + function func() { // Function Expression
    console.log('!');
}
//7
(function func() { // Function Expression
        console.log('!');
    })
//8
console.log(
    function () { // Function Expression
        console.log('!');
    }
);