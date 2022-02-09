const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
  
    //Функция события
    const handleMenu = () => {
      menu.classList.toggle("active-menu");
    };
  
    // Обработчик события открытия меню
    menuBtn.addEventListener("click", handleMenu);
    closeBtn.addEventListener("click", handleMenu);
  
    // Обработчик события кнопок меню
    menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", handleMenu)
    );
  };
  
  export default menu;