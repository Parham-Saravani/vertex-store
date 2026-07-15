const ProductsPage = () => {
  return `
       <!-- product page -->
        <div class="animate-fadeIn mb-20">
          <!-- BreadCrumb -->
          <div class="flex items-center breadcrumb">
            <a href="#" class="max-sm:text-[10px] dark:text-dark-text-primary text-light-text-primary transition-colors duration-300 hover:text-brand-accent-hover">صفحه اصلی</a>
            <p class="max-sm:text-[10px] text-xl mt-1 dark:text-dark-text-primary text-light-text-primary px-2.5">></p>
            <a href="#" class="max-sm:text-[10px] text-brand-accent transition-colors duration-300 hover:text-brand-accent-hover">محصولات</a>
          </div>

          <!-- content -->
          <div class="mt-2 mb-4 flex gap-4">
            <div class="w-[80%] max-xl:w-[75%] max-md:w-full">
              <!-- sort content -->
              <div class="border dark:border-dark-card-border border-light-card-border max-sm:px-2 px-6 py-3 dark:bg-dark-section-bg bg-light-section-bg rounded-xl flex w-full justify-between items-center">
                <p class="dark:text-dark-text-primary text-light-text-primary max-md:text-[10px] total-products-text">نمایش 120 محصول</p>
                <div>
                  <div class="flex items-center gap-2">
                   <p class="dark:text-dark-text-primary text-light-text-primary max-md:text-[10px]">مرتب سازی:</p>
                   <!-- dropDown -->
                    <div class="relative w-40 mr-3">
                      <button class="dark:bg-dark-card-hover bg-light-card-hover border dark:border-dark-card-border border-light-card-border dark:text-dark-text-primary text-light-text-primary px-3 py-2 rounded-xl flex items-center justify-between w-full cursor-pointer sort-btn">
                        <p class="max-md:text-[10px]">پیشفرض</p>
                        <i class="fa-solid fa-chevron-down max-md:text-[10px]"></i>
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
              <div class="my-3 flex flex-wrap gap-3 w-full products-container">
                
                  
              </div>

              <!-- Pagination -->
              <div class="mt-10 mb-6 [direction:ltr] w-full flex gap-2 items-center justify-center pagination-container">
                <button class="flex items-center justify-center text-[15px] dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer previous-page"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="flex gap-1 pagination-buttons">
        
                </div>
                <button class="flex items-center justify-center text-[15px] dark:bg-dark-card-bg bg-light-card-bg  border dark:border-dark-card-border border-light-card-border dark:text-dark-text-secondary text-light-text-secondary w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer  next-page"><i class="fa-solid fa-chevron-right"></i></button>
              </div>

            </div>

            <div class="sticky flex flex-col gap-2.5 h-fit top-3 max-md:hidden max-xl:w-[25%] w-[20%]">
              <div class="border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                <div class="flex gap-2 items-center">
                  <i class="fa-solid fa-layer-group text-brand-accent text-xl"></i>
                  <h3 class="dark:text-dark-text-primary text-light-text-primary font-bold text-xl max-lg:text-[14px]">دسته بندی ها</h3>
                </div>
                <ul class="mt-3 flex flex-col gap-1 category-container">

                </ul>
              </div>

              <div class="w-full border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                <!-- brands -->
                <div>
                  <div class="flex gap-2 items-center">
                  <i class="fa-solid fa-globe text-brand-accent text-xl"></i>
                  <h3 class="dark:text-dark-text-primary text-light-text-primary font-bold text-xl max-lg:text-[14px]">برندها</h3>
                </div>
                <div class="[direction:ltr] mt-3 w-full flex flex-col gap-1.5 brand-container">
                  
               
                  
                  
                </div>
              </div>

                <!-- DIVIDER -->
                <div class="my-5 w-full h-0.5 dark:bg-dark-divider bg-light-divider rounded-full"></div>
                <!-- price -->
                <div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-tag text-brand-accent text-xl"></i>
                        <h3 class="dark:text-dark-text-primary text-light-text-primary font-bold text-xl max-lg:text-[14px]">محدوده قیمت</h3>
                    </div>
                    <!-- price content -->
                    <div class="mt-3">
                      <div class="flex flex-col items-center">
                        <div class="flex gap-2">
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px]">از</p>
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px] min-price">10,000,000</p>
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px]">تومان</p>
                        </div>
                        <div class="flex gap-2">
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px]">تا</p>
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px] max-price">150,000,000</p>
                          <p class="dark:text-dark-text-primary text-light-text-primary max-lg:text-[12px]">تومان</p>
                        </div>
                      </div>
                      <div id="price-slider" class="mt-3"></div>
                      <div class="flex justify-between">
                          <p class="dark:text-dark-text-primary text-light-text-primary text-xs mt-1">گران ترین</p>
                          <p class="dark:text-dark-text-primary text-light-text-primary text-xs mt-1">ارزان ترین</p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

    `;
};

export default ProductsPage;