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
            <p class="text-sm max-md:text-xs dark:text-dark-text-secondary text-light-text-secondary">
              کل سفارش‌ها
            </p>

            <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-orders"></div>
          </div>

          <div class="size-14 max-sm:size-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
            <i class="fa-solid fa-cart-shopping text-2xl text-brand-accent"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm max-md:text-xs dark:text-dark-text-secondary text-light-text-secondary">
            حذف شده
            </p>

            <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md deleted-orders"></div>
          </div>

          <div class="size-14 max-sm:size-10 rounded-xl bg-red-500/10 flex items-center justify-center">
            <i class="fa-solid fa-trash text-2xl text-red-500"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm max-md:text-xs dark:text-dark-text-secondary text-light-text-secondary">
            در انتظار پرداخت
            </p>

            <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md pending-orders"></div>
          </div>

          <div class="size-14 max-sm:size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <i class="fa-solid fa-clock text-2xl text-yellow-500"></i>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm max-md:text-xs dark:text-dark-text-secondary text-light-text-secondary">
              تکمیل شده
            </p>

            <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md complete-orders"></div>
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

        <div class="">
          <input type="text" placeholder="جستجوی سفارش..." class="transition-colors duration-300 focus:border-dark-input-focus w-full h-12 rounded-xl border dark:border-dark-input-border border-light-input-border pr-3 text-sm dark:text-dark-text-secondary text-light-text-secondary bg-transparent outline-none"/>
        </div>

        <select class="h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-3 text-sm dark:text-dark-text-primary text-light-text-primary bg-transparent">
          <option>همه وضعیت‌ها</option>
          <option>در انتظار پرداخت</option>
          <option>در حال پردازش</option>
          <option>ارسال شده</option>
          <option>تکمیل شده</option>
          <option>لغو شده</option>
        </select>


        <select class="h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-3 text-sm dark:text-dark-text-primary text-light-text-primary bg-transparent">
          <option>جدیدترین</option>
          <option>قدیمی‌ترین</option>
        </select>

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

              <td class="p-4 max-md:text-xs">#ORD-5124</td>
              <td class="p-4 max-md:text-xs max-md:hidden">Parham</td>
              <td class="p-4 max-sm:hidden">12,500,000 تومان</td>

              <td class="p-4 max-md:text-xs">
                <span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                  در حال پردازش
                </span>
              </td>

              <td class="p-4 max-md:text-xs">1405/05/08</td>

              <td class="p-4 max-md:text-xs">
                <button class="px-3 py-2 rounded-xl text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-300 cursor-pointer">
                  مشاهده
                </button>
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