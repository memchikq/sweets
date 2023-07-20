"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button, Flex } from "@mantine/core"
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main
          style={{
            marginTop: "60px",
            display: "flex",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex direction="column" align="center">
            <h1>Произошла ошибка</h1>
            <Button color="red" onClick={() => reset()}>Попробовать снова</Button>
          </Flex>
        </main>
        <Footer />
      </body>
    </html>
  )
}
