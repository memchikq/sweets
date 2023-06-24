
import { Box, Center, Flex, createStyles } from "@mantine/core"
import { Carousel } from '@mantine/carousel';
import React from "react"
import Image from "next/image";
const useStyles = createStyles((theme) => ({
    carouselImage:{
        objectFit:"cover",
        [theme.fn.smallerThan("md")]:{
            width:"100%",
            objectFit:"cover"
        },
        [theme.fn.smallerThan("sm")]:{
            width:"100%",
            objectFit:"cover"
        },
    },
    listNameProduct:{
      display:"flex",
      fontSize:"20px",
      padding:"5px",
      [theme.fn.smallerThan("400")]:{
        flexDirection:"column"
    },
    "& li":{
      cursor:"pointer"
    }
    }
}))

const list: string[] = ["Пирожные", "Торты", "Пироги", "Печенье"]

const ProductGalleryComponent = () => {
  const { classes } = useStyles()
  return (
    <section style={{marginTop:"15px",marginBottom:"25px"}} >
      <Center fz={20}>
        <h2>Что мы готовим</h2>
      </Center>
      <Flex justify="center">
        <ul className={classes.listNameProduct} >
          {list.map((val, i) => (
            <li style={{marginInline:"8px"}} key={i}>{val}</li>
          ))}
        </ul>
      </Flex>
      <Carousel align="center" slideSize="33.3%" maw="1150px" loop   mx="auto" withIndicators breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%',},
      ]}>
      <Carousel.Slide><Image className={classes.carouselImage} src="/uploads/debosh.jpg" width={400} alt="1" height={300} /></Carousel.Slide>
      <Carousel.Slide><Image className={classes.carouselImage} src="/uploads/pm.jpg" width={400} alt="1" height={300} /></Carousel.Slide>
      <Carousel.Slide><Image className={classes.carouselImage} src="/uploads/zaher.jpg" width={400} alt="1" height={300} /></Carousel.Slide>
      <Carousel.Slide><Image className={classes.carouselImage} src="/uploads/snikers.jpg" width={400} alt="1" height={300} /></Carousel.Slide>
      <Carousel.Slide><Image className={classes.carouselImage} src="/uploads/apple_pie.jpg" width={400} alt="1" height={300} /></Carousel.Slide>
    </Carousel>
    </section>
  )
}

export default ProductGalleryComponent
