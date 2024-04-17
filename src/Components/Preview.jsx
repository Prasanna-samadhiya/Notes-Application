import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './app.css'
import JoditEditor from 'jodit-react'
import { LiaEditSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { Unfav, addToFavourite, addtoTrash, Restore, Edit } from '../Redux/NotesSlice/NoteSlice';
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiRefresh } from "react-icons/hi";
import parse from 'html-react-parser';
import _ from 'lodash'
 


function Preview({note , showPreview , indexToPreview , setShowPreview}) {

     const settingOptions = useSelector((state) => state.settings)
    
     const navigate = useNavigate()
     const dispatch = useDispatch() 
    
   //   console.log(note)
   //   console.log(indexToPreview)

     const editor = useRef(null)
    const [isEditable , setIsEditable] = useState(false)
    const [editedNote , setEditedNote] = useState({title : note.title})
    const [showAutoSave , setShowAutoSave] = useState(false)
   //  console.log(note.description)
     console.log(settingOptions.autoSave)


   // auto save :-

     const autoSaveNotes = _.debounce( (editedNote , indexToPreview) =>{
              
        
           dispatch(Edit({editedNote , indexToPreview}))
           console.log("autoSave")
           setShowAutoSave(false)
     } , settingOptions.autoSave)

    const handleChange = (newContent , editedNote , indexToPreview) => {
      console.log(newContent)
      setShowAutoSave(true) 
      setEditedNote({title : note.title , description : newContent})
      autoSaveNotes(editedNote , indexToPreview)
    };

   const handleSaveEditedNote = (editedNote , indexToPreview) =>{
         //  console.log("Edited is called")
          dispatch(Edit({editedNote , indexToPreview}))
          console.log("Got Edited")
          setIsEditable(!isEditable)
          setShowPreview(!showPreview)
          
         
   } 

   const handleToggleFav = (note , index) =>{
    
      if (note.category === "Favourite"){
         // console.log("Remove from fav")
         dispatch(RemoveFromFav(index))
         setShowPreview(!showPreview)
      }
      else {
         // console.log("Add To Fav")
         dispatch(addToFavourite(index))
         setShowPreview(!showPreview)

      }

   }

   

   

  return (
    <div>
       <div className="PreviewSection" style={{ height : "600px", width : "750px" , display : "flex" , alignItems : "center" , justifyContent : "center",border:"3px solid black ",borderRadius:"4px",marginLeft:"50px"}}>
        {
           showPreview ? !isEditable ? 
           <div>
          <label for="comment" class="sr-only">Your comment</label>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600" style={{width:"300px"}}>
       <div class=" w-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          
           <div>{parse(note.description?note.description:"")}</div>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          
           <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
               <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <LiaEditSolid size={"1.5rem"} onClick={() => setIsEditable(!isEditable)}/>
                 
               </button>
             {
               note.category === "Favourite" ?   <button type="button" class="inline-flex justify-center items-center p-2 text-gray-900  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <FaHeart onClick={() => handleToggleFav (note , indexToPreview)} size={"1.5rem"}/>
             
           </button> :  <button type="button" class="inline-flex justify-center items-center p-2 text-gray-900  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <IoMdHeartEmpty onClick={() => handleToggleFav (note , indexToPreview)} size={"1.5rem"}/>
                  
           </button>
             }
        
           </div>
       </div>
   </div>
        </div> :
           <div>
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
       
       <ReactQuill
         height= "60vh"
        ref={editor}
        onChange={(newContent) => handleChange(newContent , editedNote , indexToPreview)}
       />
     <div className='flex items-center justify-end gap-4 mt-4'>
     { 
        showAutoSave ?  <HiRefresh className='rotating' /> : <HiRefresh />
    }
     <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSaveEditedNote (editedNote , indexToPreview)}>Save</button>


     </div>

   </div>
    </div> : 
    <div>
    <h1 style={{fontWeight : "bolder" , fontSize : "2.2rem"  , padding : "4rem"}} >Click and Select to Preview and Edit</h1> 
     </div>
        }
    
      </div>
    </div>
  )
}

export default Preview


  