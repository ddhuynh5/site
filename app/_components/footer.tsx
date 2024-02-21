import React, { useState, useEffect } from "react"
import { Text, Flex } from "@chakra-ui/react"

const footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <Flex justifyContent={"center"}>
            <Text fontSize={"xs"}>
                Made by Dennis Huynh @ {currentYear} | with ❤️ & 💧
            </Text>
        </Flex>
    )
}

export default footer