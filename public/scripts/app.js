"use strict";
const darkKey = document.querySelector(".dark-mode");
const darkKeyChanger = document.querySelector(".dark-mode use");
// Run For If clinet is true or false in he/she localstorage
if (localStorage.getItem("dark-mode") === null) {
  localStorage.setItem("dark-mode", "false");
}
if (localStorage.getItem("dark-mode") === "true") {
  document.documentElement.className = "dark";
  darkKeyChanger.setAttribute("href", "#moon");
} else {
  document.documentElement.className = "light";
  localStorage.setItem("dark-mode", "false");
  darkKeyChanger.setAttribute("href", "#sun");
}
//
darkKey.addEventListener("click", () => {
  if (localStorage.getItem("dark-mode") === "false") {
    document.documentElement.className = "dark";
    darkKeyChanger.setAttribute("href", "#moon");

    localStorage.setItem("dark-mode", "true");
  } else {
    document.documentElement.className = "light";
    localStorage.setItem("dark-mode", "false");
    darkKeyChanger.setAttribute("href", "#sun");
  }
});
