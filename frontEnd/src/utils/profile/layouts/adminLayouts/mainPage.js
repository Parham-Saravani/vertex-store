const AdminProfilePage = () => {
  return `
    <div class="animate-fadeIn space-y-5">
                    <!-- stats cards -->
                    <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">

                        <div
                            class="w-full rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <p class="text-sm dark:text-dark-text-secondary">
                                <i class="fa-solid fa-box-open"></i>
                                کل محصولات
                            </p>
                            <h2
                                class="max-sm:text-sm dark:text-dark-text-primary text-light-text-primary text-3xl font-bold mt-2">
                                120
                            </h2>
                        </div>

                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <p class="text-sm dark:text-dark-text-secondary">
                                <i class="fa-solid fa-bag-shopping"></i>
                                کل سفارش ها
                            </p>
                            <h2
                                class="max-sm:text-sm dark:text-dark-text-primary text-light-text-primary text-3xl font-bold mt-2">
                                84
                            </h2>
                        </div>

                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <p class="text-sm dark:text-dark-text-secondary">
                                <i class="fa-solid fa-users"></i>
                                کاربران
                            </p>
                            <h2
                                class="max-sm:text-sm dark:text-dark-text-primary text-light-text-primary text-3xl font-bold mt-2">
                                41
                            </h2>
                        </div>

                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">
                            <p class="text-sm dark:text-dark-text-secondary">
                                <i class="fa-solid fa-sack-dollar"></i>
                                درآمد کل
                            </p>
                            <h2
                                class="max-sm:text-sm dark:text-dark-text-primary text-light-text-primary text-3xl font-bold mt-2">
                                <span>12,000,465</span>
                                <span>تومان</span>
                            </h2>
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

                    <!-- table -->
                    <div class="max-xl:mt-107 rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

                        <div class="flex justify-between items-center mb-4">
                            <h3 class="dark:text-dark-text-secondary text-light-text-secondary font-bold">
                                آخرین سفارش‌ها
                            </h3>

                            <a href="#"
                                class="hover:text-brand-accent-hover transition-colors duration-300 text-brand-accent text-xs flex items-center gap-1">
                                مشاهده همه
                                <i class="fa-solid fa-chevron-left"></i>
                            </a>
                        </div>

                        <table class="w-full">

                            <thead>
                                <tr
                                    class="dark:text-dark-text-secondary text-light-text-secondary border-b dark:border-dark-divider border-light-divider">
                                    <th class="py-3 text-right">شماره سفارش</th>
                                    <th class="py-3 text-right">کاربر</th>
                                    <th class="py-3 text-right">مبلغ</th>
                                    <th class="py-3 text-right">وضعیت</th>
                                </tr>
                            </thead>

                            <tbody class="dark:text-dark-text-primary text-light-text-primary">

                                <tr>
                                    <td class="py-4">#1542</td>
                                    <td>Parham</td>
                                    <td>4,500,000</td>
                                    <td>
                                        <span class="text-green-500">
                                            تکمیل شده
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>
    `;
};
export default AdminProfilePage;