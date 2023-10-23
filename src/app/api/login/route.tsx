import {getLogin} from "@/utils/getLogin";
import { NextResponse } from 'next/server'

export async function POST(request:Request,response:Response) {
const data = await request.json()
const match = await getLogin(data.email,data.password)
if(match.length==1){
    console.log('hej');
    return NextResponse.redirect(new URL('/products', request.url))
}else
{return NextResponse.json({msg:'hej'})}
}