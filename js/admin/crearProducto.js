import { getProducts } from "../products/getProducts.js"
import { isAdmin } from "../admin/admin.js"

const form = document.querySelector(".admin__form")

let userLogged = JSON.parse(localStorage.getItem("user")) || ""
let cantidadProductos = 30;


if (userLogged.role === "admin") {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        cantidadProductos++
        getInfoNewProducts()
    });
} else {
    form.addEventListener("submit", (e) => e.preventDefault())
    const btnForm = document.querySelector(".admin__form-btn")
    btnForm.style.pointerEvents = "none"
}

function getInfoNewProducts() {
    const formData = new FormData(form);
    const newProduct = {
        nombre: formData.get("nombre"),
        categoria: formData.get("categoria"),
        estilo: formData.get("estilo"),
        precio: formData.get("precio_ars"),
        url: "./img/products_img/1.png",
        disponibilidad: formData.get("disponibilidad"),
        stock: formData.get("stock"),
        id: cantidadProductos
    }
    productExists(newProduct)
}


async function productExists(newProduct) {
    const products = await getProducts()

    let existProduct = products.some(
        product => product.nombre.toLowerCase() === newProduct.nombre.toLowerCase()
    );

    const productosCreados = JSON.parse(localStorage.getItem("productosNuevos"))


    if (!existProduct && productosCreados) {
        existProduct = productosCreados.some(
            product => product.nombre.toLowerCase() === newProduct.nombre.toLowerCase()
        );
    }

    !existProduct ? saveProduct(newProduct) : alert("El producto ya existe");
}

function saveProduct(newProduct) {
    const productosCreados = JSON.parse(localStorage.getItem("productosNuevos")) || [];

    productosCreados.push(newProduct);

    localStorage.setItem("productosNuevos", JSON.stringify(productosCreados));

    alert("Producto creado correctamente");
}
