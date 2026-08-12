const profileMobileMenuBtn = document.querySelector(".profile-mobile-menu-btn");
const profileUserDataBtn = document.querySelector(".profile-user-data-btn");
const userData = document.querySelector(".profile-mobile-user-data");
const profileMenu = document.querySelector(".profile-mobile-menu");
const profileMenuOverlay = document.querySelector(".profile-mobile-menu-overlay");
const mobileMenuThemeBtn = document.querySelector(".profile-mobile-menu-theme-toggle");

const showMobileMenu = () => {
  if (profileMobileMenuBtn.classList.contains("dark:bg-dark-card-hover")) {
    addOrRemoveActiveElementStyle(profileMobileMenuBtn, false);
    profileMenu.classList.remove("right-0!");
    disableOrEnablePageScrollbar(false);
    showOrHideMenuOverlay(false);
  } else {
    addOrRemoveActiveElementStyle(profileMobileMenuBtn, true);
    profileMenu.classList.add("right-0!");
    disableOrEnablePageScrollbar(true);
    showOrHideMenuOverlay(true);
    if (userData.classList.contains("h-20")) {
      addOrRemoveActiveElementStyle(profileUserDataBtn, false);
      userData.classList.remove("h-20");
    }
  }
};
const showUserData = () => {
  if (profileUserDataBtn.classList.contains("dark:bg-dark-card-hover")) {
    addOrRemoveActiveElementStyle(profileUserDataBtn, false);
    userData.classList.remove("h-20");
  } else {
    addOrRemoveActiveElementStyle(profileUserDataBtn, true);
    userData.classList.add("h-20");
  }
};
const hideMobileMenu = () => {
  profileMenu.classList.remove("right-0!");
  profileMobileMenuBtn.classList.remove("dark:bg-dark-card-hover");
  profileMobileMenuBtn.classList.remove("bg-light-card-hover");
  profileMenuOverlay.classList.add("opacity-0");
  profileMenuOverlay.classList.remove("z-100");
  profileMenuOverlay.classList.remove("max-md:fixed");
  disableOrEnablePageScrollbar(false);
};

const addOrRemoveActiveElementStyle = (element, status) => {
  if (status) {
    element.classList.add("dark:bg-dark-card-hover");
    element.classList.add("bg-light-card-hover");
  } else {
    element.classList.remove("dark:bg-dark-card-hover");
    element.classList.remove("bg-light-card-hover");
  }
};
const disableOrEnablePageScrollbar = (status) => {
  if (status) {
    document.documentElement.classList.add("overflow-hidden");
  } else {
    document.documentElement.classList.remove("overflow-hidden");
  }
};
const showOrHideMenuOverlay = (status) => {
  if (status) {
    profileMenuOverlay.classList.remove("opacity-0");
    profileMenuOverlay.classList.add("z-100");
    profileMenuOverlay.classList.add("max-lg:fixed");
  } else {
    profileMenuOverlay.classList.add("opacity-0");
    profileMenuOverlay.classList.remove("z-100");
    profileMenuOverlay.classList.remove("max-lg:fixed");
  }
};
profileMobileMenuBtn.addEventListener("click", showMobileMenu);
profileUserDataBtn.addEventListener("click", showUserData);
profileMenuOverlay.addEventListener("click", hideMobileMenu);
