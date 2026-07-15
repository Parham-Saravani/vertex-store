import HomePage from "../../pages/home";
import ContactPage from "../../pages/contant";
import ProductsPage from "../../pages/products";
import AboutPage from "../../pages/about";
import createPriceSlider from "../product/price";
import apiRequest from "../http.js";
import { productsHandler } from "../product/createProducts.js";
import messageHandler from "../message/message.js";
import sortHandler from "../product/sort.js";
import bannerBtnHandler from "../home/home.js";

const pageContent = document.querySelector(".page-content");

const PageContentHandler = async (page) => {
  switch (page) {
    case "home":
      changePageContent(HomePage());
      bannerBtnHandler();
      break;

    case "products":
      changePageContent(ProductsPage());
      createPriceSlider();
      const products = await apiRequest("/api/products");
      productsHandler(products);
      sortHandler();
      break;

    case "contact":
      changePageContent(ContactPage());
      messageHandler();
      break;

    case "about":
      changePageContent(AboutPage());
      break;
  }
};

const changePageContent = (content) => {
  pageContent.innerHTML = "";
  pageContent.insertAdjacentHTML("afterbegin", content);
};

export default PageContentHandler;
