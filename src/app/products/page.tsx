import { getCategories, getProducts } from "@/utils";
import ProductsView from "@/view/ProductsView";
import ListProduct from "@/components/Products/ListProduct"
import { notFound } from "next/navigation";
import { Metadata } from "next";


type Props = {
    params: { id: string | number }
    searchParams: { [key: string]: string  }
  }

export const metadata:Metadata = {
    title: 'Список десертов',
    description:"Кондитерские изделия на любой вкус, торты, пироги, пирожные и печенья",
    keywords:["Кондитерская", "Сладости", "Пирог","Торт","Пирожное","Печенье"]
  };

export default async function Page(props:Props){
    const productsData =  getProducts({query:props.searchParams.c || null})
    const categoriesData = getCategories()
    const [products,cateregories] = await Promise.all([productsData,categoriesData])
    if(!products || !cateregories) return notFound()
    return(
        <main style={{flex:"1 0 auto",marginTop:"60px"}}>
           <ListProduct list={cateregories} />
           <ProductsView data={products} />

        </main>
    )
}