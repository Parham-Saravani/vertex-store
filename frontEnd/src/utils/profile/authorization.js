import { takeUserToken } from "../cookie";
import { apiRequestHandler } from "../http";
import changeHeaderContentHandler from "./layouts/headerLayout";
import changeSidebarContentHandler from "./layouts/sidebarLayout";
import { changePageContent } from "./layouts/pageContent";
import changeUserData from "./changeUserData.js";
import sidebarHandler from "./sidebar.js";
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
      changeUserData(username, role, email, createdAt, imageUrl);
    } else {
      throw new Error("dsfadfsf");
    }
  } catch (err) {
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
};
window.addEventListener("load", takeUserData);
