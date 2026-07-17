import { createCookie } from "../cookie";
import { baseUrl } from "../http";
import { showToast } from "../toast/toast.js";
import loginChecker from "../loader/loader";
import changeProfileContent from "../header/profile.js";

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
    console.log(data);
    
    createCookie(data.token);
    loginChecker();
    changeProfileContent(data.user.imageUrl , data.user.username  , data.user.email)
  }
};
export default userLoginOperation;
