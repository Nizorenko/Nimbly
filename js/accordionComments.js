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
  { duration, element = "js-accordion__item", button = "js-acordion__button", content = "js-accordion__content" }
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
    acordionItems.forEach((el, i) => {
      const contentElement = el.querySelector(`.${content}`);
      if (contentElement) {
        if (index === i) {
          el.classList.toggle("is-open");
          if (el.classList.contains("is-open")) {
            animatedOpen(contentElement, duration);
          } else {
            animatedClose(contentElement, duration);
          }
        } else if (el.classList.contains("is-open")) {
          el.classList.remove("is-open");
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
