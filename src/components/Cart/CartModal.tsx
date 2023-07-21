import {
  Badge,
  Center,
  CloseButton,
  Divider,
  Flex,
  Group,
  Input,
  Modal,
  Text,
} from "@mantine/core"
import Image from "next/image"
import Delivery from "./Delivery"
import { useLocalStorage } from "@mantine/hooks"
import {CartItemsType} from './types'
import Link from "next/link"

const CartModal = ({ opened, closeModal }: any) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemsType[]>({
    key: 'cart',
    defaultValue: [],
  });

  const reduceTotalPrice = () =>{
    if(!cartItems.length) return 0
    return cartItems.reduce((acc,c)=>{
      const product = c.price * c.number
      return acc + product
    },0)
  }

  const addNumItem = (id:number) =>{
    const item = cartItems.find(v => v.id === id)
    if(item){
      if(item.number === 9) {
        alert("Максимум товара")
        return
      }
      item.number += 1
      setCartItems([...cartItems])
    }
  }

  const removeNumItem = (id:number) =>{
    const item = cartItems.find(v => v.id === id)
    if(item){
      if(item.number === 1) return
      item.number -= 1
      setCartItems([...cartItems])
    }
  }

  const removeCartItem = (id:number) =>{
    const item = cartItems.filter(v => v.id !== id)
    if(item){
      setCartItems([...item])
    }
  }

  return (
    <Modal
      centered
      size="lg"
      title={<span style={{ fontSize: "22px" }}>Ваш заказ:</span>}
      opened={opened}
      onClose={closeModal}
    >
      <Flex direction="column" gap={18}>
        {cartItems.length === 0 && <Center>Корзина пуста</Center>}
        {cartItems.length > 0 &&
          cartItems.map((item)=>(
            <Flex key={item.id} align="center" justify="space-between">
            <Group>
              <Image
                src={`/uploads/${item.picture}`}
                style={{ borderRadius: "30%" }}
                alt="1"
                width={60}
                height={60}
              />
              <Text>{item.name}</Text>
            </Group>
            <Group>
              <Badge style={{cursor:"pointer",userSelect:"none"}} onClick={()=> addNumItem(item.id)} color="green" size="md" variant="filled">
                +
              </Badge>
              <Input value={item.number} onChange={()=>{}} size="xs" maw={30} />
              <Badge style={{cursor:"pointer",userSelect:"none"}} onClick={()=> removeNumItem(item.id)} color="red" size="md" variant="filled">
                -
              </Badge>

              <Text w={70}>{item.price * item.number} тг.</Text>
  
              <CloseButton color="red" onClick={()=> removeCartItem(item.id)} />
            </Group>
          </Flex>
          ))
        }
        <Divider />

        <Group position="right">
          <Text fw="bold">Сумма заказа: {reduceTotalPrice()} тг.</Text>
        </Group>
          <Group position="right">
            <Link onClick={closeModal} href="/orders"><Text color="indigo" fw="bold">Просмотр готовых зкакзов</Text></Link>
          </Group>
        <Divider />

       <Delivery closeModal={closeModal} cartItems={cartItems}  />
       
      </Flex>
    </Modal>
  )
}

export default CartModal
