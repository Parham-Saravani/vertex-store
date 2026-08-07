import { changePageContent } from "./layouts/pageContent";

const sidebarHandler = () => {
  const sidebarContainer = document.querySelector(".menu-content");
  const submenuItems = document.querySelectorAll(".submenu-item");
  sidebarContainer.addEventListener("click", sidebarItemsHandler);
  submenuItems.forEach((item) =>
    item.addEventListener("click", submenuItemsHandler),
  );
};
const sidebarItemsHandler = (event) => {
  const adminMenuItems = event.target.closest(".menu-item");
  const userMenuItems = event.target.closest(".user-menu-items");
  if (adminMenuItems) {
    if (adminMenuItems.nextElementSibling.hasAttribute("style")) {
      adminMenuItems.lastElementChild.classList.remove("rotate-180");
      closeAllCollapseItems();
    } else {
      closeAllCollapseItems();
      adminMenuItems.lastElementChild.classList.add("rotate-180");
      const neccaryHeight =
        adminMenuItems.nextElementSibling.firstElementChild.scrollHeight;
      adminMenuItems.nextElementSibling.classList.remove("h-0");
      adminMenuItems.nextElementSibling.style.height = `${neccaryHeight + 8}px`;
    }
  }
  if (userMenuItems) {
    const { target, target: { dataset: { page }}} = event;
    changePageContent(page);
    document.querySelectorAll(".user-menu-items").forEach((item) => item.classList.remove("profile-menu-active"));
      target.classList.add('profile-menu-active')
  }
};
const closeAllCollapseItems = () => {
  const collapseItems = document.querySelectorAll(".collapse-item");
  collapseItems.forEach((item) => {
    item.removeAttribute("style");
    item.classList.add("h-0");
  });
  document.querySelectorAll(".menu-item i:last-of-type").forEach((item) => {
    item.classList.remove("rotate-180");
  });
};
const submenuItemsHandler = (event) => {
  const {
    target: {
      dataset: { page },
    },
  } = event;
  submenuItems.forEach((item) =>
    item.classList.remove("profile-submenu-active"),
  );
  event.target.classList.add("profile-submenu-active");

  items.forEach((item) => item.classList.remove("profile-menu-active"));
  event.target.parentElement.parentElement.parentElement.firstElementChild.classList.add(
    "profile-menu-active",
  );
  changePageContent(page);
};

export default sidebarHandler;
