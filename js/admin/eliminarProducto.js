import { getProducts } from "../products/getProducts.js"

const listaProductos = document.getElementById("eliminarProducto")
let productos = await getProducts()

function viewProducts(productos) {
    listaProductos.innerHTML = productos.map(producto => `
    <div id="eliminarProducto">
        <div class="eliminarProducto__container">
            <img class="eliminarProducto__img" src=${producto.img_url} alt="">
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


viewProducts(productos)

listaProductos.addEventListener("click", (e) => {
    const btn = e.target.closest(".eliminarProducto__btn");

    if (!btn) return;

    const productoAEliminar = Number(btn.dataset.id);

    productos = productos.filter(
        product => product.id !== productoAEliminar
    );

    localStorage.setItem("productos", JSON.stringify(productos));
    alert("producto eliminado correctamente")
    viewProducts(productos);
});

