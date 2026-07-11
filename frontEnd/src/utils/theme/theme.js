const darkThemeBtn = document.querySelector(".dark-theme-btn");
const lightThemeBtn = document.querySelector(".light-theme-btn");

const themeHandler = () => {
  const isDarkMode = localStorage.getItem("isDarkMode") || true;
  if (isDarkMode) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const darkTheme = () => {
  document.documentElement.classList.add("dark");
  lightThemeBtn.classList.remove("hidden");
  darkThemeBtn.classList.add("hidden");
  saveThemeInLocalStorage(true);
};
const lightTheme = () => {
  document.documentElement.classList.remove("dark");
  darkThemeBtn.classList.remove("hidden");
  lightThemeBtn.classList.add("hidden");
  saveThemeInLocalStorage(false);
};
const saveThemeInLocalStorage = (status) => {
  localStorage.setItem("isDarkMode", status);
};

window.addEventListener('DOMContentLoaded', themeHandler)
darkThemeBtn.addEventListener("click", darkTheme);
lightThemeBtn.addEventListener("click", lightTheme);
