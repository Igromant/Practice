'use strict';

// Объявление переменной
const lang = document.documentElement.lang;

// Способ вывода с помщью if
if ( lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
    console.log('Непредвиденное значение!');
}

// Способ вывода с помщью switch
switch(lang){
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log('Непредвиденное значение!');
}

// Способ вывода с помщью array
let arrLang = [];
arrLang.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
arrLang.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(arrLang[lang]);
let namePerson = prompt(' Введите ваше имя. ', 'Артем, Александр');


console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Александр') ? 'преподаватель' :
    'студент');