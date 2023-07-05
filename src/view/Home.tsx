
import AboutUs from '@/components/AboutUs'
import ClientDivider from '@/components/ClientDivider'
import DeliveryInfoComponent from "@/components/DeliveryInfoComponent"
import ProductGalleryComponent from "@/components/ProductGalleryComponent"
import { getCategories } from '@/utils'


const Home = async () => {
  const categories = await getCategories()
  return (
    <>
          <ClientDivider my="xs"/>
          <AboutUs />
          <ClientDivider my="xs"/>
          <ProductGalleryComponent list={categories} />
          <ClientDivider my="xs"/>
          <DeliveryInfoComponent/>
    </>
  )
}

export default Home
