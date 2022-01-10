'use strict';

let title = prompt(' “Как называется ваш проект?” ');
let adaptive = prompt(' “Нужен ли адаптив на сайте? ”', 'true/false');
let screens = prompt(' “Какие типы экранов нужно разработать?” ', ' "Простые, Сложные, Интерактивные" ');
let screenPrice  = +prompt(' “Сколько будет стоить данная работа?” ', '12000');
const rollback = 65;

// Задание 7

let service1  = prompt(' “Какой дополнительный тип услуги нужен?” ');
let servicePrice1  = +prompt(' “Сколько это будет стоить?” ');
let service2  = prompt(' “Какой дополнительный тип услуги нужен?” ');
let servicePrice2  = +prompt(' “Сколько это будет стоить?” ');

let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);

// fullPrice amount

let servicePrcentPrice = Math.ceil(fullPrice-fullPrice * (rollback/100))

// Data

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
  } else {
    console.log('Что-то пошло не так');
  }

console.log(title, fullPrice, adaptive);

// title, fullPrice and adaptive

console.log('“Стоимость верстки экранов '+ screenPrice +' рублей/ долларов/гривен/юани”' );

// PriceScreens

console.log('“Стоимость разработки сайта '+ fullPrice +' рублей/ долларов/гривен/юани”' );

// FullPrice

console.log(screens.length);

console.log(screens.toLowerCase());

console.log(screens.split());

console.log(screens.toLowerCase().split());

// Screens

console.log(fullPrice * (rollback/100));

// Rollback

console.log(service1, servicePrice1);

console.log(service2, servicePrice2);

console.log(servicePrcentPrice);


