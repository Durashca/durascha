//1
let test = function func() {
    console.log('!');
}
test() // Function Expression
//2
console.log(
    function func() { // Function Declaration
        console.log('!');
    }
);
//3
+function func() { // Function Expression
    console.log('!');
}
func()
//4
func()
function func() { // Function Declaration
    console.log('!');
}