import HomePage from "../../pages/home";
import ContactPage from "../../pages/contant";
import ProductsPage from "../../pages/products";
import AboutPage from "../../pages/about";
import ProductsSkeletonLoader from "../../pages/products-skeleton-loader.js";
import createPriceSlider from "../product/price";
import { apiRequestHandler } from "../http.js";
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
      changePageContent(ProductsSkeletonLoader());
      const products = await apiRequestHandler("/api/products");
      changePageContent(ProductsPage());
      createPriceSlider();
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
