const AdminBrandPage = () => {
  return `
    <div class="animate-fadeIn space-y-6">

                    <!-- Header -->
                    <div class="flex items-center justify-between">

                        <div>
                            <h1 class="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary">
                                برندها
                            </h1>

                            <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                مدیریت برندهای فروشگاه
                            </p>
                        </div>

                        <button
                            class="flex items-center text-xs px-4 py-3 rounded-xl bg-brand-accent text-white font-bold hover:opacity-90 transition-opacity duration-300 cursor-pointer">

                            <i class="fa-solid fa-plus ml-1"></i>
                            افزودن برند

                        </button>

                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">

                        <div
                            class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
                            <div class="flex items-center justify-between">

                                <div>
                                    <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                        کل برندها
                                    </p>

                                    <h3
                                        class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">
                                        18
                                    </h3>
                                </div>

                                <div class="size-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                                    <i class="fa-solid fa-copyright text-2xl text-brand-accent"></i>
                                </div>

                            </div>
                        </div>

                        <div
                            class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
                            <div class="flex items-center justify-between">

                                <div>
                                    <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                        برند فعال
                                    </p>

                                    <h3 class="text-3xl font-bold mt-2 text-green-500">
                                        16
                                    </h3>
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
                                        برند غیرفعال
                                    </p>

                                    <h3 class="text-3xl font-bold mt-2 text-red-500">
                                        2
                                    </h3>
                                </div>

                                <div class="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    <i class="fa-solid fa-ban text-2xl text-red-500"></i>
                                </div>

                            </div>
                        </div>

                        <div
                            class="rounded-xl p-5 border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg">
                            <div class="flex items-center justify-between">

                                <div>
                                    <p class="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                        کل محصولات
                                    </p>

                                    <h3
                                        class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">
                                        124
                                    </h3>
                                </div>

                                <div class="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <i class="fa-solid fa-box-open text-2xl text-blue-500"></i>
                                </div>

                            </div>
                        </div>

                    </div>

                    <!-- Search -->
                    <div
                        class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-4">

                        <div class="relative">

                            <input type="text" placeholder="جستجوی برند..."
                                class="w-full text-xs h-12 rounded-xl border dark:border-dark-input-border border-light-input-border px-12 outline-none dark:text-dark-text-primary text-light-text-primary">

                            <i
                                class="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 dark:text-dark-text-secondary text-light-text-secondary">
                            </i>

                        </div>

                    </div>

                    <!-- Brands -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                        <!-- Apple -->
                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

                            <div class="flex items-center justify-between">

                                <img src="./public/images/brands/apple.png" class="size-14 object-contain" alt="">

                                <span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">
                                    فعال
                                </span>

                            </div>

                            <div class="mt-5">

                                <h3 class="font-bold text-lg dark:text-dark-text-primary text-light-text-primary">
                                    Apple
                                </h3>

                                <p class="mt-1 text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                    24 محصول
                                </p>

                            </div>

                            <div class="flex gap-2 mt-5">

                                <button
                                    class="flex-1 h-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300">

                                    <i class="fa-solid fa-pen"></i>

                                </button>

                                <button
                                    class="flex-1 h-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">

                                    <i class="fa-solid fa-trash"></i>

                                </button>

                            </div>

                        </div>

                        <!-- Asus -->
                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

                            <div class="flex items-center justify-between">

                                <img src="./public/images/brands/asus.png" class="size-14 object-contain" alt="">

                                <span class="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">
                                    فعال
                                </span>

                            </div>

                            <div class="mt-5">

                                <h3 class="font-bold text-lg dark:text-dark-text-primary text-light-text-primary">
                                    ASUS
                                </h3>

                                <p class="mt-1 text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                    18 محصول
                                </p>

                            </div>

                            <div class="flex gap-2 mt-5">

                                <button
                                    class="flex-1 h-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300">
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button
                                    class="flex-1 h-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                                    <i class="fa-solid fa-trash"></i>
                                </button>

                            </div>

                        </div>

                        <!-- Razer -->
                        <div
                            class="rounded-xl border dark:border-dark-card-border border-light-card-border dark:bg-dark-section-bg bg-light-section-bg p-5">

                            <div class="flex items-center justify-between">

                                <img src="./public/images/brands/razer.png" class="size-14 object-contain" alt="">

                                <span class="px-3 py-1 rounded-full text-xs bg-red-500/10 text-red-500">
                                    غیرفعال
                                </span>

                            </div>

                            <div class="mt-5">

                                <h3 class="font-bold text-lg dark:text-dark-text-primary text-light-text-primary">
                                    Razer
                                </h3>

                                <p class="mt-1 text-sm dark:text-dark-text-secondary text-light-text-secondary">
                                    9 محصول
                                </p>

                            </div>

                            <div class="flex gap-2 mt-5">

                                <button
                                    class="flex-1 h-10 rounded-xl text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300">
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button
                                    class="flex-1 h-10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                                    <i class="fa-solid fa-trash"></i>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
    `;
};
export default AdminBrandPage;