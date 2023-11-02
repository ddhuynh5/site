import React from "react"
import { Flex } from "@chakra-ui/react"

const techStack = () => {
    return (
        <Flex
            mt={10}
            direction={"column"}
            gap={5}
        >
            <Flex gap={2}>
                <img
                    src={"/c.svg"}
                    alt={"c"}
                />
                <img
                    src={"/cpp.svg"}
                    alt={"c++"}
                />
                <img
                    src={"/cs.svg"}
                    alt={"c#"}
                    style={{ height: "48px", width: "48px" }}
                />
            </Flex>
            <Flex gap={2}>
                <img
                    src={"/python.svg"}
                    alt={"python"}
                />
                <img
                    src={"/js.svg"}
                    alt={"javascript"}
                />
                <img
                    src={"/ts.svg"}
                    alt={"typescript"}
                />
            </Flex>
            <Flex gap={2}>
                <img
                    src={"/react.svg"}
                    alt={"react"}
                />
                <img
                    src={"/next.svg"}
                    alt={"next"}
                />
                <img
                    src={"/chakra.svg"}
                    alt={"chakra"}
                />
            </Flex>
            <Flex gap={2}>
                <img
                    src={"/post.svg"}
                    alt={"postgresql"}
                />
                <img
                    src={"/docker.svg"}
                    alt={"docker"}
                />
            </Flex>
        </Flex>
    )
}

export default techStack