import { getOrders } from "@/utils"
import OrdersView from "@/view/OrdersView"
import { headers } from 'next/headers'

export const revalidate = 10

const Page = async () =>{
    const headersList = headers()
    const ip = headersList.get("x-forwarded-for")
    const {data} = await getOrders(ip || "0")
    return (
    <main style={{flex:"1",marginTop:"60px"}}>
        <OrdersView data={data} />
    </main>
    )
}

export default Page