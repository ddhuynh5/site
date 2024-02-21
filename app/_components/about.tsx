import React from "react"
import {
    Heading,
    Flex,
    Stack,
    Divider,
    Text
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons"

const about = () => {
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
                    <Heading>About</Heading>
                    <Divider mt={5} mb={10} borderWidth={1} borderColor={"white"} />
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        Simplicity &gt; Complexity
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        Pickle lover
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        A first generation graduate
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        They say experience is the best teacher, but I'm more of a "learn by debugging" kind of person
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                    >
                        I have a +10 bonus to procrastination, but a -10 to initiative in real life
                    </Text>
                    <Stack
                        mt={10}
                        direction={{ base: "column", md: "row" }}
                        alignItems="flex-end"
                    >
                        <Stack
                            align="center"
                            direction={{ base: "row", md: "row" }}
                            spacing={3}
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                onClick={() => window.open("https://github.com/ddhuynh5", "_blank")}
                                size="lg"
                                className="icon"
                            />

                            <FontAwesomeIcon
                                icon={faLinkedin}
                                onClick={() => window.open("https://www.linkedin.com/in/ddhuynh123/", "_blank")}
                                size="lg"
                                className="icon"
                            />
                        </Stack>
                    </Stack>
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

export default about