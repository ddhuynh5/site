"use client"

import { extendTheme, type ThemeConfig, ColorModeProvider } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const styles = {
    global: (props: { colorMode: "light" | "dark" }) => ({
        body: {
            // color: mode("black", "#F4EBD0")(props),
            // bg: mode("gray.300", "gray.700")(props),
        },
    }),
};


const theme = extendTheme({ config, styles })

export default theme
