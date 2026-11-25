export async function getUsers() {
    try {
        const url = new URL("../../users.json", import.meta.url);
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Error al obtener los productos")
        }

        const users = await res.json()
        return users

    } catch (err) {
        console.error(err)
        return [];
    }
}