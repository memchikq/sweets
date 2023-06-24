import { getProductById } from '@/utils'

type PageType = {
    params:{id:number},
    searchParams?:any
}

export default async function Page({params}:PageType){
    const [data] = await getProductById(params.id)
    return (
    <section style={{flex:"1 0 auto",marginTop:"60px"}}>
        {data.name}
    </section>
    )
}

