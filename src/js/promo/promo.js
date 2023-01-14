// Burger Event listener when clicking
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__item a");
const className = "active";

hamburger.addEventListener("click", () => {
  menu.classList.add(className);
});

closeButton.addEventListener("click", () => {
  menu.classList.remove(className);
});

menuLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    menu.classList.remove(className);

    const id = el.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const overlay = document.querySelector(".menu__overlay");

overlay.addEventListener("click", () => {
  menu.classList.remove(className);
});
