const profileMobileMenuBtn = document.querySelector(".profile-mobile-menu-btn");
const profileUserDataBtn = document.querySelector(".profile-user-data-btn");
const userData = document.querySelector(".profile-mobile-user-data");
const profileMenu = document.querySelector(".profile-mobile-menu");
const profileMenuOverlay = document.querySelector(".profile-mobile-menu-overlay");
const mobileMenuThemeBtn = document.querySelector('.profile-mobile-menu-theme-toggle')

const showMobileMenu = () => {
  if (profileMobileMenuBtn.classList.contains("dark:bg-dark-card-hover")) {
    profileMobileMenuBtn.classList.remove("dark:bg-dark-card-hover");
    profileMobileMenuBtn.classList.remove("bg-light-card-hover");
    profileMenu.classList.remove("right-0!");
    document.documentElement.classList.remove("overflow-hidden");
    profileMenuOverlay.classList.add("opacity-0");
    profileMenuOverlay.classList.remove("z-100");
    profileMenuOverlay.classList.remove("fixed");
  } else {
    profileMobileMenuBtn.classList.add("dark:bg-dark-card-hover");
    profileMobileMenuBtn.classList.add("bg-light-card-hover");
    profileMenu.classList.add("right-0!");
    document.documentElement.classList.add("overflow-hidden");
    profileMenuOverlay.classList.remove("opacity-0");
    profileMenuOverlay.classList.add("z-100");
    profileMenuOverlay.classList.add("fixed");
    if (userData.classList.contains("h-20")) {
      profileUserDataBtn.classList.remove("dark:bg-dark-card-hover");
      profileUserDataBtn.classList.remove("bg-light-card-hover");
      userData.classList.remove("h-20");
    }
  }
};
const showUserData = () => {
  if (profileUserDataBtn.classList.contains("dark:bg-dark-card-hover")) {
    profileUserDataBtn.classList.remove("dark:bg-dark-card-hover");
    profileUserDataBtn.classList.remove("bg-light-card-hover");
    userData.classList.remove("h-20");
  } else {
    profileUserDataBtn.classList.add("dark:bg-dark-card-hover");
    profileUserDataBtn.classList.add("bg-light-card-hover");
    userData.classList.add("h-20");
  }
};
const hideMobileMenu = () => {
  profileMenu.classList.remove("right-0!");
  profileMobileMenuBtn.classList.remove("dark:bg-dark-card-hover");
  profileMobileMenuBtn.classList.remove("bg-light-card-hover");
  profileMenuOverlay.classList.add("opacity-0");
  profileMenuOverlay.classList.remove("z-100");
  profileMenuOverlay.classList.remove("fixed");
  document.documentElement.classList.remove("overflow-hidden");
};
const changeTheme = () => {
 if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark')
}else{
     document.documentElement.classList.add('dark')
 }
}
profileMobileMenuBtn.addEventListener("click", showMobileMenu);
profileUserDataBtn.addEventListener("click", showUserData);
profileMenuOverlay.addEventListener("click", hideMobileMenu);
mobileMenuThemeBtn.addEventListener('click', changeTheme)