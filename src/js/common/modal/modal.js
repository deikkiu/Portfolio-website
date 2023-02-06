const link = document.querySelectorAll(".projects__item");
const modal = document.querySelector(".modal");
const modalVisit = document.querySelectorAll(".modal__visit");
const modalBack = document.querySelectorAll(".modal__back");
const modalOverlay = document.querySelector(".modal__overlay");
const modalList = document.querySelectorAll(".modal__body");

const submitClose = document.querySelector(".submit__close");
const submit = document.querySelector(".submit");

submitClose.addEventListener("click", () => {
  submit.classList.remove(active);
});

const active = "active";

link.forEach((el) => {
  el.addEventListener("click", modalOpen);
});

modalBack.forEach((el) => {
  el.addEventListener("click", modalClose);
});

modalVisit.forEach((el) => {
  el.addEventListener("click", modalClose);
});

function modalOpen() {
  let path = this.getAttribute("data-path");

  modalList.forEach((el) => {
    if (path === el.getAttribute("data-name")) {
      document.body.style.overflow = "hidden";
      modalOverlay.style.display = "block";
      modal.style.transition = "0.8s all";
      modal.classList.add(active);
      el.style.display = "block";
    }
  });
}

function modalClose() {
  document.body.style.overflow = "auto";
  modalOverlay.style.display = "none";
  modal.style.transition = "none";
  modal.classList.remove(active);
  modalList.forEach((el) => {
    el.style.display = "none";
  });
}
