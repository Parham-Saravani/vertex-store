import loginChecker from "./loader/loader";
import { closeProfileContent } from "./header/profile";

const createCookie = (data) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  document.cookie = `auth-token = ${data};path:/;expires=${date}`;
};
const logoutHandler = () => {
  const cookies = document.cookie;
  const firstIndex = cookies.indexOf("=") + 1;
  const data = cookies.slice(firstIndex);
  const date = new Date();
  date.setDate(date.getDate() - 10);
  document.cookie = `auth-token = ${data}; path=/;expires=${date}`;
  loginChecker();
  closeProfileContent();
};
const isUserLogedIn = () => {
  const status = document.cookie;
  if (status) {
    return status.includes("auth-token");
  } else {
    return false;
  }
};
const takeUserToken = () => {
  const cookies = document.cookie;
  const firstIndex = cookies.indexOf("=") + 1;
  const token = cookies.slice(firstIndex);
  return token
};
export { createCookie, isUserLogedIn, logoutHandler , takeUserToken};
