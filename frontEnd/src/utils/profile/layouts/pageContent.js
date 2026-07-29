import UserProfilePage from "./userLayouts/mainPage.js";
import UserTicketPage from "./userLayouts/ticketPage.js";
import UserOrderPage from "./userLayouts/orderPage.js";
import UserFavouritePage from "./userLayouts/favouritePage.js"
  
const changePageContent = (page) => {
  switch (page) {
    case "adminDashboard":
        changePage()
      break;
    case "products":
        changePage()
      break;
    case "sort":
        changePage()
      break;
    case "brands":
        changePage()
      break;
    case "orders":
        changePage()
      break;
    case "discount":
        changePage()
      break;
    case "comments":
        changePage()
      break;
    case "users":
        changePage()
      break;
    case "roles":
        changePage()
      break;
    case "tickets":
        changePage()
      break;
    case "setting":
        changePage()
      break;
    case "userDashboard":
      changePage(UserProfilePage());
      break;
    case "userOrders":
      changePage(UserOrderPage());
      break;
    case "userFavourites":
      changePage(FavouritePage());
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
export default changePageContent;
