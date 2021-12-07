"use strict";

const swiperAppPreview = new Swiper(".js-appPreview__swiper", {
  autoHeight: true,
  // simulateTouch: false,
  loop: true,
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
