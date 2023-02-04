export const handleKeyDown = (event, setDirection) => {
    switch (event.key) {
        case "ArrowUp":
            setDirection("up");
            break;
        case "ArrowDown":
            setDirection("down");
            break;
        case "ArrowLeft":
            setDirection("left");
            break;
        case "ArrowRight":
            setDirection("right");
            break;
        default:
            break;
    }
}
