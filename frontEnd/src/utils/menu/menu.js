import PageContentHandler from "./changePage"

const menuItems = document.querySelectorAll('.menu-items')

const addActiveClassToClickedMenuItem = (event) => {
    event.preventDefault()
    const currentActiveItem = event.target.closest('.menu-items.menu-active')
    if(!currentActiveItem){
        const clickedItem = event.target.closest('.menu-items')
        document.querySelector('.menu-items.menu-active').classList.remove('menu-active')
        clickedItem.classList.add('menu-active')
        const pageData = clickedItem.dataset.page        
        PageContentHandler(pageData)
    }
}

menuItems.forEach(item => {
    item.addEventListener('click', addActiveClassToClickedMenuItem)
})