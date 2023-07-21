import { supabase } from "@/lib/db"
import { generateRandomString } from "./generateHash"
import { CartItemsType } from "@/components/Cart/types"
type Query = { query: number | string | null }

export async function getProducts({ query }: Query) {
  if (!query) {
    const { data } = await supabase
      .from("products")
      .select("id,name,picture,price,description")
    return data
  }
  const { data } = await supabase
    .from("products")
    .select("id,name,picture,price,description")
    .eq("cat_id", query)
  return data
}

export async function getProductById(id: number | string) {
  const { data } = await supabase.from("products").select().eq("id", id)

  return data
}

export async function getCategories() {
  const { data } = await supabase.from("category").select()

  return data
}

export async function getCategory(id: string | number) {
  const { data } = await supabase.from("category").select().eq("id", id)

  return data
}

export async function addOrder(totalPrice: number, paymentType: string,ip:string, orderItems: CartItemsType[]) {
  const url = generateRandomString(15)
  const isComplited = paymentType === "local" ? true : false
  const { data, error } = await supabase
    .from("orders")
    .insert({
      total_price: totalPrice,
      url: url,
      typePayment: paymentType,
      completed: isComplited,
      ip: ip,
      order_items: JSON.stringify(orderItems)
    })
    .select("total_price,url,typePayment")

  return { data, error }
}

export async function getOrders(ip:string){


  const { data, error } = await supabase.
    from("orders")
    .select("id,total_price,completed,order_items,url,typePayment,created_at")
    .eq("ip",ip)

    return {data,error}
}

export async function getPaymentOrder(url: string) {
    const { data, error } = await supabase
      .from("orders")
      .select("total_price,completed,id")
      .eq("url",url)
  
    return { data, error }
}

export async function completeOrder(complete: boolean,url:string) {
  const { error } = await supabase
    .from("orders")
    .update({completed:complete})
    .eq("url",url)

  return { error }
}


export async function cancelOrder(id:number){

  const { error } = await supabase.
    from("orders")
    .delete()
    .eq("id",id)

    return {error}
}

type ProductsResponse = Awaited<ReturnType<typeof getProducts>>
export type ProductsResponseSuccess = ProductsResponse
export type ProductsResponseError = ProductsResponse

type ProductByIdResponse = Awaited<ReturnType<typeof getProductById>>
export type ProductByIdResponseSuccess = ProductByIdResponse
export type ProductByIdResponseError = ProductByIdResponse

type CategoriesResponse = Awaited<ReturnType<typeof getCategories>>
export type CategoriesResponseSuccess = CategoriesResponse
export type CategoriesResponseError = CategoriesResponse

type CategoryResponse = Awaited<ReturnType<typeof getCategory>>
export type CategoryResponseSuccess = CategoryResponse
export type CategoryResponseError = CategoryResponse

type OrderResponse = Awaited<ReturnType<typeof addOrder>>
export type OrderResponseSuccess = OrderResponse["data"]
export type OrderResponseError = OrderResponse["error"]

type GetOrdersResponse = Awaited<ReturnType<typeof getOrders>>
export type GetOrdersResponseSuccess = GetOrdersResponse["data"]
export type GetOrdersResponseError = GetOrdersResponse["error"]

type GetOrderResponse = Awaited<ReturnType<typeof getPaymentOrder>>
export type GetOrderResponseSuccess = GetOrderResponse["data"]
export type GetOrderResponseError = GetOrderResponse["error"]
