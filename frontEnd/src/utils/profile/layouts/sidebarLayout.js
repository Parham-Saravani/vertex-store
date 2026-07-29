const AdminSidebarContent = () => {
  return `
     <!-- overview -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl profile-menu-active menu-item">
                        <div>
                            <i class="fa-solid fa-gauge-high"></i>
                            نمای کلی
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-setext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item" data-page="adminDashboard">
                                <i class="fa-solid fa-user"></i>
                                داشبورد
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- store -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl menu-item">
                        <div>
                            <i class="fa-solid fa-store"></i>
                            فروشگاه
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="products">
                                <i class="fa-solid fa-box-open"></i>
                                محصولات
                            </li>
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="sort">
                                <i class="fa-solid fa-layer-group"></i>
                                دسته بندی ها
                            </li>
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="brands">
                                <i class="fa-solid fa-tags"></i>
                                برندها
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- sale -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl menu-item">
                        <div>
                            <i class="fa-solid fa-sack-dollar"></i>
                            فروش
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">

                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="orders">
                                <i class="fa-solid fa-bag-shopping"></i>
                                سفارش ها
                            </li>

                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="discount">
                                <i class="fa-solid fa-percent"></i>
                                کدهای تخفیف
                            </li>

                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="comments">
                                <i class="fa-solid fa-comment-dots"></i>
                                نظرات
                            </li>

                        </ul>
                    </div>
                </div>
                <!-- users -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl menu-item">
                        <div>
                            <i class="fa-solid fa-users"></i>
                            کاربران
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="users">
                                <i class="fa-solid fa-users"></i>
                                کاربران
                            </li>
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="roles">
                                <i class="fa-solid fa-user-shield"></i>
                                نقش ها
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- support -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl menu-item">
                        <div>
                            <i class="fa-solid fa-headset"></i>
                            پشتیبانی
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secotext-dark-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item"  data-page="tickets">
                                <i class="fa-solid fa-headset"></i>
                                تیکت ها
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- system -->
                <div>
                    <button class="flex items-center justify-between w-full dark:text-dark-text-primary dark:hover:bg-dark-card-hover text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-light-card-hover rounded-xl menu-item">
                        <div>
                            <i class="fa-solid fa-server"></i>
                            سیستم
                        </div>
                        <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="h-0 overflow-hidden transition-height duration-300 collapse-item">
                        <ul class="flex flex-col items-end space-y-1 mt-2 pr-6">
                            <li class="w-full text-[13px] dark:text-dark-text-secondary text-light-text-secondary py-3 px-2 cursor-pointer transition-colors duration-300 dark:hover:text-dark-text-primary hover:text-light-text-primary font-bold rounded-xl user-menu-items dark:hover:bg-dark-card-hover hover:bg-light-card-hover submenu-item" data-page="setting">
                                <i class="fa-solid fa-gear"></i>
                                تنظیمات
                            </li>
                        </ul>
                    </div>
                </div>
    `;
};
const UserSidebarContent = () => {
  return `
    <ul class="flex flex-col gap-1">
        <li class="dark:text-dark-text-primary text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-brand-accent font-bold rounded-xl user-menu-items profile-menu-active"
            data-page="userDashboard">
            <i class="fa-solid fa-user"></i>
             پروفایل من
        </li>
        <li class="dark:text-dark-text-primary text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-brand-accent font-bold rounded-xl user-menu-items"
            data-page="userOrders">
            <i class="fa-solid fa-bag-shopping"></i>
             سفارش های من
        </li>
        <li class="dark:text-dark-text-primary text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-brand-accent font-bold rounded-xl user-menu-items"
            data-page="userFavourites">
            <i class="fa-solid fa-heart"></i>
             علاقه مندی ها
        </li>
        <li class="dark:text-dark-text-primary text-light-text-primary py-3 px-2 cursor-pointer transition-colors duration-300 hover:text-dark-text-primary hover:bg-brand-accent font-bold rounded-xl user-menu-items"
            data-page="userTickets">
            <i class="fa-solid fa-headset"></i>
             تیکت های من
        </li>
      </ul>
    `;
};
const changeSidebarContentHandler = (role) => {
  const menuContainer = document.querySelector(".menu-content");
  if (role === "admin") {
    changeSidebarContent(AdminSidebarContent());
  } else {
    changeSidebarContent(UserSidebarContent());
  }
};
const changeSidebarContent = (content) => {
  menuContainer.innerHTML = "";
  menuContainer.insertAdjacentHTML("afterbegin", content);
};
export default changeSidebarContentHandler;
