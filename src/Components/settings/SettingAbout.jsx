import React from 'react'

function SettingAbout() {
  return (
    <div className='h-full  flex items-center justify-center flex-col gap-4' style={{overflowY: "scroll" , height : "40vh" , lineHeight : '1.4rem'}} >
        <div className="about-container flex flex-col gap-2 items-start justify-start text-left" style={{height : "38vh" , width : "27vw" , wordSpacing : "0.4rem" , marginTop : "8rem"}}>
            <p className=' font-bold'>About The Application</p>
           
            <div>
            <div>
            This notes appliction is a overhaul react project for the understanding of the react library.This project is just a re-implementation of the original project 
            The UI while simplistic is inspired by the original project .As a student my efforts are in the direction of implementing maximum to maximum functionalaities
            </div>
            <div>
              My name is Prasanna Samadhiya an Aspiring MERN stack developer
            </div>
            <div>
              The project's github link is as follows <a href=''></a>
            </div>
            </div>
         </div>
    </div>
  )
}

export default SettingAbout
