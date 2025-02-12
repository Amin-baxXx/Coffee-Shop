"use strict";
// Speggati Codes😎
const darkKey = document.querySelectorAll(".dark-mode");
const clicker = document.querySelector(".clicker");
const closeIcon = document.querySelector(".close-icon");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openSubMenu = document.querySelector(".open-sub-menu");
const subMenu = document.querySelector(".sub-menu");
const arrowRotate = document.querySelector(".arrow-rotate");
const hambergerMenu = document.querySelector("#hamberger-menu");
const darkKeyChanger = document.querySelectorAll(".dark-mode use");
const nameChanger = document.querySelector(".name-changer");
const shoppingClose = document.querySelector(".shopping-close");
const shoppingIcon = document.querySelector(".shopping-icon");
const shoppingOpen = document.querySelector(".shopping-open");
const shopingRedirect = document.querySelector(".shoping-redirect");
// Run For If clinet is true or false in he/she localstorage
if (localStorage.getItem("dark-mode") === null) {
  localStorage.setItem("dark-mode", "false");
}
if (localStorage.getItem("dark-mode") === "true") {
  document.documentElement.className = "dark";

  darkKeyChanger.forEach((key) => {
    key.setAttribute("href", "#moon");
    if (key.dataset.set === "theme") {
      key.setAttribute("href", "#sun");
      nameChanger.textContent = "تم روشن";
    }
  });
} else {
  document.documentElement.className = "light";
  localStorage.setItem("dark-mode", "false");
  darkKeyChanger.forEach((key) => {
    key.setAttribute("href", "#sun");
    if (key.dataset.set === "theme") {
      key.setAttribute("href", "#moon");
      nameChanger.textContent = "تم تاریک";
    }
  });
}
// FUnction
const darkModeOn = function () {
  if (localStorage.getItem("dark-mode") === "false") {
    console.log("check IF");
    localStorage.setItem("dark-mode", "true");
    document.documentElement.className = "dark";
    nameChanger.textContent = "تم روشن";
    darkKeyChanger.forEach((key) => {
      key.setAttribute("href", "#moon");
      if (key.dataset.set === "theme") {
        key.setAttribute("href", "#sun");
      }
    });
  } else {
    document.documentElement.className = "light";
    localStorage.setItem("dark-mode", "false");
    nameChanger.textContent = "تم تاریک";
    darkKeyChanger.forEach((key) => {
      key.setAttribute("href", "#sun");
      if (key.dataset.set === "theme") {
        key.setAttribute("href", "#moon");
      }
    });
  }
};
const colseHamber = function () {
  overlay.style.display = "none";
  modal.style.transform = "translateX(349px)";
};
const showHamber = function () {
  modal.style.transform = "translateX(0px)";
  overlay.style.display = "block";
};
// addEvent Listener
darkKey.forEach((allkey) => {
  allkey.addEventListener("click", () => {
    darkModeOn();
  });
});
clicker.addEventListener("click", () => {
  darkModeOn();
});

//Close Icon
closeIcon.addEventListener("click", () => {
  colseHamber();
});
hambergerMenu.addEventListener("click", () => {
  showHamber();
});
overlay.addEventListener("click", () => {
  colseHamber();
  shoppingClose.style.transform = "translateX(0)";
});
shoppingIcon.addEventListener("click", () => {
  shoppingClose.style.transform = "translateX(0)";
  overlay.style.display = "none";
});
shoppingOpen.addEventListener("click", () => {
  shoppingClose.style.transform = "translateX(280px)";
  overlay.style.display = "block";
});
shopingRedirect.addEventListener("click", () => {
  colseHamber();
  shoppingClose.style.transform = "translateX(280px)";
  overlay.style.display = "block";
});
openSubMenu.addEventListener("click", () => {
  const getStyle = window.getComputedStyle(arrowRotate);

  if (getStyle.rotate === "180deg") {
    console.log(getStyle.rotate);
    arrowRotate.style.rotate = "0deg";
    subMenu.style.scale = "0";
    subMenu.style.height = "0";
    subMenu.style.opacity = "0";
    subMenu.style.visibility = "invisible";
    subMenu.style.gap = "9";
    subMenu.style.padding = "0";
    subMenu.style.paddingTop = "0";
    subMenu.style.paddingBottom = "0px";
  } else {
    arrowRotate.style.rotate = "180deg";
    subMenu.style.scale = "1";
    subMenu.style.height = "auto";
    subMenu.style.opacity = "1";
    subMenu.style.visibility = "visible";
    subMenu.style.gap = "20px";
    subMenu.style.padding = "32px";
    subMenu.style.paddingTop = "20px";
    subMenu.style.paddingBottom = "0px";
  }
});
// group-hover:gap-y-5
// group-hover:p-8
// group-hover:pt-5
