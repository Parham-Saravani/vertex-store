const emailRegex = /\w@[a-zA-z]+\.[a-zA-Z]+/;

const messageHandler = () => {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", validateInputs);
};

const validateInputs = (event) => {
  event.preventDefault();
  const {fullName , email , title , message} = takeInputsValues();
  if (fullName && emailRegex.test(email) && title && message) {
    sendMessage();
  } else {
    alert("دیتای وارد شده صحیح نمیباشد!!");
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
const sendMessage = () => {
  console.log("Message Send!");
};

export default messageHandler;
