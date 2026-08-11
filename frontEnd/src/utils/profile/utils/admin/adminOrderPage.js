import { apiRequestHandler } from "../../../http.js";
import changeStats from "../../utils/changeStats.js";
import findCreatedTime from "../setCreatedTime.js";
import sortHandler from "../pageSort.js";

const allOrdersHandler = async () => {
  const data = await apiRequestHandler("/api/dashboard/admin/orders");
  const {
    stats: { completeOrders, deleteOrders, pendingOrders, totalOrders },
  } = data;
  createUsers(data.orders);
  changePageStats(completeOrders, deleteOrders, pendingOrders, totalOrders)
  sortHandler()
};
const createUsers = (data) => {
  const ordersContainer = document.querySelector(".orders-table-body");
  ordersContainer.innerHTML = "";
  if (data.length) {
    data.forEach((order) => {
      ordersContainer.insertAdjacentHTML(
        "beforeend",
        `
   <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">${order._id}</td>
              <td class="p-4 max-md:text-xs max-md:hidden">Parham</td>
              <td class="p-4 max-sm:hidden">12,500,000 تومان</td>

              <td class="p-4 max-md:text-xs">
                <span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                  در حال پردازش
                </span>
              </td>

              <td class="p-4 max-md:text-xs">${findCreatedTime(order.createdAt)}</td>

              <td class="p-4 max-md:text-xs">
                <button class="px-3 py-2 rounded-xl text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-300 cursor-pointer">
                  مشاهده
                </button>
              </td>

            </tr>
            `,
      );
    });
  }else {
    const container = document.querySelector("table").parentElement.parentElement;
    document.querySelector("table").parentElement.remove();
    container.insertAdjacentHTML('afterbegin',
        `
        <div class="w-full flex justify-center items-center py-10 dark:text-dark-text-primary text-light-text-primary">
            هیچ سفارشی ثبت نشده است
        </div>
        `
    )
  }
};
const changePageStats = (completeOrders, deleteOrders, pendingOrders, totalOrders) => {
  changeStats(".all-orders",`<h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">${totalOrders}</h3>`,);
  changeStats(".deleted-orders",`<h3 class="text-3xl font-bold mt-2 text-red-500">${deleteOrders}</h3>`,);
  changeStats(".pending-orders",`<h3 class="text-3xl font-bold mt-2 text-yellow-500">${pendingOrders}</h3>`,);
  changeStats(".complete-orders",`<h3 class="text-3xl font-bold mt-2 text-green-500">${completeOrders}</h3>`,);
}
export default allOrdersHandler;
