let totalPages = null;
const productPerPage = 15;
let currentPage = 1;
const productsHandler = (products) => {
  changeTotalProductsText(products);
  isPaginationNeed();
  calculateTotalPages(products);
  createProducts(products);
  createCategories(products);
  createBrands(products);
};
const changeTotalProductsText = (products) => {
  const totalProducts = products.length;
  document.querySelector(".total-products-text").textContent =
    `نمایش ${totalProducts} محصول`;
};
const createProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");
  const firstIndex = currentPage * productPerPage - productPerPage;
  const secondIndex = firstIndex + productPerPage;
  products.slice(firstIndex, secondIndex).forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="group border dark:border-dark-card-border max-2xl:w-52.5 max-xl:w-42 max-md:w-36.5 max-sm:w-42 border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
          <img src=${product.images[0]} class="size-45 max-2xl:size-36 max-xl:size-32 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
          <h2 class="dark:text-dark-text-primary w-40 text-[15px] max-2xl:text-[13px] max-xl:text-[12px] max-md:px-5 max-md:text-[11px] text-center">${product.title}</h2>
          <p class="mt-2 [direction:ltr] flex items-center gap-1">
            <i class="fa-solid fa-star text-yellow-400 text-xs max-sm:text-[10px]"></i>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs max-sm:text-[10px]">${product.rating}</span>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs max-sm:text-[10px]">( ${product.reviewCount} )</span>
          </p>
          <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
            <p class="text-[17px] max-md:text-[13px] pr-1.5">${product.price.toLocaleString()}</p>
            <p>تومان</p>
          </div>
      </div>
      `,
    );
  });
};
const calculateTotalPages = (products) => {
  totalPages = products.length / productPerPage;
};
const isPaginationNeed = () => {
  const paginationContainer = document.querySelector(".pagination-container");
  if (totalPages < 1) {
    paginationContainer.classList.add("hidden");
  }
};
const createCategories = (products) => {
  const categories = Object.groupBy(products, (product) => product.category_fa);
  const categoryContainer = document.querySelector(".category-container");
  /* create default category */
  categoryContainer.insertAdjacentHTML(
    "afterbegin",
    `
       <li class="text-[13px] max-lg:text-[10px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary category-active">همه محصولات</li>

    `,
  );
  categoryContainer;
  for (let category in categories) {
    categoryContainer.insertAdjacentHTML(
      "beforeend",
      `
       <li class="text-[13px] max-lg:text-[10px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary">${category}</li>

      `,
    );
  }
};
const createBrands = (products) => {
  const brands = Object.groupBy(products, (product) => product.brand);
  const brandsContainer = document.querySelector(".brand-container");
  for (let brand in brands) {
    brandsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
                <input id="${brand}" type="checkbox" class="peer hidden">
                <label for="${brand}" class="peer-checked:bg-brand-accent rounded-md  flex items-center justify-center w-4.5 h-4.5 border dark:border-dark-card-border border-light-card-border transition-colors duration-300">
                    <i class="fa-solid fa-check text-[10px] hidden dark:text-dark-card-bg text-dark-text-primary"></i>
                </label>
                <label for="${brand}" class="h-4 dark:text-dark-text-primary text-light-text-primary text-[15px]">${brand}</label>
            </div>
        </div>
      `,
    );
  }
};
export { productsHandler, changeTotalProductsText };
