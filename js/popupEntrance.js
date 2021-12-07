"use strict";

// Открывает и закрывает hedaer__entrance ПК И Mobile версия.

const btnLoginPC = document.querySelector(".hedaer__entrance");
const btnLoginMobail = document.querySelector(".header__iconMobil");
const popup = document.querySelector(".popupEntrance");
const popup__body = document.querySelector(".popupEntrance__body");
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
