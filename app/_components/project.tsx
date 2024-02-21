import React from "react"
import {
    Flex,
    Heading,
    Divider,
    Tag
} from "@chakra-ui/react"
import ProjectBox from "./projectBox"
import Carousel from "./carousel"

const project = () => {
    const truck = "This project was built with a team of 5 developers. I volunteered as team lead \
                    and helped to facilitate development, product/project management, and communication!";
    const truckImg = "/truck.JPG";
    const truckGit = "https://github.com/ddhuynh5/TruckTruckGo";
    const truckTags = [
        <Tag key="react" mt={2}>React</Tag>,
        <Tag key="django" mt={2} ml={2}>Django</Tag>,
        <Tag key="mysql" mt={2} ml={2}>MySQL</Tag>,
        <Tag key="aws-rds" mt={2} ml={2}>AWS RDS</Tag>,
        <Tag key="aws-ec2" mt={2} ml={2}>AWS EC2</Tag>
    ];


    const car = "I built and trained a neural network model that would allow a \
                <a href='https://clearpathrobotics.com/husky-unmanned-ground-vehicle-robot/' target='_blank'> \
                <span style='text-decoration: underline; color: #63B3ED'>Husky Robot</a> to traverse thru \
                various terrain autonomously";
    const carVideo = "/husky_test.mp4";
    const carGit = "https://github.com/ddhuynh5/HuskyRobot";
    const carTags = [
        <Tag key="python" mt={2}>Python</Tag>,
        <Tag key="pytorch" mt={2} ml={2}>PyTorch</Tag>,
        <Tag key="nvidia-isaac-sim" mt={2} ml={2}>Nvidia Isaac Sim</Tag>,
        <Tag key="jupyter-notebook" mt={2}>Jupyter Notebook</Tag>,
    ];

    const slides = [
        <ProjectBox key="truck-project" title="TruckTruckGo" content={truck} image={truckImg} git={truckGit} tag={truckTags} video="" />,
        <ProjectBox key="car-project" title="Autonomous Vehicle Training" content={car} image="" git={carGit} tag={carTags} video={carVideo} />
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
                    <Carousel slides={slides} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default project