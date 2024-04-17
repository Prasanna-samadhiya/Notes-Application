import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import Footer from '../Components/settings/BottomBar';
import MyModal from '../Components/Modal';
import NoteCard from '../Components/NoteCard';
import Preview from '../Components/Preview';

function Categories() {
    let {cat}=useParams();
    const [allNotes , setAllNotes] = useState([])
    const [data,setdata] =useState("")
    const data1= useSelector((state)=>state.notes)
    const [NoteToPreview , setNoteToPreview] = useState({})
    const [showPreview , setShowPreview] = useState(false)
    const [indexToPreview , setIndexToPreview] = useState(null)
    const [showSettings , setShowSettings] = useState(false)

    console.log(data1)
    
    
   function handleChange(e){
       setdata(e.target.value)

   }
  
        
  return (
    <div>
    <div>
    <input onChange={handleChange} placeholder="Search" className='border-2 p-2 m-5 flex justify-items-center'></input>
    <div style={{display:"flex",flexDirection:"row"}}>    
      
   
    <div className='h-screen w-full flex flex-col flex-wrap' style={{gap : "3rem"}} >
  {
        data1?.map((note , index) =>{
              if (note.category === cat&&note.category!="Trash"){
                if(note.title.toLowerCase().includes(data))
                 return <div><NoteCard note={note} index={index}/></div>
              }
        })
  }
    </div>
    

    <div style={{display:"flex",flexDirection:"column"}}>
    <Preview note = {NoteToPreview} setShowPreview = {setShowPreview}  showPreview = {showPreview} indexToPreview = {indexToPreview} />
    <Footer showSettings = {showSettings} setShowSettings = {setShowSettings}/>
    </div>
     </div>
   {
     showSettings ? <MyModal /> : null
   }
   </div>
  </div>
  )
}

export default Categories
