import React from 'react'
import '../Vision/Vision.css'

function Vision() {
  return (
    <div className="vision h-[40vw] w-full relative">
        <div className="vision-head sm:text-5xl text-4xl md:text-6xl w-full flex justify-center items-center absolute -mt-20"><h3>Our Vision</h3></div>
        <div className="vision-text h-96 w-[50%] px-3 max-sm:-translate-y-32 max-md:-translate-y-16 max-lg:-translate-y-12 lg:translate-y-6 mx-auto flex justify-center items-center md:text-2xl sm:text-xl text-[10px] lg:text-4xl text-black/70"><h3>"Our vision is to establish a skill-based learning environment that adapts to the demands of an ever changing landscape. Through our programs we aim to create the pioneers and the visionaries of tomorrow."</h3></div>
    </div>
  )
}

export default Vision