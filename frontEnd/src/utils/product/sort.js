import { baseUrl } from "../http";
import { productsHandler } from "./createProducts";
import { createSkeletonLoaderForProducts } from "./filter";

const sortHandler = () => {
  document.body.addEventListener("click", sortListHandler);
};
const sortListHandler = (event) => {
  const sortBtn = event.target.closest(".sort-btn");
  const sortList = document.querySelector(".sort-list");

  if (sortBtn) {
    if (sortList.classList.contains("hidden")) {
      showOrHideSortList('animate-fadeIn' , 'animate-fadeOut', 'show', sortList);
      sortList.addEventListener('click', sortItemsHandler)
    } else {
      showOrHideSortList('animate-fadeOut' , 'animate-fadeIn', 'hide', sortList);
    }
  }
  if (!sortBtn && document.querySelector('.breadcrumb')) {
    if (!sortList.classList.contains("hidden")) {
      showOrHideSortList('animate-fadeOut' , 'animate-fadeIn', 'hide', sortList);
    }
  }
};
const sortItemsHandler = (event) => {
  const sortBtn = document.querySelector(".sort-btn-text");
  const item = event.target.closest('.sort-items')
  if(item){
    document.querySelector('.sort-items.category-active')?.classList.remove('category-active')
    item.classList.add('category-active');
    sortBtn.textContent = event.target.textContent.trim()
    takeSortedProductsAndCreateProducts(item.dataset.sort)
  }
}
const takeSortedProductsAndCreateProducts = async (sort)=>{
  createSkeletonLoaderForProducts()
  const data = await takeSortedProducts(sort)
  productsHandler(data)  
}
const takeSortedProducts = async (sortCotent) => {
  const response = await fetch(`${baseUrl}/api/products/sort`,{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify({sort: sortCotent})
  })
  return await response.json()
}
const showOrHideSortList = (addAnimation, removeAnimation , status , element) => {
    element.classList.add(addAnimation)
    element.classList.remove(removeAnimation)
    if(status === 'show'){
        element.classList.remove('hidden')
    }else{
        setTimeout(()=> {element.classList.add('hidden')},600)
    }
};

export default sortHandler;