import React from 'react'

function IndividualDataManage({heading , desc , btnText , icon}) {
  return (
    <div className='flex items-center justify-start gap-6' style={{gap : "2rem" , width : "28.5vw" , paddingRight : "1rem"  }}>
     <div style={{width : "18vw"}}>
     <h3 className='text-md text-left '>{heading}</h3>
       {
        
         btnText === "Download All" ? <span className='text-xs text-left'>{desc}</span> : null
       }
     </div>
       <button className='flex border-gray-600 items-center justify-center gap-2' style={{width : "7vw"}}>
       {icon}
        {btnText}
       </button>
    </div>
  )
}

export default IndividualDataManage
