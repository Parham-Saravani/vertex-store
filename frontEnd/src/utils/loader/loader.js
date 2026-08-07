import { isUserLogedIn } from "../cookie";
const authenticationBtn = document.querySelectorAll(".authentication");
const profile = document.querySelector(".profile");
const mobileMenuUserData = document.querySelectorAll(".mobile-menu-user-data");

const loaderHandler = () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add("hidden");
  loader.classList.remove("flex");
  document.documentElement.classList.remove("overflow-hidden");
  loginChecker();
};
const loginChecker = () => {
  const logedInStatus = isUserLogedIn();
  if (logedInStatus) {
    authenticationBtn.forEach((item) => item.classList.add("hidden"));
    mobileMenuUserData.forEach((item) => item.classList.remove("hidden"));
    mobileMenuUserData.forEach((item) => item.classList.add("flex"));
    profile.classList.remove("hidden");
    profile.classList.add("flex");
  } else {
    authenticationBtn.forEach(item => item.classList.remove("hidden"));
    profile.classList.add("hidden");
  }
};
window.addEventListener("load", loaderHandler);
export default loginChecker;
