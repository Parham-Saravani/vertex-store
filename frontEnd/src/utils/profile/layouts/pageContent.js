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
// admin
import changeMainPageData from "../utils/admin/adminMainPage.js";
import takeAndCreateProducts from "../utils/admin/adminProducts.js";
import allOrdersHandler from "../utils/admin/adminOrderPage.js";
import allUsersHandler from "../utils/admin/adminUserPage.js";
import allTicketsHandler from "../utils/admin/adminTitcketPage.js";

// user
import { userMainPageData } from "../utils/user/userMainPage.js";
import userOrderHandler from "../utils/user/userOrderPage.js";
import userTicketHandler from "../utils/user/userTicketPage.js";

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
      allOrdersHandler();
      break;
    case "users":
      changePage(AdminUsersPage());
      allUsersHandler();
      break;
    case "tickets":
      changePage(AdminTicketsPage());
      allTicketsHandler();
      break;
    case "setting":
      changePage(AdminSettingsPage());
      break;
    case "userDashboard":
      changePage(UserProfilePage());
      userMainPageData();
      break;
    case "userOrders":
      changePage(UserOrderPage());
      userOrderHandler()
      break;
    case "userFavourites":
      changePage(UserFavouritePage());
      break;
    case "userTickets":
      changePage(UserTicketPage());
      userTicketHandler()
  }
};
const changePage = (content) => {
  const profilePageContainer = document.querySelector(".profile-content");
  profilePageContainer.innerHTML = "";
  profilePageContainer.insertAdjacentHTML("afterbegin", content);
};
export { changePageContent, changePage };
