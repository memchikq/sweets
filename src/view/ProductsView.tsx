"use client"
import CardItem from "@/components/Products/CardItem"
import ListProduct from "@/components/Products/ListProduct"
import { Container, Grid } from "@mantine/core"
import { FC } from "react"
import { supabaseType } from "@/lib/typesOfRow"

const ProductsView: FC<Pick<supabaseType, "data">> = ({ data }) => {
  return (
    <Container size="lg">
      <ListProduct />
      <Grid justify="center">
        {data.map((v) => (
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
