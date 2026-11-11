import { createUserCredentials } from "../login/login.js";

export function userPercistens() {
    let user = localStorage.getItem("user")
    
    if (!user) return   
    
    user = JSON.parse(user)
    createUserCredentials(user)
}

userPercistens()