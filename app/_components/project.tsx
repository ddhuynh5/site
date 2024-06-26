import React from "react";
import {
    Flex,
    Heading,
    Divider,
    Tag
} from "@chakra-ui/react";
import ProjectBox from "./projectBox";
import Gallery from "./gallery";
import { handleWheelScrollProps } from "../_types";

const project: React.FC<handleWheelScrollProps> = ({ handleWheelScroll }) => {

    const car = "I built and trained a neural network model that would allow a \
                <a href='https://clearpathrobotics.com/husky-unmanned-ground-vehicle-robot/' target='_blank'> \
                <span style='text-decoration: underline; color: #63B3ED'>Husky Robot</a> to traverse thru \
                various terrain autonomously";
    const carGit = "https://github.com/ddhuynh5/HuskyRobot";
    const carTags = [
        <Tag key="python" mt={2}>Python</Tag>,
        <Tag key="pytorch" mt={2} ml={2}>PyTorch</Tag>,
        <Tag key="nvidia-isaac-sim" mt={2} ml={2}>Nvidia Isaac Sim</Tag>,
        <Tag key="jupyter-notebook" mt={2}>Jupyter Notebook</Tag>,
    ];

    const truck = "Web app serving to incentivise safer driving through a point-based reward system";
    const truckInfo = "This project was built with a team of 5 developers. I volunteered as team lead \
    and helped to facilitate development, product/project management, and communication!";
    const truckImg = "/truck.JPG";
    const truckGit = "https://github.com/ddhuynh5/TruckTruckGo";
    const truckLink = "https://truck-truck-go.vercel.app/";
    const truckTags = [
        <Tag key="react" mt={2}>React</Tag>,
        <Tag key="django" mt={2} ml={2}>Django</Tag>,
        <Tag key="mysql" mt={2} ml={2}>MySQL</Tag>,
        <Tag key="aws-rds" mt={2} ml={2}>AWS RDS</Tag>,
        <Tag key="aws-ec2" mt={2} ml={2}>AWS EC2</Tag>
    ];

    const bot = "A fun lil side project that turned into something kinda useful. Funny interactions, cat pics, fixes Twitter/X embeds \
                purge messages, and more! DenBot does it all!";
    const botInfo = "Click the Discord icon to interact with my bot!";
    const botGit = "https://github.com/ddhuynh5/DenBot";
    const botTag = [
        <Tag key="react" mt={2}>Python</Tag>,
        <Tag key="django" mt={2} ml={2}>Discord</Tag>,
    ];

    const slides = [
        <ProjectBox
            key="bot-project"
            title="DenBot"
            content={bot}
            image=""
            git={botGit}
            tag={botTag}
            video={false}
            gif="/bot_showcase.gif"
            handleWheelScroll={handleWheelScroll}
            info={botInfo}
            link=""
        />,
        <ProjectBox
            key="car-project"
            title="Autonomous Vehicle Training"
            content={car}
            image=""
            git={carGit}
            tag={carTags}
            video={true}
            gif=""
            handleWheelScroll={handleWheelScroll}
            info=""
            link=""
        />,
        <ProjectBox
            key="truck-project"
            title="TruckTruckGo"
            content={truck}
            image={truckImg}
            git={truckGit}
            tag={truckTags}
            video={false}
            gif=""
            handleWheelScroll={handleWheelScroll}
            info={truckInfo}
            link={truckLink}
        />
    ];

    return (
        <Flex>
            <Flex
                borderRadius="lg"
                p={8}
                alignContent={"center"}
                justifyContent={"center"}
                id="about"
                direction={"row"}
            >
                <Flex direction={"column"}>
                    <Heading>Projects</Heading>
                    <Divider mt={5} mb={10} borderWidth={1} borderColor={"white"} />
                    <Gallery slides={slides} handleWheelScroll={handleWheelScroll} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default project