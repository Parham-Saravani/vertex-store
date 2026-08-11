import { takeUserOrders } from "./userMainPage";
const userOrderHandler = async () => {
  const data = await takeUserOrders();
  createUserProducts(data);
};
const createUserProducts = (data) => {
  const productsContainer = document.querySelector(".user-order-table-body");
  productsContainer.innerHTML = "";
  if (data.length) {
    productsContainer.insertAdjacentHTML("afterbegin", ``);
  } else {
    const tableWrapper = document.querySelector(".order-page-table-wrapper");
    tableWrapper.innerHTML = "";
    tableWrapper.insertAdjacentHTML("afterbegin", `<div class="w-full text-center dark:text-dark-text-secondary text-light-text-secondary p-5 text-sm">هیج سفارشی برای شما ثبت نشده است</div>`);
  }
};
export default userOrderHandler;
