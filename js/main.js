import { createUserCredentials } from "./login/login.js";
import { initProducts } from "./products/productos.js";

initProducts()

export function userPercistens() {
    let user = localStorage.getItem("user")
    
    if (!user) return   
    
    user = JSON.parse(user)
    createUserCredentials(user)
}

userPercistens()