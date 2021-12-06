"use strict";
const myMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return myMobile.Android() || myMobile.BlackBerry() || myMobile.iOS() || myMobile.Opera() || myMobile.Windows();
  },
};

//Открывыет, закрывает панель навигации.

const menuNav = document.querySelector(".header__nav");
const iconMenu = document.querySelector(".header__burgerMenu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    menuNav.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

// Убирает при скроле панель навигации а так же меню навигации при скроле вверх вниз

const lastScroll = 0;
// const deafaultOffset = 200;
const header = document.querySelector(".header__section");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() && myMobile.any()) {
    menuNav.classList.remove("_active");
    iconMenu.classList.remove("_active");
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  } else {
    menuNav.classList.remove("_active");
    iconMenu.classList.remove("_active");
  }

  lastScroll = scrollPosition();
});

// Открывает и закрывает hedaer__authorization ПК И Mobile версия.

const btnLoginPC = document.querySelector(".hedaer__authorization");
const btnLoginMobail = document.querySelector(".header__iconMobil");
const popup = document.querySelector(".popup");
const popup__body = document.querySelector(".popup__body");
const valuePadding = window.innerWidth - document.querySelector(".js-value__padding").offsetWidth + "px";
const menu_nav_header = document.querySelector(".header__section");

if (btnLoginPC && btnLoginMobail) {
  btnLoginPC.addEventListener("click", function (e) {
    document.body.classList.add("_lock");
    popup.classList.add("open");

    if (valuePadding) {
      document.body.style.paddingRight = valuePadding;
    }
    if (isMobail.any()) {
      menu_nav_header.style.paddingRight = valuePadding;
    }
  });

  btnLoginMobail.addEventListener("click", function (e) {
    document.body.classList.add("_lock");
    popup.classList.add("open");

    if (valuePadding) {
      document.body.style.paddingRight = valuePadding;
      menu_nav_header.style.paddingRight = valuePadding;
    }
  });
}

if (popup && popup__body) {
  popup.addEventListener("click", function (e) {
    if (e.target == popup || e.target == popup__body) {
      document.body.classList.remove("_lock");
      popup.classList.remove("open");

      if (valuePadding) {
        document.body.style.paddingRight = "0px";
        menu_nav_header.style.paddingRight = "0px";
      }
    }
  });
}

const swiperPhoto = new Swiper(".js-swiper__photo", {
  autoHeight: true,
  simulateTouch: false,
  // slideClass:
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    prevEl: ".comments-arrow-prev",
    nextEl: ".comments-arrow-next",
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination-bullet",
    bulletElement: "li",
    modifierClass: "pagination-",
    bulletActiveClass: "pagination-active",
  },
});

const swiperText = new Swiper(".js-swiper__text", {
  navigation: {
    prevEl: ".comments-arrow-prev",
    nextEl: ".comments-arrow-next",
  },

  autoHeight: true,
  simulateTouch: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination-bullet",
    bulletElement: "li",
    modifierClass: "pagination-",
    bulletActiveClass: "pagination-active",
  },
});

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
