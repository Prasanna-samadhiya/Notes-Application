import React from 'react'
import IndividualDataManage from './IndividualDataManage'
import { IoMdDownload } from "react-icons/io";
import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";

function DataManagement() {
  return (
    <div className='h-full   flex items-start justify-start flex-col' style={{gap : "3rem"}} >
      
        <IndividualDataManage heading={"Download all notes as docx file at once"} desc={"note : empty notes will not be downloaded"} btnText={"Download All"}  icon = {<IoMdDownload/>}/>
        <IndividualDataManage heading={"Import all notes as JSON"}  btnText={"Import All"} icon = {<TbFileImport/>} />
        <IndividualDataManage heading={"Export all notes as JSON"} btnText={"Export All"} icon = {<TbFileExport/>} />

    </div>
  )
}

export default DataManagement
