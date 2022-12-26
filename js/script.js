const headerButton = document.querySelector(".header__button");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
  menu.classList.toggle("show-menu");
};

headerButton.addEventListener("click", toggleMenu);
