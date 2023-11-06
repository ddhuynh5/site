"use client"

import React from "react"
import { Flex, useColorMode, Button, Box } from "@chakra-ui/react"
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
    const [component, setComponent] = React.useState<ComponentType>("home");
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
            <div
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
            </div>
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
            height={"100vh"}
            direction={"column"}
            style={{ overflow: "hidden" }}
            alignItems="flex-end"
        >
            <Button
                onClick={toggleColorMode}
                maxWidth={10}
            >
                <FontAwesomeIcon icon={faLightbulb} />
            </Button>
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                p={12}
            >
                <Hero />
                <IconDivide switchComponent={switchComponent} activeComponent={component} />
                <Flex
                    flex={"1.5"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                    position={"relative"}
                    ml={"10vw"}
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