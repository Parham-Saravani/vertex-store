const sortHandler = () => {
  document.body.addEventListener("click", sortListHandler);
};
const sortListHandler = (event) => {
  const sortBtn = event.target.closest(".sort-btn");
  const sortList = document.querySelector(".sort-list");

  if (sortBtn) {
    if (sortList.classList.contains("hidden")) {
      showOrHideSortList('animate-fadeIn' , 'animate-fadeOut', 'show', sortList);
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

const showOrHideSortList = (addAnimation, removeAnimation , status , element) => {
    element.classList.add(addAnimation)
    element.classList.remove(removeAnimation)
    if(status === 'show'){
        element.classList.remove('hidden')
    }else{
        setTimeout(()=> {element.classList.add('hidden')},700)
    }
};

export default sortHandler;
