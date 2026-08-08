const changeStats = (element, content) => {
  const mainElement = document.querySelector(element);
  resetClasses(mainElement);
  mainElement.innerHTML = content;
};
const resetClasses = (element) => {
  element.className = "";
};

export default changeStats;
