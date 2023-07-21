import { getPaymentOrder } from "@/utils"
import PaymentView from "@/view/PaymentView"
import { Metadata } from "next"
import { redirect } from "next/navigation"

type Props = {
    params: { [key:string]: string | number }
    searchParams: { [key: string]: string  }
}

export const metadata:Metadata = {
    title: 'Оплата',
    description:"Оплата заказа",
    robots:{
        index:false,
        follow:true,
        googleBot:{
            index:false,
            follow:true
        }
    }
  };

const Page = async ({searchParams}:Props) =>{
    if(!searchParams.p) return redirect("/orders")
    const {data} = await getPaymentOrder(searchParams.p)
    if(data === null || !data.length || data[0]?.completed) redirect("/orders")
    return (
    <main style={{marginTop:"60px",flex:"1 0 auto"}}>
        <PaymentView url={searchParams.p} data={data} />
    </main>
    )
}

export default Page