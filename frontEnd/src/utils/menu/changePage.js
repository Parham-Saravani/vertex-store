import HomePage from "../../pages/home.js";
import ContactPage from "../../pages/contact.js";
import ProductsPage from "../../pages/products.js";
import AboutPage from "../../pages/about.js";
import ProductsSkeletonLoader from "../../pages/products-skeleton-loader.js";
import createPriceSlider from "../product/price.js";
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
      productsHandler(products , true);
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
