let num = 266219;
// переменная num

console.log('1) ',num);

const multiplyingDigitsNumber = str => {
    let res = 1;
    for (let i = 0; i < str.length; i++) {
        res *= str[i];
    }
    return res;
};
// произведение (умножение чисел)

const multiplyingDigits = multiplyingDigitsNumber(num.toString());
console.log('2) ', multiplyingDigits);

const raising = multiplyingDigits ** 3;
console.log('3) ', raising);
// возведение в 3 степень

console.log('4) ', raising.toString().substr(0,2));