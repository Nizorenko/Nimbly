"use strict";

const swiperPhoto = new Swiper(".js-swiperPhoto", {
  autoHeight: true,
  loop: true,
  simulateTouch: false,
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

const swiperText = new Swiper(".js-swiperText", {
  navigation: {
    prevEl: ".comments-arrow-prev",
    nextEl: ".comments-arrow-next",
  },

  autoHeight: true,
  loop: true,
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
