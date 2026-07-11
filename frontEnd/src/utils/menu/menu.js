const menuItems = document.querySelectorAll('.menu-items')

const addActiveClassToClickedMenuItem = (event) => {
    const currentActiveItem = event.target.closest('.menu-items.menu-active')
    if(!currentActiveItem){
        document.querySelector('.menu-items.menu-active').classList.remove('menu-active')
        event.target.closest('.menu-items').classList.add('menu-active')
    }
}

menuItems.forEach(item => {
    item.addEventListener('click', addActiveClassToClickedMenuItem)
})