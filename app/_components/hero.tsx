import React from 'react'
import {
    Flex,
    Text,
    Heading
} from "@chakra-ui/react";
import BouncingArrow from "../_components/BouncingArrow";

const hero = () => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            width={"31.25rem"}
            minW={"31.25rem"}
        >
            <Heading fontSize={"4xl"}>Hi, I'm Dennis ✌️</Heading>
            <Text
                textColor={"gray.500"}
                fontWeight={"semibold"}
                fontSize={"sm"}
                fontStyle={"italic"}
                mt={1}
                mb={10}
            >
                Welcome to my website, take a look around to learn more about me!
            </Text>
            <BouncingArrow />
        </Flex>
    )
}

export default hero