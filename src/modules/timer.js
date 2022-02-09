// Таймер
const timer = (deadline) => {
  // Объявление переменных таймера
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
  
    // Отсчёт таймера
    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let hours = Math.floor(timeRemaining / 60 / 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);
  
      return { timeRemaining, hours, minutes, seconds };
    };

    // Подстановка нуля для таймера
    const addZero = (elem) => {
      if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }
    };
  
    // Обнавление таймера
    const updateClock = () => {
      let getTime = getTimeRemaining();
      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);
    };
    // Время вышло
    setTimeout(() => {
      let getTime = getTimeRemaining();
      if (getTime.timeRemaining > 0) {
        updateClock();
      } else if (getTime.timeRemaining === 0) {
        clearTimeout(updateClock);
      }
    });
    // Обнавление интервала
    setInterval(() => {
      let getTime = getTimeRemaining();
      if (getTime.timeRemaining > 0) {
        updateClock();
      } else if (getTime.timeRemaining === 0) {
        clearInterval(updateClock);
      }
    }, 1000);
  };
  
  export default timer;