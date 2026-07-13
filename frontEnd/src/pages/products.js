const ProductsPage = () => {
  return `
       <div class="animate-fadeIn">
          <!-- BreadCrumb -->
          <div class="flex items-center breadcrumb">
            <a href="#" class="dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:text-brand-accent-hover">صفحه اصلی</a>
            <p class="text-xl mt-1 dark:text-dark-text-primary text-light-text-primary px-2.5">></p>
            <a href="#" class="text-brand-accent transition-colors duration-300 hover:text-brand-accent-hover">محصولات</a>
          </div>

          <!-- content -->
          <div class="mt-2 mb-4 flex gap-4">
            <div class="w-[80%]">
              <!-- sort content -->
              <div class="border dark:border-dark-card-border border-light-card-border px-6 py-3 dark:bg-dark-section-bg bg-light-section-bg rounded-xl flex w-full justify-between items-center">
                <p class="dark:text-dark-text-primary text-light-text-primary">نمایش 120 محصول</p>
                <div>
                  <div class="flex items-center gap-2">
                   <p class="dark:text-dark-text-primary text-light-text-primary">مرتب سازی:</p>
                   <!-- dropDown -->
                    <div class="relative w-40 mr-3">
                      <button class="dark:bg-dark-card-hover bg-light-card-hover border dark:border-dark-card-border border-light-card-border dark:text-dark-text-primary text-light-text-primary px-3 py-2 rounded-xl flex items-center justify-between w-full cursor-pointer sort-btn">
                        <p>براساس</p>
                        <i class="fa-solid fa-chevron-down"></i>
                      </button>
                      <ul class="absolute hidden top-12 right-0 left-0 mx-auto z-10 rounded-xl dark:bg-dark-card-hover bg-light-card-hover w-full sort-list">
                        <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-xl px-2 py-2 cursor-pointer sort-items">پرفروش ترین</li>
                        <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-xl px-2 py-2 cursor-pointer sort-items">محبوب ترین</li>
                        <li class="text-[13px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:bg-brand-accent hover:text-dark-text-primary rounded-xl px-2 py-2 cursor-pointer sort-items">جدید ترین</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- products-->
              <div class="my-3 flex flex-wrap gap-3 w-full">
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/laptop.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/camera.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/monitor.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/mouse.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/keyboard.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/console.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/stuff.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/stuff.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/mouse.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/camera.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/laptop.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/keyboard.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/monitor.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/stuff.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                    <img src="./src/assets/images/console.png" class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
                    <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">هدست گیمینگ HyperX Cloud |||</h2>
                    <p class="mt-2 [direction:ltr] flex items-center gap-1">
                      <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">4.5</span>
                      <span class="dark:text-dark-text-primary text-light-text-primary text-xs">(24)</span>
                    </p>
                    <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
                      <p class="text-[17px] pr-1.5 font-bold">32,900,000</p>
                      <p>تومان</p>
                    </div>
                  </div>
                  
              </div>

              <!-- Pagination -->
              <div class="mt-10 mb-6 [direction:ltr] w-full flex gap-2 items-center justify-center">
                <button class="flex items-center justify-center text-xs dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="flex gap-1 pagination-buttons">
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px] pagination-active">1</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px]">2</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px]">3</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px]">4</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px]">5</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl text-[17px] cursor-not-allowed" disabled>...</button>
                  <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[17px]">10</button>
                </div>
                <button class="flex items-center justify-center text-xs dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-14 h-14 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer"><i class="fa-solid fa-chevron-right"></i></button>
              </div>

            </div>

            <div class="sticky flex flex-col gap-2.5 h-fit top-3 w-[20%]">
              <div class="border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                <div class="flex gap-2 items-center">
                  <i class="fa-solid fa-layer-group text-brand-accent text-xl"></i>
                  <p class="dark:text-dark-text-primary text-light-text-primary font-bold text-xl">دسته بندی ها</p>
                </div>
                <ul class="mt-7 flex flex-col gap-1">
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary category-active">همه محصولات</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">کیبورد</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">ماوس</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">لوازم جانبی</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">مانیتور</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">لپ تاپ</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">کنسول بازی</li>
                  <li class="text-[13px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">دوربین</li>
                </ul>
              </div>
              <div class="w-full border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                
              </div>
            </div>
          </div>
        </div>
    `;
};

export default ProductsPage;