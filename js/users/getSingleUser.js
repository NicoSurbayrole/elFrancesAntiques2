export async function getSingleUser(email) {
    try {
        const url = new URL("../../users.json", import.meta.url);
        const res = await fetch(url);

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