"use client"

import React from "react"
import {
    Box,
    Flex,
    Text,
    Divider,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faPaperPlane, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const home = () => {
    return (
        <Flex
            p={10}
            height={"100vh"}
            direction={"column"}
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                // background={"pink"}
                rounded={6}
                p={12}
            >
                <Flex
                    // maxWidth={500}
                    // p={100}
                    rounded={12}
                    flex={"1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Flex
                        flex={"2"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}
                    >
                        <Heading>Hi, I'm Dennis ✌️</Heading>
                        <Text
                            textColor={"#73899C"}
                            fontWeight={"semibold"}
                            fontSize={"sm"}
                            fontStyle={"italic"}
                        >
                            Welcome to My Website!
                        </Text>
                        <Text
                            mt={5}
                        >
                            Born and raised in Greenville, SC, I am currently a
                            senior Computer Science major at Clemson
                            University. Welcome to my website! Take a look around to learn more about me and what I
                            do. Feedback and contructive criticism are always welcome.
                        </Text>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" alignItems="center" m={10}>
                    <Box m={3}>
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                    </Box>
                    <Divider orientation="vertical" h={20} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
                    <Box m={3}>
                        <FontAwesomeIcon icon={faCircleInfo} size="lg" />
                    </Box>
                    <Divider orientation="vertical" h={20} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
                    <Box m={3}>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                    </Box>
                </Flex>
                <Flex
                    flex={"1.5"}
                    // bg={useColorModeValue("pink.900", "pink.100")}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                // color={useColorModeValue("white", "black")}
                >
                    <Heading>~ COMPONENT HERE ~</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default home