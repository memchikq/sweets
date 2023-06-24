import { supabase } from "@/lib/db";
import { supabaseType } from "@/lib/typesOfRow";

export async function getProducts({query}:{query:string}){
    const {data} = await supabase.from('products').select() as supabaseType

    return data
} 


export async function getProductById(id:number){
    const {data} = await supabase.from('products').select().eq("id",id) as supabaseType

    return data
} 