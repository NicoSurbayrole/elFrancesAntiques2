
const product_container = document.getElementById("productos_container")
let cuantity_products = document.getElementById("cuantity__products")

product_container.addEventListener("click", (e) =>{
    const button = e.target.closest(".product__btn-carrito");

    if(!button) return;

    //const card = button.closest(".product__card");
    let cantidad = Number(cuantity_products.innerText) 

    cantidad++
    
    cuantity_products.innerText = cantidad 
})



