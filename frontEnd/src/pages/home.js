import bannerImage from "/public/homeImages/banner/banner.png"
import cameraImage from "/public/homeImages/camera.png"
import consoleImage from "/public/homeImages/console.png"
import keyboardImage from "/public/homeImages/keyboard.png"
import laptopImage from "/public/homeImages/laptop.png"
import monitorImage from "/public/homeImages/monitor.png"
import mouseImage from "/public/homeImages/mouse.png"
import stuffImage from "/public/homeImages/stuff.png"


const HomePage = () => {
  return `
   <div>
        <div class="relative rounded-2xl overflow-hidden max-lg:h-100 max-md:h-80 max-sm:h-55 h-130">
          <img src="${bannerImage}" class="object-cover w-full h-full" alt="header-banner" />
          <div
            class="absolute max-lg:top-32 max-md:top-25 max-sm:top-13 top-45 left-0 max-sm:right-15 right-30 mx-auto max-sm:w-70 w-180">
            <p class="text-dark-text-primary max-lg:text-4xl max-md:text-3xl max-sm:text-xl text-5xl font-bold">
              قدرت تکنولوژی را تجربه کن
            </p>
            <p
              class="max-sm:mt-1.5 mt-5 text-dark-text-primary max-lg:text-[18px] max-md:text-[13px] max-sm:text-xs text-2xl">
              مجموعه‌ای از بهترین تجهیزات گیمینگ، لپ‌تاپ، مانیتور و لوازم
              جانبی حرفه‌ای.
            </p>
            <button href="#"
              class="flex items-center justify-center max-md:text-xs max-md:mt-4 mt-7 max-md:mr-15 max-sm:mr-5 mr-20 text-dark-text-primary bg-linear-90 from-brand-primary to-brand-accent rounded-xl max-sm:w-50 max-md:w-70 w-100 max-sm:py-2.5 py-4 font-bold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 banner-show-products-btn">مشاهده
              محصولات</button>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <div
              class="relative before:absolute max-sm:before:w-3.5 before:w-5 before:h-1 before:bg-brand-primary before:rounded-xl before:top-0 before:bottom-0 before:my-auto">
              <h1
                class="max-sm:pr-5 pr-7 font-bold dark:text-dark-text-primary text-light-text-primary max-sm:text-[14px] text-xl">
                دسته بندی محصولات
              </h1>
            </div>
            <a href="#"
              class="max-sm:text-xs flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-hover transition-colors duration-300">
              مشاهده همه
              <i class="fa-solid fa-chevron-left text-xs"></i>
            </a>
          </div>
          <!-- Desktop products -->
          <div class="max-sm:hidden grid grid-cols-7 max-lg:grid-cols-7 justify-items-center gap-2 mt-5">
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${laptopImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary  max-lg:text-sm max-md:text-xs text-xl">
                لپ تاپ
              </h2>
            </a>
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${monitorImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                مانیتور
              </h2>
            </a> <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${stuffImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                لوازم جانبی
              </h2>
            </a>
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${mouseImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                موس
              </h2>
            </a>
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${keyboardImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                کیبورد
              </h2>
            </a>
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${consoleImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                کنسول بازی
              </h2>
            </a>
            <a
              class="max-lg:w-26 max-md:w-21 max-xl:w-35 w-45 py-5 border-2 dark:border-dark-card-border border-light-card-border flex flex-col gap-2 items-center glow-effect rounded-xl transition-colors duration-300 dark:hover:border-dark-card-hover-border hover:border-light-card-hover-border cursor-pointer">
              <img src="${cameraImage}" class="size-42 max-xl:size-30 max-lg:size-15" alt="" />
              <h2
                class="font-bold dark:text-dark-text-primary text-light-text-primary max-lg:text-sm max-md:text-xs text-xl">
                دوربین
              </h2>
            </a>
          </div>
          <!-- mobile products -->
          <div class="hidden max-sm:flex justify-center mt-5 gap-2 flex-wrap">
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${laptopImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">لپ تاپ</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${monitorImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">مانیتور</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${stuffImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">لوازم جانبی</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${mouseImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">موس</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${keyboardImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">کیبورد</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${consoleImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">کنسول بازی</p>
            </div>
            <div
              class="rounded-full w-22 h-22 glow-effect flex flex-col items-center justify-center border-2 dark:border-dark-card-border border-light-card-border hover:border-dark-card-hover-border transition-colors duration-300 cursor-pointer">
              <img src="${cameraImage}" class="size-12" alt="">
              <p class="dark:text-dark-text-primary text-light-text-primary text-xs font-bold">دوربین</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-zoom-in" data-aos-duration="1000"
          class="mt-3 max-sm:mb-2 mb-6 flex max-sm:flex-col max-sm:gap-4 items-center justify-between news-background rounded-xl max-sm:py-5 py-10 px-20 border-2 dark:border-dark-card-border border-light-card-border">
          <div>
            <h2 class="dark:text-dark-text-primary text-light-text-primary font-bold max-sm:text-xl text-2xl">
              عضویت در خبرنامه
            </h2>
            <p class="max-sm:text-[13px] max-sm:mt-1 dark:text-dark-text-secondary text-light-text-secondary">
              با عضویت در خبرنامه از جدیدترین محصولات و تخفیف ها باخبر شوید
            </p>
          </div>
          <form
            class="pl-3 rounded-xl dark:bg-dark-input-bg border-2 dark:border-dark-input-border border-light-input-border focus-within:border-dark-input-focus transition-colors duration-300 w-90 h-15 flex items-center justify-between">
            <input type="email"
              class="pr-3 h-full w-[75%] dark:placeholder:text-dark-text-secondary text-[12px] outline-hidden dark:text-dark-text-primary"
              placeholder="ایمیل خود را وارد کنید..." />
            <button
              class="bg-linear-90 from-brand-primary to-brand-accent text-dark-text-primary rounded-xl px-3 py-2 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
              عضویت
            </button>
          </form>
        </div>
      </div>

  `
};
export default HomePage;
