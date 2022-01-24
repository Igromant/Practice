'use strict'

// Объявление переменных

const title = document.getElementsByTagName('h1')[0]
const btnPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')


const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const checkCms = document.getElementById('cms-open')
const cmsVar = document.getElementsByClassName('hidden-cms-variants')[0]

const cmsSelect = document.getElementById('cms-select')
const cmsOther = document.querySelectorAll('.hidden-cms-variants .main-controls__input')
const cmsInputBl = document.querySelector('.hidden-cms-variants .main-controls__input')

// Объявление базы данных

const appData = {
  title: '',
  screens: [],
  countScreen: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePricesCms: 0,
  fullPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  serviceCms: {},

  init() {
    this.addTitle();

    this.funCms();
    

    startBtn.addEventListener("click", this.start.bind(appData));
    resetBtn.addEventListener("click", this.reset.bind(appData));

    btnPlus.addEventListener("click", this.addScreenBlock.bind(appData));

    inputRange.addEventListener('input', (event) => {
      inputRangeValue.textContent = event.target.value + " %";
      this.rollback = event.target.value;
    });
  },

  addTitle() {
    document.title = title.textContent
  },

  funCms() {
    checkCms.addEventListener('input', () => {
      if (checkCms.checked) {
        cmsVar.style.display = '';
      } else {
        cmsVar.style.display = 'none';
      }
    })

          cmsOther.forEach((item) => {
            const choice = item.querySelector('option')

            cmsSelect.addEventListener("change", () => {
              if (cmsSelect.value == 'other') {

                cmsInputBl.style.display = ''
                

              }else if (cmsSelect.value == '50'){

                cmsInputBl.style.display = 'none'
                this.serviceCms[choice] = +cmsSelect.value

              } else {
                cmsInputBl.style.display = 'none'
              }
             
            });
        })
    },

// Функции кнопки старт

  start() {
    this.addScreens();
    this.addServices();
    this.addPrice();
    this.checkInp();
    this.btnCheck();
    this.showResult();
    

    startBtn.style.display = 'none'
    resetBtn.style.display = ''
  },

// Функции кнопки сброс

  reset() {
    startBtn.style.display = ''
    resetBtn.style.display = 'none'

    cmsVar.style.display = 'none';

    this.title = '';
    this.screens = [];
    this.countScreen = 0;
    this.screenPrice = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicePricesCms = 0;
    this.servicePercentPrice = 0;
    this.fullPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.serviceCms = {};

    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;

    document.querySelectorAll(".cloneScr").forEach((item) => item.remove());

    this.btnCheck();
    this.checkInp();
  },

  // Проверка ввода

  checkInp() {
    screens = document.querySelectorAll(".screen");

    screens.forEach((item) => {
      const srcInp = item.querySelector(".screen input");
      const srcSel = item.querySelector(".screen select");

      srcInp.addEventListener("change", this.checkInp);
      srcSel.addEventListener("change", this.checkInp);
    });

    for (let i = 0; i < screens.length; i++) {
      if (
        screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === ""
      ) {
        startBtn.disabled = true;
        break;
      } else {
        startBtn.disabled = false;
      }
    }
  },

// Проверка кнопки

  btnCheck() {

    document.querySelectorAll("input[type=checkbox]").forEach((item) => {
      if (this.servicePricesPercent + this.servicePricesNumber + this.servicePricesCms != 0) {
        item.disabled = true;
        cmsVar.disabled = true;
        cmsSelect.disabled = true;
        
      } else {
        item.disabled = false;
        item.checked = false;
        cmsVar.disabled = false;
        cmsSelect.value = "";
        cmsSelect.disabled = false;
        
      }
    });

    document.querySelectorAll(".screen").forEach((screen) => {
      const sel = screen.querySelector("select");
      const inp = screen.querySelector("input");

      if (this.screenPrice != 0 && this.countScreen != 0) {
        sel.disabled = true;
        inp.disabled = true;
      } else {
        sel.disabled = false;
        sel.value = "";
        inp.disabled = false;
        inp.value = "";
      }
    });

    if (this.servicePercentPrice != 0) {
      inputRange.disabled = true;
      btnPlus.disabled = true;
    } else {
      inputRange.disabled = false;
      inputRange.value = "0";
      inputRangeValue.textContent = inputRange.value + "%";
      btnPlus.disabled = false;
    }
  },

// Вывод результата

  showResult() {
    total.value = this.screenPrice;
    totalCount.value = this.countScreen;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber + this.servicePricesCms;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

// Проверка числа

  isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  addScreens() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value*+input.value,
        count: +input.value
      })
    })
    console.log(this.screens)
  },

  addServices() {
    otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');
  
        if (check.checked) {
          this.servicesPercent[label.textContent] = +input.value
        }
      })
      otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');
  
        if (check.checked) {
          this.servicesNumber[label.textContent] = +input.value
        }
      })
        
  
  },

 

  // Добавление поля 

  addScreenBlock() {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length-1].after(cloneScreen);

    cloneScreen.classList.add("cloneScr");
    
    this.checkInp();
  },

  addPrice() {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let screen of this.screens) {
      this.countScreen += +screen.count;
    }

    for(let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for(let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    for(let key in this.serviceCms) {
      this.servicePricesCms += this.screenPrice * (this.serviceCms[key] / 100);
    }

    this.fullPrice =  +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent + this.servicePricesCms;

    this.servicePercentPrice =  Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },

 
  // logger: function () {
//     console.log("allServicePrices", appData.allServicePrices);

//     console.log(appData.getRollbackMessage(appData.fullPrice));
//     console.log("title",typeof appData.title);
//     console.log("screenPrice",typeof appData.screenPrice);
//     console.log("adaptive",typeof appData.adaptive);

//     console.log("screens.length",appData.screens.length);
//     console.log("screens",appData.screens);
//     console.log("serviePercentPrice",appData.serviePercentPrice);

//     console.log("Стоимость верстки экранов " + appData.screenPrice + " гривен и Стоимость разработки сайта " + appData.fullPrice + " гривен.");
//     console.log("Свойства и методы appData");
//     for (let key in appData) {
//       console.log( "Ключ: " + key + " Значение: " + appData[key] );
//     }
//   }
}

appData.init();
