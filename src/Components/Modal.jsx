import React, { useState } from 'react'
import { Modal, Sidebar } from 'flowbite-react'
import NavSidebar from './NavSidebar'
import { Link } from 'react-router-dom'
import Preferences from './settings/Preferences'
import { CiSettings } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import Shortcuts from './settings/Shortcuts'
import DataManagement from './settings/DataManagement'
import SettingAbout from './settings/SettingAbout'

function MyModal() {

    const [settingOptions , setSettingOptions] = useState("Preferences")

    console.log(settingOptions)
  return (
   

 

<div>
<div className="modal" id="modal" style={{position:"absolute",left:"30%",top:"15%",background:"darkgray",height:"400px",width:"800px",borderRadius:"10px"}}>
    <div className='modal__container flex items-center justify-center  ' style={{gap : "3rem"}}>
         <ul className='flex items-start justify-start flex-col p-5' style={{gap : "3rem" , borderRight : "1px solid gray" , width : "11vw"}}>
            <div className='flex items-center justify-center gap-2 ' >
                <CiSettings size={"1.2rem"}/>
                <Link onClick={() => setSettingOptions("Preferences")}>PREFERENCES</Link>
            </div>
           <div className='flex items-center justify-center gap-2' >
             <FaRegKeyboard size={"1.2rem"}/>
           <Link onClick={() => setSettingOptions("Shortcuts")}>SHORTCUTS</Link>
           </div>
           <div className='flex items-center justify-center gap-2' >
             <FaList size={"1.2rem"}/>
            <Link onClick={() => setSettingOptions("DataManagement")}>DATA MANAGEMENT</Link>
           </div>
           <div className='flex items-center justify-center gap-2' > 
             <IoMdInformationCircle size={"1.2rem"}/>
            <Link onClick={() => setSettingOptions("About")}>ABOUT</Link>
           </div>
         </ul>
       {
          settingOptions === "Preferences" ? <Preferences /> : settingOptions === "Shortcuts" ? <Shortcuts/> :
          settingOptions === "DataManagement" ? <DataManagement/> : <SettingAbout />
       }
 
    </div>
</div>
</div>
  )
}

export default MyModal
