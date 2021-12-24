"use strict";

// Таб appPreview

// Создаём переменные с колекцией навигации и колекцией карточек,
// так же создаём переменную для переключения навигации и контента.

const tabNav = document.querySelectorAll(".js-tabBtn");
const tabContent = document.querySelectorAll(".js-tabContent");
let tabName;

//Добавляем слушатель "click" на каждый элемент в коллекции

tabNav.forEach((item, e) => {
  item.addEventListener("click", selectTabNav);
});

function selectTabNav(e) {
  // Убираем класс isOpenTab у всех элементов

  tabNav.forEach((item) => {
    item.classList.remove("isOpenTab");
  });
  // const loli = e.target;
  // console.log(loli);
  // Добовляем класс isOpenTab у элемента на котороый нажали this
  // if (loli === this) {
  this.classList.add("isOpenTab");
  // }

  // Добовляем в переменную tabName номер атрибута по которому кликнули

  tabName = this.getAttribute("data__number");

  selectTabContent(tabName);
}

function selectTabContent(tabName) {
  tabContent.forEach((item, index) => {
    if (item.classList.contains(tabName)) {
      item.classList.add("isOpenTab");
    } else {
      item.classList.remove("isOpenTab");
    }
    //   item.classList.contains(tabName)
    //     ? item.classList.add("isOpenTab")
    //     : item.classList.remove("isOpenTab");
  });
}
