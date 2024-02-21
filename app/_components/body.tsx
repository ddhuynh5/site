"use client"

import React from "react"
import {
    Flex,
    Box
} from "@chakra-ui/react"
import Hero from "./hero"
import IconDivide from "./iconDivide"
import Home from "./home"
import Footer from "./footer"
import About from "./about"
import Social from "./project"
import TechStack from "./techStack"
import { ComponentType } from "../_types"
import "../_styles/style.css"

const home = () => {
    const [component, setComponent] = React.useState<ComponentType>("home");
    const [lastScrollTime, setLastScrollTime] = React.useState(0);
    const scrollThreshold = 1000;

    const scrollUp = () => {
        if (component === "home") {
            setComponent("social");
        } else if (component === "about") {
            setComponent("home");
        } else if (component === "tech") {
            setComponent("about");
        } else if (component === "social") {
            setComponent("tech");
        }
    };

    const scrollDown = () => {
        if (component === "home") {
            setComponent("about");
        } else if (component === "about") {
            setComponent("tech");
        } else if (component === "tech") {
            setComponent("social");
        } else if (component === "social") {
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
                        {componentName === "social" && <Social />}
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
            <Flex
                direction={"row"}
                height={"100vh"}
                width={"100vw"}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={12}
                    flex={0}
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
                    {renderComponent("social", component)}
                </Flex>
            </Flex>
            <Footer />
        </Flex >
    )
}

export default home