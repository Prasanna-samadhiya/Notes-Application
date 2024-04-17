import React, { useEffect, useState } from 'react'
import { IoBookmarkSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import {useDispatch , useSelector} from 'react-redux'
import { addtoCustom, addToFavourite, addtoTrash, deleteNotes, Restore, Unfav } from '../Redux/NotesSlice/NoteSlice';
import { useHotkeys } from 'react-hotkeys-hook';
import { asBlob } from 'html-docx-js-typescript'
// if you want to save the docx file, you need import 'file-saver'
import { saveAs } from 'file-saver'
import parse from 'html-react-parser';


function NoteCard({note,index}) {

     const dispatch = useDispatch()
    const [showOptions , setShowOptions] = useState (false)
    const [clickednote,setclickednote]=useState(null)
    const [trash,settrash]=useState(false)
    const data1= useSelector((state)=>state.categories)

    const handleShowOptions = () =>{
         setShowOptions(!showOptions)
         console.log(showOptions)
    }

    const handleAddToFav = (id) =>{
         console.log("add to fav")
         dispatch(addToFavourite(id))
         setShowOptions(!showOptions)
    }
    const handleAddToTrash = (id) =>{
         console.log("add to Trash")
         dispatch(addtoTrash(id))
         setShowOptions(!showOptions)
    }
    const handleAddToDownload = () =>{
         console.log("add to Download")
         asBlob(note.description).then(data3=>{saveAs(data3,`${note.title}.docx`)})
         setShowOptions(!showOptions)
    }
    const handleRestore = (id) =>{
     console.log("restored")
     dispatch(Restore(id))
     setShowOptions(!showOptions)
}
     const handleUnfav =(id)=>{
      console.log("remove from fav")
      dispatch(Unfav(id))
      setShowOptions(!showOptions)
     } 
     
     const handleDelete=(id)=>{
      dispatch(deleteNotes(id))
     }

    const handleAddtoCategory=(val,index)=>{
       console.log(`handle add to category ${val}`)
       const payload={val:val,index:index}
       dispatch(addtoCustom(payload))
       console.log(payload)
       setShowOptions(!showOptions)
    }

    const handleClicked=(note)=>{
         setclickednote(note)
         console.log("setted")
    }
    useHotkeys('t',()=>{
      console.log("add to Trash");dispatch(addtoTrash(clickednote.id));})
    
   useHotkeys('f',()=>{
      console.log("add to fav"); 
      dispatch(addToFavourite(clickednote.id))})
    
   useHotkeys('d',()=>{
      console.log("add to download");
      asBlob(note.description).then(data3=>{saveAs(data3,`${note.title}.docx`)})   
   })
    
   useHotkeys('t+r',()=>{
      console.log("add to restore");
      dispatch(Restore(clickednote.id))})
    
   useHotkeys('u+f',()=>{
      console.log("remove from fav");
      dispatch(Unfav(clickednote.id))})


  return (
    <div className='flex w-[18rem] hover:to-gray-900' style={{position : 'relative',margin:"10px 10px 10px 20px",width:"200px"}} onClick={()=>handleClicked(note)}>
       <div class="   bg-black-500 p-6 flex  items-start justify-between gap-4 rounded  shadow-lg border-2  ">
       <div className=' flex flex-col gap-2 items-start justify-center'>
                <div class="px-4py-2 ">
            <div class="font-bold text-xl mb-2">{note.title}</div>
            </div>
            <p class="text-gray-700 text-base">
               {parse(note.description?note.description:"")}
            </p>
            <p className="text-xs">
               #{note.category}
            </p>
            
       </div>

<button className='font-bolder text-3xl' onClick={handleShowOptions}> <b>...</b> </button>
</div>

  {/* Showing more options  */}
    {
         showOptions ? note.category=="Trash"?
         <div className="p-6"> <div className='flex items-center justify-center gap-2'>
          <IoBookmarkSharp/>
          <button onClick={() => handleRestore (note.id)}>restore</button>
       </div >
       <div className='flex items-center justify-center gap-2'>
          <FaRegTrashAlt/>
          <button  onClick={() => handleDelete(note.id)}>Delete</button>
       </div>
       <div className='flex items-center justify-center gap-2'>
          <MdOutlineFileDownload/>
          <button onClick={handleAddToDownload} >Download</button>
       </div>
       </div>:
       note.category=="Favourite"?
       <div>
       <div className='flex flex-col items-center justify-center mt-4 gap-2 p-2' style={{width : "12rem" , position : "absolute" , left : "10rem" , top : "2.6rem" , boxShadow : "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 25px 26px -6px rgb(0 0 0 / 0.1)"}}>
       
       <div className='flex items-center justify-center gap-2'>
          <IoBookmarkSharp/>
          <button onClick={() => handleUnfav (note.id)}>UnFavourite</button>
       </div >
       <div className='flex items-center justify-center gap-2'>
          <FaRegTrashAlt/>
          <button  onClick={() => handleAddToTrash(note.id)}>Move To Trash</button>
       </div>
       <div className='flex items-center justify-center gap-2'>
          <MdOutlineFileDownload/>
          <button onClick={handleAddToDownload} >Download</button>
       </div>
          <hr />
          <div>
          
          <select name="" id="">
              <option value="Category">Move to Category</option>
              {data1.map((val,ind)=>{
                  return <option value={val} onClick={()=>handleAddtoCategory(val,index)}>{val}</option>
              })}

              
            
          </select>

          </div>

   </div>
       </div>:
       <div className='flex flex-col items-center justify-center mt-4 gap-2 p-2' style={{width : "12rem" , position : "absolute" , left : "10rem" , top : "2.6rem" , boxShadow : "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 25px 26px -6px rgb(0 0 0 / 0.1)"}}>
       
       <div className='flex items-center justify-center gap-2'>
          <IoBookmarkSharp/>
          <button onClick={() => handleAddToFav (note.id)}>Add To Favourite</button>
       </div >
       <div className='flex items-center justify-center gap-2'>
          <FaRegTrashAlt/>
          <button  onClick={() => handleAddToTrash(note.id)}>Move To Trash</button>
       </div>
       <div className='flex items-center justify-center gap-2'>
          <MdOutlineFileDownload/>
          <button onClick={handleAddToDownload} >Download</button>
       </div>
          <hr />
          <div>
          
          <select name="" id="">
              <option value="Category">Move to Category</option>
              {data1.map((val,ind)=>{
                  return <option value={val} onClick={()=>handleAddtoCategory(val,index)}>{val}</option>
              })}
              
         </select>

          </div>

   </div> : null
    }

    </div>
  )
}

export default NoteCard
 