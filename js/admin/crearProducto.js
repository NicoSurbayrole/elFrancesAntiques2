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
        categoria: formData.get("categoria") || "otro",
        estilo: formData.get("estilo") || "antiguo",
        precio_ars: formData.get("precio_ars") || 0,
        img_url: formData.get("img_url") || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4V7DhRk9uJScPXqy-CVAxZm3ThXVE-8orcOeF-a5lA&s=10",
        disponibilidad: formData.get("disponibilidad") || "disponible",
        stock: formData.get("stock") || 1,
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
