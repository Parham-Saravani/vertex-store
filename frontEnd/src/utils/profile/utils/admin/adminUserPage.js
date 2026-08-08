import { apiRequestHandler } from "../../../http.js";
const allUsersHandler = async () => {
  const data = await apiRequestHandler("/api/dashboard/admin/users");
  const { stats: { totalUsers, deletedUsers , admins , usersCreatedThisWeek} } = data;
  createUsers(data.users);
  changeStats(totalUsers , deletedUsers , admins , usersCreatedThisWeek);
};
const createUsers = (data) => {
  const usersContainer = document.querySelector(".users-table-body");
  usersContainer.innerHTML = "";
  data.forEach((user) => {
    usersContainer.insertAdjacentHTML(
      "beforeend",
      `
    <tr class="border-b animate-fadeIn dark:border-dark-card-border border-light-card-border">

          <td class="p-4 max-xl:text-sm">1</td>

          <td class="p-4 max-xl:text-sm">
            <div class="flex items-center gap-3">
              <span>${user.username}</span>
            </div>
          </td>

          <td class="p-4 max-xl:text-sm max-md:hidden">${user.email}</td>

          <td class="p-4 max-xl:text-sm">
            ${user.role === "admin" ? `<span class="px-3 py-1 rounded-full text-xs bg-brand-accent/10 text-brand-accent">ادمین</span>` : `<span class="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-500">کاربر</span>`}
            

          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            ${user.status === "active" ? `<span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">فعال</span>` : `<span class="px-3 py-1 rounded-full text-xs bg-red-500/10 text-red-500">حذف شده</span>`}
            

          </td>

          <td class="p-4 max-xl:text-sm max-sm:hidden">
            1405/05/01
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <button class="flex justify-center items-center max-sm:text-xs cursor-pointer size-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" data-id="${user._id}">
                <i class="fa-solid fa-pen"></i>
              </button>

              <button class="flex justify-center items-center max-sm:text-xs cursor-pointer size-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors" data-id="${user._id}">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>

          </td>

    </tr>
            `,
    );
  });
};

const changeStats = (totalUsers , deletedUsers , admins, usersCreatedThisWeek) => {
  changeTotalUsersTitle(totalUsers);
  changeDeletedUsersTitle(deletedUsers);
  changeAdminsTitle(admins);
  changeTotalIncomeTitle(usersCreatedThisWeek);
};
const changeTotalUsersTitle = (users) => {
  const totalUsers = document.querySelector(".total-users");
  resetClasses(totalUsers);
  totalUsers.innerHTML = `<h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">${users}</h3>`;
};
const changeDeletedUsersTitle = (deletedUsers) => {
  const totalDeletedUsers = document.querySelector(".total-deleted-users");
  resetClasses(totalDeletedUsers);
  totalDeletedUsers.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-red-500">${deletedUsers}</h3>`;
};
const changeAdminsTitle = (admins) => {
  const totalAdmins = document.querySelector(".total-admins");
  resetClasses(totalAdmins);
  totalAdmins.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-purple-500">${admins}</h3>`;
};
const changeTotalIncomeTitle = (usersCreatedThisWeek) => {
  const totalIncome = document.querySelector(".total-new-users");
  resetClasses(totalIncome);
  totalIncome.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-green-500">${usersCreatedThisWeek}</h3>`;
};

const resetClasses = (element) => {
  element.className = "";
};
export default allUsersHandler;
