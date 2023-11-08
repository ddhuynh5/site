import React from "react"
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    IconButton,
    useColorModeValue,
    VStack,
    InputLeftElement,
    Popover,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEnvelope,
    faAddressCard,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons"

const contact = () => {
    const { hasCopied, onCopy } = useClipboard("dennishuynh0119@gmail.com");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <Flex
            bg={useColorModeValue("gray.100", "gray.900")}
            align="center"
            justify="center"
            id="contact"
        >
            <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading>Get in Touch with Me!</Heading>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: "column", md: "row" }}>
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: "row", md: "column" }}>
                                <Tooltip
                                    label={hasCopied ? "Email Copied!" : "My Personal Email!"}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Box as="a" href="#">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<FontAwesomeIcon icon={faGithub} />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        isRound
                                        onClick={() => window.open("https://github.com/ddhuynh5", "_blank")}
                                    />
                                </Box>

                                <Box as="a" href="#">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<FontAwesomeIcon icon={faLinkedin} size="2xl" />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue("white", "gray.700"),
                                        }}
                                        isRound
                                        onClick={() => window.open("https://www.linkedin.com/in/ddhuynh123/", "_blank")}
                                    />
                                </Box>
                            </Stack>

                            <Box
                                bg={useColorModeValue("white", "gray.700")}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement>
                                                <FontAwesomeIcon icon={faAddressCard} />
                                            </InputLeftElement>
                                            <Input type="text" name="name" placeholder="Miley Cyrus" onChange={(e) => setName(e.target.value)} />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </InputLeftElement>
                                            <Input type="email" name="email" placeholder="mcyrus@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Why you love Dennis ❤️"
                                            rows={6}
                                            resize="none"
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </FormControl>

                                    <Popover>
                                        <PopoverTrigger>
                                            <Button
                                                colorScheme="blue"
                                                bg="blue.400"
                                                color="white"
                                                _hover={{
                                                    bg: "blue.500",
                                                }}
                                                width="full"
                                            >
                                                Send Message
                                                <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: "8px" }} />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>This doesn't really work right now 😢 </PopoverHeader>
                                            <PopoverBody>But hey, at least you can copy my email using the 📧</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default contact