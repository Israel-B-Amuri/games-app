import { db } from "./db"

export async function getProduct(id:string) {
    const data = await db.query(`SELECT * FROM products WHERE id = ${id}`)
    return Object.values(JSON.parse(JSON.stringify(data)))
}
