import { baseUrl } from "../http";

const searchItemsContainer = document.querySelector(".search-items");
const searchInput = document.querySelector(".search-input");
const searchHandler = (event) => {
  setTimeout(async () => {
    const text = searchInput.value.trim();
    if (text) {
      const data = await takeProducts(text);
      createSearchItems(data);
    }
  }, 200);
};
const createSearchItems = (data) => {
  searchItemsContainer.innerHTML = "";
  if(data.length){
    data.forEach((item) => {
    searchItemsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="group flex items-center w-full dark:bg-dark-section-bg bg-light-section-bg rounded-xl px-1.5 py-1 transition-colors duration-300 border border-transparent hover:border-dark-card-hover-border cursor-pointer">
        <img src="${item.image}" class="group-hover:scale-105 transition-transform duration-300 size-15" alt="">
        <div class="flex items-center justify-between mr-1 h-full w-full relative">
          <div class="flex flex-col">
            <p class="dark:text-dark-text-primary text-light-text-primary text-[12px] font-bold">${item.title}</p>
            <p class="dark:text-dark-text-secondary text-light-text-secondary text-xs">${item.category_fa}</p>
          </div>
          <p class="flex items-center gap-1 dark:text-dark-text-primary text-light-text-primary absolute left-2 bottom-1 text-[10px]">
            <span>قیمت:</span>
            <span>${item.price.toLocaleString()}</span>
            <span>تومان</span>
          </p>
        </div>
      </div>
      `,
    );
  });
  }else{
    
  }
};
const takeProducts = async (text) => {
  const response = await fetch(`${baseUrl}/api/products/search/${text}`);
  return await response.json();
};
searchInput.addEventListener("input", searchHandler);
export default searchHandler;
