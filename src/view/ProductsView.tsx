"use client"
import CardItem from "@/components/Products/CardItem"
import { Container, Grid } from "@mantine/core"
import { FC } from "react"
import { ProductsResponseSuccess } from "@/utils/index"

const ProductsView: FC<{data:ProductsResponseSuccess}> = ({ data }) => {
  return (
    <Container size="lg">
      <Grid justify="center">
        {data?.map((v) => (
          <Grid.Col key={v.id} sm={9} md={6} lg={4}>
            <CardItem
              id={v.id}
              name={v.name}
              picture={v.picture}
              price={v.price}
              description={v.description}
              />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsView
