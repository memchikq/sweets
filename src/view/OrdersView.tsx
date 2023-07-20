"use client"
import { CartItemsType } from "@/components/Cart/types"
import { GetOrdersResponseSuccess } from "@/utils"
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
import {useState} from 'react'

const arr = [
  {
    id: 1,
    completed: true,
    totalPrice: "30000",
    typePayment: "locale",
    order_items: [
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
    ],
  },
  {
    id: 1,
    completed: false,
    totalPrice: "30000",
    typePayment: "online",
    order_items: [
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
    ],
  },
  {
    id: 1,
    completed: true,
    totalPrice: "30000",
    typePayment: "local",
    order_items: [
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
    ],
  },
  {
    id: 1,
    completed: true,
    totalPrice: "30000",
    typePayment: "online",
    order_items: [
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
      { id: 1, name: "Дебош", number: 4, price: "3000" },
    ],
  },
]
const OrdersView:React.FC<{data:GetOrdersResponseSuccess}> = ({data}) => {
  const [loading,setLoading] = useState(false)
  const cancleOrder = async (id:number) => {
    try{
      setLoading(true)
      const response = await fetch("/api/orders/cancel",{method:"DELETE",body:JSON.stringify({id})})
      
      const {message} = await response.json()
      
      notifications.show({
        message: `${message}`,
        color: response.ok ? "green" : "red",
      })
      
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
              <Text>Создан 12.03.2023 13:00</Text>
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

                <Text>Общая сумма: {v.total_price} тг.</Text>
                {!v.completed && v.typePayment == "online" ?  
                <Link style={{color:"lime"}} href={`/payment?p=${v.url}`}>Продолжить оплату</Link>
                : ""
            }
              <Button disabled={loading} onClick={()=>cancleOrder(v.id)} size="xs" color="red">Отменить заказ</Button>
            </Flex>
              </Group>
              <Divider/>
            </Spoiler>
          )):<Text>Список заказвов пуст</Text>}
        </Flex>
      </Container>
    </section>
  )
}

export default OrdersView
