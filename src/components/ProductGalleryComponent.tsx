"use client"
import { Center, Container, Flex, Skeleton, createStyles } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { FC,useEffect,useState } from "react"
import Image from "next/image"
import {useRouter} from 'next/navigation'

import { CategoriesResponseSuccess } from "@/utils"
const useStyles = createStyles((theme) => ({
  carouselImage: {
    objectFit: "cover",
    cursor:"pointer",
    "&:hover":{
      transition:".9s",
      transform: "scale(1.1,1.1)"
    },
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      objectFit: "cover",
    },
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      objectFit: "cover",
    },
  },
  listNameProduct: {
    display: "flex",
    fontSize: "20px",
    padding: "5px",
    [theme.fn.smallerThan("400")]: {
      flexDirection: "column",
    },
    "& li": {
      cursor: "pointer",
    },
  },
}))


type ResponseApiData = {id:number,picture:string}[]

const ProductGalleryComponent: FC<{
  list: CategoriesResponseSuccess
}> = ({ list }) => {
  const { classes } = useStyles()
  const router = useRouter()
  const [products,setProducts] = useState<ResponseApiData>([])
  const [loading,setLoading] = useState(false)

  const fetchData = async(query:number | null) =>{
    setLoading(true)
    const request = await fetch(`/api/products?c=${query}`)
    const data:{data:ResponseApiData} = await request.json()
    setProducts(data.data)
    setLoading(false)

  }

  useEffect(()=>{
    fetchData(null)
  },[])
  
  return (
    <section style={{ marginTop: "15px", marginBottom: "25px" }}>
      <Container mt="40px" size="90%">
        <Center fz={20}>
          <h2>Что мы готовим</h2>
        </Center>
        <Flex justify="center">
          <ul className={classes.listNameProduct}>
            {list?.map((val, i) => (
              <li onClick={()=> fetchData(val.id)} style={{ marginInline: "8px" }} key={val.id}>
                {val.name}
              </li>
            ))}
          </ul>
        </Flex>
      <Carousel align="center" slideSize="33.3%" maw="1150px" loop   mx="auto" withIndicators breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%',},
      ]}>
        {!loading &&products && products.map(v=>(
          <Carousel.Slide key={v.id}><Image onClick={()=>router.push(`/products/${v.id}`)} className={classes.carouselImage} src={`/uploads/${v.picture}`} width={400} alt="carousel_image" height={300} /></Carousel.Slide>
        ))}
        {
          loading && [1,2,3,4].map(v=>(
            <Carousel.Slide gap={7} key={v}>
               <Skeleton height={300} width={400} />
            </Carousel.Slide>
          ))
        }
        </Carousel>
      </Container>
    </section>
  )
}

export default ProductGalleryComponent
