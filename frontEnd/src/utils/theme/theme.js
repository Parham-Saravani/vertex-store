const darkThemeBtn = document.querySelector(".dark-theme-btn");
const lightThemeBtn = document.querySelector(".light-theme-btn");

const themeHandler = () => {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) ?? true;
  if (isDarkMode) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const darkTheme = () => {
  addAndRemovingClasses(true, lightThemeBtn, darkThemeBtn);
};
const lightTheme = () => {
  addAndRemovingClasses(false, darkThemeBtn, lightThemeBtn);
};

const addAndRemovingClasses = (isDarkMode, active, hidden) => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  active.classList.remove("hidden");
  active.classList.add("flex");
  hidden.classList.add("hidden");
  hidden.classList.remove("flex");
  saveThemeInLocalStorage(isDarkMode);
};

const saveThemeInLocalStorage = (status) => {
  localStorage.setItem("isDarkMode", status);
};

window.addEventListener("DOMContentLoaded", themeHandler);
darkThemeBtn.addEventListener("click", darkTheme);
lightThemeBtn.addEventListener("click", lightTheme);
