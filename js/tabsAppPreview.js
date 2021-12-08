"use strict";

// Таб appPreview

let tab = function () {
  // Создаём переменные с колекцией навигации и колекцией карточек,
  // так же создаём переменную для переключения навигации и контента.

  let tabNav = document.querySelectorAll(".js-tab__navBtn"),
    tabContent = document.querySelectorAll(".js-tab__contentItem"),
    tabName;

  //Добавляем слушатель "click" на каждый элемент в коллекции

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    // Убираем класс css-tab__active у всех элементов

    tabNav.forEach((item) => {
      item.classList.remove("css-tab__active");
    });

    // Добовляем класс css-tab__active у элемента на котороый нажали this

    this.classList.add("css-tab__active");

    // Добовляем в переменную tabName номер атрибута по которому кликнули

    tabName = this.getAttribute("data__number");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      if (item.classList.contains(tabName)) {
        item.classList.add("css-tab__active");
      } else {
        item.classList.remove("css-tab__active");
      }
      //   item.classList.contains(tabName)
      //     ? item.classList.add("css-tab__active")
      //     : item.classList.remove("css-tab__active");
    });
  }
};

tab();
