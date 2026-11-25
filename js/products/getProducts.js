export async function getProducts() {
    try {
        const url = new URL("../../productos.json", import.meta.url);
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Error al obtener los productos");
        }

        const productos = await res.json();

        const productosNuevos = JSON.parse(
            localStorage.getItem("productosNuevos")
        ) || [];

        const validateEliminateProduct = JSON.parse(
            localStorage.getItem("productos")
        );

        const productosBase = validateEliminateProduct ?? productos;

        const productosActualizados = productosNuevos.filter(
            nuevo => !productosBase.some(
                producto => producto.id === nuevo.id
            )
        );

        return [...productosBase, ...productosActualizados];

    } catch (err) {
        console.error(err);
        return [];
    }
}