const ProductsSkeletonLoader = () => {
  return `
     <!-- product page -->
        <div class="animate-fadeIn mb-20">
          <!-- BreadCrumb -->
          <div class="animate-pulse rounded-xl dark:bg-gray-800 bg-black/40 w-35 h-6"></div>

          <!-- content -->
          <div class="mt-2 mb-4 flex gap-4">
            <div class="w-[80%] max-xl:w-[75%] max-md:w-full">
              <!-- sort content -->
              <div class="border dark:border-dark-card-border border-light-card-border max-sm:px-2 px-6 py-3 dark:bg-dark-section-bg bg-light-section-bg rounded-xl flex w-full justify-between items-center">
                <div class="animate-pulse rounded-xl dark:bg-gray-800 bg-black/40 w-30 h-7"></div>
                <div class="animate-pulse rounded-xl dark:bg-gray-800 bg-black/40 w-30 h-7"></div>
              </div>

              <!-- products-->
              <div class="[direction:ltr] my-3 grid grid-cols-5 max-xl:grid-cols-4 max-sm:grid-cols-2  products-container">
                <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border  border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                      <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                </div>
                <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                      <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                </div>
                <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                      <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                </div>
                <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                      <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                </div>
                <div class=" max-2xl:w-48 max-xl:w-48 max-lg:w-33 max-md:w-37 max-sm:w-56 group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
                      <div class="size-45 max-2xl:size-40 max-xl:size-36 max-lg:size-28 max-md:size-30 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-2 w-20 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 w-30 h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                </div>
              </div>
            </div>


            <div class="sticky flex flex-col gap-2.5 h-fit top-3 max-md:hidden max-xl:w-[25%] w-[20%]">
              <div class="border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                <div class="w-25 h-6 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                <ul class="mt-3 flex flex-col gap-2 category-container">
                    <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                    <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                    <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                    <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                    <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                </ul>
              </div>

              <div class="w-full border dark:border-dark-card-border  border-light-card-border dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-6 py-5">
                <!-- brands -->
                <div>
                    <div class="w-25 h-6 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                    <ul class="mt-3 flex flex-col gap-2 category-container">
                        <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                        <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                        <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                        <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                        <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
                    </ul>
                </div>

                <!-- DIVIDER -->
                <div class="my-5 w-full h-0.5 dark:bg-dark-divider bg-light-divider rounded-full"></div>
                <!-- price -->
                <div>
                    <!-- price content -->
                    <div class="mt-3">
                      <div class="w-25 h-6 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      <div class="mt-3 flex flex-col gap-1 items-center">
                        <div class="w-30 h-4 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                        <div class="w-30 h-4 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                      </div>
                      <div id="price-slider" class="mt-3 w-full h-3 animate-pulse rounded-xl dark:bg-gray-800 bg-black/40"></div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    `;
};

export default ProductsSkeletonLoader;