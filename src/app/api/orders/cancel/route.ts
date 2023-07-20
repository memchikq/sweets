import { cancelOrder } from "@/utils";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest){
    const body = await request.json()
    if(!body.id) return NextResponse.json({message:"Отсутствует id заказа"},{status:400})
    const {error} = await cancelOrder(body.id)

    if(error) NextResponse.json({message:"Ошибка на стороне сервера"},{status:500})

    return NextResponse.json({message:"Заказ успешно отменён"})
}