//! user components
import UserProfilePage from "./userLayouts/mainPage.js";
import UserTicketPage from "./userLayouts/ticketPage.js";
import UserOrderPage from "./userLayouts/orderPage.js";
import UserFavouritePage from "./userLayouts/favouritePage.js";
//! admin components
import AdminProfilePage from "./adminLayouts/mainPage.js";
import AdminProductsPage from "./adminLayouts/productPage.js";
import AdminOrdersPage from "./adminLayouts/ordersPage.js";
import AdminUsersPage from "./adminLayouts/userPage.js";
import AdminTicketsPage from "./adminLayouts/ticketPage.js";
import AdminSettingsPage from "./adminLayouts/settingPage.js";

//! utilities
import changeMainPageData from "../utils/admin/adminMainPage.js";
import takeAndCreateProducts from "../utils/admin/adminProducts.js";
import allOrdersHandler from "../utils/admin/adminOrderPage.js";
import allUsersHandler from "../utils/admin/adminUserPage.js";

import allTicketsHandler from "../utils/admin/adminTitcketPage.js";
const changePageContent = (page) => {
  switch (page) {
    case "adminDashboard":
      changePage(AdminProfilePage());
      changeMainPageData();
      break;
    case "products":
      changePage(AdminProductsPage());
      takeAndCreateProducts();
      break;
    case "orders":
      changePage(AdminOrdersPage());
      allOrdersHandler()
      break;
    case "users":
      changePage(AdminUsersPage());
      allUsersHandler()
      break;
    case "tickets":
      changePage(AdminTicketsPage());
      allTicketsHandler()
      break;
    case "setting":
      changePage(AdminSettingsPage());
      break;
    case "userDashboard":
      changePage(UserProfilePage());
      break;
    case "userOrders":
      changePage(UserOrderPage());
      break;
    case "userFavourites":
      changePage(UserFavouritePage());
      break;
    case "userTickets":
      changePage(UserTicketPage());
  }
};
const changePage = (content) => {
  const profilePageContainer = document.querySelector(".profile-content");
  profilePageContainer.innerHTML = "";
  profilePageContainer.insertAdjacentHTML("afterbegin", content);
};
export { changePageContent, changePage };
