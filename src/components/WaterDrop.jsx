import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WaterDropStyled = styled.img`
    width:5% ;
    aspect-ratio: 1.5/1;
    position: absolute;
    left: ${props => props.randomNumber}%;
    top: ${props => props.position.y > window.innerHeight ? -100 : props.position.y }px;
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

const WaterDrop = () => {


    const [position, setPosition] = useState({ x: 50, y: -100 });
    const [randomNumber, setRandomNumber] = useState(50);

    // MOVE DOWN
    useEffect(() => {
        const speed =3
        const interval = setInterval(() => {
     
            setPosition({ x: position.x, y: position.y + speed });
        }, 5);
        if (position.y > window.innerHeight) {
            setPosition({ x: position.x, y: -100 });
        }
        return () => clearInterval(interval);
    
    }, [position])
    
    // MOVE RANDOME  X
    useEffect(() => {


                if (position.y < -20) {
                    setRandomNumber(Math.floor(Math.random() * 100) + 1);
                    
                    setPosition({ x: randomNumber, y:position.y});
                    // console.log('randomNumber:', randomNumber)
                } else return


     
    }, [position.y, randomNumber])

    return (
        <WaterDropStyled
            src="https://ucf3c3a5ea1b5d096f4b0c4c9184.previews.dropboxusercontent.com/p/thumb/ABwwa8AQ5Njih4zU64ss-O5TiYfAxkvQOKNDQ1xpB7tbKcCCpuCLIRKSmcQqogrNX_ayNHQLCRlDw-pBMhN_hFsrq69NH4x4PmNyx7aiaKV2Rn_0ki6PuVGZr9MZkOjebAUOKnwMgznBIoKv-oIZb_5b2bb21OOw2Ej7UM3zFH-Ru5Mg4dPHg0xPe9IjOhno6XtpoMDkXrdjWPHL7nkoKWDwWa6DsLnVFdD8Ts7trP-HAHUGgGdrQ_9QIgXh1_YNMOGWxXQ3Sqf7ew_DXkiuV3RfXD2gn2bRzTteZe6ceEG0MGYfM6-VCZdtuaK54drsYGjQzq_NNjFEqR44d9k__hY5s6g75khzHNVCScdMFy2d0APsE4FiHHx05B-IBVcg18dB50Wr0tdesOntNVymwsJPXXfviNiVZIFrwiiuMuM_GA/p.png" alt="leaf"
            position={position}
            randomNumber={randomNumber}
        />
    )
}

export default WaterDrop