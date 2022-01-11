'use strict';

// Объявление переменных времени

const timeDisplay = () => {
    const week = ['Воскресенье, ', 'Понедельник, ', 'Вторник, ', 'Среда, ',
        'Четверг, ', 'Пятница, ', 'Суббота, '];
    const month = [' января ', ' февраля ', ' марта ',
        ' апреля ', ' мая ', ' июня ',
        ' июля ', ' августа ', ' сентября ',
        ' октября ', ' ноября ', ' декабря '];
    const date = new Date();

// Объявление функций и условий для работы часов 

    const addZero = elem => {
        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }
    };

// Наименование переменных часы, минуты и секунды

    const changeEnding = (num, timeElem = '') => {
        const textVariant = (timeElem === 'h' ? [' час ', ' часа ', ' часов '] :
            timeElem === 'm' ? [' минута ', ' минуты ', ' минут '] :
            [' секунда ', ' секунды ', ' секунд ']);
        const n = num % 10;
        return num > 4 && num < 20 ? num + textVariant[2] : 
            n === 1 ? num + textVariant[0] : 
            n > 1 && n < 5 ? num + textVariant[1] :
            num + textVariant[2];
    };
  
// Наименование переменных дни недели, месяц и год 

    const textTime = 'Сегодня ' + week[date.getDay()] + date.getDay() + month[date.getMonth()] + 
    date.getFullYear() + ' года, ' + changeEnding(date.getHours(), 'h') + 
    changeEnding(date.getMinutes(), 'm') + changeEnding(date.getSeconds());
    const time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + 
    addZero(date.getDay()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear();

    document.querySelector('.text-time').textContent = textTime;
    document.querySelector('.time').textContent = time;

// Вывод часов в консоль

    console.clear();
    console.log(textTime);
    console.log(time);
};

let elem = document.createElement('div');
elem.classList.add('text-time');
document.body.appendChild(elem);

elem = document.createElement('div');
elem.classList.add('time');
document.body.appendChild(elem);
console.dir(elem);

setInterval(timeDisplay, 1000);
