import {
  clearSignupInputs,
  clearLoginInputs,
  hideAuthForm,
} from "../auth/authPage";

const toast = document.querySelector(".toast");
const iconContainer = document.querySelector(".icon-container");
const toastMessage = document.querySelector(".toast-message");
const progress = document.querySelector(".progress");

const authErrors = {
  EMAIL_EXIST: "این ایمیل قبلاً ثبت شده است. لطفاً ایمیل دیگری وارد کنید.",
  USERNAME_TAKEN:
    "این نام کاربری قبلاً استفاده شده است. لطفاً نام دیگری انتخاب کنید.",
  INVALID_PASSWORD: "رمز عبور وارد شده صحیح نیست.",
  INVALID_EMAIL: "لطفاً یک ایمیل معتبر وارد کنید.",
  USER_CREATED: "ثبت‌نام با موفقیت انجام شد.",
  UNKNOWN_ERROR: "خطایی رخ داده است. لطفاً دوباره تلاش کنید.",
  INVALID_CREDENTIALS: "ایمیل یا رمز عبور اشتباه است.",
  LOGIN_SUCCESS: "ورود با موفقیت انجام شد.",
};

const showToast = (message) => {
  toast.classList.remove("hide");
  changeMessage(message);
  toastProgress();
};
const hideToast = () => {
  toast.classList.add("hide");
};

const changeMessage = (message) => {
  switch (message) {
    case "USER_CREATED":
      toastStatus("success", "fail", authErrors.USER_CREATED, true);
      break;
    case "USERNAME_TAKEN":
      toastStatus("fail", "success", authErrors.USERNAME_TAKEN);
      break;
    case "EMAIL_EXIST":
      toastStatus("fail", "success", authErrors.EMAIL_EXIST);
      break;
    case "LOGIN_SUCCESSFULLY":
      toastStatus("success", "fail", authErrors.LOGIN_SUCCESS, true);
      break;
    case "INVALID_CREDENTIALS":
      toastStatus("fail", "success", authErrors.INVALID_CREDENTIALS);
      clearLoginInputs()
      break;
    default:
      toastStatus("fail", "success", authErrors.UNKNOWN_ERROR);
  }
};
const toastStatus = (
  firstClass,
  secondClass,
  message,
  closeAuthPage = false,
) => {
  addOrRemoveClassFromToast(firstClass, secondClass);
  toastMessage.textContent = message;
  if (closeAuthPage) {
    hideAuthForm();
  }
};

const addOrRemoveClassFromToast = (classToAdd, classToRemove) => {
  toast.classList.add(classToAdd);
  toast.classList.remove(classToRemove);
};
const toastProgress = () => {
  let number = 0;
  const progressInterval = setInterval(() => {
    number++;
    if (number === 100) {
      clearInterval(progressInterval);
      hideToast();
      progress.style.width = "0%";
    }
    progress.style.width = `${number}%`;
  }, 40);
};
export { showToast, hideToast, toast };