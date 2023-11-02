"use client"

import React from "react"
import {
    Box,
    Flex,
    Text,
    Button,
    useColorModeValue,
    useColorMode,
    Center
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <Box px={10} fontWeight="bold">
                <Flex h={20} alignItems="center" justifyContent="space-between">
                    <Text>Dennis Huynh</Text>
                    <Center>
                        <Text>
                            ~ ADD SCROLLING TEXTY THING HERE ~
                        </Text>
                    </Center>
                    <Button onClick={toggleColorMode}>
                        <FontAwesomeIcon icon={faLightbulb} />
                    </Button>
                </Flex>
            </Box>
        </>
    )
}