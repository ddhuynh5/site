import { Box, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const BouncingArrow: React.FC = () => {
    return (
        <Tooltip hasArrow label="Scroll up/down for more content!" aria-label="scroll tooltip">
            <Box
                transform="translateX(-50%)"
                animation="bounce 2s infinite"
                cursor="pointer"
                mt={5}
            >
                <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </Box>
        </Tooltip>
    );
};

export default BouncingArrow;
