{
  const button$1 = document.querySelector(".button1");
  const form$1 = document.querySelector("#JsWidget1");
  const popup = document.querySelector(".wedget");

  button$1.addEventListener("click", () => {
    form$1.classList.add("open");
    popup.classList.add("wedget_open");
  });

  const buttonClose$1 = document.querySelector(".widget__close1");

  buttonClose$1.addEventListener("click", () => {
    form$1.classList.remove("open");
    popup.classList.remove("wedget_open");
  });
}

{
  const button$2 = document.querySelector(".button2");
  const form$2 = document.querySelector("#JsWidget2");
  const popup = document.querySelector(".wedget");

  button$2.addEventListener("click", () => {
    form$2.classList.add("open");
    popup.classList.add("wedget_open");
  });

  const buttonClose$2 = document.querySelector(".widget__close2");

  buttonClose$2.addEventListener("click", () => {
    form$2.classList.remove("open");
    popup.classList.remove("wedget_open");
  });
}

{
  const button$3 = document.querySelector(".button3");
  const form$3 = document.querySelector("#JsWidget3");
  const popup = document.querySelector(".wedget");

  button$3.addEventListener("click", () => {
    form$3.classList.add("open");
    popup.classList.add("wedget_open");
  });

  const buttonClose$3 = document.querySelector(".widget__close3");

  buttonClose$3.addEventListener("click", () => {
    form$3.classList.remove("open");
    popup.classList.remove("wedget_open");
  });
}
