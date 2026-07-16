import { isUserLogedIn } from "../cookie";
const loaderHandler = () => {
  const loader = document.querySelector(".page-loader");
  loader.classList.add("hidden");
  loader.classList.remove("flex");
  document.documentElement.classList.remove("overflow-hidden");
  loginChecker();
};
const loginChecker = () => {
  const logedInStatus = isUserLogedIn();  
  if(logedInStatus){
    
  }else{
        
  }
};
window.addEventListener("load", loaderHandler);
