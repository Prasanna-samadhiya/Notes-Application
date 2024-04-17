import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Footer from '../Components/settings/BottomBar'
import MyModal from '../Components/Modal'
import NoteCard from '../Components/NoteCard'
import Preview from '../Components/Preview'
import {useHotkeys} from 'react-hotkeys-hook'
function Favourites() {

  const data= useSelector((state)=>state.notes)
  const [allNotes , setAllNotes] = useState([])
  const [data1,setdata] =useState("")
  const [tempnotes,settempnotes]=useState([])
  const [preview,setpreview]=useState({show:false})
  const data2= useSelector((state)=>state.notes)
  const [NoteToPreview , setNoteToPreview] = useState({})
  const [showPreview , setShowPreview] = useState(false)
  const [indexToPreview , setIndexToPreview] = useState(null)
  const [showSettings , setShowSettings] = useState(false)
  console.log(data2)

  console.log(data)
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
  <div className='flex flex-row'>
  <div className='flex-col'>
  <div><input onChange={handleChange} placeholder="Search" className='border-2 p-2 m-5 flex justify-items-center'></input></div>
  <div className=' h-screen w-full flex flex-col
   ' style={{gap : "3rem"}} >
{
      data2?.map((note , index) =>{
            if (note.category === "Favourite"&&note.category!="Trash"){
              if(note.title.toLowerCase().includes(data1))
               return <div onClick={()=>handleCard(note,index)}><NoteCard note={note} /></div>
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

export default Favourites
