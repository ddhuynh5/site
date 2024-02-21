import React from "react"
import {
    Heading,
    Flex,
    Divider,
    Text
} from "@chakra-ui/react"

const home = () => {
    return (
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
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        Hi, my name is Dennis Huynh {" "}
                        <Text as="span" fontStyle="italic">
                            ["win"]
                        </Text>
                        .{" "} A recent graduate from Clemson University, I am an aspiring software engineer,
                        eager to leverage my education and skills to contribute to innovative projects and solutions.
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        I am excited to embark on a journey of professional development and contribute to the ever-evolving
                        field of technology.
                    </Text>
                    <Text
                        textColor={"white"}
                        fontWeight={"semibold"}
                        fontSize={"sm"}
                        mb={8}
                    >
                        I'm passionate about creative and innovative solutions, exploring new technologies,
                        and continuous learning.
                    </Text>
                </Flex>
            </Flex>
            <Flex direction={"column"} mt={100}>
                <Flex direction={"row"}>
                    <Flex mt={50}>
                        <img
                            src="/family.jpg"
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                        />
                    </Flex>
                    <Flex ml={50} >
                        <img
                            src="/kid.webp"
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                        />
                    </Flex>
                </Flex>
                <Flex direction={"row"}>
                    <Flex mt={10}>
                        <img
                            src="/spider.jpg"
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                        />
                    </Flex>
                    <Flex ml={50} mt={15}>
                        <img
                            src="/pirate.webp"
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default home