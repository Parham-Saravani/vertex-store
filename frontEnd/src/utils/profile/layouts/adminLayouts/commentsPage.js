const AdminCommentsPage = () => {
  return `
<div class="animate-fadeIn space-y-6">

  <!-- Header -->
  <div>
    <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
      نظرات کاربران
    </h1>

    <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
      مدیریت نظرات ثبت شده محصولات
    </p>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کل نظرات
                </p>

                <h3 class="text-3xl dark:text-dark-text-primary text-light-text-primary font-bold mt-2">
                    540
                </h3>
            </div>

            <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i class="fa-solid fa-comments text-2xl text-brand-accent"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    در انتظار تایید
                </p>

                <h3 class="text-3xl font-bold mt-2 text-yellow-500">
                    18
                </h3>
            </div>

            <div class="size-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <i class="fa-solid fa-hourglass-half text-2xl text-yellow-500"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    تایید شده
                </p>

                <h3 class="text-3xl font-bold mt-2 text-green-500">
                    490
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
                    رد شده
                </p>

                <h3 class="text-3xl font-bold mt-2 text-red-500">
                    32
                </h3>
            </div>

            <div class="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                <i class="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
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
            <th class="text-right p-4 max-md:text-xs">کاربر</th>
            <th class="text-right p-4 max-md:text-xs max-sm:hidden">محصول</th>
            <th class="text-right p-4 max-md:text-xs">متن نظر</th>
            <th class="text-right p-4 max-md:text-xs">وضعیت</th>
            <th class="text-right p-4 max-md:text-xs">عملیات</th>
          </tr>
        </thead>

        <tbody class="dark:text-dark-text-secondary text-light-text-secondary">

          <tr class="border-b dark:border-dark-card-border border-light-card-border">

            <td class="p-4 max-md:text-xs">Parham</td>

            <td class="p-4 max-md:text-xs max-sm:hidden">MacBook Air M4</td>

            <td class="p-4 max-md:text-xs max-md:w-40 max-md:line-clamp-1 max-md:truncate">
              محصول فوق العاده بود و کیفیت ساخت خیلی خوبی داشت...
            </td>

            <td class="p-4 max-md:text-xs">
              <span class="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                در انتظار تایید
              </span>
            </td>

            <td class="p-4 flex gap-3 max-md:text-xs">

              <button class="text-green-500 cursor-pointer">
                <i class="fa-solid fa-check"></i>
              </button>

              <button class="text-red-500 cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
              </button>

              <button class="text-blue-500 cursor-pointer">
                <i class="fa-solid fa-eye"></i>
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
export default AdminCommentsPage;