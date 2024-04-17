// "use client";
import React, { useEffect, useState } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { addNewCategory, deletecategory } from '../Redux/CategorySlice/CategorySlice';
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {bin} from 'react-icons-kit/icomoon/bin'
import Icon from 'react-icons-kit';

function NavSidebar() {

  const categoryArray = useSelector((state) => state.categories)

  // let arr = ["Book" , "Personal"]
  const [showInput , setShowInput] = useState(false)
  const [showedit,setshowedit]=useState(false)
  const [Inputfield , setInputField] = useState('')
  const [category,setcategory]=useState('')
  const data1= useSelector((state)=>state.categories)
    console.log(data1)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleAddNewCategory = () =>{
      
    setShowInput(!showInput)
     
  }


  console.log("fdfsd")
  const handleInputfieldChange = (e) =>{
    setInputField(e.target.value)
  }


  const handleAddCateogorytoStore = () =>{
       console.log(Inputfield)
       if(Inputfield){
       dispatch(addNewCategory(Inputfield))
      }
  }

  const handleNav=(elem)=>{
    navigate(`category/${elem}`)
  }

  const handleeditcategory=()=>{
         
  }

  const handleDelete=(elem)=>{
        dispatch(deletecategory(elem))
  }



  return (
   
    <div className='bg-slate-400'>

    
    <Sidebar  >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{navigate("/addnotes")}}>+</button>
          <div className='flex navlinks items-center justify-start flex-col gap-4'>
            <Link to="/allnotes" >All Notes</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/trash">Trash</Link>
           </div>
          <Sidebar.Collapse icon={HiShoppingBag} label="All Categories">  
            {
               data1.map((elem , index) =>{
                   return <div className="flex flex-row justify-center" style={{borderRadius:"3px"}}><div className="hover:bg-white" onClick={()=>handleNav(elem)}>{elem}</div>
                   <button onClick={()=>handleDelete(elem)}><Icon size={'10%'} icon={bin} style={{width:"100px"}}/></button></div>
               })
            }
            
            <button onClick={handleAddNewCategory} type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add New</button>
          <div>
          {
               showInput ?
               <div class=" flex items-center justify-end p-2" >
                   <input type="text" autoFocus value={Inputfield} onChange={handleInputfieldChange} ></input>
                       

              <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleAddCateogorytoStore} >
                      +
                       </button>
                   </div>
               
                : null
            }
             </div>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}

    
  

export default NavSidebar
