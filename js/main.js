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

     const game = () => {
            const num = +prompt('"Угадай число от 1 до 100"');

        if (num === null ) {
            alert('"Игра окончена"');
            return
        }

        if (isNumber(num)) {
            const realNum = +num;
            if( realNum > rNum ){
                alert(' "Загаданное число меньше" ');
                game();
            } else if( realNum < rNum ){
                alert(' "Загаданное число больше" ');
                game();
            } else {
                if (confirm('"Поздравляю, Вы угадали!!!" ( Сыграем ещё ? )')) {
                    start();
                } else {
                    alert(' "Игра окончена" ');
                    return
                }
            }
        } else{
            alert("Введи число!");
            game();
        }
     }
     game();
 }

 // запуск игры
 start();
