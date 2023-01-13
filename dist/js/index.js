// Burger Event listener when clicking
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
  this.scrollY > promoHeigth - hamburgerHeigth
    ? hamburgerSpan.forEach((e) => (e.style.backgroundColor = "#000000"))
    : hamburgerSpan.forEach((e) => (e.style.backgroundColor = "#ffffff"));
});

// Progress block on skills section

const percent = document.querySelectorAll(".progress__percent");
const scale = document.querySelectorAll(".progress__scale span");

percent.forEach((item, i) => {
  scale[i].style.width = item.innerHTML;
});

