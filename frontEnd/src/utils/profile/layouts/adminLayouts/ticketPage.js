const AdminTicketsPage = () => {
  return `
    <div class="animate-fadeIn space-y-6">

      <!-- Header -->
      <div class="flex items-center justify-between">

        <div>
          <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
            تیکت‌ها
          </h1>

          <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
            مدیریت درخواست‌ها و پشتیبانی کاربران
          </p>
        </div>

      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm max-sm:text-xs dark:text-dark-text-secondary text-light-text-secondary">
                کل تیکت‌ها
              </p>

              <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-tickets"></div>
            </div>

            <div class="size-14 max-sm:size-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
              <i class="fa-solid fa-headset text-2xl text-brand-accent"></i>
            </div>
          </div>
        </div>

        <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm max-sm:text-xs dark:text-dark-text-secondary text-light-text-secondary">
                باز
              </p>

              <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md open-tickets"></div>
            </div>

            <div class="size-14 max-sm:size-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <i class="fa-solid fa-circle-exclamation text-2xl text-red-500"></i>
            </div>
          </div>
        </div>

        <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm max-sm:text-xs dark:text-dark-text-secondary text-light-text-secondary">
                در حال بررسی
              </p>

              <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md pending-tickets"></div>
            </div>

            <div class="size-14 max-sm:size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <i class="fa-solid fa-spinner text-2xl text-yellow-500"></i>
            </div>
          </div>
        </div>

        <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm max-sm:text-xs dark:text-dark-text-secondary text-light-text-secondary">
                بسته شده
              </p>

              <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md close-tickets"></div>
            </div>

            <div class="size-14 max-sm:size-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
            </div>
          </div>
        </div>

      </div>

      <!-- Filters -->
      <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4">

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <select class="h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-3 text-sm">
            <option>همه وضعیت‌ها</option>
            <option>باز</option>
            <option>در حال بررسی</option>
            <option>بسته شده</option>
          </select>

          <select class="h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-3 text-sm">
            <option>جدیدترین</option>
            <option>قدیمی‌ترین</option>
          </select>

        </div>

      </div>

      <!-- Tickets Table -->
      <div class="overflow-hidden rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

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

export default AdminTicketsPage;