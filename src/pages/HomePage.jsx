import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const HomePage = () => {

    useNavigate()
    const navigate = useNavigate()

    const handleStart =() => {
        navigate('./level1')
    }

  return (
    <button onClick={handleStart}>START</button>
  )
}

export default HomePage