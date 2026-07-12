import HomePage from "../../pages/home";
import ContactPage from "../../pages/contant";
import ProductsPage from "../../pages/products";
import AboutPage from "../../pages/about";

const pageContent = document.querySelector(".page-content");

const PageContentHandler = (page) => {
  console.log(page);
  switch (page) {
    case "home":
      changePageContent(HomePage());
      break;

    case "products":
      changePageContent(ProductsPage());
      break;

    case "contact":
      changePageContent(ContactPage());
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
