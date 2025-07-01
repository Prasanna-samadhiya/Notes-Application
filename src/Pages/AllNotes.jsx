import React, { useEffect, useState } from 'react'
import { MdNoEncryption } from 'react-icons/md'
import {useSelector} from 'react-redux'
import Footer from '../Components/settings/BottomBar'
import MyModal from '../Components/Modal'
import NoteCard from '../Components/NoteCard'
import Preview from '../Components/Preview'
import {useHotkeys} from 'react-hotkeys-hook'

function AllNotes() {
   
    const [allNotes , setAllNotes] = useState([])
    const [data,setdata] =useState("")
    const [preview,setpreview]=useState({show:false})
    const data1= useSelector((state)=>state.notes)
    const [NoteToPreview , setNoteToPreview] = useState({})
     const [showPreview , setShowPreview] = useState(false)
     const [indexToPreview , setIndexToPreview] = useState(null)
     const [showSettings , setShowSettings] = useState(false)
    console.log(data1)
    
    
   function handleChange(e){
       setdata(e.target.value)

   }

   function handleCard(note,index){
      console.log(note)
      console.log("Sending Card for preview")
      setNoteToPreview(note)
      setIndexToPreview(index)
      setShowPreview(true)
   
   }
   useHotkeys('s',()=>{setShowSettings(!showSettings)})
        
  return (
    <div className='flex  '>
    <div>
    <div>
      <div>Hi</div>
      <input onChange={handleChange} placeholder="Search" className='border-2 p-2 m-5 flex justify-items-center'></input>
    </div>
    <div className='h-screen w-full flex flex-col' style={{gap : "5rem"}} >
  {
        data1?.map((note , index) =>{
              if (note.category === "allNotes"&&note.category!="Trash"){
                if(note.title.toLowerCase().includes(data))
                 return <div onClick={()=>handleCard(note,index)}><NoteCard note={note} index={index} style={{margin:"30px"}}/></div>
              }else if(note.category!="Trash"){
                return (
                <div onClick={()=>handleCard(note,index)}>
                         <NoteCard note={note} index={index}/>
                 </div>)
              }
        })
  }
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
    <Preview note = {NoteToPreview} setShowPreview = {setShowPreview}  showPreview = {showPreview} indexToPreview = {indexToPreview} />
    <Footer showSettings = {showSettings} setShowSettings = {setShowSettings}/>
    </div>
   {
     showSettings ? <MyModal /> : null
   }
    </div>

  )
}

export default AllNotes
