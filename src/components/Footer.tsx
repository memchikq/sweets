'use client'
import { Container, Divider, Flex, Group, Text } from '@mantine/core'
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import React from 'react'

const Footer = () =>{
    
    return (
    <footer style={{flex:"0 0 auto",marginTop:"12px"}} >
        <Divider size="md"/>
        <Container size="md" mt={15}>
            <Group position='center'>
                <Flex direction="column">
                <h3>Контакты</h3>
                <Text fw="bold">Офис: г. Караганда ул. Бухар жырау 27/5</Text>
                <Text fw="bold">Номер телефона: +7(700) 000-00-00 </Text>
                <Text fw="bold">Whatsapp: <FaWhatsapp fontSize={20} cursor="pointer" color='lime'/></Text>
                <Text fw="bold">Instagram: <FaInstagram fontSize={20} cursor="pointer" color='pink'/></Text>
                
                </Flex>
            </Group>
        </Container>
    </footer>
    )
}

export default Footer