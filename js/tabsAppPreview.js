"use strict";

// Таб appPreview

// Создаём переменные с колекцией навигации и колекцией карточек,
// так же создаём переменную для переключения навигации и контента.

const tabNav = document.querySelectorAll(".js-tabBtn");
const tabContent = document.querySelectorAll(".js-tabContent");
let tabName;

//Добавляем слушатель "click" на каждый элемент в коллекции

tabNav.forEach((item, i) => {
  item.addEventListener("click", selectTabNav);
});

function selectTabNav() {
  // Убираем класс isOpenTab у всех элементов

  tabNav.forEach((item, index) => {
    item.classList.remove("isOpenTab");
  });

  // Добовляем класс isOpenTab у элемента на котороый нажали this

  this.classList.add("isOpenTab");

  // Добовляем в переменную tabName номер атрибута по которому кликнули

  tabName = this.getAttribute("data__number");

  selectTabContent(tabName);
}

function selectTabContent(tabName) {
  tabContent.forEach((item) => {
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
