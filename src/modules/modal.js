const modal = () => {
    console.dir(document);
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
  
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
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.outerWidth > 768) {
          openModal();
        } else {
          modal.style.display = "block";
        }
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };
  
  export default modal;