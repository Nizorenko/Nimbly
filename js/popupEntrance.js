"use strict";

// Открывает и закрывает hedaer__entrance ПК И Mobile версия.

const btnLoginPC = document.querySelector(".js-entranceBtn");
const btnLoginMobail = document.querySelector(".js-iconMobail");
const popup = document.querySelector(".js-entrance");
const popupBody = document.querySelector(".js-entranceBody");
const valuePadding = window.innerWidth - document.querySelector(".js-valuePadding").offsetWidth + "px";
const padding = document.querySelector(".js-header");

if (btnLoginPC && btnLoginMobail) {
  btnLoginPC.addEventListener("click", function (e) {
    document.body.classList.add("isLockSkroll");
    popup.classList.add("isOpenPopup");

    if (valuePadding) {
      document.body.style.paddingRight = valuePadding;
    }
    if (isMobail.any()) {
      padding.style.paddingRight = valuePadding;
    }
  });

  btnLoginMobail.addEventListener("click", function (e) {
    document.body.classList.add("isLockSkroll");
    popup.classList.add("isOpenPopup");

    if (valuePadding) {
      document.body.style.paddingRight = valuePadding;
      padding.style.paddingRight = valuePadding;
    }
  });
}

if (popup && popupBody) {
  popup.addEventListener("click", function (e) {
    if (e.target == popup || e.target == popupBody) {
      document.body.classList.remove("isLockSkroll");
      popup.classList.remove("isOpenPopup");

      if (valuePadding) {
        document.body.style.paddingRight = "0px";
        padding.style.paddingRight = "0px";
      }
    }
  });
}
