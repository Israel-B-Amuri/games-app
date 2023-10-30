import{ db } from './db'
import { compareSync } from 'bcrypt'


type User = {
    id:number,
    name:string,
    email:string,
    password:string,
}

export async function getUsers(email:string, password:string) {
const data : User[]= await db.query('SELECT * FROM users WHERE email= ?',[email])

    if (data.length !== 0) {
const match = compareSync(password , data[0].password)
        return match
    } else{
        return 'No match found'
    }   
}
