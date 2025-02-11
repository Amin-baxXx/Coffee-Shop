"use strict";
const darkKey = document.querySelectorAll(".dark-mode");
const closeIcon = document.querySelector(".close-icon");
const modal = document.querySelector("#modal");
const openSubMenu = document.querySelector(".open-submenu");
const openSubMenuHeight = document.querySelector(".open-submenu-height");
const overlay = document.querySelector(".overlay");
const hambergerMenu = document.querySelector("#hamberger-menu");
const darkKeyChanger = document.querySelectorAll(".dark-mode use");
const nameChanger = document.querySelector(".name-changer");
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
// addEvent Listener
darkKey.forEach((allkey) => {
  allkey.addEventListener("click", () => {
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
  });
});
//Close Icon
closeIcon.addEventListener("click", () => {
  modal.style.transform = "translateX(349px)";
  overlay.style.display = "none";
});
hambergerMenu.addEventListener("click", () => {
  modal.style.transform = "translateX(0px)";
  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  modal.style.transform = "translateX(349px)";
});
