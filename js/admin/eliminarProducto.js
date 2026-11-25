import { getProducts } from "../products/getProducts.js";
import { pagination } from "../products/pagination.js";

const listaProductos = document.getElementById("eliminarProducto");
let productos = await getProducts();

function viewProducts(productos) {
    listaProductos.innerHTML = productos.map(producto => `
        <div class="eliminarProducto__item">
            <div class="eliminarProducto__container">
                <img
                    class="eliminarProducto__img"
                    src="${producto.img_url.startsWith("http")
            ? producto.img_url
            : new URL(`../../${producto.img_url.replace(/^\/+/, "")}`, import.meta.url).href}"
                    alt="${producto.nombre}"
                >

                <div class="eliminarProducto__info">
                    <h3>${producto.nombre}</h3>
                    <span>PRECIO: $${producto.precio_ars}</span>
                    <span>STOCK: ${producto.stock}</span>
                </div>

                <button
                    data-id="${producto.id}"
                    class="eliminarProducto__btn"
                >
                    Eliminar producto
                </button>
            </div>
        </div>
    `).join("");
}

pagination(productos, viewProducts);

listaProductos.addEventListener("click", (e) => {
    const btn = e.target.closest(".eliminarProducto__btn");

    if (!btn) return;

    const productoAEliminar = Number(btn.dataset.id);

    productos = productos.filter(
        product => product.id !== productoAEliminar
    );

    localStorage.setItem("productos", JSON.stringify(productos));

    // Eliminar solamente el producto seleccionado de productosNuevos
    const productosNuevos = JSON.parse(
        localStorage.getItem("productosNuevos")
    ) || [];

    const productosActualizados = productosNuevos.filter(
        product => product.id !== productoAEliminar
    );

    localStorage.setItem(
        "productosNuevos",
        JSON.stringify(productosActualizados)
    );

    alert("Producto eliminado correctamente");

    pagination(productos, viewProducts);
});

