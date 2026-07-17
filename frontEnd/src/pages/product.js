const ProductPage = () => {
    return `
    <div class="fixed animate-fadeIn flex items-center justify-center inset-0 z-30 backdrop-blur-xl">
          <div class="border dark:border-dark-card-border border-light-card-border w-220 h-175 py-2 px-4 relative dark:bg-dark-section-bg bg-light-section-bg rounded-xl">
            <button class="absolute top-2 right-2 flex justify-center items-center w-6 h-6 dark:bg-dark-input-bg bg-light-input-bg transition-colors duration-300 dark:hover:bg-dark-input-border hover:bg-light-input-border rounded-full cursor-pointer">
              <i class="fa-solid fa-close text-[12px] dark:text-dark-text-primary text-light-text-primary"></i>
            </button>
            <!-- BreadCrumb -->
            <div class="mt-10 text-[13px] gap-2 items-center flex dark:text-dark-text-secondary text-light-text-secondary">
              <p>خانه</p>
              <span>></span>
              <p>محصولات</p>
              <p>></p>
              <p class="product-category"></p>
              <p>></p>
              <p class="product-breadcrumb-title"></p>
            </div>

            <!-- product detail -->
            <div class="mt-4 flex gap-20 px-6">
              <!-- product image -->
              <div class="flex grow items-center justify-center">
                <img src="./src/assets/images/camera.png" class="product-image" alt="">
              </div>

              <div class="[direction:ltr] grow">
                <!-- discount -->
                <span class="bg-brand-accent w-8 h-4 px-1.5 py-0.5 text-[9px] text-dark-text-primary rounded-md discount product-discount-percent"></span>
                <!-- title -->
                <h2 class="mt-3 font-bold text-2xl dark:text-dark-text-primary text-light-text-primary product-title"></h2>
                <!-- rating -->
                <p class="mt-1 flex items-center gap-1 text-xs">
                  <i class="fa-solid fa-star text-yellow-400"></i>
                  <span class="dark:text-dark-text-primary text-light-text-primary product-rating">4.8</span>
                </p>
                <!-- price -->
                <div class="mt-4 flex gap-2 items-center">
                  <div class="dark:text-dark-text-primary text-light-text-primary flex items-center gap-1">
                    <p>تومان</p>
                    <p class="product-discount-price">14,900,000</p>
                  </div>
                  <p class="dark:text-dark-text-secondary text-light-text-secondary line-through text-xs product-price">16,500,000</p>
                </div>
                <!-- product availibility -->
                <div class="mt-2 flex product-availability-container">

                </div>
                <!-- product colors -->
                <div class="[direction:rtl] my-4 w-60 flex gap-2 items-start">
                  <p class="text-xs dark:text-dark-text-primary text-light-text-primary">رنگ:</p>
                  <div class="flex gap-1 w-full justify-end product-colors-container">
                  
                  
                  </div>
                </div>
                <!-- add to card and add to favourites button -->
                <div class="flex gap-2">
                  <button class="[direction:rtl] flex items-center justify-center w-80 h-12 gap-2 text-dark-text-primary bg-linear-90 from-brand-primary to-brand-accent rounded-xl transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>افزدون به سبد خرید</p>
                  </button>
                  <button class="text-xl dark:text-dark-text-primary text-light-text-primary dark:bg-dark-card-bg bg-light-card-bg rounded-xl flex items-center justify-center w-12 border dark:border-dark-card-border border-light-card-border transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>

            </div>  
            <!-- prodcut description && specifications && comments -->
            <div class="px-2 w-full h-65 dark:bg-dark-input-bg bg-light-input-bg rounded-md">
              <!-- tabs -->
              <div class="flex gap-1 text-xs py-1 dark:text-dark-text-primary text-light-text-primary justify-center items-center">
                <button class="dark:hover:bg-dark-card-hover hover:bg-light-card-hover cursor-pointer rounded-xl px-2 py-1.5 transition-colors duration-300 active-product-page product-description">توضیحات</button>
                <button class="dark:hover:bg-dark-card-hover hover:bg-light-card-hover cursor-pointer rounded-xl px-2 py-1.5 transition-colors duration-300 product-specifications">مشخصات فنی</button>
                <button class="dark:hover:bg-dark-card-hover hover:bg-light-card-hover cursor-pointer rounded-xl px-2 py-1.5 transition-colors duration-300 product-comments">نظرات کاربران</button>
              </div>
              <!-- DIVIDER -->
              <hr class="mt-1 dark:text-dark-divider text-light-divider rounded-full">
              <!-- data -->
              <div class="hide-scrollbar h-50 overflow-auto px-2 py-3 product-content-container">

                <p class="hidden dark:text-dark-text-primary text-light-text-primary text-[15px] text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میدرصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میدرصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میدرصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میدرصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را میدرصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                
                <div class="rounded-md border dark:border-dark-divider border-light-divider">
                  <div class="grid grid-cols-3 border-b dark:border-dark-divider border-light-divider px-5 py-1.5">
                    <span class="text-[13px] dark:text-dark-text-primary text-light-text-primary">برند</span>
                    <span class="text-[13px] dark:text-dark-text-primary text-light-text-primary col-span-2">Asus</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
    `
};
export default ProductPage;