import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WaterDropStyled = styled.img`
    width:5% ;
    aspect-ratio: 1.5/1;
    position: absolute;
    left: ${props => props.randomNumber}%;
    top: ${props => props.position.y > window.innerHeight ? -100 : props.position.y}px;
    animation: twist 2s ease-in-out infinite;

    @keyframes twist {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform:  rotate(10deg);
          }
          40% {
            transform:  rotate(-10deg);
          }
          60% {
            transform:  rotate(10deg);
          }
          80% {
            transform: rotate(-10deg);
          }
          100% {
            transform:  rotate(0deg);
          }
    }


`;

const Leaf1 = () => {


  const [position, setPosition] = useState({ x: 50, y: -100 });
  const [randomNumber, setRandomNumber] = useState(50);

  // MOVE DOWN
  useEffect(() => {
    const speed = 4
    const interval = setInterval(() => {

      setPosition({ x: position.x, y: position.y + speed });
    }, 5);
    if (position.y > window.innerHeight) {
      setPosition({ x: position.x, y: -110 });
    }
    return () => clearInterval(interval);

  }, [position])

  // MOVE RANDOME  X
  useEffect(() => {


    if (position.y < -90) {

      setRandomNumber(Math.floor(Math.random() * 100) + 1);

    } else return



  }, [position.y, randomNumber])

  return (
    <WaterDropStyled
      src="https://res.cloudinary.com/arikxl/image/upload/v1675531127/Ella2023/zeaexpotvdkor3m3gtqt.png" alt="leaf"
      position={position}
      randomNumber={randomNumber}
    />
  )
}

export default Leaf1