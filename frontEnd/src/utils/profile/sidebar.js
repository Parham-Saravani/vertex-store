import changePageContent from "./layouts/pageContent";
const items = document.querySelectorAll(".menu-item");
const submenuItems = document.querySelectorAll(".submenu-item");
const sidebarItemsHandler = (event) => {
  const collapseOpener = event.target.closest(".menu-item");
  if (collapseOpener) {
    if (collapseOpener.nextElementSibling.hasAttribute("style")) {
      collapseOpener.lastElementChild.classList.remove("rotate-180");
      closeAllCollapseItems();
     
    } else {
      closeAllCollapseItems();
      collapseOpener.lastElementChild.classList.add("rotate-180");
      const neccaryHeight = collapseOpener.nextElementSibling.firstElementChild.scrollHeight;
      collapseOpener.nextElementSibling.classList.remove("h-0");
      collapseOpener.nextElementSibling.style.height = `${neccaryHeight + 8}px`;
    }
  }
};
const closeAllCollapseItems = () => {
  const collapseItems = document.querySelectorAll(".collapse-item");
  collapseItems.forEach((item) => {
      item.removeAttribute("style");
      item.classList.add("h-0");
  });
  document.querySelectorAll('.menu-item i:last-of-type').forEach(item => {
    item.classList.remove('rotate-180')
  })
  
};
const submenuItemsHandler = (event) => {
  const {target : {dataset: {page}}} = event
  submenuItems.forEach(item => item.classList.remove('profile-submenu-active'))
    event.target.classList.add('profile-submenu-active')
    
    items.forEach(item => item.classList.remove('profile-menu-active'))
    event.target.parentElement.parentElement.parentElement.firstElementChild.classList.add('profile-menu-active')
    changePageContent(page)
}
items.forEach((item) => item.addEventListener("click", sidebarItemsHandler));
submenuItems.forEach(item => item.addEventListener('click', submenuItemsHandler))