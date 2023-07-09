"use client"
import { FC,useEffect } from "react"
import { Badge, Button, Divider, Flex, Group, Modal, Space, useMantineTheme } from "@mantine/core"
import { useRouter } from "next/navigation"
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
  if (!prdoductData) return null
  const { id ,name, picture, price, description, structure, weight } = prdoductData[0]
  const [cartItems, setCartItems] = useLocalStorage<CartItemsType[] | []>({
    key: 'cart',
    defaultValue: [],
  });

  const addToCart = () =>{
    if(cartItems.length > 0){
      const cartItem = cartItems.find(v=> v.id === id)
      if(cartItem){
        cartItem.number += 1
        setCartItems([...cartItems])
        return
      }
    }
    setCartItems((prev:CartItemsType[] | [])=>([...prev,{id,name,picture,price,number: 1}]))
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
