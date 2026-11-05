import { renderProducts } from "./renderProducts.js";

export const pagincaion = (products) => {
    let indice_principal = 0;
    let indice_final = 8;

    const handel_perv_page = () => {
        if (indice_principal === 0) return

        indice_principal -= 8;
        indice_final -= 8;

        let productos = products.slice(indice_principal, indice_final)

        renderProducts(productos)
    }

    const handel_next_page = () => {
        if (indice_final >= products.length) return
        indice_principal += 8;
        indice_final += 8;


        let productos = products.slice(indice_principal, indice_final)

        renderProducts(productos)
    }

    const prev_page = document.getElementById("prev")
    const next_page = document.getElementById("next")

    prev_page.addEventListener("click", handel_perv_page)
    next_page.addEventListener("click", handel_next_page)

    let productos = products.slice(indice_principal, indice_final)

    renderProducts(productos)
}
