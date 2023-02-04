import React from 'react';
import styled from 'styled-components';
import RobbyCarrot from '../components/RobbyCarrot';

const Level1Styled = styled.main`

    background: url('https://res.cloudinary.com/arikxl/image/upload/v1675503624/Ella2023/skbhmuftuotkaisqv4rb.png');
    height:100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size:cover;
`;

const Level1 = () => {
  return (
      <Level1Styled>
          <RobbyCarrot/>
      </Level1Styled>
  )
}

export default Level1