'use strict';

//Доп Задание

let offer = prompt('Введите какое либо предложение.');

const fun = (arg) => {
    let res = 'Ожидается появление строки...';
    if(typeof arg == "string"){
        const maxLength = 30;
        const str = arg.trim();
        if(str.length){
            res = str.substr(0,maxLength)+'...';
        } else {
            res = str;
        }
    }

    return res;
}

console.log('fun(): ', fun(5));
console.log('fun(): ', fun('    Строка менее 30 символов     '));
console.log('fun(): ', fun('    Строка более 30 символов - ну очень при очень длинная строчка получилась!'));
console.log('fun(): ', fun(offer));