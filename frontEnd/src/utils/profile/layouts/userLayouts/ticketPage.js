const UserTicketPage = () => {
  return`
    <!-- ticket page -->
       <div class="animate-fadeIn w-full">    
            <div class="flex justify-between items-center">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary">تیکت ها</h2>
                <div class="flex items-center gap-3">
                    <p class="dark:text-dark-text-primary text-light-text-primary">دسته بندی:</p>
                    <div class="relative w-50 flex items-end">
                        <button class="px-3 py-2.5 w-full flex justify-between items-center dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border rounded-xl cursor-pointer transition-colors duration-300 dark:hover:bg-dark-card-hover hover:bg-light-card-hover">
                            <p class="text-xs dark:text-dark-text-primary text-light-text-primary">همه</p>
                            <i class="fa-solid fa-chevron-down text-xs dark:text-dark-text-primary text-light-text-primary"></i>
                        </button>
                        <div class="hidden absolute top-12 w-full dark:bg-dark-section-bg bg-light-section-bg rounded-xl order-list">
                            <ul class="w-full flex flex-col gap-1">
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">پاسخ داده شده</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">در حال انتظار</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    <div class="overflow-hidden rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg mt-10 ticket-page-table-wrapper">

        <div class="overflow-x-auto">

          <table class="w-full text-sm">

            <thead>
              <tr class="border-b dark:text-dark-text-primary text-light-text-primary dark:border-dark-card-border border-light-card-border">

                <th class="text-right p-4 max-md:text-xs max-sm:hidden">شناسه</th>
                <th class="text-right p-4 max-md:text-xs">عنوان</th>
                <th class="text-right p-4 max-md:hidden">کاربر</th>
                <th class="text-right p-4 max-md:text-xs">وضعیت</th>
                <th class="text-right p-4 max-md:text-xs">تاریخ</th>
                <th class="text-right p-4 max-md:text-xs">عملیات</th>

              </tr>
            </thead>

            <tbody class="dark:text-dark-text-secondary text-light-text-secondary tickets-table-body">

              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>


            </tr>
              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              

            </tr>
              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

             

            </tr>
              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              
            </tr>
              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              

            </tr>
              <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-40 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs max-md:hidden">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-sm:hidden">
                <div class="animate-pulse w-30 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>
              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-15 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

             

            </tr>
            </tbody>

          </table>

        </div>

      </div>
       </div>
    `;
};
export default UserTicketPage;