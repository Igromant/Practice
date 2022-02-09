import { animate } from "./help";

const modal = () => {
  //Объявление переменных
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = document.querySelector(".popup-content");

  //Условие
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.outerWidth > 768) {
        modal.style.display = "block";
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress;
            popupContent.style.top = 10 * progress + "%";
          },
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  // Событие по клику
  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};
export default modal;