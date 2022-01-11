// Объявление переменныx
const input = document.querySelector('input[type=text]');
const range = document.querySelector('#range');
const btn = document.querySelector('#btn');
const btnSecond = document.querySelector('#e_btn');
const square = document.querySelector('#square');
const span = document.querySelector('#range-span');
const circle = document.querySelector('#circle');



// Объявление функций

// Изменение цвета фигуры 

const inputClick = function () {
    square.style.backgroundColor = input.value;
};

btn.addEventListener('click', inputClick);

// Убираем кнопку во внутреней фигуре

btnSecond.style.display = "none";

//Изменение размера внутреней фигуры

span.textContent = range.value + " %";
let rangeChange = function () {
    span.textContent = range.value + " %";
    circle.style.height = range.value + "%";
    circle.style.width = range.value + "%";
};

range.addEventListener('input', rangeChange);




