import React from "react"
import {
    Flex,
    Divider,
    Card,
    CardBody,
    Text
} from "@chakra-ui/react"
import { ProjectBoxProps } from "../_types"

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, image, git, tag, video }) => {
    const openGitLink = () => {
        if (git) {
            window.open(git, "_blank");
        }
    };

    console.log(git)

    return (
        <Card bg={"blue.700"}>
            <CardBody>
                <Flex justifyContent="center" alignItems="center" mb={5}>
                    {video ? (
                        <video width="150" controls muted>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={image}
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                        />
                    )}
                </Flex>
                <Text fontWeight="bold" textColor={"yellow.400"}>{title}</Text>
                {...tag}
                <Divider my={5} borderWidth={1} borderColor={"white"} width={50} />
                <Text mb={5} dangerouslySetInnerHTML={{ __html: content }} />
                {git && (
                    <Text
                        onClick={openGitLink}
                        _hover={{
                            cursor: "pointer"
                        }}
                        as="u"
                    >
                        Github
                    </Text>
                )}
            </CardBody>
        </Card>
    );
};

export default ProjectBox;
