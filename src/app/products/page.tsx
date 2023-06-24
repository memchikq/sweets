import { supabase } from "@/lib/db";
import { supabaseType } from "@/lib/typesOfRow";
import { getProducts } from "@/utils";
import ProductsView from "@/view/ProductsView";
import { Container } from "@mantine/core";


export default async function Page({searchParams}:any){
    const data = await getProducts({query:"a"})
    return(
        <section style={{flex:"1 0 auto",marginTop:"60px"}}>
           <ProductsView data={data} />
           
        </section>
    )
}