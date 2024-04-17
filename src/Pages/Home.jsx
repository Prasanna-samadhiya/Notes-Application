import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useHotkeys } from 'react-hotkeys-hook';

function Home() {
  const navigate=useNavigate()
  useHotkeys('ctrl+z',()=>{navigate("/addnotes")})
  return (
    <div className=' h-screen w-screen'style={{width:"600px",fontSize:"40px",marginLeft:"300px"}} >
     
      <h1>Welcome to Notes Editor</h1>
    </div>
  )
}

export default Home
