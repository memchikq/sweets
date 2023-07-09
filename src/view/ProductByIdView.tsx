"use client"
import { ProductByIdResponseSuccess } from "@/utils/index"
import {
  Button,
  Container,
  Flex,
  Space,
  Text,
  Title,
  createStyles,
} from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import Image from "next/image"
import { FC } from "react"

interface CartItemsType {
  id:number,
  name:string,
  picture:string,
  price:number,
  number:number
} 

const useStyles = createStyles((theme) => ({
  flexContainer: {
    flexWrap:"nowrap",
    [theme.fn.smallerThan("sm")]: {
      flexWrap: "wrap",
    },
  },
  productImage:{
    [theme.fn.smallerThan("sm")]: {
      width:"100%",
      height:"100%"
    }
  }
}))

const ProductViewById: FC<{ data: ProductByIdResponseSuccess }> = ({ data }) => {
  if(data === null) return null
  const {classes} = useStyles()
  const {id,name,picture,price,description,structure,weight} = data[0]
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



  return (
    <Container size="md" mt={40} mb={40}>
      <Flex gap={25} className={classes.flexContainer} >
        <div>
          <Image
          className={classes.productImage}
            style={{ borderRadius: "4px" }}
            src={`/uploads/${picture}`}
            alt={name}
            width={400}
            height={300}
          />
        </div>

        <div>
          <Title order={2}>{name}</Title>

          <Space h="md" />
          <Text fw="bold" fz={20}>
            {price} тг.
          </Text>
          <Space h="md" />
          <Text>{description}</Text>
          <Space h="md" />

          <Text fs="italic">Состав: {structure}</Text>
          <Space h="md" />
          <Text>Вес: {weight} г.</Text>
          <Space h="md" />
          <Button onClick={addToCart} color="green">Купить</Button>
        </div>
      </Flex>
    </Container>
  )
}

export default ProductViewById
