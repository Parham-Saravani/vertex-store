//! user components
import UserProfilePage from "./userLayouts/mainPage.js";
import UserTicketPage from "./userLayouts/ticketPage.js";
import UserOrderPage from "./userLayouts/orderPage.js";
import UserFavouritePage from "./userLayouts/favouritePage.js";
//! admin components
import AdminProfilePage from "./adminLayouts/mainPage.js";
import AdminProductsPage from "./adminLayouts/productPage.js";
import AdminCategoryPage from "./adminLayouts/categoryPage.js";
import AdminBrandPage from "./adminLayouts/brandPage.js";
import AdminOrdersPage from "./adminLayouts/ordersPage.js";
import AdminDiscountPage from "./adminLayouts/discountPage.js";
import AdminCommentsPage from "./adminLayouts/commentsPage.js";
import AdminUsersPage from "./adminLayouts/userPage.js";
import AdminTicketsPage from "./adminLayouts/ticketPage.js";
import AdminSettingsPage from "./adminLayouts/settingPage.js";

import createCharts from "./adminLayouts/chart.js";

//! utilities
import takeAndCreateProducts from "../utils/admin/adminProducts.js";

const changePageContent = (page) => {
  switch (page) {
    case "adminDashboard":
      changePage(AdminProfilePage());
      createCharts();
      break;
    case "products":
      changePage(AdminProductsPage());
      takeAndCreateProducts();
      break;
    case "category":
      changePage(AdminCategoryPage());
      break;
    case "brands":
      changePage(AdminBrandPage());
      break;
    case "orders":
      changePage(AdminOrdersPage());
      break;
    case "discount":
      changePage(AdminDiscountPage());
      break;
    case "comments":
      changePage(AdminCommentsPage());
      break;
    case "users":
      changePage(AdminUsersPage());
      break;
    case "tickets":
      changePage(AdminTicketsPage());
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
