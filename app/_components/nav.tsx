"use client"

import React from "react"
import {
    Box,
    Flex,
    Text,
    Button,
    useColorMode,
    Center
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    const { toggleColorMode } = useColorMode()
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
                    <Button onClick={toggleColorMode}>
                        <FontAwesomeIcon icon={faLightbulb} />
                    </Button>
                </Flex>
            </Box>
        </>
    )
}