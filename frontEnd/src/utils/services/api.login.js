import { createCookie } from "../cookie";
import { baseUrl } from "../http";
import { showToast } from "../toast/toast.js";
import loginChecker from "../loader/loader";
import changeProfileContent from "../header/profile.js";
import {saveDataInLocalStorage} from "../localstorage.js";

const userLoginOperation = async (email, password) => {
  const response = await fetch(`${baseUrl}/api/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  showToast(data.message);
  if (data.message === "LOGIN_SUCCESSFULLY") {
    createCookie(data.token);
    loginChecker();
    saveDataInLocalStorage('userData',{ ...data.user });
    changeProfileContent();
  }
};
export default userLoginOperation;