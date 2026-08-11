import { takeUserToken } from "../../../cookie.js";
import { apiRequestHandler } from "../../../http.js";
import findCreatedTime from "../setCreatedTime.js";

const status = {
  pending:{
    element:`<span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500 max-md:px-1 max-md:text-[8px]">
                    در حال بررسی
              </span>`
  },
  open:{
    element:`<span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500 max-md:px-1 max-md:text-[8px]">
                   باز
              </span>`
  },
  close:{
    element:`<span class="px-3 py-1 rounded-full text-xs bg-red-500/10 text-red-500 max-md:px-1 max-md:text-[8px]">
                بسته شده
            </span>`
  }
}

const userTicketHandler = async () => {
  const token = takeUserToken();
  const data = await apiRequestHandler(`/api/messages/${token}`);
  createUserTickets(data);
};
const createUserTickets = (data) => {
  const ticketsContainer = document.querySelector(".tickets-table-body");
  ticketsContainer.innerHTML = "";
  if (data.length) {
    data.forEach((ticket) => {
      ticketsContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <tr class="border-b dark:border-dark-card-border border-light-card-border">

                <td class="p-4 max-md:text-xs max-sm:hidden">${ticket._id}</td>
                <td class="p-4 max-md:text-xs max-md:w-35 max-md:line-clamp-1 max-sm:w-25 max-md:truncate">${ticket.title}</td>
                <td class="p-4 max-md:hidden">${ticket.fullName}</td>


                <td class="p-4">
                  ${status[ticket.status].element}
                </td>

                <td class="p-4 max-md:text-xs max-sm:text-[10px]">${findCreatedTime(ticket.createdAt)}</td>

                <td class="p-4">
                  <button class="px-2 py-1 cursor-pointer rounded-xl text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-300  max-md:text-xs max-sm:px-0 max-sm:text-[9px]">
                      پاسخ دادن
                  </button>
                </td>

              </tr>`,
      );
    });
  } else {
    const tableWrapper = document.querySelector(".ticket-page-table-wrapper");
    tableWrapper.innerHTML = "";
    tableWrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="w-full text-center dark:text-dark-text-secondary text-light-text-secondary p-5 text-sm">هیج تیکتی برای شما ثبت نشده است</div>`,
    );
  }
};
export default userTicketHandler;
