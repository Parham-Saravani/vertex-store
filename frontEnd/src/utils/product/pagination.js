const paginationHandler = (totalPages) => {
  isPaginationNeed(totalPages);
  createPaginationButtons(totalPages);
};
const isPaginationNeed = (totalPages) => {
  const paginationContainer = document.querySelector(".pagination-container");
  if (totalPages <= 1) {
    paginationContainer.classList.add("hidden");
  }
};
const createPaginationButtons = (totalPages) => {
  const paginationContainer = document.querySelector(".pagination-buttons");
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `
                <button class="flex items-center justify-center dark:text-dark-text-primary text-light-text-primary border dark:border-dark-card-border border-light-card-border w-12 h-12 rounded-xl transition-colors duration-300 hover:border-dark-card-hover-border cursor-pointer text-[15px] pagination-button ${i === 1 ? "pagination-active" : ""}" data-pagenumber="${i}">${i}</button>
            `,
    );
  }
};

export default paginationHandler ;
