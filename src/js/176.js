//1

let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

console.log(obj ['key1'] ['key1'] + obj ['key1'] ['key2'] + obj ['key1'] ['key3'] + obj ['key2'] ['key1'] + obj ['key2'] ['key2'] + obj ['key2'] ['key3'] + obj ['key3'] ['key1'] + obj ['key3'] ['key2'] + obj ['key3'] ['key3'])


//2
obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}

console.log(obj ['2'] ['2'], obj ['3'] ['1'])

obj = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        }, f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
}


console.log(obj ['key1'] ['a'] + obj ['key1'] ['b'] + obj ['key1'] ['c'] ['d'] + obj ['key1'] ['c'] ['e'] + obj ['key1'] ['f'] + obj ['key2'] ['g'] + obj ['key2'] ['h'])