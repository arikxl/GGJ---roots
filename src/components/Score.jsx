import React from 'react';
import styled from 'styled-components';

const ScoreStyled = styled.h1`
    color: white;
    /* margin: 12px 32px; */
`;

const Score = ({score}) => {
  return (
      <ScoreStyled>Score: {score } </ScoreStyled>
  )
}

export default Score