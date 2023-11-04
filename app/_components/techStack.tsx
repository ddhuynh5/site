import React from "react"
import {
    Flex,
    Tag
} from "@chakra-ui/react"

const techStack = () => {
    return (
        <Flex
            mt={10}
            direction={"column"}
            gap={5}
        >
            <Flex gap={2}>
                {["/c.svg", "/cpp.svg", "/cs.svg"].map((src) => (
                    <Tag colorScheme="blue">
                        <img
                            src={src}
                            style={{ height: "48px", width: "48px" }}
                        />
                    </Tag>
                ))}
            </Flex>
            <Flex gap={2}>
                {["/python.svg", "/js.svg", "/ts.svg"].map((src) => (
                    <Tag colorScheme="blue">
                        <img
                            src={src}
                            style={{ height: "48px", width: "48px" }}
                        />
                    </Tag>
                ))}
            </Flex>
            <Flex gap={2}>
                {["/react.svg", "/next.svg", "/chakra.svg"].map((src) => (
                    <Tag colorScheme="blue">
                        <img
                            src={src}
                            style={{ height: "48px", width: "48px" }}
                        />
                    </Tag>
                ))}
            </Flex>
            <Flex gap={2}>
                {["/docker.svg", "/post.svg"].map((src) => (
                    <Tag colorScheme="blue">
                        <img
                            src={src}
                            style={{ height: "48px", width: "48px" }}
                        />
                    </Tag>
                ))}
            </Flex>
        </Flex>
    )
}

export default techStack