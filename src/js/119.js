//1
if (-1 && 0 == false){
    console.log('правильно')
}
//2
let test = 1;

if (test == true) {
    console.log('+++'); //это
} else {
    console.log('---');
}
//3
test = 0;

if (test == true) {
    console.log('+++');
} else {
    console.log('---'); //это
}
//4
 test = 1;

if (test == false) {
    console.log('+++');
} else {
    console.log('---'); //это
}
//5
 test = 1;

if (test != true) {
    console.log('+++');
} else {
    console.log('---'); //это
}
//6
 test = '';

if (test == false) {
    console.log('+++'); //это
} else {
    console.log('---');
}
//7
test = undefined;

if (test == true) {
    console.log('+++');
} else {
    console.log('---'); //это
}
//8
 test = 3 * 'a';

if (test == true) {
    console.log('+++');
} else {
    console.log('---'); //это
}