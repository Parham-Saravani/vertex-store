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

import createCharts from "./adminLayouts/chart.js";
const changePageContent = (page) => {
  switch (page) {
    case "adminDashboard":
      changePage(AdminProfilePage());
      createCharts();
      break;
    case "products":
      changePage(AdminProductsPage());
      break;
    case "category":
      changePage(AdminCategoryPage());
      break;
    case "brands":
      changePage(AdminBrandPage());
      break;
    case "orders":
      changePage();
      break;
    case "discount":
      changePage();
      break;
    case "comments":
      changePage();
      break;
    case "users":
      changePage();
      break;
    case "roles":
      changePage();
      break;
    case "tickets":
      changePage();
      break;
    case "setting":
      changePage();
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
