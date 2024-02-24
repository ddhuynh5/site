"use client";

import React, { useEffect, useCallback, useState } from "react";
import {
    Flex,
    Box
} from "@chakra-ui/react";
import Hero from "./hero";
import IconDivide from "./iconDivide";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import Project from "./project";
import TechStack from "./techStack";
import { ComponentType } from "../_types";
import "../_styles/style.css";

const Body = () => {
    const [component, setComponent] = useState<ComponentType>("home");
    const [lastScrollTime, setLastScrollTime] = useState(0);
    const scrollThreshold = 1000;

    const scrollUp = useCallback(() => {
        if (component === "home") {
            setComponent("project");
        } else if (component === "about") {
            setComponent("home");
        } else if (component === "tech") {
            setComponent("about");
        } else if (component === "project") {
            setComponent("tech");
        }
    }, [component]);

    const scrollDown = useCallback(() => {
        if (component === "home") {
            setComponent("about");
        } else if (component === "about") {
            setComponent("tech");
        } else if (component === "tech") {
            setComponent("project");
        } else if (component === "project") {
            setComponent("home");
        }
    }, [component]);

    const handleWheelScroll = useCallback((event: WheelEvent) => {
        const currentTime = Date.now();

        if (currentTime - lastScrollTime > scrollThreshold) {
            setLastScrollTime(currentTime);
            if (event.deltaY < 0) {
                scrollUp();
            } else {
                scrollDown();
            }
        }
    }, [lastScrollTime, scrollThreshold, scrollUp, scrollDown]);

    useEffect(() => {
        window.addEventListener("wheel", handleWheelScroll);

        return () => {
            window.removeEventListener("wheel", handleWheelScroll);
        };
    }, [component, lastScrollTime, scrollThreshold, scrollUp, scrollDown, handleWheelScroll]);

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
                        {componentName === "project" && <Project handleWheelScroll={handleWheelScroll} />}
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
                    {renderComponent("project", component)}
                </Flex>
            </Flex>
            <Footer />
        </Flex >
    )
}

export default Body