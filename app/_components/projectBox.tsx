import React from "react";
import {
    Flex,
    Divider,
    Card,
    CardBody,
    Text
} from "@chakra-ui/react";
import { ProjectBoxProps } from "../_types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import WidgetBotCrate from "./widgetbotcrate";

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, content, image, git, tag, video, gif, handleWheelScroll, info, link }) => {

    return (
        <Card bg={"blue.700"}>
            <CardBody>
                <Flex justifyContent="center" alignItems="center" mb={5}>
                    {video ? (
                        <iframe
                            src="https://player.vimeo.com/video/915154874?h=adac8b3768"
                            width="175"
                            height="310"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    ) : (
                        gif ? (
                            <Image
                                alt="gif"
                                src={gif}
                                style={{ height: "100%", width: "100%", cursor: "pointer" }}
                                width={250}
                                height={250}
                                onClick={() => window.open(gif, "_blank")}
                                title="Click to open in new tab"
                                loading="lazy"
                            />
                        ) : (
                            <Image
                                alt="img"
                                src={image}
                                style={{ height: "200px", width: "200px", borderRadius: "50%" }}
                                width={200}
                                height={200}
                                loading="lazy"
                            />
                        )
                    )}
                </Flex>
                <Text fontWeight="bold" textColor={"yellow.400"}>{title}</Text>
                {...tag}
                <Divider my={5} borderWidth={1} borderColor={"white"} width={50} />
                <Text mb={5} dangerouslySetInnerHTML={{ __html: content }} />
                {info != "" && (
                    <Text my={5}>{info}</Text>
                )}
                <Flex direction={"row"}>
                    {git && (
                        <a href={git} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="lg"
                                className="icon"
                                title={git}
                            />
                        </a>
                    )}
                    {title === "DenBot" && (
                        <WidgetBotCrate handleWheelScroll={handleWheelScroll} />
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="lg"
                                className="icon"
                                title={link}
                            />
                        </a>
                    )}
                </Flex>
            </CardBody>
        </Card >
    );
};

export default ProjectBox;
