import { logoutHandler } from "../../../cookie";
const logOutBtn = document.querySelector('.logout-btn')
const logOut = () => {
    logoutHandler()
    location.assign('/')
}
logOutBtn.addEventListener('click', logOut)