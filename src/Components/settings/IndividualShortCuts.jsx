import React from 'react'

function IndividualShortCuts({functional , value}) {
    console.log(functional , value)
  return (
    <div className='flex items-center justify-start gap-6' style={{gap : "2rem" , width : "30vw" , overflowY : 
    "visible"}}>
       <h4>{functional}</h4>
       <h4>{value}</h4>
    </div>
  )
}

export default IndividualShortCuts
