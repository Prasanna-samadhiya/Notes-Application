import React from 'react'
import SettingOptions from './SettingOptions'
import { useSelector } from 'react-redux'

function Preferences() {

   const settingOptions = useSelector((state) => state.settings)

   console.log(settingOptions)

  return (
    <div className='h-full   flex items-start justify-start flex-col' style={{gap : "2rem"}}>
   
    <SettingOptions heading = {"Edit Mode"}  functionality = {"Controls whether note edit mode is enabled by default"}/>
    <SettingOptions heading = {"AutoSave Mode"} functionality = {"Controls whether note will get saved automatically"} />
    <SettingOptions heading = {"Sort"} functionality = {"Controls the sorting strategy of the notes"} />
     
    </div>
  )
}

export default Preferences
