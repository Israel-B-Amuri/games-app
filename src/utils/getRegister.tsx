import { db } from "./db";

export async function getLogin(name:string,email:string,password:string) {
    const data = await db.query(`INSERT INTO users('${name}','${email}','${password}')`)
    return Object.values(JSON.parse(JSON.stringify(data)))
  }