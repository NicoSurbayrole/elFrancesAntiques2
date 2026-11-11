export async function getSingleProduct(productId) {
    try {
        const res = await fetch("./productos.json")

        if (!res.ok) {
            throw new Error("Error al obtener el producto")
        }

        const products = await res.json()
        const product = products.find(product => product.id === Number(productId))

        return product;

    } catch (err) {
        console.error(err)
        return null;
    }
}