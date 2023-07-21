"use client"
import { IMaskInput } from "react-imask"
import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Input,
  Paper,
  Text,
  TextInput,
} from "@mantine/core"
import { FaCcVisa, FaCcMastercard } from "react-icons/fa6"
import { GetOrderResponseSuccess } from "@/utils"
import {  notFound, redirect, useRouter} from "next/navigation"
import { useState } from "react"
import { notifications } from "@mantine/notifications"


const PaymentView:React.FC<{data:GetOrderResponseSuccess,url:string}> = ({data,url}) => {
  const router = useRouter()
  if(!data) return redirect("/orders")
  
  
  const [loading,setLoading] = useState(false)
  const [cardNumber,setCardNumber] = useState("")
  const [cardName,setCardName] = useState("")
  const [expiryDate,setExpiryDate] = useState("")
  const [cvc,setSvc] = useState("")

  const cardHandler = async () =>{
    if(cardNumber.length < 15 || cardName.length < 2 || expiryDate.length < 5 || cvc.length < 3){
      notifications.show({
        message:"Заполните все поля",
        color:"red"
      })
      return
    }
    setLoading(true)
   const response = await fetch("/api/orders/complete",{method:"POST",body:JSON.stringify({url})})
   setLoading(false)
   if(!response.ok) {
    const error = await response.json()
      notifications.show({
        message: error.message,
        color:"red"
    })
    return
  }
  router.replace("/orders")
  }

  return (
    <section style={{ minHeight: "100%" }}>
      <Container size="lg">
        <Flex justify="center" h="80vh" align="center">
          <Paper w="300px" withBorder>
            <Center p={12}>
              <h1>Fake Оплата</h1>
            </Center>
            <Divider />
            <Group px={30} mb={8} position="left">
              <Flex columnGap={6} py={6} justify="center" w="100%">
                <FaCcVisa size={35} />
                <FaCcMastercard size={35} />
              </Flex>
                
                <Text fw="bold" w="100%" align="center">Заказ №{data[0].id}</Text>

                
              <Flex w="100%" justify="space-between">
                <Text>Сумма</Text>
                <Text>{data[0].total_price} тг.</Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Text>Скидка</Text>
                <Text>5%</Text>
              </Flex>
              {data[0].total_price < 5000 &&
              <Flex w="100%" justify="space-between">
                <Text>Доставка</Text>
                <Text>600тг.</Text>
              </Flex>
              }

              <Input.Wrapper label="Номер карты" required w="100%">
                <Input value={cardNumber} onChange={(e)=>setCardNumber(e.currentTarget.value)} placeholder="0000 0000 0000 0000" mask="0000 0000 0000 0000" component={IMaskInput} />
              </Input.Wrapper>

              <Input.Wrapper  label="Имя на карте" w="100%" required>
                <Input value={cardName} onChange={(e)=>setCardName(e.currentTarget.value)}  mask={(value:any)=>value.match(/^[А-яA-Za-z]+/)} placeholder="Иван Иванов" component={IMaskInput} />
              </Input.Wrapper>
              
              <Flex>
              <Input.Wrapper label="Срок действия" required>
                <Input value={expiryDate} onChange={(e)=>setExpiryDate(e.currentTarget.value)}  mask="00/00" placeholder="месяц/год" component={IMaskInput} />
              </Input.Wrapper>
                <TextInput value={cvc} onChange={(e)=>setSvc(e.currentTarget.value)} required label="CVC" placeholder="000" maxLength={3} />
              </Flex>
              <Button disabled={loading} onClick={cardHandler} color="green">Оплатить</Button>

            </Group>
            <Divider />
            <Group px={30}>
                
                <Text align="center" color="red">Это оплата является просто примером, введите случйные данные.</Text>
            </Group>
          </Paper>
        </Flex>
      </Container>
    </section>
  )
}

export default PaymentView
