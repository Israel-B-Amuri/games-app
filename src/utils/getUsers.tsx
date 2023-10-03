import{ db } from './db'

export async function getUsers() {
    const data = await db.query('SELECT * FROM users')
    return Object.values(JSON.parse(JSON.stringify(data)))
}
