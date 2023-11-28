function func (num_sq ,num_kb) {
    function square (num1){
        return num1 ** 2
    }
    function kube (num2) {
        return num2 ** 3
    }

    return square(num_sq) + kube(num_kb)
}

console.log(func(2, 3))
