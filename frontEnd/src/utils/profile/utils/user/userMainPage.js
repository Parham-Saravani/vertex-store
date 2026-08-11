import { getDataFromLocalStorage } from "../../../localstorage";
import changeStats from "../changeStats";
import { apiRequestHandler } from "../../../http.js";
import { takeUserToken } from "../../../cookie.js";

const userMainPageData = () => {
  changeUserAccountDetail();
  takeUserOrders();
};
const changeUserAccountDetail = () => {
  const data = getDataFromLocalStorage("userData");
  const { username, email, createdAt } = data;
  changeStats(
    ".user-join-date",
    `<p class="text-[13px] dark:text-dark-text-secondary text-light-text-secondary">${findCreatedTime(createdAt)}</p>`,
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
const findCreatedTime = (time) => {
  const userJoinTime = document.querySelector(".user-join-date");
  const date = new Date(time);
  const calendar = date.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return calendar;
};

const takeUserOrders = async () => {
  const token = takeUserToken()
  const data = await apiRequestHandler(`/api/orders/${token}`);
  console.log(data);
  creteUserProducts(data);
};
const creteUserProducts = (data) => {
  const userProductsContainer = document.querySelector(".user-orders");
  userProductsContainer.innerHTML = "";
  if (data.length) {
    data.forEach((item) => {
      userProductsContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <li class="flex border-b dark:border-dark-divider border-light-divider py-3 items-center justify-between">
          <div class="flex gap-4 items-center">
              <img src="./public/images/Alienwarem16R2.png" class="size-14" alt="">
              <div>
                  <p class="text-xs dark:text-dark-text-primary text-light-text-primary">
                      <span>سفارش</span>
                      <span class="">44423#</span>
                  </p>
                  <p class="text-xs dark:text-dark-text-secondary text-light-text-secondary">2
                       محصول</p>
                  <p class="text-xs dark:text-dark-text-primary text-light-text-primary">
                      <span>4,453,000</span>
                      <span>تومان</span>
                  </p>
              </div>
          </div>
          <div class="flex gap-3 items-center">
              <p class="text-xs dark:text-dark-text-secondary text-light-text-secondary">16
                   تیر 1403</p>
              <span class="cursor-pointer">
                  <i class="fa-solid fa-chevron-left text-xs dark:text-dark-text-primary text-light-text-primary"></i>
              </span>
          </div>
        </li>
        
        `,
      );
    });
  } 
  else {
    userProductsContainer.parentElement.classList.add('h-35!')
    userProductsContainer.insertAdjacentHTML('afterbegin', `<div class="w-full text-center dark:text-dark-text-secondary text-light-text-secondary pt-7 text-sm">هیج سفارشی برای شما ثبت نشده است</div>`)
  }
};
export default userMainPageData;
