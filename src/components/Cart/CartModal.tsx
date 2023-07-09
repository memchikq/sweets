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
import { useRouter } from "next/navigation"
import Delivery from "./Delivery"
import { useLocalStorage } from "@mantine/hooks"

interface CartItemsType {
  id:number,
  name:string,
  picture:string,
  price:number,
  number:number
} 

const CartModal = ({ opened, closeModal }: any) => {
  const router = useRouter()
  const [cartItems, setCartItems] = useLocalStorage<CartItemsType[] | []>({
    key: 'cart',
    defaultValue: [],
  });

  const reduceTotalPrice = () =>{
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
        {
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
        <Divider />

       <Delivery/>
       
      </Flex>
    </Modal>
  )
}

export default CartModal
