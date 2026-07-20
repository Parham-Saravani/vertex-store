import AuthenticationPage from "../../pages/auth.js";
import registerNewUser from "../services/api.register.js";
import userLoginOperation from "../services/api.login.js";

const authBtn = document.querySelector(".auth-btn");

const showAuthContent = () => {
  document.documentElement.classList.add("overflow-hidden");
  document.body.insertAdjacentHTML("afterbegin", AuthenticationPage());
  const authForm = document.querySelector(".auth-form");
  authForm.addEventListener("click", authenticationFormClickHandler);
  showOrHidePasswordHandler();
  const authFormBackground = document.querySelector(".auth-background");
  authFormBackground.addEventListener("click", authFormCloser, {
    capture: true,
  });
};
const showOrHidePasswordHandler = () => {
  const showPasswordBtn = document.querySelectorAll(".show-password");
  showPasswordBtn.forEach((item) =>
    item.addEventListener("click", showOrHidePassword),
  );
};
const showOrHidePassword = (event) => {
  const input = event.currentTarget.previousElementSibling;
  if (input.type === "password") {
    input.type = "text";
    event.target.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    event.target.className = "fa-solid fa-eye";
  }
};

const authFormCloser = (event) => {
  const authFormBackground = event.target.closest(".auth-form");
  if (!authFormBackground) {
    hideAuthForm();
  }
};
const hideAuthForm = () => {
  document.documentElement.classList.remove("overflow-hidden");
  const authFormTotal = document.querySelector(".auth-background");
  authFormTotal.classList.add("animate-fadeOut");
  setTimeout(() => {
    authFormTotal.remove();
  }, 700);
};
//! switching between Signup / Login / Forgot password
const authenticationFormClickHandler = (event) => {
  const formOperation = event.target.closest(".auth-current-content");
  const signupBtn = event.target.closest(".signup-btn");
  const loginBtn = event.target.closest(".login-btn");
  if (formOperation) {
    const currentActiveItem = event.target.closest(".auth-active");
    if (!currentActiveItem) {
      document
        .querySelector(".auth-current-content.auth-active")
        .classList.remove("auth-active");
      const clickedItem = event.target;
      clickedItem.classList.add("auth-active");
      changeAuthContent(clickedItem.dataset.page);
    }
  }
  if (signupBtn) {
    signupInputsValidator(event);
  }
  if (loginBtn) {
    loginInputsValidator(event);
  }
};
const changeAuthContent = (operation) => {
  const signupContent = document.querySelector(".signup-content");
  const loginContent = document.querySelector(".login-content");
  switch (operation) {
    case "login":
      loginContent.classList.remove("hidden");
      signupContent.classList.add("hidden");
      break;
    case "signup":
      loginContent.classList.add("hidden");
      signupContent.classList.remove("hidden");
      break;
  }
};

const signupInputsValidator = (event) => {
  event.preventDefault();
  const { username, email, password, confirmPassword } = getSignupValues();
  const { usernameAlert, emailAlert, passwordAlert, confirmPasswordAlert } =
    getSignupAlerts();
  let isValid = true;
  const isUsernameValid = usernameValidator(username, usernameAlert);
  const isEmailValid = emailValidator(email, emailAlert);
  const isPasswordValid = passwordValidator(password, passwordAlert);
  const isPasswordSame = confirmPasswordValidator(
    password,
    confirmPassword,
    confirmPasswordAlert,
  );
  isValid =
    isUsernameValid && isEmailValid && isPasswordValid && isPasswordSame;
  if (isValid) {
    registerNewUser(username, email, password);
  }
};
const getSignupValues = () => {
  const usernameInput = document.querySelector(".signup-username-input");
  const emailInput = document.querySelector(".signup-email-input");
  const passwordInput = document.querySelector(".signup-password-input");
  const confirmPasswordInput = document.querySelector(
    ".signup-confirm-password-input",
  );

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  return { username, email, password, confirmPassword };
};
const getSignupAlerts = () => {
  const usernameAlert = document.querySelector(".signup-username-alert");
  const emailAlert = document.querySelector(".signup-email-alert");
  const passwordAlert = document.querySelector(".signup-password-alert");
  const confirmPasswordAlert = document.querySelector(
    ".signup-confirm-password-alert",
  );

  return { usernameAlert, emailAlert, passwordAlert, confirmPasswordAlert };
};

const loginInputsValidator = (event) => {
  event.preventDefault();
  const { email, password } = getLoginValues();
  const { emailAlert, passwordAlert } = getLoginAlerts();
  let isValid = true;
  const isEmailValid = emailValidator(email, emailAlert);
  const isPasswordValid = passwordValidator(password, passwordAlert);
  isValid = isEmailValid && isPasswordValid;
  if (isValid) {
    userLoginOperation(email, password);
  }
};
const getLoginValues = () => {
  const emailInput = document.querySelector(".login-email");
  const passwordInput = document.querySelector(".login-passwor");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  return { email, password };
};
const getLoginAlerts = () => {
  const emailAlert = document.querySelector(".login-email-alert");
  const passwordAlert = document.querySelector(".login-password-alert");

  return { emailAlert, passwordAlert };
};

//! clear signup and login Inputs
const clearSignupInputs = () => {
  const usernameInput = document.querySelector(".signup-username-input");
  const emailInput = document.querySelector(".signup-email-input");
  const passwordInput = document.querySelector(".signup-password-input");
  const confirmPasswordInput = document.querySelector(
    ".signup-confirm-password-input",
  );
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
};
const clearLoginInputs = () => {
  const emailInput = document.querySelector(".login-email");
  const passwordInput = document.querySelector(".login-passwor");
  emailInput.value = "";
  passwordInput.value = "";
};

//! show or hide alerts for inputs
const showAlert = (element) => {
  element.classList.remove("hidden");
};
const hideAlert = (element) => {
  element.classList.add("hidden");
};

//! inputs validator
const usernameValidator = (username, usernameAlert) => {
  if (!username) {
    showAlert(usernameAlert);
    return false;
  } else {
    hideAlert(usernameAlert);
    return true;
  }
};
const emailValidator = (email, emailAlert) => {
  const emailRegex = /\w@[a-zA-Z]+\.[a-zA-z]/;

  if (!emailRegex.test(email)) {
    showAlert(emailAlert);
    return false;
  } else {
    hideAlert(emailAlert);
    return true;
  }
};
const passwordValidator = (password, passwordAlert) => {
  if (password.length < 8) {
    showAlert(passwordAlert);
    return false;
  } else {
    hideAlert(passwordAlert);
    return true;
  }
};
const confirmPasswordValidator = (
  password,
  confirmPassword,
  confirmPasswordAlert,
) => {
  if (password !== confirmPassword) {
    showAlert(confirmPasswordAlert);
    return false;
  } else {
    hideAlert(confirmPasswordAlert);
    return true;
  }
};

authBtn.addEventListener("click", showAuthContent);
export { clearSignupInputs, clearLoginInputs, hideAuthForm };
