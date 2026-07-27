import '../../../style.css';
import '../../theme/theme.js';
import MainProfilePage from './mainPage.js';
import OrderPage from './orderPage.js';
import FavouritePage from './favouritePage.js';
import TicketPage from './ticketPage.js';

const menuItems = document.querySelectorAll('.user-menu-items')
const profileContentContainer = document.querySelector('.profile-content')

const changeMenuContentHandler = (event) => {
    const {target , target:{dataset: {page}}} = event;
    addActiveClass(target)
    changePageContent(page)
}
const addActiveClass = (target) => {
    document.querySelector('.user-menu-items.profile-menu-active').classList.remove('profile-menu-active')
    target.classList.add('profile-menu-active')
}
const changePageContent = (page)=> {
    switch(page){
        case 'main':
            changePage(MainProfilePage())
            break;
        case 'orders':
            changePage(OrderPage())
            break;
        case 'favourites':
            changePage(FavouritePage())
            break;
        case 'tickets':
            changePage(TicketPage())
        }
}
const changePage  = (content) => {
    profileContentContainer.innerHTML = '';
    profileContentContainer.insertAdjacentHTML('afterbegin', content)
    profileContentContainer.firstElementChild.classList.add('animate-fadeIn')
}
menuItems.forEach(item => {
    item.addEventListener('click', changeMenuContentHandler)
})