const HomePage = () => {
  return `
   <div class="animate-fadeIn">
          <div class="relative rounded-2xl overflow-hidden h-130">
            <img
              src="./src/assets/images/banner.png"
              class="object-cover w-full h-full" alt=""/>
            <div class="absolute top-45 left-0 right-30 mx-auto w-180">
              <p class="text-dark-text-primary text-5xl font-bold">
                قدرت تکنولوژی را تجربه کن
              </p>
              <p class="mt-5 text-dark-text-primary text-2xl">
                مجموعه‌ای از بهترین تجهیزات گیمینگ، لپ‌تاپ، مانیتور و لوازم
                جانبی حرفه‌ای.
              </p>
              <a href="#" class="flex items-center justify-center mt-7 mr-20 text-dark-text-primary bg-linear-90 from-brand-primary to-brand-accent rounded-xl w-100 py-4 font-bold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5" >مشاهده محصولات</a>
            </div>
          </div>

          <div class="mt-10">
            <div class="flex items-center justify-between">
              <div class="relative before:absolute before:w-5 before:h-1 before:bg-brand-primary before:rounded-xl before:top-0 before:bottom-0 before:my-auto">
                <h1 class="pr-7 font-bold dark:text-dark-text-primary ml-30 text-light-text-primary text-xl">
                  دسته بندی محصولات
                </h1>
              </div>
              <a href="#" class="flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-hover transition-colors duration-300">
                مشاهده همه
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </a>
            </div>

            <div class="flex items-center gap-4 mt-5">
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/laptop.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  لپ تاپ
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/monitor.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  مانیتور
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/stuff.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  لوازم جانبی
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/mouse.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  ماوس
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/keyboard.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  کیبورد
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/console.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  کنسول بازی
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="./src/assets/images/camera.png" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  دوربین
                </h2>
              </a>
            </div>
          </div>

          <div data-aos="fade-zoom-in" data-aos-duration="1000" class="my-6 flex items-center justify-between news-background rounded-xl py-10 px-20 border-2 dark:border-dark-card-border border-light-card-border">
            <div>
              <h2 class="dark:text-dark-text-primary text-light-text-primary font-bold text-2xl">
                عضویت در خبرنامه
              </h2>
              <p class="dark:text-dark-text-secondary text-light-text-secondary">
                با عضویت در خبرنامه از جدیدترین محصولات و تخفیف ها باخبر شوید
              </p>
            </div>
            <form class="pl-3 rounded-xl dark:bg-dark-input-bg border dark:border-dark-input-border border-light-input-border w-90 h-15 flex items-center justify-between">
              <input type="email" class="pr-3 h-full w-[75%] dark:placeholder:text-dark-text-secondary text-[12px] outline-hidden dark:text-dark-text-primary" placeholder="ایمیل خود را وارد کنید..."/>
              <button class="bg-linear-90 from-brand-primary to-brand-accent text-dark-text-primary rounded-xl px-3 py-2 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                عضویت
              </button>
            </form>
          </div> 
      </di>
    `;
};
export default HomePage;
