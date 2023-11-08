"use client"

import React from "react"
import {
    Flex,
    useColorMode,
    Button,
    Box
} from "@chakra-ui/react"
import Hero from "./hero"
import IconDivide from "./iconDivide"
import Home from "./home"
import Footer from "./footer"
import About from "./about"
import Contact from "./contact"
import TechStack from "./techStack"
import { ComponentType } from "../_types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import "../_styles/style.css"

const home = () => {
    const [component, setComponent] = React.useState<ComponentType>("contact");
    const [lastScrollTime, setLastScrollTime] = React.useState(0);
    const scrollThreshold = 1000;
    const { toggleColorMode } = useColorMode();

    const scrollUp = () => {
        if (component === "home") {
            setComponent("contact");
        } else if (component === "about") {
            setComponent("home");
        } else if (component === "tech") {
            setComponent("about");
        } else if (component === "contact") {
            setComponent("tech");
        }
    };

    const scrollDown = () => {
        if (component === "home") {
            setComponent("about");
        } else if (component === "about") {
            setComponent("tech");
        } else if (component === "tech") {
            setComponent("contact");
        } else if (component === "contact") {
            setComponent("home");
        }
    };

    const handleWheelScroll = (event: WheelEvent) => {
        const currentTime = Date.now();

        if (currentTime - lastScrollTime > scrollThreshold) {
            setLastScrollTime(currentTime);
            if (event.deltaY < 0) {
                scrollUp();
            } else {
                scrollDown();
            }
        }
    };

    const renderComponent = (componentName: ComponentType, activeComponent: ComponentType) => {
        const isActive = componentName === activeComponent;
        return (
            <Box
                className={`component ${isActive ? "fade-in" : "fade-out"}`}
            >
                {isActive && (
                    <>
                        {componentName === "home" && <Home />}
                        {componentName === "about" && <About />}
                        {componentName === "tech" && <TechStack />}
                        {componentName === "contact" && <Contact />}
                    </>
                )}
            </Box>
        );
    };

    const crossfade = () => {
        const currentComponent = document.querySelector(".fade-in");
        const nextComponent = document.querySelector(".fade-out");

        if (currentComponent) {
            currentComponent.classList.remove("fade-in");
            currentComponent.classList.add("fade-out");
        }

        if (nextComponent) {
            nextComponent.classList.remove("fade-out");
            nextComponent.classList.add("fade-in");
        }
    };

    const switchComponent = (newComponent: ComponentType) => {
        setComponent(newComponent);
        crossfade();
    };

    React.useEffect(() => {
        window.addEventListener("wheel", handleWheelScroll);
        return () => {
            window.removeEventListener("wheel", handleWheelScroll);
        };
    }, [component]);

    return (
        <Flex
            p={10}
            maxHeight={"100vh"}
            maxWidth={"100vw"}
            direction={"column"}
            style={{ overflow: "hidden" }}
        >
            <Button
                onClick={toggleColorMode}
                width={10}
                alignSelf={"flex-end"}
            >
                <FontAwesomeIcon icon={faLightbulb} />
            </Button>
            <Flex
                direction={"row"}
                height={"100vh"}
                width={"100vw"}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={12}
                    flex={1}
                >
                    <Hero />
                </Flex>
                <IconDivide switchComponent={switchComponent} activeComponent={component} />
                <Flex
                    p={12}
                    flex={1}
                    justifyContent={"center"}
                    alignContent={"center"}
                >
                    {renderComponent("home", component)}
                    {renderComponent("about", component)}
                    {renderComponent("tech", component)}
                    {renderComponent("contact", component)}
                </Flex>
            </Flex>
            {/* <Footer /> */}
        </Flex >
    )
}

export default home