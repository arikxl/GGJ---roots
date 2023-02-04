import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { handleKeyDown } from '../service/heroMove';

import { robbyImgs } from '../data/data';

const RobbyStyled = styled.img`
    /* background-image: url('/images/robby/robby00.png'); */
    /* background: url('../images/robby/robby00.png'); */
    width: 10%;
    aspect-ratio:1/1;
    position: absolute;
    top: ${props => props.position.y}%;
    left: ${props => props.position.x}%;
    background-position: cover;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(-50%, 0);
    `;

const RobbyCarrot = () => {

    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [frame, setFrame] = useState(0);

    
    // MOVE
    useEffect(() => {

        document.addEventListener("keydown", (e) => handleKeyDown(e, setPosition));
        return () => {
            document.removeEventListener("keydown", (e) => handleKeyDown(e, setPosition));
        };
    }, [])

    // ANIMATE
    useEffect(() => {
        let intervalId = null;
        if (position.x !== 50 || position.y !== 50) {
            intervalId = setInterval(() => {
                setFrame((prevFrame) => (prevFrame + 1) % 20);
            }, 100);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [position]);
    
    return (
        <RobbyStyled position={position}
    //    alt="Robby the Carrot" src='/images/robby/robby00.png'/>
            alt="Robby the Carrot" src={robbyImgs[frame]}/>
        // </RobbyStyled>

    )
}

export default RobbyCarrot