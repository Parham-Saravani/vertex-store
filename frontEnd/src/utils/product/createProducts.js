let totalPages = null;
const productPerPage = 15;
let currentPage = 1;
const productsHandler = (products) => {
  isPaginationNeed();
  calculateTotalPages(products);
  createProducts(products)
};
const createProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");
  const firstIndex = currentPage * productPerPage - productPerPage;
  const secondIndex = firstIndex + productPerPage;
  products.slice(firstIndex , secondIndex).forEach(product => {
    productsContainer.insertAdjacentHTML('beforeend', 
      `
      <div class="group border dark:border-dark-card-border border-light-card-border w-69.5 px-2 py-6 rounded-xl flex flex-col items-center cursor-pointer transition-normal duration-300 hover:-translate-y-1 hover:border-dark-card-hover-border">
          <img src=${product.images[0]} class="size-45 mb-3 group-hover:scale-110 transition-transform duration-300" alt="">
          <h2 class="dark:text-dark-text-primary w-40 text-[15px] text-center">${product.title}</h2>
          <p class="mt-2 [direction:ltr] flex items-center gap-1">
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs">${product.rating}</span>
            <span class="dark:text-dark-text-primary text-light-text-primary text-xs">( ${product.reviewCount} )</span>
          </p>
          <div class="[direction:ltr] flex items-center mt-3 dark:text-dark-text-primary text-light-text-primary text-xs">
            <p class="text-[17px] pr-1.5 font-bold">${product.price.toLocaleString()}</p>
            <p>تومان</p>
          </div>
      </div>
      `
    )
  })
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
export default productsHandler;
