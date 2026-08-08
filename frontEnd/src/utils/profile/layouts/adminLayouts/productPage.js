const AdminProductsPage = () => {
  return `
    <div class="animate-fadeIn space-y-6">

                    <!-- Header -->
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
                                محصولات
                            </h1>
                            <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                مدیریت محصولات فروشگاه
                            </p>
                        </div>

                        <button
                            class="flex items-center text-xs px-4 py-3 rounded-xl bg-brand-accent text-white font-bold hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                            <i class="fa-solid fa-plus ml-1"></i>
                            افزودن محصول
                        </button>
                    </div>

                    <!-- Stats -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div
        class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    کل محصولات
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-products"></div>
            </div>

            <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i class="fa-solid fa-box-open text-2xl text-brand-accent"></i>
            </div>

        </div>

    </div>

    <div
        class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    محصولات فعال
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md active-products"></div>
            </div>

            <div class="size-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
            </div>

        </div>

    </div>

    <div
        class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    ناموجود
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md not-available-products"></div>
            </div>

            <div class="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                <i class="fa-solid fa-boxes-stacked text-2xl text-red-500"></i>
            </div>

        </div>

    </div>

    <div
        class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">

        <div class="flex items-center justify-between">

            <div>
                <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                    دسته‌بندی‌ها
                </p>

                <div class="w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md products-category"></div>
            </div>

            <div class="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <i class="fa-solid fa-layer-group text-2xl text-blue-500"></i>
            </div>

        </div>

    </div>

</div>

                    <!-- Filters -->
                    <div
                        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4">

                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                            <input type="text" placeholder="جستجو محصول..."
                                class="h-12 text-xs rounded-xl border dark:text-dark-text-secondary text-light-text-secondary dark:border-dark-input-border border-light-input-border px-4 outline-none">

                            <select
                                class="h-12 text-xs dark:text-dark-text-secondary text-light-text-secondary rounded-xl border dark:border-dark-input-border border-light-input-border px-4 outline-none">
                                <option>همه دسته بندی ها</option>
                            </select>

                            <select
                                class="h-12 text-xs rounded-xl border dark:text-dark-text-secondary text-light-text-secondary dark:border-dark-input-border border-light-input-border px-4 outline-none">
                                <option>همه برندها</option>
                            </select>

                            <button class="text-sm font-bold h-12 rounded-xl bg-brand-primary text-white cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                                اعمال فیلتر
                            </button>

                        </div>
                    </div>

                    
                    <!-- Table -->
                    <div class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full">

                                <thead class="dark:text-dark-text-primary text-light-text-primary border-b dark:border-dark-card-border border-light-card-border">

                                    <tr>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">تصویر</th>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-sm:text-xs">نام محصول</th>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-sm:hidden">دسته بندی</th>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-md:hidden max-sm:hidden">برند</th>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-sm:hidden">قیمت</th>
                                        <th class="py-4 px-4 text-right max-lg:text-xs max-md:hidden max-sm:hidden">موجودی</th>
                                        <th class="py-4 px-4 text-center max-lg:text-xs max-sm:text-xs">عملیات</th>
                                    </tr>

                                </thead>

                                <tbody class="admin-products-table-body">
                                    <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">

                                            <td class="px-4 py-4">
                                            <div class="size-14 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4">
                                            <div class="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                        <td class="px-4 py-4">
                                        <div class="flex justify-center gap-2">
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                        </div>
                                        </td>

                                    </tr>                                
                                    <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">

                                            <td class="px-4 py-4">
                                            <div class="size-14 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4">
                                            <div class="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                        <td class="px-4 py-4">
                                        <div class="flex justify-center gap-2">
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                        </div>
                                        </td>

                                    </tr>                                
                                    <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">

                                            <td class="px-4 py-4">
                                            <div class="size-14 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4">
                                            <div class="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                        <td class="px-4 py-4">
                                        <div class="flex justify-center gap-2">
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                        </div>
                                        </td>

                                    </tr>                                
                                    <tr class="border-b dark:border-dark-card-border border-light-card-border animate-pulse">

                                            <td class="px-4 py-4">
                                            <div class="size-14 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4">
                                            <div class="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-sm:hidden">
                                            <div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                            <td class="px-4 py-4 max-md:hidden max-sm:hidden">
                                            <div class="h-4 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                                            </td>

                                        <td class="px-4 py-4">
                                        <div class="flex justify-center gap-2">
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                            <div class="size-10 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
                                        </div>
                                        </td>

                                    </tr>                                
                                </table>

                        </div>

                    </div>

                    <div class="hidden mt-10 mb-6 [direction:ltr] w-full flex gap-2 items-center justify-center pagination-container">
                        <button class="flex items-center justify-center text-[15px] dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer previous-page"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="flex gap-1 [direction:rtl] pagination-buttons">

                        </div>
                        <button class="flex items-center justify-center text-[15px] dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer  next-page"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>

    </div>
    `;
};
export default AdminProductsPage;

