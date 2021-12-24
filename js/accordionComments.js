"use strict";

const animatedOpen = (contentElement, duration = 500) => {
  anime({
    targets: contentElement,
    height: (elem) => elem.scrollHeight,
    duration,
    easing: "easeInOutQuad",
  });
};
const animatedClose = (contentElement, duration = 500) => {
  anime({
    targets: contentElement,
    height: 0,
    duration,
    easing: "easeInOutQuad",
  });
};
const initAcordion = (
  rootSelector,
  { duration, element = "js-accordionItem", button = "js-acordionButton", content = "js-accordionContent" }
) => {
  const root = document.querySelector(`.${rootSelector}`);

  if (!root) {
    throw new Error("Root element cannot be find");
  }
  const acordionItems = root.querySelectorAll(`.${element}`);

  if (!acordionItems) {
    throw new Error("itemSelector element cannot be find");
  }
  const handler = (event, index) => {
    console.log(index);
    acordionItems.forEach((el, i) => {
      // console.log(i);

      const contentElement = el.querySelector(`.${content}`);
      if (contentElement) {
        if (index === i) {
          console.log(index === i);
          console.log(i);
          el.classList.toggle("isOpen");
          if (el.classList.contains("isOpen")) {
            animatedOpen(contentElement, duration);
          } else {
            animatedClose(contentElement, duration);
          }
        } else if (el.classList.contains("isOpen")) {
          el.classList.remove("isOpen");
          animatedClose(contentElement, duration);
        }
      }
    });
  };

  if (acordionItems) {
    acordionItems.forEach((el, index) => {
      const btn = el.querySelector(`.${button}`);
      if (btn) {
        btn.addEventListener("click", (e) => handler(e, index));
      }
    });
  }
};
initAcordion("js-accordion", { duration: 500 });
