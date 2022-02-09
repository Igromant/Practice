'use strict';

// Объявление массива
let arrData = [];

// Получение данных
const getData = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      arrData.push(data);
    })
    .catch((error) => console.log(error));
};

// Отправка данных
const sendData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: arrData,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getData("./db.json");
setTimeout(() => {
  sendData();
}, 1000);