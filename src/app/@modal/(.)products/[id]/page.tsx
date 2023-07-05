import ModalComponent from "@/components/Modal"
import { getProductById, getProducts } from "@/utils"

interface PageProps {
    params:{id:string};
    searchParams?:any
} 

const Page = async (props:PageProps) =>{
    
    const productData = await getProductById(props.params.id)
    return <ModalComponent prdoductData={productData} />
}

export default Page