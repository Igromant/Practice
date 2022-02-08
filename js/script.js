'use strict';

const date = new Date(),

// Массив дней недели
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    
// Объявление переменных времени
    hours = date.getHours(),
    day = days[date.getDay()],
    time = date.toLocaleTimeString('en'),
    newDate = new Date(new Date().getFullYear() + 1, 0, 1);

// Вывод в консоль
console.log(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

// Создание элементов
const greeting = document.createElement('div'),
    dyaOfWeek = document.createElement('div'),
    currentTime = document.createElement('div'),
    newYearDays = document.createElement('div');

const changeEnding = (num) => {
    const textVar = [' день', ' дня', ' дней'];
    const n1 = num % 100,
        n2 = num % 10;
    return n1 > 4 && n1 < 21 ? num + textVar[2] :
        n2 === 1 ? num + textVar[0] :
        n2 > 1 && n2 < 5 ? num + textVar[1] :
        num + textVar[2];
};

// Оформление данных и условие для приветствия
greeting.textContent = hours < 5 || hours > 22 ? 'Доброй ночи' :
    hours < 10 ? 'Доброе утро' :
    hours < 17 ? 'Добрый день' :
    'Добрый вечер';
dyaOfWeek.textContent = 'Сегодня: ' + day;
currentTime.textContent = 'Текущее время: ' + time;
newYearDays.textContent = 'До нового года осталось ' + 
    changeEnding(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

document.body.append(greeting, dyaOfWeek, currentTime, newYearDays);