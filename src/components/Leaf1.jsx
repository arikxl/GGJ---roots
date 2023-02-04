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

const Leaf1 = ({num}) => {



  const [position, setPosition] = useState({ x: 50, y: -100 });
  const [randomNumber, setRandomNumber] = useState(50);

  // MOVE DOWN
  useEffect(() => {
    const speed = num <3 ? 4 : 2
    const interval = setInterval(() => {

      setPosition({ x: position.x, y: position.y + speed });
    }, num > 1 ? 4 : 2);
    if (position.y > window.innerHeight) {
      setPosition({ x: position.x, y: num > 1 ? -90 :  -110 });
    }
    return () => clearInterval(interval);

  }, [num, position])

  // MOVE RANDOME  X
  useEffect(() => {


    if (position.y < -90) {

      setRandomNumber(Math.floor(Math.random() * 100) + 1);

    } else return



  }, [position.y, randomNumber])

  let imgSrc;

  if (num === 1) {
    imgSrc ='https://res.cloudinary.com/arikxl/image/upload/v1675531127/Ella2023/zeaexpotvdkor3m3gtqt.png'
  } else if (num === 2) {
    imgSrc = 'https://res.cloudinary.com/arikxl/image/upload/v1675532343/Ella2023/li9nesu3twstb7ufdvqc.png'
  } else if (num === 3) {
    imgSrc = 'https://res.cloudinary.com/arikxl/image/upload/v1675532374/Ella2023/fnpuvtemxtoshe2rfnux.png'

  }

  return (
    <WaterDropStyled
      src={imgSrc} alt="leaf"
      position={position}
      randomNumber={randomNumber}
    />
  )
}

export default Leaf1