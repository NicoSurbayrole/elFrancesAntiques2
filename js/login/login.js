import { isAdmin } from "../admin/admin.js";
import { renderCarrito } from "../cart/cart.js";
import { getSingleUser } from "../users/getSingleUser.js"

const btn_log = document.getElementById("login")
const loginContain = document.getElementById("log_contain")
const loginForm = document.querySelector(".log__form");
const user_icon = document.getElementById("user_log-icon")

btn_log.addEventListener("click", closeOpenModal)

loginForm.addEventListener("submit", (e) => { loginUser(e) });

loginContain.addEventListener("click", (e) => {
    e.target === loginContain ? loginContain.classList.remove("is-active") : "";
});

function closeOpenModal() {
    loginContain.classList.toggle("is-active")
}

async function loginUser(e) {
    e.preventDefault();

    const formData = new FormData(loginForm);

    const email = formData.get("log-email");
    const password = formData.get("log-password");

    await validateUser(email, password)
}

export async function validateUser(email, password) {

    const user = await getSingleUser(email)

    if (!user) return alert("el usuario no existe")

    if (user.password !== password) return alert("usuario o contraseña incorrectos")

    localStorage.setItem("user", JSON.stringify(user))
    alert("usuario logueado correctamente")
    closeOpenModal()
    createUserCredentials(user)
}

export function createUserCredentials(user) {
    const user_name = document.getElementById("user_name")

    user_name.innerText = `Bienvenido: ${user.name}`
    user_icon.style.display = "none"

    btn_log.style.pointerEvents = "none"

    isAdmin(user)
    renderCarrito(user.cart)
}