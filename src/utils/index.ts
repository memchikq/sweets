import { supabase } from "@/lib/db";

type Query = {query:number | null}

export async function getProducts({query}:Query){
    if(!query) {
        const {data} = await supabase.from('products').select("id,name,picture,price,description")
        return data
    }
    const {data} = await supabase.from('products').select("id,name,picture,price,description").eq("cat_id",query)
    return data
} 



export async function getProductById(id:number | string){
    const {data} = await supabase.from('products').select().eq("id",id)

    return data
} 

export async function getCategories() {
    const {data} = await supabase.from('category').select()

    return data
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