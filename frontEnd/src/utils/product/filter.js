import { productsHandler } from "./createProducts.js";
import { apiRequestHandler } from "../http.js";
import {createBrands,createCategories,getCategoriesAndBrands} from "./sidebar-content.js";
import { baseUrl } from "../http.js";
import noUiSlider from "nouislider";

let filter = {
  category: [],
  brand: [],
};

const priceHandler = () => {
  const priceSlider = document.querySelector("#price-slider");
  priceSlider.noUiSlider.on("change", (value, handle) => {
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
  const branItems = document.querySelectorAll(".brand-item");
  filter.brand = [];
  branItems.forEach((item) => {
    if (item.checked) {
      if (!filter.brand.includes(item.id)) {
        filter.brand.push(item.id);
      }
    }
  });
  getProductsHandler();
};
const clearFilters = () =>{
  filter.category = [];
  filter.brand = [];
  delete filter.minPrice;
  delete filter.maxPrice;
}
const categoryHandler = () => {
  const categoryContainer = document.querySelector(".category-container");
  categoryContainer.addEventListener("click", addActiveClass);
};
const addActiveClass = async (event) => {
  const categoryItem = event.target.closest(".category-item");
  const allProducts = event.target.closest("[data-category='']");
  if (allProducts) {
    if (event.target.classList.contains("category-active")) return;
    document.querySelectorAll(".category-item").forEach((item) => item.classList.remove("category-active"));
    clearFilters()
    event.target.classList.add("category-active");
    const products = await apiRequestHandler("/api/products");
    productsHandler(products);
    return;
  }
  if (categoryItem) {
    const allProductsItem = document.querySelector('[data-category=""]').classList.contains("category-active");
    if (allProductsItem) {
      document.querySelector(".category-item.category-active").classList.remove("category-active");
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
  const items = document.querySelectorAll('.category-item')
  filter.category = [];
  items.forEach(item => {
    if(item.classList.contains('category-active') && item.dataset.category){
      filter.category.push(item.dataset.category)
    }
  })  
  getProductsHandler();
};

const getProductsHandler = async () => {
  const data = await sendCurrentSlectedFilters();
  productsHandler(data);
};
const sendCurrentSlectedFilters = async () => {
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
  const data = await getCategoriesAndBrands();
  createCategories(data.categories);
  createBrands(data.brands);
};

export {
  priceHandler,
  brandsHandler,
  categoryHandler,
  brandsAndCategoriesHandler,
};
