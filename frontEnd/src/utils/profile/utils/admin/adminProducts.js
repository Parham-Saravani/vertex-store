import { apiRequestHandler } from "../../../http.js";
import { changePage } from "../../layouts/pageContent.js";

let products = [];
let totalPages = null;
let currentPage = 1;
const totalProductsPerPage = 15;
const allProductsHandler = async () => {
  const data = await apiRequestHandler("/api/products");
  products = data;
  calculatePage();
  changeStats();
  createProductItems();
  createPaginationButttons();
  paginationHandler();
};
const calculatePage = () => {
  totalPages = Math.ceil(products.length / totalProductsPerPage);
};
const createProductItems = () => {
  const productsContainer = document.querySelector(
    ".admin-products-table-body",
  );
  productsContainer.innerHTML = "";
  const firstIndex = currentPage * totalProductsPerPage - totalProductsPerPage;
  const secondIndex = firstIndex + totalProductsPerPage;
  products.slice(firstIndex, secondIndex).forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <tr class="animate-fadeIn dark:text-dark-text-secondary text-light-text-secondary text-xs border-b dark:border-dark-card-border border-light-card-border">

                                        <td class="px-4 py-4">
                                            <img src="${product.image}" class="size-14 object-contain"
                                                alt="">
                                        </td>

                                        <td class="px-4 py-4 font-bold max-sm:text-xs max-lg:text-center">
                                            ${product.title}
                                        </td>

                                        <td class="px-4 py-4 max-sm:hidden">
                                            ${product.category}
                                        </td>

                                        <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            ${product.brand}
                                        </td>

                                        <td class="px-4 py-4 max-sm:hidden">
                                            ${product.price.toLocaleString()} تومان
                                        </td>

                                        <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            ${product.stock}
                                        </td>

                                        <td class="px-4 py-4">

                                            <div class="flex items-center justify-center gap-2">

                                                <button class="size-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300 cursor-pointer flex justify-center items-center" data-id="${product._id}">
                                                    <i class="fa-solid fa-pen"></i>
                                                </button>

                                                <button class="size-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 cursor-pointer flex justify-center items-center" data-id="${product._id}">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>

                                            </div>

                                        </td>

                                    </tr>
            `,
    );
  });
};

const changeStats = () => {
  changeTotalProductsTitleState();
  changeActiveProductsTitleState();
  changeUnAvailableProductsTitleState();
  changeProductsCategoryTitleState();
};

const changeTotalProductsTitleState = () => {
  const totalProductsTitle = document.querySelector(".total-products");
  resetClasses(totalProductsTitle);
  totalProductsTitle.innerHTML = `<h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">${products.length}</h3>`;
};
const changeActiveProductsTitleState = () => {
  const activeProductsTitle = document.querySelector(".active-products");
  resetClasses(activeProductsTitle);
  const activeProducts = filterProducts((item) => item.stock !== 0);
  activeProductsTitle.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-green-500">${activeProducts.length}</h3>`;
};
const changeUnAvailableProductsTitleState = () => {
  const notAvailableProductsTitle = document.querySelector(
    ".not-available-products",
  );
  resetClasses(notAvailableProductsTitle);
  const notAvailableProducts = filterProducts((item) => item.stock === 0);
  notAvailableProductsTitle.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-red-500">${notAvailableProducts.length}</h3>`;
};
const changeProductsCategoryTitleState = () => {
  const ProductsCategoryTitle = document.querySelector(".products-category");
  resetClasses(ProductsCategoryTitle);
  ProductsCategoryTitle.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-blue-500">${takeCategories().length}</h3>`;
};

const filterProducts = (condition) => {
  const result = products.filter(condition);
  return result;
};
const takeCategories = () => {
  const categories = products.reduce((array, current) => {
    return array.includes(current.category)
      ? [...array]
      : [...array, current.category];
  }, []);
  return categories;
};

const resetClasses = (element) => {
  element.className = "";
};

//! pagination
const createPaginationButttons = () => {
  document.querySelector(".pagination-container").classList.remove('hidden');
  const paginationContainer = document.querySelector(".pagination-buttons");
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.insertAdjacentHTML(
      "afterbegin",
      `<button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[15px] pagination-button ${i === 1 ? "pagination-active" : ""}" data-pagenumber="${i}">${i}</button>`,
    );
  }
};
const paginationHandler = () => {
  const paginationContainer = document.querySelector(".pagination-container");
  paginationContainer.addEventListener("click", moveToNextOrPreviousPage);
};
const moveToNextOrPreviousPage = (event) => {
  const nextPage = event.target.closest(".next-page");
  const paginationBtn = event.target.closest(".pagination-button");
  const previousPage = event.target.closest(".previous-page");
  const currentActiveBtn = event.target.closest(
    ".pagination-button.pagination-active",
  );
  if (paginationBtn && !currentActiveBtn) {
    scrollToTop();
    addOrRemoveActiveClass(event.target);
    currentPage = +paginationBtn.dataset.pagenumber;
    createProductItems();
  }
  if (nextPage) {
    if (currentPage === totalPages) return;
    else {
      console.log("nextPage");

      scrollToTop();
      addOrRemoveActiveClass(null, "increase");
      currentPage++;
      createProductItems();
    }
  }
  if (previousPage) {
    if (currentPage === 1) return;
    else {
      console.log("previousPage");

      scrollToTop();
      addOrRemoveActiveClass(null, "decrease");
      currentPage--;
      createProductItems();
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
export default allProductsHandler;
