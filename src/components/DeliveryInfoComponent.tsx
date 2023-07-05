"use client"
import { Center, Container, Flex, createStyles } from "@mantine/core"
import { FaCcMastercard,FaCcVisa } from "react-icons/fa"
import gift from '../../public/gift.png'
import React from "react"
import Image from "next/image"
const useStyles = createStyles((theme) => ({

  flexContainer:{
    justifyContent:"space-around",
    alignItems:"center",

    [theme.fn.smallerThan("sm")]:{
      justifyContent:"center",
    },
    "& .info__container":{
      flexBasis:"30%",
      [theme.fn.smallerThan("md")]:{
        flexBasis:"100%",
      }
    }
  },

  flexImageContainer:{
    flexBasis:"30%",
    [theme.fn.smallerThan("sm")]:{
      display:"none"
    }
  }

}))


const DeliveryInfoComponent = () => {
  const {classes} = useStyles()

  return (
    <section style={{marginBottom:"10px"}}>
      <Container mt="40px" size="90%">
      <Center fz={20}>
        <h2>Оплата и доставка</h2>
      </Center>
      <Flex className={classes.flexContainer}>
        <Flex className="info__container" direction="column">
            <h3>Стоимость доставки 600тг. </h3>
            <h4>При заказе от 5000тг доставка бесплатная! </h4>
            <br/>
            <h3 style={{marginBottom:"4px"}}>5% скидка при оплате онлайн.</h3>
            <p>Вы можете оплатить наличными или картой курьеру, либо воспользоваться функцией онлайн-оплаты и получить скидку 5%.</p>
            <Flex gap={8}>
                <FaCcMastercard size={45}/>
                <FaCcVisa size={45}/>
            </Flex>
        </Flex>
        <Flex className={classes.flexImageContainer}>
            <Image src={gift} width={300} alt="gift image"/>
        </Flex>

      </Flex>
      </Container>
    </section>
  )
}

export default DeliveryInfoComponent
