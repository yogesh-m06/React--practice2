import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
 let {newuser}= useParams()
 let navigate = useNavigate()

 let handlenavigate = ()=>{

  navigate("/")
 }

  return (
    <div>
      <h1>Login - {newuser}</h1>
      <button onClick={handlenavigate}> Move to home</button>
    
    </div>
  )
}

export default Login