export async function getProducts() {
    try {
        const url = new URL("../../productos.json", import.meta.url);
        const res = await fetch(url);

        const productosNuevos = JSON.parse(localStorage.getItem("productosNuevos"))
        const validateEliminateProduct = JSON.parse(localStorage.getItem("productos"))

        if (!res.ok) {
            throw new Error("Error al obtener los productos")
        }

        const productos = await res.json()

        if (productosNuevos) productosNuevos.map((producto) => productos.push(producto))

        if (validateEliminateProduct) return validateEliminateProduct



        return productos;

    } catch (err) {
        console.error(err)
        return [];
    }
}