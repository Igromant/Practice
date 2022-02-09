const modal = () => {
    console.dir(document);
    // Объявление переменных
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
  
    // Функция открытия модального окна
    const openModal = () => {
      modal.style.display = "block";
      document.querySelector(".popup-content").animate(
        [
          {
            opacity: 0,
            transform: "translate3D(0, -300px, 0)",
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 500,
        }
      );
    };
  
    // Обработчик события нажатия кнопки
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.outerWidth > 768) {
          openModal();
        } else {
          modal.style.display = "block";
        }
      });
    });
  
    // Функция закрытия модального окна
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };
  
  export default modal;