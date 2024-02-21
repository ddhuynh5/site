import React from "react"
import {
    Flex,
    Tag,
    Heading,
    Divider
} from "@chakra-ui/react"
import Image from "next/image"

const techStack = () => {
    return (
        <Flex height="100%">
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
                    <Heading size={"lg"}>Front End</Heading>
                    <Flex gap={3} mt={5} flexWrap={"wrap"}>
                        <Tag _hover={{ bg: "teal.600" }}>HTML5</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>CSS</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>JavaScript</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>TypeScript</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>React</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Next.js</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>jQuery</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Bootstrap</Tag>
                    </Flex>
                    <Divider mt={10} mb={10} borderWidth={1} borderColor={"white"} />
                    <Heading size={"lg"}>Back End</Heading>
                    <Flex gap={3} mt={5} flexWrap={"wrap"}>
                        <Tag _hover={{ bg: "teal.600" }}>Node Js</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>NestJS</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Django</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>ASP.NET</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>PostgreSQL</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>MySQL</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>PL/SQL</Tag>
                    </Flex>
                    <Divider mt={10} mb={10} borderWidth={1} borderColor={"white"} />
                    <Heading size={"lg"}>A bunch more cool stuff!</Heading>
                    <Flex gap={3} mt={5} flexWrap={"wrap"}>
                        <Tag _hover={{ bg: "teal.600" }}>C#</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>C++</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Python</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Docker</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>Git</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>AWS EC2</Tag>
                        <Tag _hover={{ bg: "teal.600" }}>AWS RDS</Tag>
                    </Flex>
                </Flex>
            </Flex>
            <Flex ml={100} mt={215}>
                <Image
                    alt="computer"
                    src="/computer.png"
                    style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                    width={150}
                    height={150}
                />
            </Flex>
        </Flex>
    )
}

export default techStack