//Объявление переменных
const title = "Over Working";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice  = 450;
const rollback = 65;
const fullPrice = 35000;
const adaptive = true;


//Вывод в консоль
console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('“Стоимость верстки экранов '+ screenPrice +' рублей/ долларов/гривен/юани”' );
console.log('“Стоимость разработки сайта '+ fullPrice +' рублей/ долларов/гривен/юани”' );
console.log(screens.toLowerCase());
console.log(screens.split());
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback/100));