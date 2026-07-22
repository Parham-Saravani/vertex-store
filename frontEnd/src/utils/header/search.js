import { baseUrl } from "../http";

const searchItemsContainer = document.querySelector(".search-items");
const searchInput = document.querySelector(".search-input");
const searchHandler = (event) => {
  setTimeout(async () => {
    const text = searchInput.value.trim();
    if (text) {
      createLoader();
      const data = await takeProducts(text);
      showSearchContainer()
      createSearchItems(data);
    }
  }, 200);
};
const createLoader = () => {
  searchItemsContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="w-full flex flex-col gap-2 justify-center items-center py-4">
            <p class="text-[13px] dark:text-dark-text-primary text-light-text-primary">در حال بررسی</p>
            <div class="loader w-3 rounded-full animate-loader aspect-square"></div>
        </div>

    `,
  );
};
const createSearchItems = (data) => {
  searchItemsContainer.innerHTML = "";
  if (data.length) {
    data.forEach((item) => {
      searchItemsContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="group flex gap-3 items-center w-full dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-1.5 py-1 transition-colors duration-300 border border-transparent hover:border-dark-card-hover-border cursor-pointer">
        <img src="${item.image}" class="group-hover:scale-105 transition-transform duration-300 w-15 h-15" alt="">
        <div class="flex items-center justify-between h-full w-full relative">
          <div class="flex flex-col">
            <p class="dark:text-dark-text-primary text-light-text-primary text-[12px] font-bold">${item.title}</p>
            <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">${item.category_fa}</p>
          </div>
          <p class="flex items-center gap-1 dark:text-dark-text-primary text-light-text-primary absolute left-2 -bottom-3 text-[10px]">
            <span>قیمت:</span>
            <span>${item.price.toLocaleString()}</span>
            <span>تومان</span>
          </p>
        </div>
      </div>
      `,
      );
    });
  } else {
    searchItemsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="w-full flex flex-col justify-center items-center pb-5">
          <img src="/src/assets/images/logo/not-found.svg" class="size-25">
          <p class="w-full text-xs text-center font-bold dark:text-dark-text-primary text-light-text-primary">محصولی یافت نشد</p>
      </div>
      `,
    );
  }
};
const takeProducts = async (text) => {
  const response = await fetch(`${baseUrl}/api/products/search/${text}`);
  return await response.json();
};

const showSearchContainer = () => {
  searchItemsContainer.classList.remove('hidden')
  searchItemsContainer.classList.add('flex')
}
const closeSearchContainer = () => {
  const input = event.target.closest('.search-input')
  const container = event.target.closest('.search-items')
  if(input || container)return;
  if(searchItemsContainer.classList.contains('flex')){
    searchItemsContainer.classList.add('hidden')    
    searchItemsContainer.classList.remove('flex')    
  }
}
document.addEventListener('click', closeSearchContainer)
searchInput.addEventListener("input", searchHandler);
export default searchHandler;
