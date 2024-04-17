import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { editDelay } from "../../Redux/SettiinSlice/SettingSlice"

function SettingOptions({heading , functionality}) {

    const sortingOption = ["Date Created" , "Date Updated" , "Title"]
    const dispatch = useDispatch()
    const settingsOptions = useSelector((state) => state.settings)
    const [delay , setDelay] = useState(settingsOptions.autoSave)


     console.log(settingsOptions)
    const handleDelaytimer = (e) =>{
      
       setDelay(e.target.value)
       dispatch(editDelay(e.target.value))
       
       

    }

  return (
    <div>
         <div className='flex items-center justify-between     shadow-lg' style={{width : "100%" , gap : "2rem"}} >
        
        <div className='flex items-start justify-start flex-col gap-2'>
        <h3 className='text-lg'>{heading}</h3>
          <span className='text-sm text-left ' >{functionality}</span>
        </div>
    
  {
     heading === "Sort" ? <div>
         <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
               <option value={"Sort By"}>Sort By</option>
     {
          sortingOption.map((elem , index) =>{
               return  <option className='p-2' value={elem}>{elem}</option>
          })
         
     }
  </select>
     </div> : <div>
     <label class="flex justify-center gap-4 flex-col items-center cursor-pointer">
  {/* <input type="checkbox" value="" class=" peer" /> */}
  <label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="vfgfx" class=" peer"  />
  {/* <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
</label>
  {
     heading === "AutoSave Mode" ? <label htmlFor="" >
      <p className='text-sm text-gray-500'>delay(ms)</p>
      <input type='number' onChange={handleDelaytimer} value={delay}  style={{width : "5rem" , height: "2rem" , background : "transparent" , border : "none" , outline :"none"  }} />
     </label> : null
   } 
</label>
  
     </div>
  } 

      </div>
    </div>
  )
}

export default SettingOptions
