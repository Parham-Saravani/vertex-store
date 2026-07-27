const OrderPage = () => {
  return;
  `
     <!-- orders -->
    <div class="pt-7 px-5 w-full">
            <div class="flex justify-between items-center">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary">سفارش ها</h2>
                <div class="flex items-center gap-3">
                    <p class="dark:text-dark-text-primary text-light-text-primary">دسته بندی:</p>
                    <div class="relative w-50 flex items-end">
                        <button class="px-3 py-2.5 w-full flex justify-between items-center dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border rounded-xl cursor-pointer transition-colors duration-300 dark:hover:bg-dark-card-hover hover:bg-light-card-hover">
                            <p class="text-xs dark:text-dark-text-primary text-light-text-primary">همه</p>
                            <i class="fa-solid fa-chevron-down text-xs dark:text-dark-text-primary text-light-text-primary"></i>
                        </button>
                        <div class="hidden absolute top-12 w-full dark:bg-dark-section-bg bg-light-section-bg rounded-xl order-list">
                            <ul class="w-full flex flex-col gap-1">
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer order-active">همه</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">درحال پردازش</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">ارسال شده</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">تحویل شده</li>
                                <li class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 rounded-xl dark:hover:bg-dark-card-hover hover:bg-light-card-hover text-xs py-2.5 px-2 cursor-pointer">لغو شده</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1 mt-10">
                <div class="w-full flex justify-between items-center rounded-xl px-3 py-4 dark:bg-dark-section-bg bg-light-section-bg border dark:border-dark-card-border border-light-card-border cursor-pointer transition-colors duration-300 dark:hover:bg-dark-card-hover hover:bg-light-card-hover">
                    <div class="flex items-center gap-7">
                        <p class="flex gap-1 text-xs items-center dark:text-dark-text-primary text-light-text-primary">
                            <span>کد سفارش:</span>
                            <span>#89034128</span>
                        </p>
                        <p class="flex text-xs gap-2 items-center dark:text-dark-text-primary text-light-text-primary">
                            <span>تاریخ:</span>
                            <span>14 تیر 1403</span>
                        </p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="text-xs bg-green-700/40 text-green-600 px-2 py-1 rounded-lg">ارسال شده</span>
                        <button class="flex items-center justify-center rounded-lg px-0.5 py-1 cursor-pointer hover:scale-105 transition-transform duration-300">
                            <i class="fa-solid fa-chevron-left text-[11px] dark:text-dark-text-primary text-light-text-primary"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    `;
};
export default OrderPage;