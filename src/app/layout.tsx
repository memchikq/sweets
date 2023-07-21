import UiProvider from "@/components/UiProvider"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <UiProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </UiProvider>
      </body>
    </html>
  )
}
