import React from 'react'
import { getUsers } from '@/utils/getUsers'
import { Container } from '@mui/material'

type User = { 
  
    id:number,
    name:string,
    email:string,
    password:string 
}
export default async function users() {
  const users : User[] = await getUsers() as User[]

  return (
    <Container>
    <div>users</div>
    {
      users.map(user=>(
        <div>
          {user.name}
        </div>
      ))
    }
    </Container>
  
  )
}
