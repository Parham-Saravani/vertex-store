import HomePage from "../../pages/home";
import ContactPage from "../../pages/contant";

const pageContent = document.querySelector(".page-content");

const PageContentHandler = (page) => {
  console.log(page);
  switch (page) {
    case "home":
      changePageContent(HomePage());
      break;

    case "products":
      break;

    case "contact":
      changePageContent(ContactPage());
      break;

    case "about":
      break;
  }
};

const changePageContent = (data) => {
  pageContent.innerHTML = "";
  pageContent.insertAdjacentHTML("afterbegin", data);

};

export default PageContentHandler;
