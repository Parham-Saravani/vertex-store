const UserOrderPage = () => {
  return`
     <!-- orders -->
    <div class="animate-fadeIn w-full">
            <div class="flex justify-between items-center">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary">سفارش ها</h2>
                <div class="flex items-center gap-3">
                    <p class="dark:text-dark-text-primary text-light-text-primary">دسته بندی:</p>
                    <div class="relative w-50 flex items-end">
                        <button class="px-3 py-2.5 w-full flex justify-between items-center dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border rounded-xl cursor-pointer transition-colors duration-300 dark:hover:bg-dark-card-hover hover:bg-light-card-hover">
                            <p class="text-xs dark:text-dark-text-primary text-light-text-primary">همه</p>
                            <i class="fa-solid fa-chevron-down text-xs dark:text-dark-text-primary text-light-text-primary"></i>
                        </button>
                        <div class="hidden absolute top-12 w-full dark:bg-dark-section-bg bg-light-section-bg rounded-xl order-list">
                            <ul class="w-full flex flex-col gap-1">
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer order-active">همه</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">درحال پردازش</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">ارسال شده</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">تحویل شده</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">لغو شده</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg overflow-hidden mt-10 order-page-table-wrapper">
                    <table class="w-full">
                        <thead class="dark:text-dark-text-primary text-light-text-primary border-b dark:border-dark-card-border border-light-card-border">
                            <tr>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">شناسه</th>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs max-sm:hidden">محصولات</th>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs max-sm:hidden">مجموع</th>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">وضیعت</th>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">تاریخ</th>
                                <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">عملیات</th>
                            </tr>
                        </thead>
                        <tbody class="user-order-table-body">
                            <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">
                                <td class="px-4 py-4">
                                    <div class="h-4 w-35 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                    <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-25 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                    <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                <div class="flex gap-2">
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                </td>
                            </tr>        
                            <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">
                                <td class="px-4 py-4">
                                    <div class="h-4 w-35 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                    <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-25 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                    <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                <div class="flex gap-2">
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                </td>
                            </tr>        
                            <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">
                                <td class="px-4 py-4">
                                    <div class="h-4 w-35 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                    <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-25 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                    <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                <div class="flex gap-2">
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                </td>
                            </tr>        
                            <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">
                                <td class="px-4 py-4">
                                    <div class="h-4 w-35 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                    <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-25 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                    <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                <div class="flex gap-2">
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                </td>
                            </tr>        
                            <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">
                                <td class="px-4 py-4">
                                    <div class="h-4 w-35 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                    <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-25 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                    <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4 max-sm:hidden">
                                    <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </td>

                                <td class="px-4 py-4">
                                <div class="flex gap-2">
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                </td>
                            </tr>        
                        </tbody>
                    </table>
            </div>
        </div>
    `;
};
export default UserOrderPage;