import { getCategory, getProductById, getProducts } from '@/utils'
import ProductByIdView from '@/view/ProductByIdView'
import { Metadata } from 'next'



type Props = {
    params: { id: string | number }
    searchParams: { [key: string]: string | string[] | undefined }
  }
 
  export async function generateStaticParams(){
    const data = await getProducts({query:null})
    if(!data) return []
    return data.map((v)=>({
      slug:v.id.toString()
    }))
  }


  export async function generateMetadata({ params}: Props): Promise<Metadata> {
    const data = await getProductById(params.id)
    if(data !== null && data.length){
        const category = await getCategory(data[0].cat_id) || [{name:"Десерт"}]
        return {
          title: data[0]?.name,
          description: data[0]?.description,
          keywords:[data[0].name, category[0].name, "Сладости"]
        }
    }
    return {
        title:"Sweet Mania - десерты на любой вкус!"
    }
  }

export default async function Page(props:Props){
    const data = await getProductById(props.params.id)
    return (
    <main style={{flex:"1 0 auto",marginTop:"60px"}}>
        <ProductByIdView data={data} />
    </main>
    )
}

