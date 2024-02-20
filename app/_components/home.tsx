import React from "react"
import {
    Heading,
    Box,
    Flex,
    useColorModeValue
} from "@chakra-ui/react"

const home = () => {
    return (
        <Box width={"31.25rem"}>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("gray.100", "gray.900")}
                p={8}
                alignContent={"center"}
                justifyContent={"center"}
                id="tech"
            >
                <Flex direction={"column"} alignItems={"center"}>
                    <Heading>~ Home COMPONENT HERE ~</Heading>
                </Flex>
            </Box>
        </Box>
    )
}

export default home