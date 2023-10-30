import { NextResponse } from 'next/server'
import { getUsers } from '@/utils/getUsers'

export async function POST(request:Request,response:Response) {
    const body = await request.json()
    const res = await getUsers(body.email,body.password)
    return Response.json(res)
}
