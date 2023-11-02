import React from "react"
import {
    Flex,
    Box,
    Divider,
    useColorModeValue
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faPaperPlane, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const iconDivide = () => {
    return (
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
    )
}

export default iconDivide