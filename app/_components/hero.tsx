import React from 'react'
import {
    Flex,
    Text,
    Heading
} from "@chakra-ui/react"
import TechStack from "./techStack"

const hero = () => {
    return (
        <Flex
            flex={"1"}
        >
            <Flex
                flex={"2"}
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
                    Welcome to My Website!
                </Text>
                <TechStack />
            </Flex>
        </Flex>
    )
}

export default hero