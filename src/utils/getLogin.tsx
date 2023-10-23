import {db} from '@/utils/db'

export async function getLogin(email:string,password:string) {
  const data = await db.query(`SELECT * FROM users WHERE email = '${email}' AND password ='${password}'`)
  return Object.values(JSON.parse(JSON.stringify(data)))
}
