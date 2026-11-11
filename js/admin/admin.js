const admin_btn = document.getElementById("is-admin")

export async function isAdmin(user) {
    user.role === "admin" ? admin_btn.classList.toggle("is-admin") : "";
}