let num = 3
let obj = {
    sum: function (local_num) {return local_num + local_num},
    square: function (local_num){return local_num ** 2},
    kube: function (local_num){return local_num ** 3},
}

console.log(obj.sum(num), obj.square(num), obj.kube(num))

