export async function getUsers() {
    try {
        const res = await fetch("./users.json")

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