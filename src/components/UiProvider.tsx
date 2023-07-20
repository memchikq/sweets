"use client"
import { MantineProvider } from "@mantine/core"
import { Notifications } from '@mantine/notifications';
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
      <Notifications/>
      {children}
    </MantineProvider>
  )
}

export default UiProvider
