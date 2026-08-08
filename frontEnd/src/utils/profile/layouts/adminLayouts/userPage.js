const AdminUsersPage = () => {
  return `
<div class="animate-fadeIn space-y-6">

  <!-- Header -->
  <div class="flex items-center justify-between">

    <div>
      <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
        کاربران
      </h1>

      <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
        مدیریت کاربران فروشگاه
      </p>
    </div>

  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کل کاربران
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-users"></div>
            </div>

            <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i class="fa-solid fa-users text-2xl text-brand-accent"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کاربران حذف شده
                </p>

               <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-deleted-users"></div>
            </div>

            <div class="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                <i class="fa-solid fa-trash text-2xl text-red-500"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    ادمین‌ها
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-admins"></div>
            </div>

            <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i class="fa-solid fa-user-shield text-2xl text-brand-accent"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کاربران جدید
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-new-users"></div>
            </div>

            <div class="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <i class="fa-solid fa-user-plus text-2xl text-blue-500"></i>
            </div>

        </div>
    </div>

</div>

  <!-- Search -->
  <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4">

    <div class="relative">

      <input
        type="text"
        placeholder="جستجوی کاربر..."
        class="w-full text-xs h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-12 outline-none dark:text-dark-text-primary text-light-text-primary">

      <i class="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 dark:text-dark-text-secondary text-light-text-secondary"></i>

    </div>

  </div>

  <!-- Users -->
  <div class="space-y-4">
<div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg overflow-hidden">

  <div class="overflow-x-auto">

    <table class="w-full">

      <thead class="border-b dark:border-dark-card-border border-light-card-border">

        <tr class="text-right dark:text-dark-text-primary text-light-text-primary">

          <th class="p-4 text-sm">ID</th>
          <th class="p-4 text-sm">نام کاربری</th>
          <th class="p-4 text-sm max-md:hidden">ایمیل</th>
          <th class="p-4 text-sm">نقش</th>
          <th class="p-4 text-sm max-xl:hidden max-sm:hidden">وضعیت</th>
          <th class="p-4 text-sm max-sm:hidden">عضویت</th>
          <th class="p-4 text-sm">عملیات</th>

        </tr>

      </thead>

      <tbody class="dark:text-dark-text-secondary text-light-text-secondary users-table-body">

        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">
            <div class="w-5 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-md:hidden">
          <div class="w-35 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-15 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            <div class="w-10 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-sm:hidden">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>

              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
            </div>

          </td>

        </tr>
        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">
            <div class="w-5 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-md:hidden">
          <div class="w-35 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-15 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            <div class="w-10 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-sm:hidden">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>

              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
            </div>

          </td>

        </tr>
        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">
            <div class="w-5 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-md:hidden">
          <div class="w-35 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-15 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            <div class="w-10 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-sm:hidden">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>

              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
            </div>

          </td>

        </tr>
        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">
            <div class="w-5 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-md:hidden">
          <div class="w-35 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-15 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            <div class="w-10 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-sm:hidden">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>

              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
            </div>

          </td>

        </tr>
        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">
            <div class="w-5 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-md:hidden">
          <div class="w-35 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">
            <div class="w-15 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-xl:hidden max-sm:hidden">
            <div class="w-10 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4 max-sm:hidden">
            <div class="w-20 h-5 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>

              <div class="size-10 animate-pulse rounded-md dark:bg-gray-700 bg-gray-300"></div>
            </div>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>
    

  </div>

</div>
`;
};

export default AdminUsersPage;