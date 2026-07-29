const logOutBtn = document.querySelector(".logout-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const modalConfirm = document.querySelector(".modal-confirm");
const logOut = () => {
  const cookies = document.cookie;
  const firstIndex = cookies.indexOf("=") + 1;
  const data = cookies.slice(firstIndex);
  const date = new Date();
  date.setDate(date.getDate() - 8);
  document.cookie = `auth-token = ${data}; path=/;expires=${date}`;
  location.replace("/");
};
const showModal = () => {
  modal.classList.add("animate-fadeIn");
  modal.classList.remove("animate-fadeOut");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};
const hideModal = () => {
  modal.classList.remove("animate-fadeIn");
  modal.classList.add("animate-fadeOut");
  setTimeout(() => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }, 700);
};
closeModal.addEventListener("click", hideModal);
logOutBtn.addEventListener("click", showModal);
modalConfirm.addEventListener("click", logOut);
