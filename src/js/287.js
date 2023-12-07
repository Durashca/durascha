function func(n1, n2, n3, n4, n5, n6, n7, n8) {
    return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );  // 260