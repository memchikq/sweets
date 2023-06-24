"use client"
import AboutUsComponent from "@/components/AboutUsComponent"
import AboutUsMobileComponent from "@/components/AboutUsMobileComponent"
import AUs from '@/components/AUs'
import DeliveryInfoComponent from "@/components/DeliveryInfoComponent"
import ProductGalleryComponent from "@/components/ProductGalleryComponent"
import { Center, Container, Divider } from "@mantine/core"
import React from "react"

const Home = () => {
  return (
    <>
        <Container mt="40px" size="90%">
          <Divider my="sm" />
          <AUs />
          <Divider my="xs" />
          <ProductGalleryComponent />
          <Divider my="xs" />
          <DeliveryInfoComponent/>
        </Container>
    </>
  )
}

export default Home
