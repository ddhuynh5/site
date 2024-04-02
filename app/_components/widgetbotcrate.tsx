import React, { useState, useRef, useEffect, useCallback } from "react";
import WidgetBot from "@widgetbot/react-embed";
import { handleWheelScrollProps } from "../_types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const WidgetBotCrate: React.FC<handleWheelScrollProps> = ({ handleWheelScroll }) => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    const toggleWidget = useCallback(() => {
        setIsWidgetOpen(isWidgetOpen => !isWidgetOpen);
        return Promise.resolve();
    }, [setIsWidgetOpen]);

    const handleClickOutside = useCallback(async (event: MouseEvent) => {
        if (
            widgetRef.current &&
            event.target instanceof Node &&
            !widgetRef.current.contains(event.target as Node)
        ) {
            await toggleWidget();
        }
    }, [toggleWidget]);

    /* useEffect(() => {

        if (isWidgetOpen == true) {
            document.removeEventListener("wheel", handleWheelScroll);
            window.removeEventListener("wheel", handleWheelScroll);
            document.addEventListener("mousedown", handleClickOutside);
        } else if (isWidgetOpen == false) {
            document.removeEventListener("mousedown", handleClickOutside);
            document.addEventListener("wheel", handleWheelScroll);
            window.addEventListener("wheel", handleWheelScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("wheel", handleWheelScroll);
            window.removeEventListener("wheel", handleWheelScroll);
        };
    }, [isWidgetOpen, handleWheelScroll, handleClickOutside]); */

    const handleClick = async () => {
        // Wait for toggleWidget to finish
        await toggleWidget();

        // After toggleWidget is finished, execute handleClick logic
        if (isWidgetOpen) {
            console.log("OPEN");
            document.removeEventListener("wheel", handleWheelScroll);
            window.removeEventListener("wheel", handleWheelScroll);
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            console.log("FALSE");
            document.removeEventListener("mousedown", handleClickOutside);
            document.addEventListener("wheel", handleWheelScroll);
            window.addEventListener("wheel", handleWheelScroll);
        }
    };

    return (
        <div ref={widgetRef}>
            <FontAwesomeIcon
                icon={faDiscord}
                size="lg"
                className="icon"
                // onClick={toggleWidget}
                onClick={() => {
                    toggleWidget().then(() => {
                        handleClick();
                    });
                }}
                style={{ marginLeft: "10" }}
                title="Interact with my bot!"
            />
            {isWidgetOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 9999,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div
                        ref={widgetRef}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <WidgetBot
                            server="1210084373630554143"
                            channel="1210091613511098429"
                            width={1000}
                            height={800}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default WidgetBotCrate;
