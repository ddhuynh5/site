import React from "react"
import {
    Flex,
    Divider,
    Card,
    CardBody,
    Text
} from "@chakra-ui/react"
import { ProjectBoxProps } from "../_types"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, image, git, tag, video }) => {

    return (
        <Card bg={"blue.700"}>
            <CardBody>
                <Flex justifyContent="center" alignItems="center" mb={5}>
                    {video ? (
                        <iframe
                            src="https://player.vimeo.com/video/915154874?h=adac8b3768"
                            width="250"
                            height="300"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    ) : (
                        <Image
                            alt="img"
                            src={image}
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                            width={150}
                            height={150}
                        />
                    )}
                </Flex>
                <Text fontWeight="bold" textColor={"yellow.400"}>{title}</Text>
                {...tag}
                <Divider my={5} borderWidth={1} borderColor={"white"} width={50} />
                <Text mb={5} dangerouslySetInnerHTML={{ __html: content }} />
                {git && (
                    <a href={git} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="lg"
                            className="icon"
                        />
                    </a>
                )}
            </CardBody>
        </Card >
    );
};

export default ProjectBox;
