import { apiRequestHandler } from "../http";
import { showToast } from "../toast/toast";

let basket = [];
const addToCardHandler = async (productID) => {
  const data = await apiRequestHandler(`/api/products/${productID}`);
  const isProductInBasket = basket.find((product) => product._id === data._id);
  data.count = 1;
  if (isProductInBasket) {
    const findProduct = basket.find((product) => product._id === data._id);
    findProduct.count++;
  } else {
    showToast("ADDED_TO_BASKET");
    basket.push(data);
  }
  saveBasketinLocalStorage();
};
const saveBasketinLocalStorage = () => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
const syncBasketWithLocalStorage = () => {
  const localstorageBasket = JSON.parse(localStorage.getItem("basket"));
  if (localstorageBasket) {
    basket = localstorageBasket;
  }
};

const basketItemsFromLocalStorage = () => {
  const basketItems = JSON.parse(localStorage.getItem("basket"));
  return basketItems;
};
window.addEventListener("load", syncBasketWithLocalStorage);
export { addToCardHandler, basketItemsFromLocalStorage };
