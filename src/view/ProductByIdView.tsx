"use client"
import { ProductByIdResponseSuccess } from "@/utils/index"
import {
  Button,
  Container,
  Flex,
  Space,
  Text,
  Title,
} from "@mantine/core"
import Image from "next/image"
import { FC } from "react"


const ProductViewById: FC<{ data: ProductByIdResponseSuccess }> = ({ data }) => {
  if(data === null) return null

  const {name,picture,price,description,structure,weight} = data[0]

  return (
    <Container size="md" mt={40}>
      <Flex gap={25}>
        <div>
          <Image
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
          <Button color="green">Купить</Button>
        </div>
      </Flex>
    </Container>
  )
}

export default ProductViewById
