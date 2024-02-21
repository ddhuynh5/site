"use client"

import React from "react"
import {
    Box,
    Flex,
    Text,
    Center
} from "@chakra-ui/react"

export default function Nav() {
    return (
        <>
            <Box px={10} fontWeight="bold" mt={5}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Text>Dennis Huynh</Text>
                    <Center>
                        <Text>
                            ~ ADD SCROLLING TEXTY THING HERE OR FANCY CSS IDK ~
                        </Text>
                    </Center>
                </Flex>
            </Box>
        </>
    )
}