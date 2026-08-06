import defaultProfileImage from "../../assets/images/profile/default-profile.jpg";
import { getDataFromLocalStorage } from "../localstorage";
import { logoutHandler } from "../cookie";

const profileBtn = document.querySelector(".profile-btn");
const profileBackground = document.querySelector(".profile-background");
const basketContent = document.querySelector(".profile-menu");
const profileImage = document.querySelectorAll(".profile-image");
const profileUsername = document.querySelectorAll(".profile-username");
const profileEmail = document.querySelectorAll(".profile-email");
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
      profileImage.forEach((item) => item.setAttribute("src", `${imageUrl}`));
    } else {
      profileImage.forEach((item) =>
        item.setAttribute("src", `${defaultProfileImage}`),
      );
    }
    profileUsername.forEach((item) => (item.textContent = username));
    profileEmail.forEach((item) => (item.textContent = email));
  }
};
const logoutFromAccount = () => {
  logoutHandler();
  loginChecker();
  closeProfileContent();
};
profileBtn?.addEventListener("click", showOrHideBasket);
profileBackground?.addEventListener("click", closeProfileContent);
window.addEventListener("load", changeProfileContent);
logOutBtn?.addEventListener("click", logoutFromAccount);
export { changeProfileContent, closeProfileContent };
