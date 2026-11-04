const productos_container = document.getElementById("productos_container")
console.log(productos_container);

const productos = [
    {
        "id": 1,
        "nombre": "Antiguo Espejo Sol de Madera Dorada a la Hoja",
        "categoria": "Decoración",
        "estilo": "Luis XVI",
        "precio_ars": 150000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 2,
        "nombre": "Mesa de Luz Antigua de Roble con Mármol",
        "categoria": "Mobiliario",
        "estilo": "Art Déco",
        "precio_ars": 220000,
        "disponibilidad": "En subasta"
    },
    {
        "id": 3,
        "nombre": "Araña de Cristal Francés de 6 Luces",
        "categoria": "Iluminación",
        "estilo": "Clásico",
        "precio_ars": 450000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 4,
        "nombre": "Juego de Té de Plata Sellada (4 Piezas)",
        "categoria": "Platería",
        "estilo": "Inglés",
        "precio_ars": 380000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 5,
        "nombre": "Óleo sobre Lienzo 'Paisaje de Campo' - Firmado",
        "categoria": "Arte",
        "estilo": "Académico",
        "precio_ars": 290000,
        "disponibilidad": "En subasta"
    },
    {
        "id": 6,
        "nombre": "Reloj de Mesa de Bronce y Porcelana",
        "categoria": "Relojes",
        "estilo": "Imperio",
        "precio_ars": 180000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 7,
        "nombre": "Sillón Luis XV Tapizado en Pana Verde",
        "categoria": "Mobiliario",
        "estilo": "Luis XV",
        "precio_ars": 310000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 8,
        "nombre": "Florero de Cristal de Baccarat Tallado",
        "categoria": "Cristalería",
        "estilo": "Francés",
        "precio_ars": 125000,
        "disponibilidad": "Disponible"
    },
    {
        "id": 9,
        "nombre": "Antigua Cómoda de Madera Noble con Broncería",
        "categoria": "Mobiliario",
        "estilo": "LXV",
        "precio_ars": 580000,
        "disponibilidad": "En subasta"
    },
    {
        "id": 10,
        "nombre": "Par de Candelabros de Bronce Cincelado",
        "categoria": "Decoración",
        "estilo": "Antiguo",
        "precio_ars": 95000,
        "disponibilidad": "Disponible"
    }
]

productos.slice(0, 8).map(({ nombre, precio_ars }) => {
    productos_container.innerHTML += `
       <div class="product__card">
            <div>
              <img class="product__img" src="./img/alfombra_img" alt="">
            </div>
            <div class="product__info">
              <h3 class="product__title"> ${nombre}</h3>
              <!-- <p class="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
              <small class="product__precio">Precio: ${precio_ars}$</small>
              <button class="product__btn-carrito">agregar al carrito</button>
            </div>
          </div>
    `
})