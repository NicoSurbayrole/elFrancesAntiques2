import { getSingleProduct } from "../products/getSingleProduct.js"

const product_container = document.getElementById("productos_container")
let cuantity_products = document.getElementById("cuantity__products")




product_container.addEventListener("click", (e) => {
    let userLoged = localStorage.getItem("user")
    userLoged = JSON.parse(userLoged)

    userLoged ? addToCartLoged(e, userLoged) : addToCartUnLoged(e)
})


function addToCartUnLoged(e) {
    const button = e.target.closest(".product__btn-carrito");

    if (!button) return;

    let cantidad = Number(cuantity_products.innerText)

    cantidad++

    cuantity_products.innerText = cantidad
}

async function addToCartLoged(e, userLoged) {

    const button = e.target.closest(".product__btn-carrito");
    if (!button) return;

    const productId = button.dataset.id

    const product = await getSingleProduct(productId)

    let productoParaAgregar = userLoged.cart.find(producto => producto.productId === productId)

    if (userLoged.cart.length === 0 || !productoParaAgregar) {
        userLoged.cart.push({ productId, cantidad: 1 })
        addToLocalStorageCart(userLoged)
        return;
    }

    if (!product) return

    if (product.stock > productoParaAgregar.cantidad && product.stock !== 0) {
        productoParaAgregar.cantidad++

        addToLocalStorageCart(userLoged)
    } else {
        alert("no hay stock suficiente para agregar")
    }
}

function addToLocalStorageCart(userLoged) {

    localStorage.setItem("user", JSON.stringify(userLoged))

    alert("producto agregado correctamente")
    renderCarrito(userLoged.cart)

    return;
}


export function renderCarrito(cart) {
    let totalProducts = cart.reduce((acumulador, cart) => acumulador + cart.cantidad, 0);
    cuantity_products.innerText = String(totalProducts)
}