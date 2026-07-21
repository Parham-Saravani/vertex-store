import paginationHandler from "./pagination";
import openProductPageHandler from "./product";
import {priceHandler ,brandsHandler,categoryHandler , brandsAndCategoriesHandler} from "./category.js";
import { baseUrl } from "../http";
let isCondeRunOnce = false;
let totalPages = null;
const productPerPage = 30;
let currentPage = 1;
let totalProducts = [];

const productsHandler = (products) => {
  totalProducts = products;
  changeTotalProductsText();
  calculateTotalPages();
  createProducts();
  paginationHandler(totalPages);
  elementsHandler()
};
const elementsHandler = () =>{
  if(!isCondeRunOnce){
  isCondeRunOnce = true;
  categoryHandler();
  brandsHandler();
  priceHandler()
  brandsAndCategoriesHandler();
  paginationNavigatorHandler();
  }
}
const changeTotalProductsText = () => {
  const productsCount = totalProducts.length;
  document.querySelector(".total-products-text").textContent =`نمایش ${productsCount} محصول`;
};

const calculateTotalPages = () => {
  totalPages = Math.ceil(totalProducts.length / productPerPage);
};

const createProducts = () => {
  const productsContainer = document.querySelector(".products-container");
  productsContainer.addEventListener("click", openProductPageHandler);
  productsContainer.innerHTML = "";
  const firstIndex = currentPage * productPerPage - productPerPage;
  const secondIndex = firstIndex + productPerPage;
  totalProducts.slice(firstIndex, secondIndex).forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="group border dark:border-dark-card-border max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border product"data-id="${product._id}">
          <img src=${product.image} class="size-10 max-2xl:size-25 max-xl:size-32 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
          <h2 class="dark:text-dark-text-primary w-40 text-[15px] max-2xl:text-[13px] max-xl:text-[12px] max-md:px-5 max-md:text-[11px] text-center">${product.title}</h2>
          <p class="mt-2 [direction:ltr] flex items-center gap-1">
            <i class="fa-solid fa-star text-yellow-400 text-xs max-sm:text-[10px]"></i>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs max-sm:text-[10px]">${product.rating}</span>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs max-sm:text-[10px]">( ${product.reviewCount} )</span>
          </p>
          <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
            <p class="text-[17px] max-md:text-[13px] pr-1.5">${product.price.toLocaleString()}</p>
            <p>تومان</p>
          </div>
      </div>
      `,
    );
  });
};

//! pagination 
const paginationNavigatorHandler = () => {
  const paginationContainer = document.querySelector(".pagination-container");
  paginationContainer.addEventListener("click", paginationNavigator);
};
const paginationNavigator = (event) => {
  const nextPage = event.target.closest(".next-page");
  const paginationBtn = event.target.closest(".pagination-button");
  const previousPage = event.target.closest(".previous-page");
  const currentActiveBtn = event.target.closest('.pagination-button.pagination-active')
  if (paginationBtn && !currentActiveBtn) {
    scrollToTop();
    addOrRemoveActiveClass(event.target);
    currentPage = +paginationBtn.dataset.pagenumber;
    createProducts();
  }
  if (nextPage) {
    if (currentPage === totalPages) return;
    else {
      scrollToTop();
      addOrRemoveActiveClass(null, "increase");
      currentPage++;
      createProducts();
    }
  }
  if (previousPage) {
    if (currentPage === 1) return;
    else {
      scrollToTop();
      addOrRemoveActiveClass(null, "decrease");
      currentPage--;
      createProducts();
    }
  }
};

const scrollToTop = () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
};

const addOrRemoveActiveClass = (target = null, operation = null) => {
  if (!operation) {
    document
      .querySelector(`[data-pagenumber="${currentPage}"]`)
      .classList.remove("pagination-active");
    target.classList.add("pagination-active");
  } else {
    switch (operation) {
      case "increase":
        document
          .querySelector(`[data-pagenumber="${currentPage}"]`)
          .classList.remove("pagination-active");
        document
          .querySelector(`[data-pagenumber="${currentPage + 1}"]`)
          .classList.add("pagination-active");
        break;
      case "decrease":
        document
          .querySelector(`[data-pagenumber="${currentPage}"]`)
          .classList.remove("pagination-active");
        document
          .querySelector(`[data-pagenumber="${currentPage - 1}"]`)
          .classList.add("pagination-active");
        break;
    }
  }
};

export { productsHandler, changeTotalProductsText };
