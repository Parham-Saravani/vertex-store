const loaderHandler = () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add('hidden')
  loader.classList.remove('flex')
  document.documentElement.classList.remove('overflow-hidden')
};

window.addEventListener("load", loaderHandler);
