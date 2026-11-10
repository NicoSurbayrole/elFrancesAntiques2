export async function getSingleUser(email) {
    try {
        const res = await fetch("./users.json")

        if (!res.ok) {
            throw new Error("Error al obtener los usuarios")
        }

        const users = await res.json()
        const user = users.find(user => user.email === email)

        return user;

    } catch (err) {
        console.error(err)
        return null;
    }
}