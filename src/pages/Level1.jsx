import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Leaf1 from '../components/Leaf1';
import Life from '../components/Life';

import RobbyCarrot from '../components/RobbyCarrot';
import Score from '../components/Score';
import WaterDrop from '../components/WaterDrop';

import music from '../sounds/kodama.mp3'

const Level1Styled = styled.main`

    background: url('https://res.cloudinary.com/arikxl/image/upload/v1675503624/Ella2023/skbhmuftuotkaisqv4rb.png');
    height:100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size:cover;

    .overlay{
        position:absolute;
        bottom:0;
        left:0;
    }

    .container{
        display: flex;
        justify-content: space-between;
        width: 96%;
        margin: 20px auto;


    }
`;

const Level1 = ({ score, setScore, life, setLife }) => {
    const audioRef = useRef(null);


    return (
        <Level1Styled>
            <audio src={music} ref={audioRef} loop={true} autoPlay={true} />

            <div className="container">

                <Score score={score} />
                <Life life={life} />
            </div>
            <WaterDrop />
            <Leaf1 num={ 1}/>
            <Leaf1 num={2}/>
            <Leaf1 num={3}/>
            <RobbyCarrot />
            <img src="https://res.cloudinary.com/arikxl/image/upload/v1675514379/Ella2023/rqyoehi1fiybiba3nn5v.png"
                alt="" className='overlay' />
        </Level1Styled>
    )
}

export default Level1