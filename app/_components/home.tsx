import React from "react"
import {
    Heading,
    Box,
    Flex
} from "@chakra-ui/react"

const home = () => {
    return (
        <Box width={"31.25rem"}>
            <Box
                borderRadius="lg"
                p={8}
                alignContent={"center"}
                justifyContent={"center"}
                id="tech"
            >
                <Flex direction={"column"}>
                    <Heading>~ Home COMPONENT HERE ~</Heading>
                </Flex>
            </Box>
        </Box>
    )
}

export default home