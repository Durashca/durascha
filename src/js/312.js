let date = new Date();

console.log(
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
    func(date.getDate()) + '-' + func(date.getMonth() + 1) + '-' + date.getFullYear()
);

function func(num) {
    if (0 <= num && num <= 9) {
        return '0' + num;
    }
    return num;
}