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

const menuNav = document.querySelector(".menu-nav");
const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    menuNav.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

// Убирает при скроле панель навигации а так же меню навигации при скроле вверх вниз

let lastScroll = 0;
// const deafaultOffset = 200;
const header = document.querySelector(".section_header");

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

// Открывает и закрывает Sign-in ПК И Mobile версия.

const btnLoginPC = document.querySelector(".sign-in");
const btnLoginMobail = document.querySelector(".svg-header");
const popup = document.querySelector(".popup");
const popup__body = document.querySelector(".popup__body");
let valuePadding = window.innerWidth - document.querySelector(".valuePaddingLock").offsetWidth + "px";
const menu_nav_header = document.querySelector(".section_header");

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

const swiperPhoto = new Swiper(".swiper-photo", {
  autoHeight: true,
  simulateTouch: false,
  // slideClass:
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

const swiperText = new Swiper(".swiper-text", {
  navigation: {
    nextEl: ".comments-arrow-next",
    prevEl: ".comments-arrow-prev",
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

//  function isElement(value) {
//     return value instanceof Element;
//   }

//   const accordionList = document.querySelectorAll(".accordion");

//   function initAccordion(accordion) {
//     function handleClick(event) {

//       const target = event.target;

//       if (isElement(target) && target.closest(".Steps-work-2_button")) {

//         const cardList = accordion.querySelectorAll(".accordion-item");
//         const cardListArray = Array.from(cardList);
//         const clickedCard = target.closest(".accordion-item");

//         function closeCard(card) {

//         card.classList.remove("is-open");
//         }
//         clickedCard.classList.toggle("is-open");

//         cardList.forEach((card) => {
//           if (
//             cardListArray.indexOf(card) !== cardListArray.indexOf(clickedCard)
//           ) {
//             closeCard(card);
//           }
//         });
//       }
//     }
//     accordion.addEventListener("click", handleClick);
//   }
//   accordionList.forEach(initAccordion);

const acordions = document.querySelectorAll(".accordion");

acordions.forEach((acordion) => {
  acordion.addEventListener("click", (event) => {
    if (event.target.classList.contains("Steps-work-2_button")) {
      const AcordionClick = event.target.closest(".accordion-item");

      const cardAcordion2 = document.querySelectorAll(".accordion-item");

      cardAcordion2.forEach((acordionCard) => {
        if (acordionCard !== AcordionClick) {
          acordionCard.classList.remove("is-open");
        }
      });
      AcordionClick.classList.toggle("is-open");
    }
  });
});

// let animation = anime({
//   targets: "p",
//   translateY: 100,
//   borderRadius: 50,
//   duration: 2000,
//   easing: "linear",
//   direction: "alternate",
// });

// anime({
//   targets: ".accordion-item",
//   translateY: 100,
//   duration: 100000,
// });

// let isOpen = false;
// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     let targets = document.getElementById("wrapper");
//     let wrapperStyle = wrapper.style;
//     let button = document.getElementById("button");
//     button.addEventListener(
//       "click",
//       () => {
//         if (isOpen) {
//           anime({
//             targets,
//             height: 0,
//             opacity: [1, 0],
//             duration: 1000,
//             easing: "easeOutQuad",
//             complete() {
//               isOpen = false;
//               wrapperStyle.display = "";
//             },
//           });
//         } else {
//           isOpen = true;
//           wrapperStyle.display = "block";
//           wrapperStyle.height = "0px";
//           anime({
//             targets,
//             height: (el) => el.scrollHeight,
//             opacity: [0, 1],
//             duration: 1000,
//             easing: "easeOutCubic",
//           });
//         }
//       },
//       false
//     );
//   },
//   false
// );
