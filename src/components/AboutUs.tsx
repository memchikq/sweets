'use client'
import { Center, Container, Divider, Flex, createStyles } from "@mantine/core"
import {
  FaTrophy,
  FaThumbsUp,
  FaHandHoldingHeart,
  FaTruckMoving,
} from "react-icons/fa"
import React from "react"
const useStyles = createStyles((theme) => ({
  flexContainer: {
    position: "relative",
    paddingBlock: "8px",
    marginBlock: "8px",
    width: "100%",
  },
  flexColumnItem: {
    flex: 1,
    marginBlock: "18px",
  },
  flexItems: {
    flexBasis: "370px",
    marginBlock: "4px",

  },
}))

const About = () => {
  const { classes } = useStyles()
  return (
    <section>
      <Container mt="40px" size="90%">
      <Center fz={20}>
        <h2>Почему выбирают нас</h2>
      </Center>
      <Flex direction="column" className={classes.flexContainer}>
        <Flex
          wrap="wrap"
          align="center"
          className={classes.flexColumnItem}
          justify="space-around"
        >
          <Flex className={classes.flexItems}>
            <Flex direction="column" mr={5} justify="center">
              <FaThumbsUp color="gold" size={35} />
            </Flex>
            <Flex direction="column">
              <h3>Качество</h3>
              <p>
                Мы использованием только самых качественных ингредиентов в наших
                сладостях.
              </p>
              <Divider mt={5} size="sm" />
            </Flex>
          </Flex>
          <Flex className={classes.flexItems}>
            <Flex direction="column" mr={5} justify="center">
              <FaTrophy color="gold" size={35} />
            </Flex>
            <Flex direction="column">
              <h3>Гарантия вкуса</h3>
              <p>
                Наша гарантия вкуса заключается в постоянном стремлении к
                совершенству качественных сладостей.
              </p>
              <Divider mt={5} size="sm" />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          wrap="wrap"
          align="center"
          className={classes.flexColumnItem}
          justify="space-around"
        >
          <Flex className={classes.flexItems}>
            <Flex direction="column" mr={5} justify="center">
              <FaHandHoldingHeart color="gold" size={35} />
            </Flex>

            <Flex direction="column">
              <h3>Благотворительность</h3>
              <p>
                Каждый процент с вашей покупки будет отправлен в фонд защиты
                окружающей среды.
              </p>

              <Divider mt={5} size="sm" />
            </Flex>
          </Flex>
          <Flex className={classes.flexItems}>
            <Flex direction="column" mr={5} justify="center">
              <FaTruckMoving color="gold" size={35} />
            </Flex>
            <Flex direction="column">
              <h3>Доставка</h3>
              <p>
                Гарантируем быструю доставку, чтобы вы могли наслаждаться нашими
                вкусными изделиями в кратчайшие сроки.
              </p>
              <Divider mt={5} size="sm" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      </Container>
    </section>
  )
}

export default About
