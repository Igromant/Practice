'use strict';

// Объявление переменных

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const toDoList = document.querySelector('.todo-list');
const toDoCompleted = document.querySelector('.todo-completed');

// База данных

let toDoData = [];

// Объявление функции render

const render = function () {
  toDoList.innerHTML = ''
  toDoCompleted.innerHTML = ''

  toDoData.forEach(function (item) {
    const li = document.createElement('li');

    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
    '<div class="todo-buttons">' +
					'<button class="todo-remove"></button>' +
					'<button class="todo-complete"></button>' +
		'</div>'

    // Проверка на выполненые заметки

    if (item.completed) {
      toDoCompleted.append(li);
    } else {
      toDoList.append(li);
    }
    
    // Переключатель на выполнение заметки

    li.querySelector('.todo-complete').addEventListener('click', function () {
      item.completed = !item.completed
      render();
    })

    // Удаление заметок

    li.querySelector('.todo-remove').addEventListener('click', function () {
      li.remove();
      toDoData.splice( item, 1);
      render();

      localStorage.setItem('toDoList', JSON.stringify(toDoData));

      if (toDoData.length === 0) {
        localStorage.clear();
      }

    });

    if (toDoData.length >= 1) {
      localStorage.setItem('toDoList', JSON.stringify(toDoData));
    }

  });
}

const dataCheck = () => {
  toDoData = localStorage.getItem('toDoList')
  ? JSON.parse(localStorage.getItem('toDoList'))
  : []
  render();
}

// Отправка заметок в базу данных

todoControl.addEventListener('submit', function(event) {
  event.preventDefault();

  headerInput.value = headerInput.value.trim();

  if (headerInput.value.length !== 0) {
    
  const newToDo = {
    text: headerInput.value ,
    completed: false
  }

  toDoData.push(newToDo)
  headerInput.value = ''
  render();
 }
})

dataCheck();