'use strict' 

// класс First

class First {
    constructor () {}
    hello () {
        console.log('Привет я метод родителя!');
    }
}

// класс Second

class Second extends First {
    constructor () {
        super();
    }
    hello () {
        super.hello();
        console.log('А я наследуемый метод!');
    }   
}

const test = new Second();

// Вызов функциии

test.hello();