import React from "react"
import {
    Box,
    Flex,
    Heading,
    Stack,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons"

const contact = () => {
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
                    {<Heading>Contact Info</Heading>}
                    <Stack
                        mt={10}
                        /* spacing={{ base: 4, md: 8, lg: 20 }} */
                        direction={{ base: "column", md: "row" }}
                    >
                        <Stack
                            align="center"
                            justify="space-around"
                            direction={{ base: "row", md: "row" }}
                        >
                            <a href="mailto:ddhuynh@clemson.edu">
                                <IconButton
                                    aria-label="email"
                                    variant="ghost"
                                    size="lg"
                                    fontSize="5xl"
                                    boxSize={"4.375rem"}
                                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                                    _hover={{
                                        color: useColorModeValue("white", "gray.700"),
                                    }}
                                    isRound
                                />
                            </a>
                            <IconButton
                                aria-label="github"
                                variant="ghost"
                                size="lg"
                                fontSize="5xl"
                                boxSize={"4.375rem"}
                                icon={<FontAwesomeIcon icon={faGithub} />}
                                _hover={{
                                    color: useColorModeValue("white", "gray.700"),
                                }}
                                isRound
                                onClick={() => window.open("https://github.com/ddhuynh5", "_blank")}
                            />

                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="lg"
                                fontSize="2xl"
                                boxSize={"4.375rem"}
                                icon={<FontAwesomeIcon icon={faLinkedin} size="2xl" />}
                                _hover={{
                                    color: useColorModeValue("white", "gray.700"),
                                }}
                                isRound
                                onClick={() => window.open("https://www.linkedin.com/in/ddhuynh123/", "_blank")}
                            />
                        </Stack>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}

export default contact