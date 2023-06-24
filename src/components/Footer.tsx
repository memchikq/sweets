'use client'
import { Center, Container, Divider, Flex } from '@mantine/core'
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import React from 'react'

const Footer = () =>{
    
    return (
    <footer style={{flex:"0 0 auto"}} >
        <Divider size="md"/>
        <Container size="lg" mt={15}>
            <Center><h2>Sweet mania</h2></Center>
            <Flex justify="center">
                <FaWhatsapp color='lime' size={35}/>
                <FaInstagram color='pink' size={35}/>
            </Flex>
        </Container>
    </footer>
    )
}

export default Footer