"use client"
import { Container, Flex, Text } from "@mantine/core"
import Link from "next/link"

const NotFound = () => {
  return (
    <section
      style={{
        marginTop: "60px",
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container size="sm">
        <Flex direction="column" align="center">
          <Text fw="bold" fz={37}>
            404
          </Text>
          <h1>Страница не найдена</h1>

          <Link
            href="/"
            style={{ fontSize: "24px", borderBottom: "1px solid white" }}
          >
            Назад
          </Link>
        </Flex>
      </Container>
    </section>
  )
}

export default NotFound
