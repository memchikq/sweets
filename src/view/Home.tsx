'use client'
import AboutUsComponent from '@/components/AboutUsComponent'
import AboutUsMobileComponent from '@/components/AboutUsMobileComponent'
import ProductGalleryComponent from '@/components/ProductGalleryComponent'
import { Center, Container } from '@mantine/core'
import React from 'react'

const Home = () =>{
    
    return (
    <>
    <div style={{ marginTop: "40px" }}>
      <Container size="90%">
        <Center fz={20}>
          <h2>Почему выбирают нас</h2>
        </Center>
        <AboutUsComponent />
        <AboutUsMobileComponent/>

        <ProductGalleryComponent/>
      </Container>
    </div>
    </>
    )
}

export default Home