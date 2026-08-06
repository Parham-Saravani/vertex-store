const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const showMobileMenu = () => { 
    menuBtn.classList.toggle('mobile-menu-open')   
    console.log(mobileMenu);
    
    mobileMenu.classList.toggle('left-0!')
    mobileMenu.classList.toggle('z-9999!')
}
menuBtn.addEventListener("click", showMobileMenu);