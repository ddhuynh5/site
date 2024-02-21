import React from "react"
import {
    Heading,
    Box,
    Flex
} from "@chakra-ui/react"

const about = () => {
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
                    <Heading>~ ABOUT COMPONENT HERE ~</Heading>
                </Flex>
            </Box>
        </Box>
    )
}

export default about