import { isUserLogedIn, takeUserToken } from "../cookie";
import { showToast } from "../toast/toast";
import Message from "../class/message";
import { baseUrl } from "../http";

const emailRegex = /\w@[a-zA-z]+\.[a-zA-Z]+/;

const messageHandler = () => {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", validateInputs);
};

const validateInputs = (event) => {
  event.preventDefault();
  const isUserLogin = isUserLogedIn();
  if (isUserLogin) {
    const { fullName, email, title, message } = takeInputsValues();
    if (fullName && emailRegex.test(email) && title && message) {
      sendMessageHandler(fullName, email, title, message);
    } else {
      alert("دیتای وارد شده صحیح نمیباشد!!");
    }
  } else {
    showToast("NEED_TO_LOGIN");
  }
};
const takeInputsValues = () => {
  const fullnameInput = document.querySelector(".fullname-input");
  const emailInput = document.querySelector(".email-input");
  const titleInput = document.querySelector(".title-input");
  const messageInput = document.querySelector(".message-input");

  const fullName = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const title = titleInput.value.trim();
  const message = messageInput.value.trim();

  return { fullName, email, title, message };
};
const sendMessageHandler = async (fullname, email, title, message) => {
  const token = takeUserToken();
  const newMessage = new Message(token, fullname, email, title, message);
  const data = await sendMessage(newMessage);
  console.log(data);
  showToast(data.message);
  clearInputs();
};
const clearInputs = () => {
  const fullnameInput = document.querySelector(".fullname-input");
  const emailInput = document.querySelector(".email-input");
  const titleInput = document.querySelector(".title-input");
  const messageInput = document.querySelector(".message-input");
  fullnameInput.value = "";
  emailInput.value = "";
  titleInput.value = "";
  messageInput.value = "";
};
const sendMessage = async (message) => {
  const response = await fetch(`${baseUrl}/api/messages`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(message),
  });
  return await response.json();
};
export default messageHandler;
