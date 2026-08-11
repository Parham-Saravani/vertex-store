import { takeUserToken } from "../cookie";
import { apiRequestHandler } from "../http";
import changeHeaderContentHandler from "./layouts/headerLayout";
import changeSidebarContentHandler from "./layouts/sidebarLayout";
import { changePageContent } from "./layouts/pageContent";
import changeProfileImage from "./utils/changeProfileImage.js";
import sidebarHandler from "./sidebar.js";
import { saveDataInLocalStorage } from "../localstorage.js";

const takeUserData = async () => {
  const token = takeUserToken();
  try {
    const data = await apiRequestHandler("/api/users/", token);
    if (data) {
      hideLoader();
      const { role, username, email, imageUrl, createdAt } = data;
      changeHeaderContentHandler(role);
      changeSidebarContentHandler(role);
      sidebarHandler();
      changePageContent(role === "admin" ? "adminDashboard" : "userDashboard");
      changeProfileImage(username, imageUrl);
      if (role === "user") {        
        saveDataInLocalStorage('userData', {username,imageUrl,email,createdAt})
      }
    } else {
      throw new Error("dsfadfsf");
    }
  } catch (err) {
    console.log(err);
    
    addErrorMessage();
    hideLoader();
  }
};
const hideLoader = () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add("hidden");
  loader.classList.remove("flex");
};
const addErrorMessage = () => {
  document.body.innerHTML = "";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="fixed flex justify-center items-center inset-0">
      <div class="px-4 py-3 flex flex-col gap-2 items-center justify-content text-center rounded-md dark:bg-dark-section-bg bg-light-section-bg">
        <h2 class="text-sm dark:text-dark-text-primary text-light-text-primary">مشکلی در ارتباط با سرور پیش آمده</br>لطفا مجدد تلاش نمایید</h2>
        <button class="w-30 text-sm h-11 border border-transparent dark:hover:border-dark-card-border hover:border-light-card-border transition-colors duration-300 rounded-xl cursor-pointer dark:text-dark-text-primary text-light-text-primary refresh-page-btn">تلاش مجدد</button>
      </div>
    </div>
    `,
  );
  document.addEventListener("click", (event) => {
    const refreshBtn = event.target.closest(".refresh-page-btn");
    if (refreshBtn) {
      location.reload();
    }
  });
};
window.addEventListener("load", takeUserData);
