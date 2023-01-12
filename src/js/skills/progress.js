// Progress block on skills section

const percent = document.querySelectorAll(".progress__percent");
const scale = document.querySelectorAll(".progress__scale span");

percent.forEach((item, i) => {
  scale[i].style.width = item.innerHTML;
});
