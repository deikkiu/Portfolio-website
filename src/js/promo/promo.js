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
