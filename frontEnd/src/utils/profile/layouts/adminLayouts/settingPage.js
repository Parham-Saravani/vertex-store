const AdminSettingsPage = () => {
  return `
<div class="animate-fadeIn space-y-6">

  <!-- Header -->
  <div>
    <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
      تنظیمات فروشگاه
    </h1>

    <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
      مدیریت تنظیمات کلی سایت و فروشگاه
    </p>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-3 items-center gap-6">

    <!-- Sidebar -->
    <div
      class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4 h-fit">

      <ul class="space-y-2">

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl bg-brand-accent text-white font-bold cursor-pointer">
            عمومی
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            لوگو و برندینگ
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            تماس با ما
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            پیامک
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            ایمیل
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            درگاه پرداخت
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            SEO
          </button>
        </li>

        <li>
          <button class="w-full text-right px-4 py-3 rounded-xl dark:text-dark-text-secondary text-light-text-secondary hover:bg-brand-accent/10 transition-colors duration-300 cursor-pointer">
            امنیت
          </button>
        </li>

      </ul>

    </div>

    <!-- Content -->
    <div class="xl:col-span-2 space-y-4">

      <div
        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

        <h3 class="font-bold text-lg mb-5 dark:text-dark-text-primary text-light-text-primary">
          تنظیمات عمومی
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label class="text-sm mb-2 block dark:text-dark-text-primary text-light-text-primary">نام فروشگاه</label>
            <input type="text" value="Vertex" class="outline-hidden focus:border-dark-input-focus dark:text-dark-text-secondary text-light-text-secondary w-full h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-4 bg-transparent transition-colors duration-300">
          </div>

          <div>
            <label class="text-sm mb-2 block dark:text-dark-text-primary text-light-text-primary">عنوان سایت</label>
            <input type="text" value="تجهیزات دیجیتال و گیمینگ | Vertex" class="outline-hidden focus:border-dark-input-focus dark:text-dark-text-secondary text-light-text-secondary w-full h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-4 bg-transparent transition-colors duration-300 document-title">
          </div>

        </div>
      </div>

      <!-- Maintenance -->
      <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

        <div class="flex items-center justify-between">

          <div>

            <h3 class="font-bold dark:text-dark-text-primary text-light-text-primary">
              حالت تعمیر سایت
            </h3>

            <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary mt-1">
              در این حالت کاربران قادر به استفاده از سایت نیستند.
            </p>

          </div>

          <label for="theme-toggle" class="cursor-pointer w-15 h-7 rounded-full theme-toggle-wrapper">
              <input id="theme-toggle" type="checkbox" class="hidden">
              <div class="theme-toggle-bg w-full h-full rounded-full transition-colors duration-300 dark:bg-dark-active-bg bg-light-active-bg relative before:absolute before:w-5.5 before:h-5.5 before:top-0 before:bottom-0 before:my-auto before:left-1 before:bg-dark-text-primary before:rounded-full before:transition-left before:duration-300"></div>
          </label>

        </div>

      </div>

      <!-- Save -->
      <div class="flex justify-end">

        <button class="w-full px-6 py-3 rounded-xl bg-brand-accent text-white font-bold hover:bg-brand-accent/70 transition-colors duration-300 cursor-pointer submit-settings">
          ذخیره تنظیمات
        </button>

      </div>

    </div>

  </div>

</div>
`;
};

export default AdminSettingsPage;