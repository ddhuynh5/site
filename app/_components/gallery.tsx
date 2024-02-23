import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GalleryProps } from "../_types";

const Gallery: React.FC<GalleryProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Flex alignItems="center" justifyContent="center">
            <IconButton
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                onClick={goToPrevSlide}
                aria-label="Previous Slide"
                variant="ghost"
                mr={5}
            />
            <Flex width="400px" height="300px" position="relative">
                {slides.map((slide, index) => (
                    index === currentIndex ?
                        <Flex
                            key={index}
                            opacity={index === currentIndex ? 1 : 0}
                            position="absolute"
                            top={0}
                            left={0}
                            transition="opacity 0.5s ease-in-out"
                        >
                            {slide}
                        </Flex>
                        : null
                ))}
            </Flex>
            <IconButton
                icon={<FontAwesomeIcon icon={faChevronRight} />}
                onClick={goToNextSlide}
                aria-label="Next Slide"
                variant="ghost"
                ml={5}
            />
        </Flex>
    );
};

export default Gallery;
