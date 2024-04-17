import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";

function Footer({showSettings , setShowSettings}) {

   
    const handleSettings = () =>{
         setShowSettings(!showSettings)
    }

  return (
    <div className='footer w-full' style={{marginTop  :  "2rem"}}>
        <div style={{backgroundColor : "rgb(55 , 65 , 81)" , color : "white" , height : "5vh"}} className='flex items-center justify-end gap-4 p-4'>
           
           <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button">
  
           <IoSettingsSharp size={"1.5rem"} onClick={handleSettings}/>
            </button>

        </div>
    </div> 
  )
}

export default Footer 
