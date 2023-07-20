"use client"
import { FC,useEffect } from "react"
import { FaCheckCircle } from "react-icons/fa";
import { Badge, Button, Divider, Group, Modal, Space, useMantineTheme } from "@mantine/core"
import { notifications } from '@mantine/notifications';
import { notFound, useRouter } from "next/navigation"
import { ProductByIdResponseSuccess } from "@/utils"
import { useDisclosure, useLocalStorage } from "@mantine/hooks"
import Image from "next/image"

interface CartItemsType {
  id:number,
  name:string,
  picture:string,
  price:number,
  number:number
} 


const ModalComponent: FC<{ prdoductData: ProductByIdResponseSuccess }> = ({prdoductData}) => {
  if (!prdoductData || !prdoductData.length) return notFound()
  const { id ,name, picture, price, description, structure, weight } = prdoductData[0]
  const [cartItems, setCartItems] = useLocalStorage<CartItemsType[] | []>({
    key: 'cart',
    defaultValue: [],
  });
  
  const addToCart = () =>{
    if(cartItems.length > 0){
      const cartItem = cartItems.find(v=> v.id === id)
      if(cartItem){
        if (cartItem.number === 9) {
          notifications.show({
            message: "Максимальное количество",
            color: "red",
          })
          return
        }
        cartItem.number += 1
        setCartItems([...cartItems])
        notifications.show({
          message: `${cartItem.name} уже в корзине, добавлено + 1 колличество`,
          color:"green"
        })
        return
      }
    }
    setCartItems((prev:CartItemsType[] | [])=>([...prev,{id,name,picture,price,number: 1}]))
    notifications.show({
      message: 'Добавлено в корзину',
      icon:<FaCheckCircle color="lime" />,
      color:"green"
    })
  }

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const router = useRouter()

  useEffect(()=>{
    open()
  },[])

  return (
    <Modal
      centered
      size="lg"
      opened={opened}
      onClose={() => router.back()}
      title={<span style={{fontSize:"22px"}}>{name}</span>}
      transitionProps={{
        transition: "fade",
        duration: 300,
        timingFunction: "linear",
      }}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
        opacity: 0.15,
        blur: 3,
      }}
    >
      <Group position="center">
        <Image src={`/uploads/${picture}`} style={{width:"100%",height:"80%"}} width={300} height={300} alt="Изображение товара в модальном окне"/>
      </Group>
      

        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group >{description}</Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group>Состав: {structure}</Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group position="apart" px="8px">
        <Badge color="green" size="lg" variant="outline">Цена: {price}тг.</Badge>
        <div>Вес: {weight}гр.</div>
        </Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Button color="green" onClick={addToCart}>Купить</Button>
     
    </Modal>
  )
}

export default ModalComponent
