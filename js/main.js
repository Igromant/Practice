'use strict';

// Доп задание 2

const arr = ['678208', '234765', '325634', '238928', '7893463', '4798367', '2348423'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

const divi = el => {
    let arr = [];
    if (el !== 1) {
        arr.push(1);
        for (let j = 2; j * j <= el; j++) {
            if (el % j === 0) {
                arr.push(j);
            }
        }
    }
    arr.push(el);
    return arr;
};

for (let i = 1; i <= 100; i++) {
    const n = divi(i);
    if (n.length <= 2) {
        console.log(`${i}: Простое число. Делители этого числа: ${n.join(', ')}`);
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(`${i}: Делители этого числа: ${divi(i).join(', ')}`);
}