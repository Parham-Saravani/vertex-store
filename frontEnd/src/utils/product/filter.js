import { productsHandler, scrollToTop } from "./createProducts.js";
import { apiRequestHandler } from "../http.js";
import { createBrands, createCategories, getCategoriesAndBrands, createSkeletonLoaderForSidebarContent} from "./sidebar-content.js";
import { baseUrl } from "../http.js";
import noUiSlider from "nouislider";

let filter = {
  category: [],
  brand: [],
};

const priceHandler = () => {
  const priceSlider = document.querySelector("#price-slider");
  priceSlider.noUiSlider.on("change", (value, handle) => {
    document.querySelector('.pagination-container').classList.add('hidden')
    filter.minPrice = Number(Math.floor(value[0]));
    filter.maxPrice = Number(Math.floor(value[1]));
    getProductsHandler();
  });
};
const brandsHandler = () => {
  const brandsContainer = document.querySelector(".brand-container");
  brandsContainer.addEventListener("click", addBrandsToFilter);
};
const addBrandsToFilter = (event) => {
  const item = event.target.classList.contains("brand-item");
  if (item) {
    hidePagination()
    const branItems = document.querySelectorAll(".brand-item");
    filter.brand = [];
    filter.category = [];
    branItems.forEach((item) => {
      if (item.checked) {
        if (!filter.brand.includes(item.id)) {
          filter.brand.push(item.id);
        }
      }
    });
    scrollToTop();
    getProductsHandler();
  }
};
const clearFilters = () => {
  delete filter.category;
  delete filter.brand;
  delete filter.minPrice;
  delete filter.maxPrice;
};
const categoryHandler = () => {
  const categoryContainer = document.querySelector(".category-container");
  categoryContainer.addEventListener("click", addActiveClass);
};
const addActiveClass = async (event) => {
  const categoryItem = event.target.closest(".category-item");
  const allProducts = event.target.closest(
    ".category-item[data-category='all-products']",
  );
  if (allProducts) {
    if (event.target.classList.contains("category-active")) return;
    hidePagination()
    document.querySelectorAll(".category-item").forEach((item) => item.classList.remove("category-active"));
    clearFilters();
    event.target.classList.add("category-active");
    createSkeletonLoaderForProducts();
    getProductsHandler();    
    return;
  }
  if (categoryItem) {
    hidePagination()
    const allProductsItem = document
      .querySelector('[data-category="all-products"]')
      .classList.contains("category-active");
    if (allProductsItem) {
      document
        .querySelector(".category-item.category-active")
        .classList.remove("category-active");
    }
    if (event.target.classList.contains("category-active")) {
      event.target.classList.remove("category-active");
      removeCategoryFromFilters(event.target.dataset.category);
    } else {
      event.target.classList.add("category-active");
      addCategoryToFilters(event.target.dataset.category);
    }
  }
};
const removeCategoryFromFilters = (category) => {
  const indexOfItem = filter.category.findIndex((item) => item === category);
  filter.category.splice(indexOfItem, 1);
  getProductsHandler();
};
const addCategoryToFilters = (item) => {
  const items = document.querySelectorAll(".category-item");
  filter.category = [];
  filter.brand = [];
  items.forEach((item) => {
    if (item.classList.contains("category-active") && item.dataset.category) {
      filter.category.push(item.dataset.category);
    }
  });
  getProductsHandler();
};

const getProductsHandler = async () => {
  createSkeletonLoaderForProducts();
  const data = await sendCurrentSlectedFilters();
  productsHandler(data);
};
const sendCurrentSlectedFilters = async () => {
  console.log(filter);

  const response = await fetch(`${baseUrl}/api/products/filter`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(filter),
  });
  const data = await response.json();
  return data;
};

const brandsAndCategoriesHandler = async () => {
  createSkeletonLoaderForSidebarContent();
  const data = await getCategoriesAndBrands();
  createCategories(data.categories);
  createBrands(data.brands);
};
const createSkeletonLoaderForProducts = () => {
  const totalProductsNumber = document.querySelector(".total-products-text");
  const paginationContainer = document.querySelector(".pagination-container");
  const productsContainer = document.querySelector(".products-container");
  totalProductsNumber.innerHTML = "";
  productsContainer.innerHTML = "";
  productsContainer.classList.add("grid");
  totalProductsNumber.insertAdjacentHTML(
    "beforeend",
    `
      <div class="animate-pulse rounded-xl dark:bg-gray-800 bg-black/40 w-30 h-7"></div>
    `,
  );
  for (let i = 0; i < 5; i++) {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border  border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
        <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
        <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
        <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
        <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
      </div>
      `,
    );
  }
};

const hidePagination = ()=> {
  document.querySelector('.pagination-container').classList.add('hidden')
}
export { priceHandler, brandsHandler, categoryHandler, brandsAndCategoriesHandler, createSkeletonLoaderForProducts};
