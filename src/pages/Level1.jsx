import React from 'react';
import styled from 'styled-components';

import RobbyCarrot from '../components/RobbyCarrot';
import WaterDrop from '../components/WaterDrop';

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
`;

const Level1 = ({score, setScore}) => {
  return (
      <Level1Styled>
          <WaterDrop />
          <RobbyCarrot />
          <img src="https://res.cloudinary.com/arikxl/image/upload/v1675514379/Ella2023/rqyoehi1fiybiba3nn5v.png"
              alt="" className='overlay'/>
      </Level1Styled>
  )
}

export default Level1