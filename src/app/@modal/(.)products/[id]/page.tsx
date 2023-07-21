import ModalComponent from "@/components/Products/ProductsModal"
import { getProductById } from "@/utils"

type Props = {
    params: { id: string | number }
    searchParams: { [key: string]: string | string[] | undefined }
  }

const Page = async (props:Props) =>{
    
    const productData = await getProductById(props.params.id)
    return <ModalComponent prdoductData={productData} />
}

export default Page