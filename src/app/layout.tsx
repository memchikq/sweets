import UiProvider from "@/components/UiProvider"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UiProvider>
        <body style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </UiProvider>
    </html>
  )
}
