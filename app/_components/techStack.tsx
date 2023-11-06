import React from "react"
import {
    Flex,
    Tag,
    Text,
    Heading,
    Divider,
    useColorModeValue
} from "@chakra-ui/react"

const techStack = () => {
    return (
        <Flex maxWidth={"25vw"} mb={10}>
            <Flex direction={"column"} alignItems={"center"}>
                <Heading size={"lg"}>Languages</Heading>
                <Flex gap={3} mt={3}>
                    {[
                        { src: "/c.svg", link: "https://en.wikipedia.org/wiki/C_(programming_language)", alt: "C" },
                        { src: "/cpp.svg", link: "https://en.wikipedia.org/wiki/C%2B%2B", alt: "C++" },
                        { src: "/cs.svg", link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/", alt: "C#" },
                        { src: "/python.svg", link: "https://python.org", alt: "Python" },
                        { src: "/js.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", alt: "JavaScript" },
                        { src: "/ts.svg", link: "https://www.typescriptlang.org/", alt: "TypeScript" }
                    ].map(({ src, link, alt }, index) => (
                        <Tag colorScheme="blue" key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={src} alt={alt} style={{ height: "48px", width: "48px" }} />
                            </a>
                        </Tag>
                    ))}
                </Flex>
                <Divider mt={10} mb={10} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
                <Heading size={"lg"}>Frameworks</Heading>
                <Flex gap={3} mt={3}>
                    {[
                        { src: "/react.svg", link: "https://reactjs.org", alt: "React" },
                        { src: "/dotnet.svg", link: "https://dotnet.microsoft.com/en-us/apps/aspnet", alt: ".NET" },
                        { src: "/django.svg", link: "https://www.djangoproject.com/", alt: "Django" }
                    ].map(({ src, link, alt }, index) => (
                        <Tag colorScheme="blue" key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={src} alt={alt} style={{ height: "48px", width: "48px" }} />
                            </a>
                        </Tag>
                    ))}
                </Flex>
                <Divider mt={10} mb={10} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
                <Heading size={"lg"}>Miscellaneous</Heading>
                <Flex gap={3} mt={3}>
                    {[
                        { src: "/docker.svg", link: "https://www.docker.com", alt: "Docker" },
                        { src: "/post.svg", link: "https://www.postgresql.org", alt: "PostgreSQL" },
                        { src: "/my.svg", link: "https://www.mysql.com", alt: "MySQL" },
                        { src: "/git.svg", link: "https://git-scm.com/", alt: "Git" },
                        { src: "/ec2.svg", link: "https://aws.amazon.com/ec2/", alt: "Amazon EC2" },
                        { src: "/rds.svg", link: "https://aws.amazon.com/rds/", alt: "Amazon RDS" }
                    ].map(({ src, link, alt }, index) => (
                        <Tag colorScheme="blue" key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={src} alt={alt} style={{ height: "48px", width: "48px" }} />
                            </a>
                        </Tag>
                    ))}
                </Flex>
                <Divider mt={10} mb={10} borderWidth={1} borderColor={useColorModeValue("black", "white")} />
                <Heading size={"lg"}>What I used to build this site!</Heading>
                <Flex gap={3} mt={3}>
                    {[
                        { src: "/next.svg", link: "https://nextjs.org", alt: "Next.js" },
                        { src: "/chakra.svg", link: "https://chakra-ui.com", alt: "Chakra UI" }
                    ].map(({ src, link, alt }, index) => (
                        <Tag colorScheme="blue" key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={src} alt={alt} style={{ height: "48px", width: "48px" }} />
                            </a>
                        </Tag>
                    ))}
                </Flex>
            </Flex>
        </Flex>

    )
}

export default techStack