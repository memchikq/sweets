import { NextRequest, NextResponse } from "next/server"
import {CartItemsType} from '@/components/Cart/types'
import { addOrder, getOrders, getProducts } from "@/utils"
import { checkInvalidData } from "@/utils/checkInvalidData"
import { calculateTotalPrice } from "@/utils/calculateTotalPrice"

interface Body {
    paymentType:"online" | "local",
    phoneNumber:string,
    userName:string,
    city:string,
    cartItems:CartItemsType[]
}

export async function POST(request: NextRequest) {
  const body:Body = await request.json()
  const products = await getProducts({query:null})

  const ipAdress = request.headers.get("x-forwarded-for")?.split(/, /)[0] 

  if(products === null || !products.length) return NextResponse.json({message:"Произошла ошибка на сервере"},{status:500})

  if(!body.cartItems.length || !body.city || !body.userName || !body.phoneNumber) return NextResponse.json({message:"Данные некорректны или изменённые "},{status:400})

  

  const invalidData = checkInvalidData(products, body.cartItems)

  if(invalidData) return NextResponse.json({message:"Отправленные данные были изменённые "},{status:400})

  const totlaPrice = calculateTotalPrice(body.cartItems,body.paymentType)

  

  const {data,error} = await addOrder(totlaPrice,body.paymentType,ipAdress || "0",body.cartItems)

  if(error) return NextResponse.json({message:"Произошла ошибка при создании заказа"},{status:500})


  return NextResponse.json({data})
}


export async function GET(request: NextRequest) {
  const ipAdress = request.headers.get("x-forwarded-for")?.split(/, /)[0] 
  const {data,error} = await getOrders(ipAdress || "0")

  if(error) return NextResponse.json({message:"Ошибка на сервере"},{status:500})

  return NextResponse.json({data})

}