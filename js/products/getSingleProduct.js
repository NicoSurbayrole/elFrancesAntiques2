export async function getSingleProduct(productId) {
    try {
        const url = new URL("../../productos.json", import.meta.url);
        const res = await fetch(url);

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