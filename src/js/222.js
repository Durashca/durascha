//1
function func(obj) {
    obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj); //{a: '!', b: 2, c: 3}
//2
function func2(arg) {
    arg = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj2.a);
console.log(obj2); //{a: 1, b: 2, c: 3}
//3
function func3(obj3) {
    obj3 = '!';
}

let obj3 = {a: 1, b: 2, c: 3};
func3(obj3.a);
console.log(obj3); //{a: 1, b: 2, c: 3}
//4
function func4(arr4) {
    arr4.splice(1, 1);
}

let arr4 = [1, 2, 3];
func4(arr4);
console.log(arr4); //[1, 3]
//5
function func5(arr5) {
    arr5.slice(1, 1);
}

let arr5 = [1, 2, 3];
func5(arr5);
console.log(arr5); //[1,2, 3]
//6
function func6(arr6) {
    let newArr6 = arr6;
    newArr6[0] = '!';
}

let arr6 = [1, 2, 3];
func6(arr6);
console.log(arr6); // [1, 2, 3]




