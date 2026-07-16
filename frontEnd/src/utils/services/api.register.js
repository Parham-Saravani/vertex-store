import { createCookie } from "../cookie";
import { baseUrl } from "../http";
import { showToast } from "../toast/toast.js";
import loginChecker from "../loader/loader";

const registerNewUser = async (username, email, password) => {
  const response = await fetch(`${baseUrl}/api/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  showToast(data.message);
  if (data.message === "USER_CREATED") {
    createCookie(data.token);
    loginChecker();
  }
};
export default registerNewUser;
