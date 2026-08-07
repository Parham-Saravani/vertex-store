const AdminDiscountPage = () => {
  return `
<div class="animate-fadeIn space-y-6">

  <!-- Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
        کدهای تخفیف
      </h1>

      <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
        مدیریت کدهای تخفیف فروشگاه
      </p>
    </div>

    <button
      class="flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-accent text-white font-bold hover:opacity-90 transition-all cursor-pointer">
      <i class="fa-solid fa-plus"></i>
      افزودن کد تخفیف
    </button>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

  <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
    <div class="flex items-center justify-between">

      <div>
        <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          کل کدها
        </p>

        <h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">
          24
        </h3>
      </div>

      <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
        <i class="fa-solid fa-ticket text-2xl text-brand-accent"></i>
      </div>

    </div>
  </div>

  <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
    <div class="flex items-center justify-between">

      <div>
        <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          فعال
        </p>

        <h3 class="text-3xl font-bold mt-2 text-green-500">
          12
        </h3>
      </div>

      <div class="size-14 rounded-xl bg-green-500/10 flex items-center justify-center">
        <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
      </div>

    </div>
  </div>

  <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
    <div class="flex items-center justify-between">

      <div>
        <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          منقضی شده
        </p>

        <h3 class="text-3xl font-bold mt-2 text-red-500">
          5
        </h3>
      </div>

      <div class="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
        <i class="fa-solid fa-clock text-2xl text-red-500"></i>
      </div>

    </div>
  </div>

  <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
    <div class="flex items-center justify-between">

      <div>
        <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          استفاده شده
        </p>

        <h3 class="text-3xl font-bold mt-2 text-yellow-500">
          7
        </h3>
      </div>

      <div class="size-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
        <i class="fa-solid fa-tags text-2xl text-yellow-500"></i>
      </div>

    </div>
  </div>

</div>

  <!-- Table -->
  <div class="overflow-hidden rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

    <div class="overflow-x-auto">

      <table class="w-full text-sm">

        <thead>
          <tr class="border-b dark:text-dark-text-primary text-light-text-primary dark:border-dark-card-border border-light-card-border">
            <th class="text-right p-4 max-sm:text-xs">کد</th>
            <th class="text-right p-4 max-sm:text-xs">درصد تخفیف</th>
            <th class="text-right p-4 max-md:hidden">حداکثر استفاده</th>
            <th class="text-right p-4 max-sm:text-xs">تاریخ انقضا</th>
            <th class="text-right p-4 max-sm:text-xs">وضعیت</th>
            <th class="text-right p-4 max-sm:text-xs">عملیات</th>
          </tr>
        </thead>

        <tbody class="dark:text-dark-text-secondary text-light-text-secondary">

          <tr class="border-b dark:border-dark-card-border border-light-card-border">
            <td class="p-4 font-bold text-brand-accent max-sm:text-xs">SUMMER50</td>
            <td class="p-4 max-sm:text-xs">50%</td>
            <td class="p-4 max-md:hidden">200</td>
            <td class="p-4 max-sm:text-xs">1405/08/01</td>
            <td class="p-4 max-sm:text-xs">
              <span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">فعال</span>
            </td>
            <td class="p-4 flex gap-2 max-sm:text-xs">
              <button class="size-10 flex justify-center items-center text-blue-500 cursor-pointer hover:text-white hover:bg-blue-500 transform-colors duration-300 rounded-xl">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="size-10 flex justify-center items-center text-red-500 cursor-pointer hover:text-white hover:bg-red-500 transform-colors duration-300 rounded-xl max-sm:text-xs">
                <i class="fa-solid fa-trash"></i>
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

export default AdminDiscountPage;