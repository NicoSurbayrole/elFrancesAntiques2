const productos_container = document.getElementById("productos_container")

export const renderProducts = (productos) => {
    productos_container.innerHTML = productos.map(({id, nombre, precio_ars }) => `
    <div class="product__card">
         <div>
           <img class="product__img" src="./img/alfombra_img" alt="">
         </div>
         <div class="product__info">
           <h3 class="product__title"> ${nombre}</h3>
           <!-- <p class="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
           <small class="product__precio">Precio: ${precio_ars}$</small>
           <button data-id="${id}" class="product__btn-carrito">agregar al carrito</button>
         </div> 
       </div>
 `).join('')
}