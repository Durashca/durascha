//1
let num = 3;

if ((num > 5 && num < 10) || num == 20) {
    console.log('+++');
} else {
    console.log('---');
}
//2
 num = 3;

if (num > 5 || (num > 0 && num < 3)) {
    console.log('+++');
} else {
    console.log('---');
}
//3
num = 3;

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
    console.log('+++');
} else {
    console.log('---');
}