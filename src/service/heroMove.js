export const handleKeyDown = (event, setPosition) => {
    switch (event.key) {
        case "ArrowUp":
                    
            setPosition((prevPosition) => ({
                x: prevPosition.x,
                y: prevPosition.y - 0.5 < 0
                    ? 0
                    : prevPosition.y - 0.5,
            }));
            break;
        case "ArrowDown":
            setPosition((prevPosition) => ({
                x: prevPosition.x,
                y: prevPosition.y + 0.5 > 84
                ? 84
                : prevPosition.y + 0.5,
            }));
            break;
        case "ArrowLeft":
            setPosition((prevPosition) => ({
                x: prevPosition.x - 8 < 0
                    ? 7
                    : prevPosition.x - 0.5,
                y: prevPosition.y,
            }));
            break;
        case "ArrowRight":
            setPosition((prevPosition) => ({
                x: prevPosition.x + 0.5 > 97
                    ? 97
                    : prevPosition.x + 0.5,
                y: prevPosition.y,
            }));
            break;
        default:
            break;
            }
        };
