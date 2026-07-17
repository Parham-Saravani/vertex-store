const basketBtn = document.querySelector(".basket-btn");
const basketBackground = document.querySelector(".basket-background");
const basketContent = document.querySelector(".bascket-content");

let isBasketOpen = false;

const showOrHideBasket = () => {
  if (!isBasketOpen) {
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

basketBtn.addEventListener("click", showOrHideBasket);
basketBackground.addEventListener("click", closeBasketContent);
