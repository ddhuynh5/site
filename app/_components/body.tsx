"use client"

import React from "react"
import { Flex } from "@chakra-ui/react"
import Hero from "./hero"
import IconDivide from "./iconDivide"
import Home from "./home"
import Footer from "./footer"

const home = () => {
    return (
        <Flex
            p={10}
            height={"100vh"}
            direction={"column"}
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                p={12}
            >
                <Hero />
                <IconDivide />
                <Home />
            </Flex>
            <Footer />
        </Flex>
    )
}

export default home