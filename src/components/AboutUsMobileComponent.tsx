import { Center, Flex, createStyles } from '@mantine/core'
import React from 'react'
import Conntent1 from "../../public/content1.jpg"
import Conntent2 from "../../public/content2.jpg"
import Conntent3 from "../../public/content3.jpg"
import Conntent4 from "../../public/content4.jpg"
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
    galery:{
      [theme.fn.largerThan("md")]: {
       display:"none"
      },
    },
    flexContent: {
      padding: "8px",
      margin: "10px 0",
      display: "flex",
      textAlign:"justify",
      flexDirection: "column",
      justifyContent: "center",
  
      "& div *": {
        wordBreak: "break-word",
      },
  
      "& img": {
        borderRadius: "8px",
        width: "75%",
        margin: "0 auto",
        objectFit: "cover",
        height: "auto",
      },
    },
  }))


const AboutUsMobileComponent = () =>{
    const { classes } = useStyles()
    return (
    <div className={classes.galery}>
    <Center fz={20}>
          <h2>Почему выбирают нас</h2>
    </Center>
        <Flex
          
          style={{ flex: 1, flexWrap: "wrap" }}
          gap={20}
          pt={40}
        >
          <Flex style={{ flex: 1 }} direction="column">
            <div className={classes.flexContent}>
              <Image src={Conntent1} alt='1' />
            </div>

            <div className={classes.flexContent}>
              <h2>Высококачественные ингредиенты</h2>
              <p>
                Мы использованием только самых качественных ингредиентов в наших
                сладостях. Каждый из наших десертов и тортов создается с большой
                тщательностью, чтобы обеспечить непревзойденный вкус и качество.
              </p>
            </div>

            <div className={classes.flexContent}>
              <Image alt="a" src={Conntent2} />
            </div>

            <div className={classes.flexContent}>
              <h2>Пирожное</h2>
              <p>
                Мы специализируемся на создании непревзойденных пирожных,
                которые покорят ваше воображение и удовлетворят самые изысканные
                вкусы. Наша миссия - приготовить для вас настоящие шедевры
                кондитерского искусства.
              </p>
            </div>

            <div className={classes.flexContent}>
              <Image alt="c" src={Conntent3} />
            </div>

            <div className={classes.flexContent}>
              <h2>Торты</h2>
              <p>
                Мы предлагаем торты на любой вкус, чтобы удовлетворить самые
                изысканные предпочтения наших клиентов. Независимо от того,
                какие предпочтения вы имеете, у нас есть торт, который подарит
                вам незабываемое впечатление.
              </p>
            </div>


            <div className={classes.flexContent}>
              <Image alt="c" src={Conntent4} />
            </div>

            <div className={classes.flexContent}>
              <h2>Гарантия вкуса</h2>
              <p>
                Мы гордимся тем, что наши клиенты возвращаются к нам снова и
                снова, и рекомендуют нас своим друзьям и близким. Наша гарантия
                вкуса заключается в постоянном стремлении к совершенству и
                предлагании только самых вкусных и качественных сладостей.
              </p>
            </div>
          </Flex>
        </Flex>
    </div>
    )
}

export default AboutUsMobileComponent