import { takeUserToken } from "../../cookie"
import { apiRequestHandler } from "../../http";

const takeUserData = () => {
    const token = takeUserToken();
    
}

window.addEventListener('load', takeUserData)