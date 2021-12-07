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

const menuNav = document.querySelector(".header__nav");
const iconMenu = document.querySelector(".header__burgerMenu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    menuNav.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

// Убирает при скроле панель навигации а так же меню навигации при скроле вверх вниз

let lastScroll = 0;
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
