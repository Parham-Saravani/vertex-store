import { apiRequestHandler } from "../../../http.js";
import changeStats from "../../utils/changeStats.js";
import findCreatedTime from "../setCreatedTime.js";
import sortHandler from "../pageSort.js";

const allTicketsHandler = async () => {
  const data = await apiRequestHandler("/api/dashboard/admin/messages");
  const {
    stats: { totalMessages, closedMessages, pendingMessages, openMessages },
  } = data;
  createUsers(data.messages);
  changePageStats(totalMessages, closedMessages, pendingMessages, openMessages)
  sortHandler()
};
const createUsers = (data) => {
  const ordersContainer = document.querySelector(".tickets-table-body");
  ordersContainer.innerHTML = "";
  if (data.length) {
    data.forEach((ticket) => {
      ordersContainer.insertAdjacentHTML(
        "beforeend",
        `
             <tr class="border-b dark:border-dark-card-border border-light-card-border">

                <td class="p-4 max-md:text-xs max-sm:hidden">${ticket._id}</td>
                <td class="p-4 max-md:text-xs max-md:w-35 max-md:line-clamp-1 max-sm:w-25 max-md:truncate">${ticket.title}</td>
                <td class="p-4 max-md:hidden">${ticket.fullName}</td>


                <td class="p-4">
                  <span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500 max-md:px-1 max-md:text-[8px]">
                    در حال بررسی
                  </span>
                </td>

                <td class="p-4 max-md:text-xs max-sm:text-[10px]">${findCreatedTime(ticket.createdAt)}</td>

                <td class="p-4">
                  <button class="px-2 py-1 cursor-pointer rounded-xl text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-300  max-md:text-xs max-sm:px-0 max-sm:text-[9px]">
                      پاسخ دادن
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
            هیچ تیکتی ثبت نشده است
        </div>
        `
    )
  }
};
const changePageStats = (totalMessages, closedMessages, pendingMessages, openMessages) => {
  changeStats(".all-tickets",`<h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">${totalMessages}</h3>`,);
  changeStats(".open-tickets",`<h3 class="text-3xl font-bold mt-2 text-red-500">${openMessages}</h3>`,);
  changeStats(".pending-tickets",`<h3 class="text-3xl font-bold mt-2 text-yellow-500">${pendingMessages}</h3>`,);
  changeStats(".close-tickets",`<h3 class="text-3xl font-bold mt-2 text-green-500">${closedMessages}</h3>`,);
}
export default allTicketsHandler;
