import React from "react"
import {
    Flex,
    Box,
    Divider,
    useColorModeValue
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHouse,
    faPaperPlane,
    faCircleInfo,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons"
import { IconDivideProps } from "../_types"

const iconDivide: React.FC<IconDivideProps> = ({ switchComponent, activeComponent }) => {
    return (
        <Flex flexDirection="column" alignItems="center" m={10}>
            <Box
                m={3}
                onClick={() => switchComponent("home")}
                cursor={"pointer"}
                className={activeComponent === "home" ? "active" : ""}
            >
                <FontAwesomeIcon icon={faHouse} size="lg" />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
            <Box
                m={3}
                onClick={() => switchComponent("about")}
                cursor={"pointer"}
                className={activeComponent === "about" ? "active" : ""}
            >
                <FontAwesomeIcon icon={faCircleInfo} size="lg" />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
            <Box
                m={3}
                onClick={() => switchComponent("tech")}
                cursor={"pointer"}
                className={activeComponent === "tech" ? "active" : ""}
            >
                <FontAwesomeIcon icon={faLayerGroup} size="lg" />
            </Box>
            <Divider orientation="vertical" h={20} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
            <Box
                m={3}
                onClick={() => switchComponent("contact")}
                cursor={"pointer"}
                className={activeComponent === "contact" ? "active" : ""}
            >
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </Box>
        </Flex>
    )
}

export default iconDivide