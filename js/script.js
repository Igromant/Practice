'use strict'

// Объявление переменных в функции DomEl

function DomElement (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.newElement = function () {
  let element;

  // Условие функции для селектора 

  if (this.selector[0] === '.') {
    element = document.createElement('div');
    element.className = this.selector.slice(1);
  }
  if (this.selector[0] === '#') {
    element = document.createElement('p');
    element.id = this.selector.slice(1);
  }

  // Подключение стилей елементу

  element.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
  return element;
};

// Создание двух елементов на сайте

let elementDiv = new DomElement('.block', 100, 200, 'green', 12);
let elementParagraph = new DomElement('#best', 150, 400, 'red', 12);

document.body.appendChild(elementDiv.newElement());
document.body.appendChild(elementParagraph.newElement());