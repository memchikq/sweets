
import OrderLoading from "@/components/OrderLoading";
import OrdersView from "@/view/OrdersView"
import { Metadata } from "next";


export const metadata:Metadata = {
    title: 'Заказы',
    description:"Список заказов",
};

const Page = async () =>{
    return (
    <main style={{flex:"1",marginTop:"60px"}}>
        <OrdersView  />
    </main>
    )
}

export default Page