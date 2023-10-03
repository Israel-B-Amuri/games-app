import{ db }from './db'

export async function getProducts() {
    const data = await db.query('SELECT * FROM products')
    return Object.values(JSON.parse(JSON.stringify(data)))
}