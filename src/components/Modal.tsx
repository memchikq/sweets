"use client"
import { FC,useEffect } from "react"
import { Badge, Button, Divider, Flex, Group, Modal, Space, useMantineTheme } from "@mantine/core"
import { useRouter } from "next/navigation"
import { ProductByIdResponseSuccess } from "@/utils"
import { useDisclosure } from "@mantine/hooks"
import Image from "next/image"

const ModalComponent: FC<{ prdoductData: ProductByIdResponseSuccess }> = ({prdoductData}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  if (!prdoductData) return null
  const router = useRouter()
  const { name, picture, price, description, structure, weight } = prdoductData[0]

  useEffect(()=>{
    open()
  },[])

  return (
    <Modal
      centered
      size="lg"
      opened={opened}
      onClose={() => router.back()}
      title={<span style={{fontSize:"22px"}}>{name}</span>}
      transitionProps={{
        transition: "fade",
        duration: 300,
        timingFunction: "linear",
      }}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
        opacity: 0.15,
        blur: 3,
      }}
    >
      <Group position="center">
        <Image src={`/uploads/${picture}`} style={{width:"100%",height:"80%"}} width={300} height={300} alt="Изображение товара в модальном окне"/>
      </Group>
      

        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group >{description}</Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group>Состав: {structure}</Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Group position="apart" px="8px">
        <Badge color="green" size="lg" variant="outline">Цена: {price}тг.</Badge>
        <div>Вес: {weight}гр.</div>
        </Group>
        <Space h="md" />
        <Divider/>
        <Space h="md" />
        <Button color="green">Купить</Button>
      

     
    </Modal>
  )
}

export default ModalComponent
