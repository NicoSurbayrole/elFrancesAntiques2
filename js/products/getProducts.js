export async function getProducts() {
    try {
        const res = await fetch("./productos.json")

        if (!res.ok) {
            throw new Error("Error al obtener los productos")
        }

        const productos = await res.json()
        return productos

    } catch (err) {
        console.error(err)
        return [];
    }
}