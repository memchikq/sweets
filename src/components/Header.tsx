"use client"
import React from "react"
import {  Container, Flex, Text, Tooltip } from "@mantine/core"
import { createStyles } from "@mantine/core"
import {FaShoppingCart} from 'react-icons/fa'
import {GiPieSlice} from 'react-icons/gi'
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
  navElement:{
    [theme.fn.smallerThan("md")]: {
      display:"none"
    },
  },
  navElementMobile:{
    display:"none",
    [theme.fn.smallerThan("md")]: {
      display:"block"
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

         <Flex  style={{flex:6,justifyContent:"end"}}>
          <nav >
            <ul style={{ display: "flex",gap:"10px"}}>
              <li className={classes.navElement}><Link href="/products">ВЫБОР ДЕСЕРТОВ</Link></li>
              <li className={classes.navElementMobile}><Link href="/products"><GiPieSlice size={30} style={{cursor:"pointer"}} color="red"/>  </Link></li>
            </ul>
          </nav>
         </Flex>
          <Flex style={{flex:0,paddingInline:"8px"}} justify="end" gap={10}>
                <FaShoppingCart onClick={open} size={30} style={{cursor:"pointer"}} color="gold"/>
         </Flex>
        </Flex>
      </Container>
      <CartModal opened={opened} closeModal={close}></CartModal>   
    </header>
  )
}

export default Header
