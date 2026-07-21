import defaultProfileImage from "../../assets/images/profile/default-profile.jpg";
import { getDataFromLocalStorage } from "../localstorage";
import { logoutHandler } from "../cookie";

const profileBtn = document.querySelector(".profile-btn");
const profileBackground = document.querySelector(".profile-background");
const basketContent = document.querySelector(".profile-menu");
const profileImage = document.querySelector(".profile-image");
const profileUsername = document.querySelector(".profile-username");
const profileEmail = document.querySelector(".profile-email");
const logOutBtn = document.querySelector(".logout-btn");

let isProfileMenuOpen = false;

const showOrHideBasket = () => {
  if (!isProfileMenuOpen) {
    isProfileMenuOpen = true;
    document.documentElement.classList.add("overflow-hidden");
    profileBtn.classList.add("z-30");
    profileBackground.classList.remove("hidden");
    basketContent.classList.remove("hidden");
  } else {
    isProfileMenuOpen = false;
    document.documentElement.classList.remove("overflow-hidden");
    profileBtn.classList.remove("z-30");
    profileBackground.classList.add("hidden");
    basketContent.classList.add("hidden");
  }
};
const closeProfileContent = () => {
  if (isProfileMenuOpen) {
    isProfileMenuOpen = false;
    document.documentElement.classList.remove("overflow-hidden");
    profileBtn.classList.remove("z-30");
    profileBackground.classList.add("hidden");
    basketContent.classList.add("hidden");
  }
};

const changeProfileContent = () => {
  const userData = getDataFromLocalStorage("userData");
  if (userData) {
    const { imageUrl, username, email } = userData;
    if (imageUrl) {
      profileImage.setAttribute("src", `${imageUrl}`);
    } else {
      profileImage.setAttribute("src", `${defaultProfileImage}`);
    }
    profileUsername.textContent = username;
    profileEmail.textContent = email;
  }
};
const logoutFromAccount = () => {
  logoutHandler();
};
profileBtn.addEventListener("click", showOrHideBasket);
profileBackground.addEventListener("click", closeProfileContent);
window.addEventListener("load", changeProfileContent);
logOutBtn.addEventListener("click", logoutFromAccount);
export { changeProfileContent, closeProfileContent };
