import { FC } from "react"
import { Badge, Card, CardSection, Group, Text } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/navigation"

type CardItemProps = {
  id: number
  picture: string
  name: string
  price: number
  description: string
}

const CardItem: FC<CardItemProps> = ({
  id,
  picture,
  name,
  price,
  description,
}) => {
  const router = useRouter()
  

  return (
    <Card h="100%" shadow="sm" padding="lg" radius="md">
      <CardSection>
        <Image
          onClick={() => router.push(`/products/${id}`)}
          alt={name}
          width={400}
          style={{
            width: "100%",
            minHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          height={300}
          src={`/uploads/${picture}`}
        />
      </CardSection>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="green" size="lg" variant="outline">
          {price} тг.
        </Badge>
      </Group>

      <Text >{description}</Text>

    </Card>
  )
}

export default CardItem
