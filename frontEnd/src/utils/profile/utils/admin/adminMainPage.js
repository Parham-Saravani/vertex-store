import createCharts from "../../layouts/adminLayouts/chart.js";
import { apiRequestHandler } from "../../../http.js";
const changeMainPageData = async () => {
  createCharts();
  const data = await apiRequestHandler("/api/dashboard/admin");  
  const { stats:{usersCount, ordersCount, productsCount , totalIncome}} = data;
  changeStats(usersCount, ordersCount, productsCount, totalIncome);
};

const changeStats = (usersCount, ordersCount, productsCount,totalIncome) => {
  changeProductsCountTitle(productsCount);
  changeOrdersCountTilte(ordersCount);
  changeUsersCountTitle(usersCount);
  changeTotalIncomeTitle(totalIncome);
};
const changeProductsCountTitle = (productsCount) => {
  const allProducts = document.querySelector(".all-products");
  resetClasses(allProducts);
  allProducts.innerHTML = `<h3 class="text-3xl font-bold mt-2 dark:text-dark-text-primary text-light-text-primary">${productsCount}</h3>`;
};
const changeOrdersCountTilte = (ordersCount) => {
  const allOrders = document.querySelector(".all-orders");
  resetClasses(allOrders);
  allOrders.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-blue-500">${ordersCount}</h3>`;
};
const changeUsersCountTitle = (usersCount) => {
  const allUsers = document.querySelector(".all-users");
  resetClasses(allUsers);
  allUsers.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-purple-500">${usersCount}</h3>`;
};
const changeTotalIncomeTitle = (income) => {
  const totalIncome = document.querySelector(".total-income");
  resetClasses(totalIncome);
  totalIncome.innerHTML = `<h3 class="text-3xl font-bold mt-2 text-green-500">${income.toLocaleString()} تومان</h3>`;
};

const resetClasses = (element) => {
  element.className = "";
};
export default changeMainPageData;
