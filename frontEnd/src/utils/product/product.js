import { apiRequestHandler } from "../http";
import ProductPage from "../../pages/product";
import ProductLoader from "../../pages/product-skeleton-loader";
import { addToCardHandler } from "./card";
import { isUserLogedIn } from "../cookie";
import { showToast } from "../toast/toast";

const openProductPageHandler = async (event) => {
  const product = event.target.closest(".product");
  if (product) {
    const productID = product.dataset.id;
    showProductPageLoader();
    const data = await apiRequestHandler("/api/products/", `${productID}`);
    shwoProductDetails(data);
    const navigationTabs = document.querySelector(".product-tabs");
    navigationTabs.addEventListener("click", navigateInTabs);
    addProductToBasketHandler();
  }
};

const addProductToBasketHandler = () => {
  const addProductToBasketFavouritesContainer = document.querySelector(
    ".add-to-basket-favourite-container",
  );
  addProductToBasketFavouritesContainer.addEventListener(
    "click",
    findProductByID,
  );
};
const findProductByID = (event) => {
  const addToBasketBtn = event.target.closest(".add-to-card");
  const addToFavouritesBtn = event.target.closest(".add-to-favourites");
  if (addToBasketBtn) {
    const checkIsUserLogedIn = isUserLogedIn();
    if(checkIsUserLogedIn){
      addToCardHandler(addToBasketBtn.dataset.id);
    }else{
      showToast('NEED_TO_LOGIN')
    }
  }
  if (addToFavouritesBtn) {
  }
};
const showProductPageLoader = (data) => {
  document.body.insertAdjacentHTML("afterbegin", ProductLoader());
  document.documentElement.classList.add("overflow-hidden");
};
const shwoProductDetails = (data) => {
  const productContainer = document.querySelector(".product-content");
  productContainer.innerHTML = "";
  productContainer.insertAdjacentHTML("afterbegin", ProductPage());
  const productPageBackground = document.querySelector(".product-container");
  productPageBackground.addEventListener("click", closeProductPage);
  changeProductPageContent(data);
};

const navigateInTabs = (event) => {
  const tabs = event.target.closest(".product-tab");
  const currtabsentActiveTab = event.target.classList.contains(
    "active-product-page",
  );
  if (tabs && !currtabsentActiveTab) {
    addAndRemoveActiveTabClass(event.target);
    changeProductNavigationContent(tabs.dataset.content);
  }
};
const addAndRemoveActiveTabClass = (target) => {
  document
    .querySelector(".product-tab.active-product-page")
    .classList.remove("active-product-page");
  target.classList.add("active-product-page");
};
//Todo
const changeProductNavigationContent = (content) => {};

const closeProductPage = (event) => {
  const background = document.querySelector(".product-container");
  const closeBtn = event.target.closest(".close-product-page");
  if (closeBtn) {
    document.documentElement.classList.remove("overflow-hidden");
    background.remove();
  }
};
const takeProductPageElements = () => {
  const addToCardBtn = document.querySelector(".add-to-card");
  const breadCrumbCategory = document.querySelector(".product-category");
  const breadCrumbTitle = document.querySelector(".product-breadcrumb-title");
  const image = document.querySelector(".product-image");
  const discountPercent = document.querySelector(".product-discount-percent");
  const title = document.querySelector(".product-title");
  const rating = document.querySelector(".product-rating");
  const discountPrice = document.querySelector(".product-discount-price");
  const price = document.querySelector(".product-price");
  const availibilityContainer = document.querySelector(
    ".product-availability-container",
  );
  const colorsContainer = document.querySelector(".product-colors-container");
  const contentContainer = document.querySelector(".product-content-container");
  return {
    addToCardBtn,
    breadCrumbCategory,
    breadCrumbTitle,
    image,
    discountPercent,
    title,
    rating,
    discountPrice,
    price,
    availibilityContainer,
    colorsContainer,
    contentContainer,
  };
};
const changeProductPageContent = (data) => {
  const {
    addToCardBtn,
    breadCrumbCategory,
    breadCrumbTitle,
    image,
    discountPercent,
    title,
    rating,
    discountPrice,
    price,
    availibilityContainer,
    colorsContainer,
    contentContainer,
  } = takeProductPageElements();

  breadCrumbCategory.textContent = data.category_fa;
  breadCrumbTitle.textContent = data.title;
  image.setAttribute("src", `${data.image}`);
  title.textContent = data.title;
  rating.textContent = data.rating;
  addToCardBtn.setAttribute("data-id", `${data._id}`);
  createColorElements(colorsContainer, data.colors);
  createProductDescription(contentContainer, data.description);
  setAvalibility(data.stock, availibilityContainer);
  changePriceOrDiscount(
    data.discount,
    data.price,
    data.oldPrice,
    discountPercent,
    discountPrice,
    price,
  );
};

const createColorElements = (colorsContainer, colors) => {
  colors.forEach((color) => {
    colorsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <span class="block rounded-full w-6 h-6 border dark:border-dark-divider border-light-divider cursor-pointer" style="background-color: ${color};"></span>
      `,
    );
  });
};
const createProductDescription = (contentContainer, description) => {
  contentContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <p class="dark:text-dark-text-primary text-light-text-primary text-[14px] text-justify">${description}</p>
    `,
  );
};
const changePriceOrDiscount = (
  discount,
  price,
  oldPrice,
  discountPercent,
  discountPrice,
  priceElement,
) => {
  if (discount) {
    discountPercent.textContent = `${discount}%`;
    discountPrice.textContent = price.toLocaleString();
    discountPrice.classList.add("text-brand-accent");
    priceElement.textContent = oldPrice.toLocaleString();
  } else {
    discountPercent.classList.add("hidden");
    priceElement.classList.add("hidden");
    discountPrice.textContent = price.toLocaleString();
  }
};
const setAvalibility = (stock, availibilityContainer) => {
  if (stock) {
    availibilityContainer.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="[direction:rtl] flex items-center gap-1">
         <span class="block rounded-full size-2 bg-green-400"></span>
         <p class="text-green-600 text-xs">موجود در انبار</p>
       </div>
      `,
    );
  } else {
    availibilityContainer.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="[direction:rtl] flex items-center gap-1">
         <span class="block rounded-full size-2 bg-red-400"></span>
         <p class="text-red-600 text-xs">اتمام موجودی</p>
       </div>
      `,
    );
  }
};
export default openProductPageHandler;
