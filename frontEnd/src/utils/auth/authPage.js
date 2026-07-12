import AuthenticationPage from "../../pages/auth.js";
const authBtn = document.querySelector(".auth-btn");

const showAuthContent = () => {
  console.log("fasd");
  document.body.insertAdjacentHTML("afterbegin", AuthenticationPage());
  const authForm = document.querySelector(".auth-form");
  authForm.addEventListener("click", authenticationFormClickHandler);

  const authFormBackground = document.querySelector(".auth-background");
  authFormBackground.addEventListener("click", hideAuthForm, { capture: true });
};

const hideAuthForm = () => {
  const authFormBackground = event.target.closest(".auth-form");
  if (!authFormBackground) {
    const authFormTotal = document.querySelector(".auth-background");
    authFormTotal.classList.add("animate-fadeOut");
    setTimeout(() => {
      authFormTotal.remove();
    }, 700);
  }
};
//! switching between Signup / Login / Forgot password
const authenticationFormClickHandler = (event) => {
  const formOperation = event.target.closest(".auth-current-content");
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
};
const changeAuthContent = (operation) => {
  const signupContent = document.querySelector(".signup-content");
  const loginContent = document.querySelector(".login-content");
  console.log(signupContent);
  console.log(loginContent);

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

authBtn.addEventListener("click", showAuthContent);
