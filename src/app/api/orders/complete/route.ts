import { completeOrder } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

type Body = {url:string}

export async function POST(request: NextRequest){
    const body:Body = await request.json()
    
    const {error} = await completeOrder(true,body.url)

    if(error) return NextResponse.json({message:"Ошибка на сервере"},{status:500})



    return NextResponse.json({message:"Успешно"})
}