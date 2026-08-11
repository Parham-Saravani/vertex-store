const sortHandler = () => {
  document.addEventListener("click", openSortMenu);
};
const openSortMenu = (event) => {
  const sortBtn = event.target.closest(".sort-btn");
  if (sortBtn) {
    closeOtherSortMenu()
    const sortMenu = sortBtn.nextElementSibling;
    if (sortMenu.classList.contains("hidden")) {
      sortMenu.classList.remove("hidden");
    } else {
      sortMenu.classList.add("hidden");
    }
  }else{
    closeOtherSortMenu()
  }
};


const closeOtherSortMenu = () => {
  document.querySelectorAll('.sort-list').forEach(item => {
    if(!item.classList.contains('hidden')){
      item.classList.add('hidden')
    }
  })
}


export default sortHandler;