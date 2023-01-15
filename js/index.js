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

// Change side panel color when scrolling
const promo = document.querySelector(".promo");
const sidePanel = document.querySelector(".sidepanel");
const sidePanelText = document.querySelector(".sidepanel__text");
const sidePanelDivider = document.querySelector(".sidepanel__divider");
const linkedinFill = document.querySelector(".linkedinChangeFill");
const instagramFill = document.querySelectorAll(".instagramChangeFill");
const githubFill = document.querySelector(".githubFChangeFill");

// Change hamburger bgcolor when scrolling
const hamburgerSpan = document.querySelectorAll(".hamburger span");
const hamburgerHeigth = hamburger.clientHeight;

// Svg parh transition style
githubFill.style.transition = "0.6s all";
instagramFill.forEach((e) => (e.style.transition = "0.6s all"));
linkedinFill.style.transition = "0.6s all";

// Element heigth
const promoHeigth = promo.clientHeight;
const sidePanelHeigth = sidePanel.clientHeight;
const distance = (promoHeigth - sidePanelHeigth) / 2;
const gapHeigth = 14;
const sidePanelTextHeigth = sidePanelText.offsetHeight;
const sidePanelDividerHeigth = sidePanelDivider.offsetHeight;
const socialElementsHeigth = 20;

// Calculate the height for each block
const dividerUniformValue = distance + sidePanelTextHeigth + gapHeigth;

//// Github
const githubUniformValue =
  distance + sidePanelTextHeigth + sidePanelDividerHeigth + gapHeigth * 2;

//// Instagram
const instagramUniformValue =
  distance +
  sidePanelTextHeigth +
  sidePanelDividerHeigth +
  socialElementsHeigth +
  gapHeigth * 3;

//// LinkedIn
const linkedinUniformValue =
  distance +
  sidePanelTextHeigth +
  sidePanelDividerHeigth +
  socialElementsHeigth * 3 +
  gapHeigth * 3;

window.addEventListener("scroll", function () {
  // Side panel text
  this.scrollY > distance
    ? (sidePanelText.style.color = "#000000")
    : (sidePanelText.style.color = "#ffffff");

  // Side panel divider
  this.scrollY > dividerUniformValue
    ? (sidePanelDivider.style.backgroundColor = "#000000")
    : (sidePanelDivider.style.backgroundColor = "#ffffff");

  // Side panel social

  // GitHub
  this.scrollY > githubUniformValue
    ? (githubFill.style.fill = "#000000")
    : (githubFill.style.fill = "#ffffff");

  // Instagram
  this.scrollY > instagramUniformValue
    ? instagramFill.forEach((e) => (e.style.fill = "#000000"))
    : instagramFill.forEach((e) => (e.style.fill = "#ffffff"));

  // LinkedIn
  this.scrollY > linkedinUniformValue
    ? (linkedinFill.style.fill = "#000000")
    : (linkedinFill.style.fill = "#ffffff");

  // Hamburger
  this.scrollY > promoHeigth - hamburgerHeigth * 2
    ? hamburgerSpan.forEach((e) => (e.style.backgroundColor = "#000000"))
    : hamburgerSpan.forEach((e) => (e.style.backgroundColor = "#ffffff"));
});

// Progress block on skills section

const percent = document.querySelectorAll(".progress__percent");
const scale = document.querySelectorAll(".progress__scale span");

percent.forEach((item, i) => {
  scale[i].style.width = item.innerHTML;
});

const link = document.querySelectorAll(".projects__item");
const modal = document.querySelector(".modal");
const modalVisit = document.querySelectorAll(".modal__visit");
const modalBack = document.querySelectorAll(".modal__back");
const modalOverlay = document.querySelector(".modal__overlay");
const modalList = document.querySelectorAll(".modal__body");

const modalSubmitClose = document.querySelector(".modal__close");
const modalSubmit = document.querySelector(".modal__submit");

modalSubmitClose.addEventListener("click", () => {
  modalSubmit.classList.remove(active);
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

function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      checkbox: {
        required: true,
      },
    },
    errorPlacement: $.noop,
  });
}

validateForms("#contacts form");

$("form").submit(function (e) {
  e.preventDefault();

  if (!$(this).valid()) {
    $("input")
      .change(function () {
        $(this).css("border", "1px solid red");
      })
      .trigger("change");
    $(".contacts__policy")
      .change(function () {
        $(this).css("border", "1px solid red");
      })
      .trigger("change");
    return;
  }

  // if Form valid reset to default styles

  $("input")
    .change(function () {
      $(this).css("border", "1px solid black");
    })
    .trigger("change");
  $(".contacts__policy")
    .change(function () {
      $(this).css("border", "none");
    })
    .trigger("change");

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".modal__submit").addClass(active);

    $("form").trigger("reset");
  });

  return false;
});
