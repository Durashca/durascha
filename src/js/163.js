//1

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false
for (let i of arr) {
    if (i == 'c') {
        flag = true
        break
    }
}

if (flag) {
    console.log('+++')
} else {
    console.log('---')
}

//2
arr = [1, 3, 2, 0, 4, -2]
flag = false
for (let i of arr) {
    if (i > 1) {
        flag = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
    }
}
if (flag) {
    console.log('+++')
} else {
    console.log('---')
}