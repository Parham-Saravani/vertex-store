import { baseUrl } from "../http";

const createCategories = (data) => {
  const categoryContainer = document.querySelector(".category-container");
  categoryContainer.innerHTML = '';
  /* create default category */
  categoryContainer.insertAdjacentHTML(
    "afterbegin",
    `
       <li class="text-[13px] max-lg:text-[10px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary category-item category-active" data-category="">همه محصولات</li>

    `,
  );
  for (let category in data) {
    categoryContainer.insertAdjacentHTML(
      "beforeend",
      `
       <li class="text-[13px] max-lg:text-[10px] cursor-pointer dark:text-dark-text-secondary text-light-text-secondary rounded-xl px-2 py-2 transition-colors duration-300 dark:hover:bg-brand-accent-hover/40 hover:bg-brand-accent-hover hover:text-dark-text-primary category-item" data-category="${category}">${category}</li>

      `,
    );
  }
};
const createBrands = (data) => {
  const brandsContainer = document.querySelector(".brand-container");
  brandsContainer.innerHTML = '';
  for (let brand in data) {
    brandsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
                <input id="${brand}" type="checkbox" class="peer hidden brand-item">
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

const createSkeletonLoaderForSidebarContent= () => {
  const categoriesContainer = document.querySelector('.category-container')
  const brandContainer = document.querySelector('.brand-container')
  for(let i = 0 ; i < 5 ; i++){
    categoriesContainer.insertAdjacentHTML('beforeend', 
      `
      <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl"></li>
      `
    )
    brandContainer.insertAdjacentHTML('beforeend', 
      `
      <li class="w-full h-4 animate-pulse dark:bg-gray-800 bg-black/40 rounded-xl list-none"></li>
      `
    )
  }
}
const getCategoriesAndBrands = async () => {
  const response = await fetch(`${baseUrl}/api/products/category`);
  return await response.json();
};
export { getCategoriesAndBrands, createCategories, createBrands ,createSkeletonLoaderForSidebarContent};