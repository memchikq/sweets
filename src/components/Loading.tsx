"use client"
import { Group, Loader } from "@mantine/core"
import { usePathname } from "next/navigation"
import ProductsLoading from "./Products/ProductsLoading"
import ProductsByIdLoading from "./Products/ProductsByIdLoading"

const productsRegex = /^\/products$/

const Loading = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname.match(productsRegex) ? (
        <ProductsLoading/>
      ) : (
        <ProductsByIdLoading/>
      )}
    </>
  )
}

export default Loading
