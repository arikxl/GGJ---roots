import React from 'react';
import styled from 'styled-components';

const LifeStyled = styled.h1`
    color: white;
    font-size: 2.5rem;
`;

const Life = ({ life }) => {
    
    const lifeText = "🥕".repeat(life)
  return (
      <LifeStyled>
          {lifeText}
      </LifeStyled>
  )
}

export default Life