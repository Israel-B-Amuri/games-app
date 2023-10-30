import {register} from "@/utils/getUsers";


export async function POST(request:Request,response:Response) {
    const data = await request.json()
    console.log(data);
    
    const res = await register(data.email,data.password,data.name)
    return  Response.json(res)
}
