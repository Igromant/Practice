'use strict';

// Объявление переменных

const input = document.getElementById('input');
const btnSave = document.getElementById('btn_save');
const btnRemove = document.getElementById('btn_remove');
const text = document.getElementById('text');

// Отображение текста

const showText = function () {
    text.textContent = sessionStorage.getItem('text');
}

// Сохранение переменной

btnSave.addEventListener('click', function () {
    sessionStorage.setItem('text', input.value);
    showText();
})

// Удаление переменной

btnRemove.addEventListener('click', function () {
    localStorage.clear();
    sessionStorage.clear();
    showText();
})

showText();