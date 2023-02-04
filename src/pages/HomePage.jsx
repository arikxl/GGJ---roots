import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyled = styled.main`
  text-align: center;
  width: 100%;
  background-position: bottom;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/arikxl/image/upload/v1675526332/Ella2023/gu13psm8y5xodv21poz7.png');
  background-color: orangered;

  h1{
    margin:100px 0;
    color: white;
    font-size: 7rem;
    filter: drop-shadow(0 0 5px orangered);
    span{
      filter: drop-shadow(0 0 5px green);
      font-size: 3rem;
    }
  }
  h3{
    color: white;
    font-size: 3rem;
  }

  button{
    width: 12%;
    margin:20px ;
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 10px;
    border: none;
    

    :hover{
      background-color:green;
      filter: drop-shadow(0 0 5px orangered);
      color: white;
    }
  }


`;

const HomePage = () => {

  useNavigate()
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('./level1')
  }

  const handleError = () => {

  }

  return (
    <HomeStyled>
      <h1>Robby <span>the</span> Carrot</h1>

      <div className="wrapper">
        <h3 >What is the ROOT of 12321?</h3>

        <button onClick={handleError}>123</button>
        <button onClick={handleStart}>111</button>
        <button onClick={handleError}>321</button>
        <button onClick={handleError}>101</button>
      </div>
    </HomeStyled>
  )
}

export default HomePage