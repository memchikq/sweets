"use client"
import { CartItemsType } from "@/components/Cart/types"
import OrderLoading from "@/components/OrderLoading"
import { GetOrderResponseError, GetOrdersResponseSuccess } from "@/utils"
import {
  Badge,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Spoiler,
  Text,
} from "@mantine/core"
import { notifications } from "@mantine/notifications"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {useEffect, useState} from 'react'

const OrdersView:React.FC = () => {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState<GetOrdersResponseSuccess>([])
  const router = useRouter() 
  
  
  const cancleOrder = async (id:number) => {
    try{
      setLoading(true)
      const response = await fetch("/api/orders/cancel",{method:"DELETE",body:JSON.stringify({id})})
      
      const {message} = await response.json()
      
      
      notifications.show({
        message: `${message}`,
        color: response.ok ? "green" : "red",
      })
      
      if(response.ok) getOrders()
    }
    catch(e){
      notifications.show({
        message: `Ошибка при отмене заказа`,
        color: "red",
      })
    }
    finally{
      setLoading(false)
    }
  }
  
  const getOrders = async () =>{
    try{
      setLoading(true)
      const response = await fetch("/api/orders",{ cache: 'no-store' })
      const {data}:{data:GetOrdersResponseSuccess} = await response.json()
      if(response.ok) return setData(data)
      
      const {message} = await response.json()
      
      notifications.show({
        message: `${message}`,
        color: "red",
      })
      
      
    }
    catch(e){
      notifications.show({
        message: `Ошибка при получении заказов`,
        color: "red",
      })
    }
    finally{
      setLoading(false)
    }
  }
  
  const convertTime = (time:string) =>{
    const date = new Date(time)
    
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} | ${date.getHours()}:${date.getMinutes()}`
  }
  
  useEffect(()=>{
    getOrders()
  },[])
  
  if(loading) return <OrderLoading/>

  return (
    <section>
      <Container size="sm">
        <Flex direction="column" align="center">
          <h1 style={{ marginTop: "16px" }}>Ваши заказы</h1>
          {data !== null && data.length ? data.map((v,i) => (
            <Spoiler
              mb={8}
              
              key={i}
              showLabel="Развернуть"
              hideLabel="Спрятать"
              maxHeight={200}
              w="100%"
              
            >
              <Group position="center">
              <Text>Заказа №{v.id}</Text>
              <Text>Создан {convertTime(v.created_at)}</Text>
                {v.typePayment == "local" ? (
                  <Badge color="gray">Оплата у курьера</Badge>
                ) : v.completed ? (
                  <Badge color="green">Оплачено</Badge>
                ) : (
                  <Badge color="red">Не оплачено</Badge>
                )}
              </Group>
              <Flex direction="column">
                <Flex justify="space-between">
                    <Text>Название</Text>
                    <Text>Колличество</Text>
                    <Text >Цена</Text>
                </Flex>
                
                {v.order_items && typeof v.order_items === 'string' && JSON.parse(v.order_items).map((value:CartItemsType)=>(
                    <Flex key={value.id} p={8} justify="space-between">
                        <Text style={{flexBasis:"130px"}}>{value.name}</Text>
                        <Text  style={{flexBasis:"auto"}}>{value.number}</Text>
                        <Text style={{flexBasis:"12%"}} >{value.price} тг.</Text>
                    </Flex>
                ))}
              </Flex>
              <Group position="right" m={4}>
                <Flex direction="column">

                <Text my={6}>Общая сумма: {v.total_price} тг.</Text>
                {!v.completed && v.typePayment == "online" ?  
                <Link style={{color:"lime"}} href={`/payment?p=${v.url}`}>Продолжить оплату</Link>
                : ""
            }
              <Button mt={8} disabled={loading} onClick={()=>cancleOrder(v.id)} size="xs" color="red">Отменить заказ</Button>
            </Flex>
              </Group>
              <Divider/>
            </Spoiler>
          )):<Text>Список заказов пуст</Text>}
        </Flex>
      </Container>
    </section>
  )
}

export default OrdersView
