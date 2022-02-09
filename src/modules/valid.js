const formsValidation = () => {
    //Объявление перменных
    const calcSquareInput = document.querySelector(".calc-square");
    const calcCountInput = document.querySelector(".calc-count");
    const calcDayInput = document.querySelector(".calc-day");
    const calcBlock = document.querySelector(".calc-block");
    const textForms = document.querySelectorAll("form");
    const yourMessage = document.querySelector(".mess");
  
    // Обработчик проверки заполнения текстовых полей
    textForms.forEach((item) => {
      const yourName = item.querySelector("input[type=text]");
      const yourEmail = item.querySelector("input[type=email]");
      const yourPhone = item.querySelector("input[type=tel]");
  
      yourName.addEventListener("input", (e) => {
        e.preventDefault();
  
        e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
      });
  
      yourEmail.addEventListener("input", (e) => {
        e.preventDefault();
        yourEmail.type = "text";
  
        e.target.value = e.target.value.replace(/[^a-z0-9_.~*'!@-]/giu, "");
      });
  
      yourPhone.addEventListener("input", (e) => {
        e.preventDefault();
  
        e.target.value = e.target.value.replace(/[^0-9\(\)\-\+\ ]/g, "");
      });
    });
  
    yourMessage.addEventListener("input", (e) => {
      e.preventDefault();
  
      e.target.value = e.target.value.replace(/[^а-я !?()-*%.,/]/gi, "");
    });
  
    calcBlock.addEventListener("input", (e) => {
      e.preventDefault();
      calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
      calcCountInput.value = calcCountInput.value.replace(/\D+/, "");
      calcDayInput.value = calcDayInput.value.replace(/\D+/, "");
    });
  };
  
  export default formsValidation;