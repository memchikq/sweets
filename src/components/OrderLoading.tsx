"use client"

import { Center, Container, Flex, Loader, Skeleton, Stack } from "@mantine/core"

const OrderLoading = () => {
  return (
    <div style={{ flex: "1", marginTop: "25px" }}>
      <Container size="sm" >
        <Center>
          <h1>Ваши заказы</h1>
        </Center>
        <Stack mih="25vh" justify="center" align="center">
          <Loader color="yellow" />
        </Stack>
      </Container>
    </div>
  )
}

export default OrderLoading
