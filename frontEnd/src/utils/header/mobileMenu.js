import { darkTheme, lightTheme, saveThemeInLocalStorage} from "../theme/theme.js";

const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileThemeToggleWrapper = document.querySelector(".theme-toggle-wrapper");
const mobileThemeToggle = document.querySelector("#theme-toggle");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const showMobileMenu = () => {
  menuBtn.classList.toggle("mobile-menu-open");
  mobileMenu.classList.toggle("right-0!");
  mobileMenuOverlay.classList.toggle('overlay-show')
  document.documentElement.classList.toggle('overflow-hidden')
};
const themeSwitching = () => {
  if (mobileThemeToggle.checked) {
    mobileThemeToggleWrapper.classList.toggle("theme-toggle-active");
    darkTheme();
    saveThemeInLocalStorage(true);
  } else {
    lightTheme();
    saveThemeInLocalStorage(false);
  }
};
const checkTheme = () => {
  const themeStatus = JSON.parse(localStorage.getItem("isDarkMode"));
  if (themeStatus) {
    mobileThemeToggle.checked = true;
    mobileThemeToggleWrapper.classList.add("theme-toggle-active");
  }
};
const closeMobileMenu = () => {
    console.log('fasdf');
    mobileMenu.classList.remove('right-0!')
    mobileMenuOverlay.classList.remove('overlay-show')
    document.documentElement.classList.remove('overflow-hidden')
}
mobileMenuOverlay.addEventListener('click', closeMobileMenu)
menuBtn.addEventListener("click", showMobileMenu);
mobileThemeToggleWrapper.addEventListener("click", themeSwitching);
window.addEventListener("DOMContentLoaded", checkTheme);
