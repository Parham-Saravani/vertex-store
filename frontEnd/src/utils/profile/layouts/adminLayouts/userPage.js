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

                <h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">
                    1284
                </h3>
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
                    کاربران فعال
                </p>

                <h3 class="text-3xl font-bold mt-2 text-green-500">
                    1180
                </h3>
            </div>

            <div class="size-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <i class="fa-solid fa-user-check text-2xl text-green-500"></i>
            </div>

        </div>
    </div>

    <div class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    ادمین‌ها
                </p>

                <h3 class="text-3xl font-bold mt-2 text-brand-accent">
                    3
                </h3>
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

                <h3 class="text-3xl font-bold mt-2 text-blue-500">
                    24
                </h3>
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
          <th class="p-4 text-sm max-sm:hidden">ایمیل</th>
          <th class="p-4 text-sm">نقش</th>
          <th class="p-4 text-sm max-sm:hidden">وضعیت</th>
          <th class="p-4 text-sm max-sm:hidden">عضویت</th>
          <th class="p-4 text-sm">عملیات</th>

        </tr>

      </thead>

      <tbody class="dark:text-dark-text-secondary text-light-text-secondary">

        <tr class="border-b dark:border-dark-card-border border-light-card-border">

          <td class="p-4">1</td>

          <td class="p-4">
            <div class="flex items-center gap-3">
              <span>پرهام</span>
            </div>
          </td>

          <td class="p-4 max-sm:hidden">parham@gmail.com</td>

          <td class="p-4">

            <span class="px-3 py-1 rounded-full text-xs bg-brand-accent/10 text-brand-accent">
              ادمین
            </span>

          </td>

          <td class="p-4 max-sm:hidden">

            <span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">
              فعال
            </span>

          </td>

          <td class="p-4 max-sm:hidden">
            1405/05/01
          </td>

          <td class="p-4">

            <div class="flex items-center gap-2">
              <button class="flex justify-center items-center max-sm:text-xs cursor-pointer size-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                <i class="fa-solid fa-pen"></i>
              </button>

              <button class="flex justify-center items-center max-sm:text-xs cursor-pointer size-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                <i class="fa-solid fa-trash"></i>
              </button>
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