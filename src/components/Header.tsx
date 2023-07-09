"use client"
import React from "react"
import { Box, Container, Flex, MediaQuery,Burger } from "@mantine/core"
import { createStyles } from "@mantine/core"
import {FaWhatsapp,FaInstagram,FaShoppingCart} from 'react-icons/fa'
import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDisclosure } from "@mantine/hooks"
import CartModal from "./Cart/CartModal"
const useStyles = createStyles((theme) => ({
  header: {
    position:"fixed",
    background:"black",
    fontFamily: "Ubuntu Mono",
    zIndex:1,
    height: "60px",
    width: "100%",
    [theme.fn.smallerThan("xs")]: {
      color: theme.colors.yellow[2],
    },
  },
  nav:{
    [theme.fn.smallerThan("md")]: {
      display:"none"
    },
  }

}))
const Header = () => {
  const { classes } = useStyles()
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <header className={classes.header}>
      <Container  size="100%">
        <Flex style={{flex:1}} mt="20px" color="blue" justify="space-between">
          <Image style={{cursor:"pointer"}} onClick={()=> router.push("/")} alt="logo" src={logo} width={140} />

         <Flex className={classes.nav} style={{flex:6,justifyContent:"center"}}>
          <nav >
            <ul style={{ display: "flex",gap:"10px"}}>
              <li><Link href="/products">ВЫБОР ДЕСЕРТОВ</Link></li>
            </ul>
          </nav>
         </Flex>
          <Flex style={{flex:1}} justify="end" gap={10}>
                <FaWhatsapp style={{cursor:"pointer"}} size={25} color="lime" />
                <FaInstagram style={{cursor:"pointer"}} size={25} color="pink" />
                <FaShoppingCart onClick={open} size={25} style={{cursor:"pointer"}} color="gold"/>
         </Flex>
        <Flex>
          <Burger opened={false}/>
        </Flex>
        </Flex>
      </Container>
      <CartModal opened={opened} closeModal={close}></CartModal>   
    </header>
  )
}

export default Header
