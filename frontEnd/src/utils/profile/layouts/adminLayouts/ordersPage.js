const AdminOrdersPage = () => {
  return `
  <div class="animate-fadeIn space-y-6">

    <!-- Header -->
    <div class="flex items-center justify-between">

      <div>
        <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
          سفارش‌ها
        </h1>

        <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          مدیریت و پیگیری سفارش‌های کاربران
        </p>
      </div>

    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="max-xl:text-xs max-md:text-sm text-sm dark:text-dark-text-secondary text-light-text-secondary">
              کل سفارش‌ها
            </p>

            <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-orders"></div>
          </div>

          <div class="size-14 max-lg:size-11 max-md:size-14  rounded-xl bg-brand-accent/10 flex items-center justify-center">
            <i class="fa-solid fa-cart-shopping text-2xl text-brand-accent"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="max-xl:text-xs max-md:text-sm text-sm dark:text-dark-text-secondary text-light-text-secondary">
            حذف شده
            </p>

            <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md deleted-orders"></div>
          </div>

          <div class="size-14 max-lg:size-11 max-md:size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
            <i class="fa-solid fa-trash text-2xl text-red-500"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="max-xl:text-xs max-md:text-sm text-sm dark:text-dark-text-secondary text-light-text-secondary">
            در انتظار پرداخت
            </p>

            <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md pending-orders"></div>
          </div>

          <div class="size-14 max-lg:size-11 max-md:size-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <i class="fa-solid fa-clock text-2xl text-yellow-500"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="max-xl:text-xs max-md:text-sm text-sm dark:text-dark-text-secondary text-light-text-secondary">
              تکمیل شده
            </p>

            <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md complete-orders"></div>
          </div>

          <div class="size-14 max-lg:size-11 max-md:size-14 rounded-xl bg-green-500/10 flex items-center justify-center">
            <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
          </div>
        </div>
      </div>

    </div>

    <!-- Filters -->
    <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 filters-container">

        <div class="relative w-full">
              <button class="border dark:border-dark-input-border border-light-input-border dark:text-dark-text-primary text-light-text-primary px-3 py-4 rounded-xl flex items-center justify-between w-full cursor-pointer sort-btn">
                <p class="text-xs max-md:text-[10px] sort-btn-text">همه</p>
                <i class="fa-solid fa-chevron-down max-md:text-[10px]"></i>
              </button>
              <ul class="absolute hidden top-15 right-0 left-0 mx-auto z-10 rounded-md dark:bg-dark-card-hover bg-light-card-hover w-full sort-list">
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="cheap">همه</li>
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="expensive">در حال پردازش</li>
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="newest">تکمیل شده</li>
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="newest">لغو شده</li>
              </ul>
        </div>

        <div class="relative w-full">
              <button class="border dark:border-dark-input-border border-light-input-border dark:text-dark-text-primary text-light-text-primary px-3 py-4 rounded-xl flex items-center justify-between w-full cursor-pointer sort-btn">
                <p class="text-xs max-md:text-[10px] sort-btn-text">همه</p>
                <i class="fa-solid fa-chevron-down max-md:text-[10px]"></i>
              </button>
              <ul class="absolute hidden top-15 right-0 left-0 mx-auto z-10 rounded-md dark:bg-dark-card-hover bg-light-card-hover w-full sort-list">
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="cheap">همه</li>
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="cheap">جدیدترین</li>
                <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-md px-2 py-2 cursor-pointer sort-items" data-sort="cheap">قدیمی‌ترین</li>
              </ul>
        </div>

      </div>

    </div>

    <!-- Orders Table -->
    <div class="overflow-hidden rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

      <div class="overflow-x-auto">

        <table class="w-full text-sm">

          <thead>
            <tr class="border-b dark:border-dark-card-border border-light-card-border dark:text-dark-text-primary text-light-text-primary">

              <th class="text-right p-4 max-sm:text-xs">شناسه</th>
              <th class="text-right p-4 max-md:hidden">کاربر</th>
              <th class="text-right p-4 max-sm:hidden">مبلغ</th>
              <th class="text-right p-4 max-sm:text-xs">وضعیت</th>
              <th class="text-right p-4 max-sm:text-xs">تاریخ</th>
              <th class="text-right p-4 max-sm:text-xs">عملیات</th>

            </tr>
          </thead>

          <tbody class="dark:text-dark-text-secondary text-light-text-secondary orders-table-body">

             <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-5 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
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
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-10 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

            </tr>
             <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-5 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
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
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-10 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

            </tr>
             <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-5 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
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
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-10 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

            </tr>
             <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-5 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
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
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-10 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

            </tr>
             <tr class="border-b dark:border-dark-card-border border-light-card-border">

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-5 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
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
                <div class="animate-pulse w-20 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

              <td class="p-4 max-md:text-xs">
                <div class="animate-pulse w-10 h-5 rounded bg-gray-300 dark:bg-gray-700"></div>
              </td>

            </tr>
          </tbody>

        </table>

      </div>

    </div>

  </div>
  `;
};

export default AdminOrdersPage;