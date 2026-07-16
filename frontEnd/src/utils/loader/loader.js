import { isUserLogedIn } from "../cookie";
const authenticationBtn = document.querySelector(".authentication");
const profile = document.querySelector(".profile");

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
    authenticationBtn.classList.add("hidden");
    profile.classList.remove("hidden");
    profile.classList.add("flex");
  } else {
    authenticationBtn.classList.remove("hidden");
    profile.classList.add("hidden");
  }
};
window.addEventListener("load", loaderHandler);
export default loginChecker;