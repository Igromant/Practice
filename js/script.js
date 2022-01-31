'use strict'

// Обработчик события 

document.addEventListener('DOMContentLoaded', function (event) {
  const px = 10;

// Присвоение данных елементам

  const DomElement = function (selector = '.block', styleAtr = {}) {
      this.selector = selector === 'string' ? selector : (() => {
          styleAtr = typeof selector === 'object' ? selector : {};
          return '.block';
      })();
      this.height = '100px';
      this.width = '100px';
      this.bg = 'green';
      this.fontSize = '10px';
      this.cssText = '';

// Объевление условий      

      if (!('height' in styleAtr)) {
          styleAtr.height = '100px';
      }
      if (!('width' in styleAtr)) {
          styleAtr.width = '100px';
      }
      if (!('background' in styleAtr)) {
          styleAtr.background = 'green';
      }
      if (!('font-size' in styleAtr)) {
          styleAtr['font-size'] = '10px';
      }

      for (let key in styleAtr) {
          this.cssText += `${key}: ${styleAtr[key]}; `;
      }
  };
  
  DomElement.prototype.newElement = function () {
      let element;
      
// Объевление условий функции для селектора

      if (this.selector[0] === '.') {
        element = document.createElement('div');
        element.className = this.selector.slice(1);
      }
      
      if (this.selector[0] === '#') {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
      }
      
      element.style.cssText = this.cssText;
      element.style.cssText += `left: ${Math.round(window.innerWidth / 2 - parseInt(this.width) / 2)}px; `;
      element.style.cssText += `top: ${Math.round(window.innerHeight / 2 - parseInt(this.height) / 2)}px; `;
      
      element.addEventListener('click', this.transfer);
      
      return element;
  };
  
  let square = new DomElement({
      position: 'absolute'
  });

  document.body.appendChild(square.newElement());
  
  // Задание действий при нажатии стрелки на клавиатуре 

  document.addEventListener('keyup', (event) => {
      const div = document.querySelector('div');
      if (event.key === 'ArrowUp') {
          div.style.top = parseInt(div.style.top) - px + 'px';
      }
      if (event.key === 'ArrowRight') {
          div.style.left = parseInt(div.style.left) + px + 'px';
      }
      if (event.key === 'ArrowLeft') {
          div.style.left = parseInt(div.style.left) - px + 'px';
      }
      if (event.key === 'ArrowDown') {
          div.style.top = parseInt(div.style.top) + px + 'px';
      }
  });
});