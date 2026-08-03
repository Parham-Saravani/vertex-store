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

                            <button class="text-sm font-bold h-12 rounded-xl bg-brand-primary text-white">
                                اعمال فیلتر
                            </button>

                        </div>
                    </div>

                    <!-- Table -->
                    <div
                        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg overflow-hidden">

                        <div class="overflow-x-auto">

                            <table class="w-full">

                                <thead
                                    class="dark:text-dark-text-primary text-light-text-primary border-b dark:border-dark-card-border border-light-card-border">

                                    <tr>
                                        <th class="py-4 px-4 text-right">تصویر</th>
                                        <th class="py-4 px-4 text-right">نام محصول</th>
                                        <th class="py-4 px-4 text-right">دسته بندی</th>
                                        <th class="py-4 px-4 text-right">برند</th>
                                        <th class="py-4 px-4 text-right">قیمت</th>
                                        <th class="py-4 px-4 text-right">موجودی</th>
                                        <th class="py-4 px-4 text-right">وضعیت</th>
                                        <th class="py-4 px-4 text-center">عملیات</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr
                                        class="dark:text-dark-text-secondary text-light-text-secondary text-xs border-b dark:border-dark-card-border border-light-card-border">

                                        <td class="px-4 py-4">
                                            <img src="./public/images/Alienwarem16R2.png" class="size-14 object-contain"
                                                alt="">
                                        </td>

                                        <td class="px-4 py-4 font-bold">
                                            MacBook Pro M4
                                        </td>

                                        <td class="px-4 py-4">
                                            لپتاپ
                                        </td>

                                        <td class="px-4 py-4">
                                            Apple
                                        </td>

                                        <td class="px-4 py-4">
                                            120,000,000 تومان
                                        </td>

                                        <td class="px-4 py-4">
                                            8
                                        </td>

                                        <td class="px-4 py-4">
                                            <span class="px-3 py-1 rounded-full text-green-500 bg-green-500/10 text-xs">
                                                فعال
                                            </span>
                                        </td>

                                        <td class="px-4 py-4">

                                            <div class="flex items-center justify-center gap-3">

                                                <button
                                                    class="size-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300">
                                                    <i class="fa-solid fa-pen"></i>
                                                </button>

                                                <button
                                                    class="size-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
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
    `;
};
export default AdminProductsPage;
