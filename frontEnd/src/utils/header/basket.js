import { basketItemsFromLocalStorage } from "../product/card";
import {
  getDataFromLocalStorage,
  saveDataInLocalStorage,
} from "../localstorage";

const basketBtn = document.querySelector(".basket-btn");
const clearBasketBtn = document.querySelector(".clear-basket");
const basketBackground = document.querySelector(".basket-background");
const basketContent = document.querySelector(".bascket-content");
const basketTotalProducts = document.querySelector(".basket-items");
const basketContainer = document.querySelector(".basket-container");
const bascketPrice = document.querySelector(".basket-price");

let isBasketOpen = false;

const showOrHideBasket = () => {
  if (!isBasketOpen) {
    createBasketElements();
    calculatePrice();
    isBasketOpen = true;
    document.documentElement.classList.add("overflow-hidden");
    basketBtn.classList.add("z-30");
    basketBackground.classList.remove("hidden");
    basketContent.classList.remove("hidden");
  } else {
    isBasketOpen = false;
    document.documentElement.classList.remove("overflow-hidden");
    basketBtn.classList.remove("z-30");
    basketBackground.classList.add("hidden");
    basketContent.classList.add("hidden");
  }
};
const closeBasketContent = () => {
  if (isBasketOpen) {
    isBasketOpen = false;
    document.documentElement.classList.remove("overflow-hidden");
    basketBtn.classList.remove("z-30");
    basketBackground.classList.add("hidden");
    basketContent.classList.add("hidden");
  }
};
const createBasketElements = () => {
  basketContainer.innerHTML = "";
  const basketItems = basketItemsFromLocalStorage();
  if (basketItems !== null && basketItems.length) {
    basketTotalProducts.textContent = basketItems.length;
    basketItems.forEach((item) => {
      basketContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="px-2 py-2 flex gap-4 w-full rounded-xl dark:bg-dark-section-bg bg-light-section-bg">
          <img src="${item.image}" class="size-13">
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <p class="dark:text-dark-text-primary text-light-text-primary text-[10px] font-bold">${item.title}</p>
              <p class="dark:text-dark-text-secondary text-light-text-secondary text-[9px]">${item.category}</p>
            </div>
            <div class="mt-3 flex gap-1 items-center justify-end w-full">
                <button class="text-dark-text-primary text-xs rounded-md cursor-pointer hover:bg-red-600/50 transition-colors duration-300 font-bold flex items-center justify-center w-6.5 h-6.5 bg-red-600 delete" data-id="${item._id}">
                  <i class="fa-solid fa-trash"></i>
                </button>

                <button class="text-dark-text-primary rounded-md cursor-pointer hover:bg-green-600/50 transition-colors duration-300 font-bold flex items-center justify-center text-xl w-6.5 h-6.5 bg-green-600 increase" data-id="${item._id}">+</button>
                <p class="w-7 h-6.5 dark:bg-dark-input-bg bg-light-input-bg flex items-center justify-center text-xs rounded-md dark:text-dark-text-primary text-light-text-primary product-count">${item.count}</p>
                <button class="text-dark-text-primary rounded-md cursor-pointer hover:bg-yellow-600/50 transition-colors duration-300 font-bold flex items-center justify-center text-xl w-6.5 h-6.5 bg-yellow-600 decrease" data-id="${item._id}">-</button>
            </div>
          </div>
        </div>
        `,
      );
    });
  } else {
    basketTotalProducts.textContent = "0";
    basketContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <p class="w-full h-15 flex justify-center items-center dark:text-dark-text-primary text-light-text-primary text-xs">سبد خالی</p>
      `,
    );
  }
};
const increaseOrDecreaseOrDeleteProductFromBasket = (event) => {
  const increaseBtn = event.target.closest(".increase");
  const decreaseBtn = event.target.closest(".decrease");
  const deleteBtn = event.target.closest(".delete");
  if (increaseBtn) {
    const clickedProductID = increaseBtn.dataset.id;
    const data = getDataFromLocalStorage("basket");
    const findProduct = data.find((item) => item._id === clickedProductID);
    findProduct.count++;
    saveDataInLocalStorage("basket", data);
    createBasketElements();
    calculatePrice();
  }
  if (decreaseBtn) {
    const clickedProductID = decreaseBtn.dataset.id;
    const data = getDataFromLocalStorage("basket");
    const findProduct = data.find((item) => item._id === clickedProductID);
    if (findProduct.count === 1) return;
    findProduct.count--;
    saveDataInLocalStorage("basket", data);
    createBasketElements();
    calculatePrice();
  }
  if (deleteBtn) {
    const clickedProductID = deleteBtn.dataset.id;
    const data = getDataFromLocalStorage("basket");
    const findProductIndex = data.findIndex(
      (item) => item._id === clickedProductID,
    );
    data.splice(findProductIndex, 1);
    saveDataInLocalStorage("basket", data);
    createBasketElements();
    calculatePrice();
  }
};

const calculatePrice = () => {
  const data = getDataFromLocalStorage("basket");
  if (data !== null && data.length) {
    const totalPrice = data.reduce((price , current) => {
      return price + current.price * current.count
    }, 0)    
    bascketPrice.textContent = totalPrice.toLocaleString();
  } else {
    bascketPrice.textContent = "0";
  }
};
const clearBasket = () => {
  localStorage.removeItem("basket");
  calculatePrice();
  createBasketElements();
};

basketContainer.addEventListener(
  "click",
  increaseOrDecreaseOrDeleteProductFromBasket,
);
clearBasketBtn.addEventListener("click", clearBasket);
basketBtn.addEventListener("click", showOrHideBasket);
basketBackground.addEventListener("click", closeBasketContent);
export default calculatePrice;
