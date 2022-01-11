'use strict';

// Объявление переменных

let title = prompt(' “Как называется ваш проект?” ');
let adaptive = prompt(' “Нужен ли адаптив на сайте? ”', 'true/false');
let screens = prompt(' “Какие типы экранов нужно разработать?” ', ' "Простые, Сложные, Интерактивные" ');
let screenPrice  = +prompt(' “Сколько будет стоить данная работа?” ', '12000');
const rollback = 65;
let service1  = prompt(' “Какой дополнительный тип услуги нужен?” ');
let servicePrice1  = +prompt(' “Сколько это будет стоить?” ');
let service2  = prompt(' “Какой дополнительный тип услуги нужен?” ');
let servicePrice2  = +prompt(' “Сколько это будет стоить?” ');
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePrcentPrice = Math.ceil(fullPrice-fullPrice * (rollback/100))

// Условие

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
  } else {
    console.log('Что-то пошло не так');
  }


// Вывод в консоль

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log('“Стоимость верстки экранов '+ screenPrice +' рублей/ долларов/гривен/юани”' );
console.log('“Стоимость разработки сайта '+ fullPrice +' рублей/ долларов/гривен/юани”' );
console.log(screens.length);
console.log(screens.toLowerCase());
console.log(screens.split());
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback/100));
console.log(service1, servicePrice1);
console.log(service2, servicePrice2);
console.log(servicePrcentPrice);


