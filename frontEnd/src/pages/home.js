const HomePage = () => {
  return `
    <div>
          <div class="rounded-2xl overflow-hidden h-130">
            <img src="./src/assets/images/banner.png" class="object-cover w-full h-full" alt="">
         </div>

         <div class="mt-10">
            <!-- header-->
            <div class="flex items-center justify-between">
              <div class="relative  before:absolute before:w-5 before:h-1 before:bg-brand-primary before:rounded-xl before:top-0 before:bottom-0 before:my-auto">
                  <h1 class="pr-7 font-bold dark:text-dark-text-primary ml-30 text-light-text-primary text-xl">دسته بندی محصولات</h1>
              </div>
              <a href="#" class="flex items-center gap-1.5  text-brand-primary hover:text-brand-primary-hover transition-colors duration-300">
                مشاهده همه
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </a>
            </div>
            <!-- products -->
            <div class="flex items-center gap-4 mt-5">
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl">
                <img src="./src/assets/images/laptop.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">لپ تاپ</h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect  rounded-xl">
                <img src="./src/assets/images/monitor.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">مانیتور</h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect  rounded-xl">
                <img src="./src/assets/images/stuff.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">لوازم جانبی</h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect  rounded-xl">
                <img src="./src/assets/images/mouse.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">ماوس</h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl">
                <img src="./src/assets/images/keyboard.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">کیبورد</h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect  rounded-xl">
                <img src="./src/assets/images/console.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">کنسول بازی</h2>
              </a>
               <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect  rounded-xl">
                <img src="./src/assets/images/camera.png" class="size-45" alt="">
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">دوربین</h2>
              </a>
            </div>
         </div>

       </div>
    `;
};
export default HomePage;