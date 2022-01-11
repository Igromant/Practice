'use strict';


// Функция написания в строке числа

const getRandomInt = (max) => {
    return Math.floor(Math.random()*Math.floor(max));
}

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

// конструкция игры
 const start = () => {

    let rNum = getRandomInt(100);

    console.log(' Секретное число: ', rNum);

    let attempts = 10;

     const game = () => {

        attempts--;

        if (attempts < 0) {
            if (confirm(' "Попытки закончились, хотите сыграть еще?" ')) {
                start();
            } else {
                alert(' "Игра окончена" ');
                return;
            }
        } else {

        const num = +prompt('"Угадай число от 1 до 100"');

        if (num === null ) {
            alert('"Игра окончена"');
            return;
        }

        if (isNumber(num)) {
            const realNum = +num;
            if( realNum > rNum ){
                alert(' "Загаданное число меньше, осталось ' + attempts + ' попыток" ');
                game();
            } else if( realNum < rNum ){
                alert(' "Загаданное число больше, осталось ' + attempts + ' попыток" ');
                game();
            } else {
                if (confirm(' "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?" ')) {
                    start();
                } else {
                    alert(' "Игра окончена" ');
                    return;
                }
            }
        } else{
            alert("Введи число!");
            game();
            }
        }
    }
     console.dir(game);
     game();
 }

 // запуск игры
 start();
