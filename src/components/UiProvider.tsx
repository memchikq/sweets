"use client"
import { MantineProvider } from "@mantine/core"
import React from "react"

const UiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      {children}
    </MantineProvider>
  )
}

export default UiProvider
