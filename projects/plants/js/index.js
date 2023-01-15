console.log("100/100");

window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".navbar__menu");
  const menuItem = document.querySelectorAll(".navbar__item");
  const menuClassName = "navbar__menu_active";
  const burgerClassName = "burger_active";

  burger.addEventListener("click", () => {
    burger.classList.toggle(burgerClassName);
    menu.classList.toggle(menuClassName);
  });

  menuItem.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      burger.classList.toggle(burgerClassName);
      menu.classList.toggle(menuClassName);

      const hash = event.target.getAttribute("href");
      const scrollTarget = document.querySelector(hash);

      scrollTarget.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
