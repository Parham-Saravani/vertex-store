import PageContentHandler from "../menu/changePage";
const showProductsBannerBtn = document.querySelector(".banner-show-products-btn");

const bannerBtnHandler = () => {
  const showProductsBannerBtn = document.querySelector(".banner-show-products-btn");
  showProductsBannerBtn.addEventListener("click", moveToProductsPage);
};
const moveToProductsPage = () => {
  console.log("faasdf");
  PageContentHandler("products");
};
showProductsBannerBtn.addEventListener("click", moveToProductsPage);
export default bannerBtnHandler;