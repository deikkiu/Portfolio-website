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
