import { getUsers } from "../users/getUsers.js"

const btn_log = document.getElementById("login")
const loginContain = document.getElementById("log_contain")
const loginForm = document.querySelector(".log__form");
const user_icon = document.getElementById("user_log-icon")

btn_log.addEventListener("click", closeOpenModal)
loginForm.addEventListener("submit", (e) => { loginUser(e) });

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

loginContain.addEventListener("click", (e) => {
    if (e.target === loginContain) loginContain.classList.remove("is-active");
});

async function validateUser(email, password) {
    const users = await getUsers()

    const user = users.find(user => user.email === email)

    if (!user) {
        alert("el usuario no existe")
        return;
    }

    if (user.password === password) {
        const user_name = document.getElementById("user_name")
        user_name.innerText = `Bienvenido: ${user.name}`
        user_icon.style.display = "none"
        alert("usuario logueado correctamente")
        closeOpenModal()
    } else {
        alert("usuario o contraseña incorrectos")
    }
}
