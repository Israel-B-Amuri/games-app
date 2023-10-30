import {getRegister} from "@/utils/getRegister";
import { NextResponse } from 'next/server'

export async function GET(request:Request,response:Response) {
const data = await request.json()
const match = await getRegister(data.email,data.password)
if(match.length==1){
    console.log('hej');
    return NextResponse.redirect(new URL('/products', request.url))
}else
{return NextResponse.json({msg:'hej'})}
}
