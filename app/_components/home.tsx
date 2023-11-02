import React from "react"
import {
    Flex,
    Heading
} from "@chakra-ui/react"

const home = () => {
    return (
        <Flex
            flex={"1.5"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
        >
            <Heading>~ COMPONENT HERE ~</Heading>
        </Flex>
    )
}

export default home