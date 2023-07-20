import { getPaymentOrder } from "@/utils"
import PaymentView from "@/view/PaymentView"
import { redirect } from "next/navigation"

type Props = {
    params: { [key:string]: string | number }
    searchParams: { [key: string]: string  }
}

const Page = async ({searchParams}:Props) =>{
    const {data} = await getPaymentOrder(searchParams.p)
    if(data === null || !data.length || data[0]?.completed) redirect("/orders")
    return (
    <main style={{marginTop:"60px",flex:"1 0 auto"}}>
        <PaymentView data={data} />
    </main>
    )
}

export default Page