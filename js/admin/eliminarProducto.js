import { getProducts } from "../products/getProducts.js"
import { pagination } from "../products/pagination.js"

const listaProductos = document.getElementById("eliminarProducto")
let productos = await getProducts()

function viewProducts(productos) {
    listaProductos.innerHTML = productos.map(producto => `
    <div id="eliminarProducto">
        <div class="eliminarProducto__container">
            <img class="product__img"
     src="${img_url.startsWith("http")
            ? img_url
            : new URL(`../../${img_url.replace(/^\/+/, "")}`, import.meta.url).href}"
     alt="${nombre}">
            <div class="eliminarProducto__info">
                <h3>${producto.nombre}</h3>
                <span>PRECIO: $${producto.precio_ars}</span>
                <span>STOCK: ${producto.stock}</span>
            </div>
            <button data-id="${producto.id}" class="eliminarProducto__btn">eliminar producto</button>
        </div>
    </div>
`).join('')
}


pagination(productos, viewProducts)

listaProductos.addEventListener("click", (e) => {
    const btn = e.target.closest(".eliminarProducto__btn");

    if (!btn) return;

    const productoAEliminar = Number(btn.dataset.id);

    productos = productos.filter(
        product => product.id !== productoAEliminar
    );

    localStorage.setItem("productos", JSON.stringify(productos));
    alert("producto eliminado correctamente")
    pagination(productos, viewProducts);
});

