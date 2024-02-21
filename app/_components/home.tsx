import React from "react"
import {
    Heading,
    Box,
    Flex,
    Divider
} from "@chakra-ui/react"

const home = () => {
    return (
        // <Box width={"31.25rem"}>
        //     <Box
        //         borderRadius="lg"
        //         p={8}
        //         alignContent={"center"}
        //         justifyContent={"center"}
        //         id="tech"
        //     >
        //         <Flex direction={"column"}>
        //             <Heading>Home</Heading>
        //             <Divider mt={5} mb={10} borderWidth={1} borderColor={"white"} />
        //         </Flex>
        //     </Box>
        // </Box>

        <Flex height={"100%"}>
            <Flex
                borderRadius="lg"
                p={8}
                alignContent={"center"}
                justifyContent={"center"}
                id="tech"
                direction={"row"}
                width={"31.25rem"}
            >
                <Flex direction={"column"}>
                    <Heading>Home</Heading>
                    <Divider mt={5} mb={10} borderWidth={1} borderColor={"white"} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default home