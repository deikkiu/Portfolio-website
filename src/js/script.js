const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__item");
const className = "active";

hamburger.addEventListener("click", () => {
  menu.classList.add(className);
});

closeButton.addEventListener("click", () => {
  menu.classList.remove(className);
});

menuLinks.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove(className);
  });
});
