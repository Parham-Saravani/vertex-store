import { getDataFromLocalStorage } from "../../../localstorage";
import changeStats from "../changeStats";
import { apiRequestHandler } from "../../../http.js";
import { takeUserToken } from "../../../cookie.js";
import findCreatedTime from "../setCreatedTime.js";
const userMainPageData = async () => {
  changeUserAccountDetail();
  const data = await takeUserOrders();
  creteUserProducts(data);
  changeUserStats()
};
const changeUserAccountDetail = async () => {
  const data = getDataFromLocalStorage("userData");
  const { username, email, createdAt } = data;
  changeStats(
    ".user-join-date",
    `<p class="[direction:ltr] text-[13px] dark:text-dark-text-secondary text-light-text-secondary">${findCreatedTime(createdAt)}</p>`,
  );
  changeStats(
    ".user-username",
    `<p class="text-[13px] dark:text-dark-text-secondary text-light-text-secondary">${username}</p>`,
  );
  changeStats(
    ".user-email",
    `<p class="text-[13px] dark:text-dark-text-secondary text-light-text-secondary">${email}</p>`,
  );
};
const changeUserStats = async () => {
  const token = takeUserToken();
  const data = await apiRequestHandler(`/api/dashboard/user/${token}`)  
  changeStats('.total-orders', `<p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">${data.stats.userTotalOrders} سفارش ها</p>`)
  changeStats('.total-favourites', `<p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">0 محصول</p>`)
  changeStats('.total-ticket', `<p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">${data.stats.userTotalTickets} تیکت</p>`)
}

const takeUserOrders = async (className) => {
  const token = takeUserToken();
  const data = await apiRequestHandler(`/api/orders/${token}`);
  return data;
};
const creteUserProducts = (data) => {
  const userProductsContainer = document.querySelector(".user-orders");
  userProductsContainer.innerHTML = "";
  if (data.length) {
    data.forEach((item) => {
      userProductsContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <li class="user-order-item flex border-b dark:border-dark-divider border-light-divider py-3 items-center justify-between">
          <div class="flex gap-4 items-center">
              <img src=${item.products[0].image} class="size-14 object-contain" alt="">
              <div>
                  <p class="text-xs dark:text-dark-text-secondary text-light-text-secondary">${item.products.length} محصول</p>
                  <p class="text-xs dark:text-dark-text-primary text-light-text-primary">
                      <span>${item.totalPrice.toLocaleString('fa-IR')}</span>
                      <span>تومان</span>
                  </p>
              </div>
          </div>
          <div class="flex gap-3 items-center">
              <p class="text-xs dark:text-dark-text-secondary text-light-text-secondary">${findCreatedTime(item.createdAt)}</p>
              <span class="cursor-pointer">
                  <i class="fa-solid fa-chevron-left text-xs dark:text-dark-text-primary text-light-text-primary" data-id="${item._id}"></i>
              </span>
          </div>
        </li>
        
        `,
      );
    });
  } else {
    userProductsContainer.parentElement.classList.add("h-35!");
    userProductsContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="w-full text-center dark:text-dark-text-secondary text-light-text-secondary pt-7 text-sm">هیج سفارشی برای شما ثبت نشده است</div>`,
    );
  }
};
export { userMainPageData, takeUserOrders };
