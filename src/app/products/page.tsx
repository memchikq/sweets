import { getCategories, getProducts } from "@/utils";
import ProductsView from "@/view/ProductsView";
import ListProduct from "@/components/Products/ListProduct"

export default async function Page({searchParams}:any){
    const productsData =  getProducts({query:searchParams.c || null})
    const categoriesData = getCategories()
    const [products,cateregories] = await Promise.all([productsData,categoriesData])
    return(
        <section style={{flex:"1 0 auto",marginTop:"60px"}}>
           <ListProduct list={cateregories} />
           <ProductsView data={products} />

        </section>
    )
}