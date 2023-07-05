import { getProductById } from '@/utils'
import ProductByIdView from '@/view/ProductByIdView'

type PageType = {
    params:{id:number},
    searchParams?:any
}

export default async function Page(props:PageType){
    const data = await getProductById(props.params.id)
    return (
    <section style={{flex:"1 0 auto",marginTop:"60px"}}>
        <ProductByIdView data={data} />
    </section>
    )
}

