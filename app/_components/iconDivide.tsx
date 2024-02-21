import React from "react"
import {
    Flex,
    Box,
    Divider,
    IconButton
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHouse,
    faCircleInfo,
    faLayerGroup,
    faListCheck
} from "@fortawesome/free-solid-svg-icons"
import { IconDivideProps } from "../_types"

const iconDivide: React.FC<IconDivideProps> = ({ switchComponent, activeComponent }) => {
    return (
        <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box
                m={3}
                onClick={() => switchComponent("home")}
                cursor={"pointer"}
            >
                <IconButton
                    aria-label="Home"
                    variant="ghost"
                    size="lg"
                    icon={<FontAwesomeIcon icon={faHouse} size="lg" />}
                    _hover={{
                        bg: "blue.500",
                        color: "white",
                    }}
                    isRound
                    className={activeComponent === "home" ? "active" : ""}
                />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={"white"} />
            <Box
                m={3}
                onClick={() => switchComponent("about")}
                cursor={"pointer"}
            >
                <IconButton
                    aria-label="About"
                    variant="ghost"
                    size="lg"
                    icon={<FontAwesomeIcon icon={faCircleInfo} size="lg" />}
                    _hover={{
                        bg: "blue.500",
                        color: "white",
                    }}
                    isRound
                    className={activeComponent === "about" ? "active" : ""}
                />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={"white"} />
            <Box
                m={3}
                onClick={() => switchComponent("tech")}
                cursor={"pointer"}
            >
                <IconButton
                    aria-label="Tech"
                    variant="ghost"
                    size="lg"
                    icon={<FontAwesomeIcon icon={faLayerGroup} size="lg" />}
                    _hover={{
                        bg: "blue.500",
                        color: "white",
                    }}
                    isRound
                    className={activeComponent === "tech" ? "active" : ""}
                />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={"white"} />
            <Box
                m={3}
                onClick={() => switchComponent("project")}
                cursor={"pointer"}
            >
                <IconButton
                    aria-label="Projects"
                    variant="ghost"
                    size="lg"
                    icon={<FontAwesomeIcon icon={faListCheck} size="lg" />}
                    _hover={{
                        bg: "blue.500",
                        color: "white",
                    }}
                    isRound
                    className={activeComponent === "project" ? "active" : ""}
                />
            </Box>
        </Flex>
    )
}

export default iconDivide