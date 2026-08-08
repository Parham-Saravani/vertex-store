const AdminProfilePage = () => {
  return `
    <div class="animate-fadeIn space-y-5">
                    <!-- stats cards -->
                    <!-- Stats -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">

    <!-- Products -->
    <div
        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کل محصولات
                </p>
                <div class="w-28 h-8 mt-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-products"></div>
            </div>
            <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i class="fa-solid fa-box-open text-2xl text-brand-accent"></i>
            </div>
        </div>
    </div>

    <!-- Orders -->
    <div
        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کل سفارش‌ها
                </p>
                <div class="w-28 h-8 mt-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-orders"></div>
            </div>
            <div class="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <i class="fa-solid fa-bag-shopping text-2xl text-blue-500"></i>
            </div>
        </div>

    </div>

    <!-- Users -->
    <div
        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کاربران
                </p>
                <div class="w-28 h-8 mt-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-users"></div>
            </div>
            <div class="size-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <i class="fa-solid fa-users text-2xl text-purple-500"></i>
            </div>
        </div>

    </div>

    <!-- Income -->
    <div
        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    درآمد کل
                </p>
                <div class="w-28 h-8 mt-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-income"></div>
            </div>
            <div class="size-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <i class="fa-solid fa-sack-dollar text-2xl text-green-500"></i>
            </div>
        </div>
    </div>
</div>

                    <!-- charts -->
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 h-100">

                        <div
                            class="h-100 xl:col-span-2 rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <h3 class="dark:text-dark-text-secondary text-light-text-secondary font-bold mb-4">
                                فروش 7 روز اخیر
                            </h3>

                            <div class="h-80 flex justify-center relative">
                                <canvas id="salesChart"></canvas>
                            </div>
                        </div>

                        <div
                            class="h-100 rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <h3 class="dark:text-dark-text-secondary text-light-text-secondary font-bold mb-4">
                                پرفروش‌ ترین محصولات
                            </h3>

                            <div class="h-80 flex justify-center relative">
                                <canvas id="productsChart"></canvas>
                            </div>
                        </div>

                    </div>
    </div>
    `;
};
export default AdminProfilePage;