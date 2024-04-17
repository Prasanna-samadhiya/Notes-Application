import React from 'react'
import IndividualShortCuts from './IndividualShortCuts'

function Shortcuts() {

     const allshortcut = [
         {
             name : "Create new Notes",
             value :  "N",
         },
         {
            name :  "Add To Fav",
             value : "F",
         },
         {
             name :  "Download Note" ,
             value : "D",
         },
         {
            name : "Delete Note",
            value : "P+D",
         },
         {
            name : "Open Settings",
            value : "S",
         },
         {
            name : "Add To Trash",
            value : "T",
         },{
            name:"Restore",
            value:"T+R"
         },{
            name:"Unfavorate",
            valu:"U+F"
         }
        ]

  return (
    <div className='h-full   flex items-start justify-start flex-col'  style={{gap : "1.5rem" , overflowY : "scroll" , height : "40vh" , overflowX : "hidden",padding:"20px"  }} >
      
        {
             allshortcut.map((elem , index) =>{
                      console.log(elem.value)
                  return <IndividualShortCuts functional={elem.name} value={elem.value}/>

             })

        }

    </div>
  )
}

export default Shortcuts
