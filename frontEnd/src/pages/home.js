import bannerImage from "../assets/images/banners/banner.png"
import cameraImage from "../assets/images/camera.png"
import consoleImage from "../assets/images/console.png"
import keyboardImage from "../assets/images/keyboard.png"
import laptopImage from "../assets/images/laptop.png"
import monitorImage from "../assets/images/monitor.png"
import mouseImage from "../assets/images/mouse.png"
import stuffImage from "../assets/images/stuff.png"


const HomePage = () => {
  return `
       <div> 
          <div class="relative rounded-2xl animate-fadeIn overflow-hidden max-sm:h-55 h-130">
            <img src="${bannerImage}" class="object-cover w-full h-full" alt=""/>
            <div class="absolute max-sm:top-10 top-45 left-0 max-sm:right-15 right-30 mx-auto max-sm:w-70 w-180">
              <p class="text-dark-text-primary max-sm:text-xl text-5xl font-bold">
                قدرت تکنولوژی را تجربه کن
              </p>
              <p class="max-sm:mt-1.5 mt-5 text-dark-text-primary max-sm:text-xs text-2xl">
                مجموعه‌ای از بهترین تجهیزات گیمینگ، لپ‌تاپ، مانیتور و لوازم
                جانبی حرفه‌ای.
              </p>
              <button href="#" class="flex items-center justify-center max-sm:text-xs max-sm:mt-4 mt-7 max-sm:mr-5 mr-20 text-dark-text-primary bg-linear-90 from-brand-primary to-brand-accent rounded-xl max-sm:w-50 w-100 max-sm:py-2.5 py-4 font-bold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 banner-show-products-btn" >مشاهده محصولات</button>
            </div>
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <div class="relative before:absolute max-sm:before:w-3.5 before:w-5 before:h-1 before:bg-brand-primary before:rounded-xl before:top-0 before:bottom-0 before:my-auto">
                <h1 class="max-sm:pr-5 pr-7 font-bold dark:text-dark-text-primary text-light-text-primary max-sm:text-[14px] text-xl">
                  دسته بندی محصولات
                </h1>
              </div>
              <a href="#" class="max-sm:text-xs flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-hover transition-colors duration-300">
                مشاهده همه
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </a>
            </div>
            <!-- Desktop products -->
            <div class="max-sm:hidden flex items-center justify-center gap-4 mt-5">
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${laptopImage}" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  لپ تاپ
                </h2>
              </a>
              <a
                class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${monitorImage}" class="size-45" alt=""/> <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  مانیتور
                </h2>
              </a> <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${stuffImage}" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  لوازم جانبی
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${mouseImage}" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  ماوس
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${keyboardImage}" class="size-45" alt=""
                />
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  کیبورد
                </h2>
              </a>
              <a class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer"> 
                <img src="${consoleImage}" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  کنسول بازی
                </h2>
              </a>
              <a
                class="w-52 py-8 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
                <img src="${cameraImage}" class="size-45" alt=""/>
                <h2 class="font-bold dark:text-dark-text-primary text-light-text-primary text-2c text-xl">
                  دوربین
                </h2>
              </a>
            </div>
            <!-- mobile products -->
            <div class="hidden max-sm:flex justify-center mt-5 gap-2 flex-wrap">
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/laptop.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">لپ تاپ</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/monitor.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">مانیتور</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/stuff.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">لوازم جانبی</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/mouse.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">ماوس</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/keyboard.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">کیبورد</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/console.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">کنسول بازی</p>
              </div>
              <div class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
                <img src="./src/assets/images/camera.png" class="size-12" alt="">
                <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">دوربین</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-zoom-in" data-aos-duration="1000" class="mt-3 max-sm:mb-2 mb-6 flex max-sm:flex-col max-sm:gap-4 items-center justify-between news-background rounded-xl max-sm:py-5 py-10 px-20 border-2 dark:border-dark-card-border border-light-card-border">
            <div>
              <h2 class="dark:text-dark-text-primary text-light-text-primary font-bold max-sm:text-xl text-2xl">
                عضویت در خبرنامه
              </h2>
              <p class="max-sm:text-[13px] max-sm:mt-1 dark:text-dark-text-secondary text-light-text-secondary">
                با عضویت در خبرنامه از جدیدترین محصولات و تخفیف ها باخبر شوید
              </p>
            </div>
            <form class="pl-3 rounded-xl dark:bg-dark-input-bg border-2 dark:border-dark-input-border border-light-input-border focus-within:border-dark-input-focus transition-colors duration-300 w-90 h-15 flex items-center justify-between">
              <input type="email" class="pr-3 h-full w-[75%] dark:placeholder:text-dark-text-secondary text-[12px] outline-hidden dark:text-dark-text-primary" placeholder="ایمیل خود را وارد کنید..."/>
              <button class="bg-linear-90 from-brand-primary to-brand-accent text-dark-text-primary rounded-xl px-3 py-2 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
                عضویت
              </button>
            </form>
          </div>
        </div> 
    `;
};
export default HomePage;
