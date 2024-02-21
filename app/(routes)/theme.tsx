"use client"

import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const styles = {
    global: () => ({
        body: {
            bg: "blue.900"
        },
    }),
};


const theme = extendTheme({ config, styles })

export default theme
