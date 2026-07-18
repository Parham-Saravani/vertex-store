import { basketItemsFromLocalStorage } from "../product/card";

const basketBtn = document.querySelector(".basket-btn");
const basketBackground = document.querySelector(".basket-background");
const basketContent = document.querySelector(".bascket-content");

let isBasketOpen = false;

const showOrHideBasket = () => {
  if (!isBasketOpen) {
    createBasketElements();
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
  const basketItems = basketItemsFromLocalStorage();
  const basketContainer = document.querySelector(".basket-container");
  const basketTotalProducts = document.querySelector(".basket-items");
  if (basketItems) {
    basketTotalProducts.textContent = basketItems.length;
    console.log(basketItems);
    basketItems.forEach((item) => {
      basketContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="px-2 py-2 flex gap-4 w-full rounded-xl dark:bg-dark-section-bg bg-light-section-bg">
          <img src="${item.image}" class="size-13">
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <p class="dark:text-dark-text-primary text-light-text-primary text-[10px] font-bold">${item.title}</p>
              <p class="dark:text-dark-text-secondary text-light-text-secondary text-[9px]">${item.category}</p>
            </div>
            <div class="mt-3 flex gap-1 items-center justify-end w-full">
                <button class="text-dark-text-primary text-xs rounded-md cursor-pointer hover:bg-red-600/50 transition-colors duration-300 font-bold flex items-center justify-center w-6.5 h-6.5 bg-red-600">
                  <i class="fa-solid fa-trash"></i>
                </button>

                <button class="text-dark-text-primary rounded-md cursor-pointer hover:bg-green-600/50 transition-colors duration-300 font-bold flex items-center justify-center text-xl w-6.5 h-6.5 bg-green-600">+</button>
                <p class="w-7 h-6.5 dark:bg-dark-input-bg bg-light-input-bg flex items-center justify-center text-xs rounded-md dark:text-dark-text-primary text-light-text-primary">${item.count}</p>
                <button class="text-dark-text-primary rounded-md cursor-pointer hover:bg-yellow-600/50 transition-colors duration-300 font-bold flex items-center justify-center text-xl w-6.5 h-6.5 bg-yellow-600">-</button>
            </div>
          </div>
        </div>
        `,
      );
    });
  } else {
    basketTotalProducts.textContent = '0';
    basketContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <p class="w-full h-15 flex justify-center items-center dark:text-dark-text-primary text-light-text-primary text-xs">سبد خالی</p>
      `,
    );
  }
};
basketBtn.addEventListener("click", showOrHideBasket);
basketBackground.addEventListener("click", closeBasketContent);
