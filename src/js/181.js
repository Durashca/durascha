//1

let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

console.log(months ['ru'] [month])


//2

let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
}

console.log(affairs ['2018'] ['12'] ['30'] [0])

//3

let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

//4

obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

key1 = 'key2';
key2 = 'key4';
console.log(obj[key1] [key2]);

//5

obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

key1 = 'key2';
key2 = 'key4';
console.log(obj[key1] [key2]);

//6

obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

key1 = 'key2';
console.log(obj[key1]['key4']);