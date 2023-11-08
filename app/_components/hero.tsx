import React from 'react'
import {
    Flex,
    Text,
    Heading
} from "@chakra-ui/react"

const hero = () => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
        >
            <Heading>Hi, I'm Dennis ✌️</Heading>
            <Text
                textColor={"gray.500"}
                fontWeight={"semibold"}
                fontSize={"sm"}
                fontStyle={"italic"}
                mt={1}
            >
                Welcome to my website!
            </Text>
        </Flex>
    )
}

export default hero