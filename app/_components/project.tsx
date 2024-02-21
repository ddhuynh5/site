import React from "react"
import {
    Flex,
    Heading,
    Divider
} from "@chakra-ui/react"

const project = () => {
    return (
        <Flex height={"100%"}>
            <Flex
                borderRadius="lg"
                p={8}
                alignContent={"center"}
                justifyContent={"center"}
                id="about"
                direction={"row"}
                width={"31.25rem"}
            >
                <Flex direction={"column"}>
                    <Heading>Projects</Heading>
                    <Divider mt={5} mb={10} borderWidth={1} borderColor={"white"} />
                </Flex>
            </Flex>
            <Flex ml={100} mt={215}>
                <img
                    src="/clemson.png"
                    style={{ height: "150px", width: "150px" }}
                />
            </Flex>
        </Flex>
    )
}

export default project