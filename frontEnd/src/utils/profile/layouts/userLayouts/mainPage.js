const UserProfilePage = () => {
  return `
    <!-- profile page content -->
                    <!-- products , favourites , tickets cards -->
                    <div class="animate-fadeIn grid grid-cols-3 gap-4">
                        <div class="relative dark:bg-dark-section-bg bg-light-section-bg rounded-xl border dark:border-dark-input-border border-light-input-border p-5 h-40">
                            <i class="fa-solid fa-bag-shopping absolute right-2 top-4 text-5xl text-brand-accent"></i>
                            <div class="mt-15">
                                <p class="dark:text-dark-text-primary text-light-text-primary font-bold">سفارش های من
                                </p>
                                <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-orders"></div>
                            </div>
                        </div>
                        <div class="relative dark:bg-dark-section-bg bg-light-section-bg rounded-xl border dark:border-dark-input-border border-light-input-border p-5 h-40">
                            <i class="fa-regular fa-heart absolute right-2 top-4 text-5xl text-red-600"></i>
                            <div class="mt-15">
                                <p class="dark:text-dark-text-primary text-light-text-primary font-bold">علاقه مندی ها
                                </p>
                                <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-favourites"></div>
                            </div>
                        </div>
                        <div class="relative dark:bg-dark-section-bg bg-light-section-bg rounded-xl border dark:border-dark-input-border border-light-input-border p-5 h-40">
                            <i class="fa-solid fa-headset absolute right-2 top-4 text-5xl text-blue-500"></i>
                            <div class="mt-15">
                                <p class="dark:text-dark-text-primary text-light-text-primary font-bold">تیکت های من</p>
                                <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md total-ticket"></div>
                            </div>
                        </div>
                    </div>
                    <!-- products and user detail cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <!-- user detail -->
                        <div class="w-full max-h-60 dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border rounded-xl">
                            <h2 class="py-2.5 dark:text-dark-text-primary text-light-text-primary px-4 font-bold">
                                اطلاعات حساب</h2>
                            <hr class="w-full dark:text-dark-divider text-light-divider bg-text-divider">
                            <ul class="py-2 px-4">
                                <li class="flex items-center gap-5 py-2">
                                    <i
                                        class="fa-regular fa-user text-xl dark:text-dark-text-primary text-light-text-primary"></i>
                                    <div>
                                        <h3
                                            class="text-[13px] dark:text-dark-text-primary text-light-text-primary font-normal">
                                            نام کاربری</h3>
                                        <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-orders user-username"></div>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex items-center gap-5 py-2">
                                    <i
                                        class="fa-regular fa-envelope text-xl dark:text-dark-text-primary text-light-text-primary"></i>
                                    <div>
                                        <h3
                                            class="text-[13px] dark:text-dark-text-primary text-light-text-primary font-normal">
                                            ایمیل</h3>
                                        <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md user-email"></div>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex items-center gap-5 py-2">
                                    <i
                                        class="fa-regular fa-calendar text-xl dark:text-dark-text-primary text-light-text-primary"></i>
                                    <div>
                                        <h3
                                            class="text-[13px] dark:text-dark-text-primary text-light-text-primary font-normal">
                                            تاریخ عضویت</h3>
                                        <div class="max-lg:w-15 max-md:w-30 max-sm:w-20 w-30 h-7 mt-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md all-orders user-join-date"></div>
                                        <p class="[direction:ltr] text-[13px] dark:text-dark-text-secondary text-light-text-secondary user-join-date"></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- user orders -->
                        <div class="w-full dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border rounded-xl">
                            <h2 class="py-2.5  dark:text-dark-text-primary text-light-text-primary px-4 font-bold">آخرین
                                سفارش ها</h2>
                            <hr class="w-full dark:text-dark-divider text-light-divider bg-text-divider">
                            <ul class="py-2 px-4 overflow-y-scroll hide-scrollbar  max-h-115 user-orders">
                                <li class="flex py-3 items-center justify-between">
                                    <div class="flex gap-4 items-center">
                                        <div src="./public/images/Alienwarem16R2.png" class="size-14 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
                                        <div>
                                            <p class="w-15 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-10 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-20 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <p class="w-20 h-4 rounded-md animate-pulse bg-gray-300 dark:bg-gray-700"></p>
                                        <span class="bg-gray-300 dark:bg-gray-700 rounded-md size-4 animate-pulse"></span>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex py-3 items-center justify-between">
                                    <div class="flex gap-4 items-center">
                                        <div src="./public/images/Alienwarem16R2.png" class="size-14 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
                                        <div>
                                            <p class="w-15 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-10 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-20 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <p class="w-20 h-4 rounded-md animate-pulse bg-gray-300 dark:bg-gray-700"></p>
                                        <span class="bg-gray-300 dark:bg-gray-700 rounded-md size-4 animate-pulse"></span>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex py-3 items-center justify-between">
                                    <div class="flex gap-4 items-center">
                                        <div src="./public/images/Alienwarem16R2.png" class="size-14 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
                                        <div>
                                            <p class="w-15 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-10 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-20 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <p class="w-20 h-4 rounded-md animate-pulse bg-gray-300 dark:bg-gray-700"></p>
                                        <span class="bg-gray-300 dark:bg-gray-700 rounded-md size-4 animate-pulse"></span>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex py-3 items-center justify-between">
                                    <div class="flex gap-4 items-center">
                                        <div src="./public/images/Alienwarem16R2.png" class="size-14 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
                                        <div>
                                            <p class="w-15 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-10 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-20 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <p class="w-20 h-4 rounded-md animate-pulse bg-gray-300 dark:bg-gray-700"></p>
                                        <span class="bg-gray-300 dark:bg-gray-700 rounded-md size-4 animate-pulse"></span>
                                    </div>
                                </li>
                                <hr class="dark:text-dark-divider text-light-divider">
                                <li class="flex py-3 items-center justify-between">
                                    <div class="flex gap-4 items-center">
                                        <div src="./public/images/Alienwarem16R2.png" class="size-14 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
                                        <div>
                                            <p class="w-15 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-10 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                            <p class="mt-1 w-20 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <p class="w-20 h-4 rounded-md animate-pulse bg-gray-300 dark:bg-gray-700"></p>
                                        <span class="bg-gray-300 dark:bg-gray-700 rounded-md size-4 animate-pulse"></span>
                                    </div>
                                </li>
                                
                                <hr class="dark:text-dark-divider text-light-divider">
                            </ul>
                        </div>
                    </div>
    `;
};
export default UserProfilePage;
