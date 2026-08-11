import { takeUserOrders } from "./userMainPage";
import findCreatedTime from "../setCreatedTime.js";
const status = {
  pending: {
    element:`<span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500 max-md:px-1 max-md:text-[9px]">
                در حال پردازش
             </span>`
  },
  complete: {
    element:`<span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500 max-md:px-1 max-md:text-[9px]">
               تحویل شده
             </span>`
  },
  delete: {
    element:`<span class="px-3 py-1 rounded-full text-xs bg-red-500/10 text-red-500 max-md:px-1 max-md:text-[9px]">
                بسته شده
             </span>`
  }
};
const userOrderHandler = async () => {
  const data = await takeUserOrders();
  console.log(data);

  createUserProducts(data);
};
const createUserProducts = (data) => {
  const productsContainer = document.querySelector(".user-order-table-body");
  productsContainer.innerHTML = "";
  if (data.length) {
    data.forEach((order) => {
      productsContainer.insertAdjacentHTML(
        "afterbegin",
        `
      <tr class="border-b text-sm dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary">

              <td class="p-4 max-md:text-xs max-sm:line-clamp-1 max-sm:truncate max-sm:w-35">${order._id}</td>
              <td class="p-4 max-md:text-xs max-md:hidden">${order.products.length} محصول</td>
              <td class="p-4 max-sm:hidden">${order.totalPrice.toLocaleString("fa-IR")} تومان</td>

              <td class="p-4 max-md:text-xs">
                ${status[order.status].element}
              </td>

              <td class="p-4 max-md:text-xs">${findCreatedTime(order.createdAt)}</td>

              <td class="p-4">
                <button class="px-1.5 text-xs py-1 rounded-md text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-300 cursor-pointer">
                  مشاهده
                </button>
              </td>

      </tr>
      `,
      );
    });
  } else {
    const tableWrapper = document.querySelector(".order-page-table-wrapper");
    tableWrapper.innerHTML = "";
    tableWrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="w-full text-center dark:text-dark-text-secondary text-light-text-secondary p-5 text-sm">هیج سفارشی برای شما ثبت نشده است</div>`,
    );
  }
};
export default userOrderHandler;
