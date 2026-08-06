const ProductLoader = () => {
  return `
    <div class="fixed flex items-center justify-center inset-0 z-3000 max-sm:px-6 backdrop-blur-xl product-container">
          <div class="border dark:border-dark-card-border border-light-card-border w-220 max-sm:w-full h-175 max-sm:h-150 py-2 px-4 relative dark:bg-dark-section-bg bg-light-section-bg rounded-xl product-content">
            <button class="absolute top-2 right-2 flex justify-center items-center w-6 h-6 dark:bg-dark-input-bg bg-light-input-bg transition-colors duration-300 dark:hover:bg-dark-input-border hover:bg-light-input-border rounded-full cursor-pointer close-product-page">
              <i class="fa-solid fa-close text-[12px] dark:text-dark-text-primary text-light-text-primary"></i>
            </button>
            <!-- BreadCrumb -->
            <div class="mt-10 animate-pulse w-60 max-sm:w-30 h-5 rounded-md dark:bg-gray-800 bg-black/40"></div>

            <!-- product detail -->
            <div class="mt-4 flex gap-20 max-sm:gap-10 px-6">
              <!-- product image -->
              <div class="animate-pulse rounded-xl dark:bg-gray-800 bg-black/40 size-75 max-sm:size-30"></div>

              <div class="[direction:ltr] grow">
                <!-- discount -->
                <div class="animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-7 h-4 block"></div>
                <!-- title -->
                <div class="mt-3 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-70 max-sm:w-40 h-6 block"></div>
                <!-- rating -->
                <div class="mt-4 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-15 h-4 block"></div>
                <!-- price -->
                <div class="mt-4 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-55 max-sm:w-35 h-6 block"></div>
                <!-- product availibility -->
                <div class="mt-2 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-30 h-5 block"></div>
                <!-- product colors -->
                <div class="my-4 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-60 max-sm:w-45 h-5 block"></div>
                <!-- add to card and add to favourites button -->
                <div class="mt-17 max-sm:mt-10 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-100 max-sm:w-50 h-10 max-sm:h-7 block"></div>
              </div>
            </div>  

            <!-- prodcut description && specifications && comments -->
            <div class="mt-6 py-2 px-2 w-full h-65 max-sm:h-55 dark:bg-dark-input-bg bg-light-input-bg rounded-md">
              <!-- tabs -->
              <div class="flex items-center justify-center">
                   <div class="animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-50 h-7 py-2"></div>
              </div>
              <!-- DIVIDER -->
              <hr class="mt-1 dark:text-dark-divider text-light-divider rounded-full">
              <!-- data -->
              <div class="mt-2 px-2 py-3 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-full h-5 block"></div>
              <div class="mt-2 px-2 py-3 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-full h-5 block"></div>
              <div class="mt-2 px-2 py-3 animate-pulse rounded-md dark:bg-gray-800 bg-black/40 w-full h-5 block"></div>
            </div>
          </div>
        </div>
    
    `;
};
export default ProductLoader;