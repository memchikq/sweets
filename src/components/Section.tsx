"use client"
import { Center, createStyles } from "@mantine/core"
import Image from "next/image"
import React from "react"
import background from "../../public/bg.jpg"
const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    height: "100vh",
    [theme.fn.smallerThan("xs")]: {
      color: theme.colors.yellow[2],
    },
  },
  imageBg: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    objectFit: "cover",
    opacity:0.6,
    zIndex: -1,
  },
  headerText: {
    padding: "0 40px",

    top: "40%",
    left: "10%",
    fontWeight: "bold",
    color: theme.colors.yellow[6],
    "& h1": {
      fontSize: "50px",
      [theme.fn.smallerThan("sm")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "20px",
    },
  },
}))
const Section = () => {
  const { classes } = useStyles()
  return (
    <section className={classes.section}>
      <Image
        className={classes.imageBg}
        alt="hero image"
        src={background}
      />
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.headerText}>
          <h1>Sweet Mania - сладости на любой вкус!</h1>
        </div>
      </div>
    </section>
  )
}

export default Section
