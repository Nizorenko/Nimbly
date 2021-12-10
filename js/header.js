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

//Открывыет, закрывает панель навигации в мобильной версии.

const menuNav = document.querySelector(".js-headerNav");
const iconMenu = document.querySelector(".js-burgerMenu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    menuNav.classList.toggle("isOpenNav");
    iconMenu.classList.toggle("isOpenNav");
  });
}

// Убирает при скроле панель навигации а так же меню навигации при скроле вверх вниз

let lastScroll = 0;
const header = document.querySelector(".js-header");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hideNav");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() && myMobile.any()) {
    menuNav.classList.remove("isOpenNav");
    iconMenu.classList.remove("isOpenNav");
    header.classList.add("hideNav");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hideNav");
  } else {
    menuNav.classList.remove("isOpenNav");
    iconMenu.classList.remove("isOpenNav");
  }

  lastScroll = scrollPosition();
});
