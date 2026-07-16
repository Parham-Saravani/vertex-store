import { clearSignupInputs, hideAuthForm } from "../auth/authPage";
const toast = document.querySelector(".toast");
const iconContainer = document.querySelector(".icon-container");
const toastMessage = document.querySelector(".toast-message");
const progress = document.querySelector(".progress");

const authErrors = {
  EMAIL_EXIST:"این ایمیل قبلاً ثبت شده است. لطفاً ایمیل دیگری وارد کنید.",
  USERNAME_TAKEN:"این نام کاربری قبلاً استفاده شده است. لطفاً نام دیگری انتخاب کنید.",
  INVALID_PASSWORD:"رمز عبور وارد شده صحیح نیست.",
  INVALID_EMAIL:"لطفاً یک ایمیل معتبر وارد کنید.",
  USER_CREATED:"ثبت‌نام با موفقیت انجام شد.",
  UNKNOWN_ERROR:"خطایی رخ داده است. لطفاً دوباره تلاش کنید.",
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
  console.log(message);
  if (message === "USER_CREATED") {
    addOrRemoveClassFromToast("success", "fail");
    toastMessage.textContent = authErrors.USER_CREATED;
    hideAuthForm();
  } else if (message === "USERNAME_TAKEN") {
    addOrRemoveClassFromToast("fail", "success");
    toastMessage.textContent = authErrors.USERNAME_TAKEN;
  } else if (message === "EMAIL_EXIST") {
    addOrRemoveClassFromToast("fail", "success");
    toastMessage.textContent = authErrors.EMAIL_EXIST;
  } else {
    addOrRemoveClassFromToast("fail", "success");
    toastMessage.textContent = authErrors.UKNOWN_ERROR;
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
