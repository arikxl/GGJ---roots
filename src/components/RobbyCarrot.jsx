import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { handleKeyDown } from '../service/heroMove';


const RobbyStyled = styled.section`
    background: url('https://res.cloudinary.com/arikxl/image/upload/v1675504119/Ella2023/a5s77ta2ktxjkubhtoex.png');
    width: 200px;
    height: 300px;
    position: absolute;
    top: ${props => props.position.y}%;
    left: ${props => props.position.x}%;
    background-position: cover;
    background-repeat: no-repeat;
    background-size: contain;
    /* left:${props => props.direction === 'left' ? `${props.left+ '%'}` : '50%'}; */
    transform: translate(-50%, 0);
    `;

const RobbyCarrot = () => {

    const [direction, setDirection] = useState(null);
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [left, setLeft] = useState(50);

    useEffect(() => {
        console.log('TEST!!!');
        const handleKeyDown = (event) => {
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
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [])

    useEffect(() => {
        const moveHero = () => {
            switch (direction) {
                case "up":
                    setPosition((prevPosition) => ({
                        x: prevPosition.x,
                        y: prevPosition.y - 1,
                    }));
                    break;
                case "down":
                    setPosition((prevPosition) => ({
                        x: prevPosition.x,
                        y: prevPosition.y + 1,
                    }));
                    break;
                case "left":
                    setPosition((prevPosition) => ({
                        x: prevPosition.x - 1,
                        y: prevPosition.y,
                    }));
                    break;
                case "right":
                    setPosition((prevPosition) => ({
                        x: prevPosition.x + 1,
                        y: prevPosition.y,
                    }));
                    break;
                default:
                    break;
            }
        };
        const intervalId = setInterval(moveHero, 100);
        return () => clearInterval(intervalId);
    }, [direction]);

    return (
        <RobbyStyled direction={direction} position={position}>
        </RobbyStyled>

    )
}

export default RobbyCarrot