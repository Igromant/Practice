const valid = () => {
  // Объявление переменных
  const calcSquareInput = document.querySelector(".calc-square");
  const calcCountInput = document.querySelector(".calc-count");
  const calcDayInput = document.querySelector(".calc-day");
  const calcBlock = document.querySelector(".calc-block");
  const textForms = document.querySelectorAll("form");
  const yourMessage = document.querySelector(".mess");
  
  //Функция для определенных типов текстовых форм
  textForms.forEach((item) => {
    const yourName = item.querySelector("input[type=text]");
    const yourEmail = item.querySelector("input[type=email]");
    const yourPhone = item.querySelector("input[type=tel]");
    yourName.addEventListener("input", (e) => {
      e.preventDefault();

      e.target.value = e.target.value.replace(/[^а-я ]/gi, "");
      if (e.target.value.length >= 2) {
        e.target.classList.add("success");
      } else {
        e.target.classList.remove("success");
      }
    });

    yourEmail.addEventListener("input", (e) => {
      const testEmail = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;
      e.preventDefault();
      yourEmail.type = "text";

      e.target.value = e.target.value.replace(/[^a-z0-9_.~*'!@-]/giu, "");

      if (testEmail.test(e.target.value)) {
        e.target.classList.add("success");
      } else {
        e.target.classList.remove("success");
      }
    });
    yourPhone.addEventListener("input", (e) => {
      e.preventDefault();

      e.target.value = e.target.value.replace(/[^0-9\+]/g, "");
      if (e.target.value.length >= 11) {
        e.target.classList.add("success");
      } else {
        e.target.classList.remove("success");
      }
    });
  });
  yourMessage.addEventListener("input", (e) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^а-я0-9 \,\.\?\!]/gi, "");
    if (e.target.value) {
      e.target.classList.add("success");
    } else {
      e.target.classList.remove("success");
    }
  });
  calcBlock.addEventListener("input", (e) => {
    e.preventDefault();
    calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
    calcCountInput.value = calcCountInput.value.replace(/\D+/, "");
    calcDayInput.value = calcDayInput.value.replace(/\D+/, "");
  });
};
export default valid;