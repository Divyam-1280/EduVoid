import React from 'react'
import './../Courses/Courses.css'
import CourseCard from './CourseCard'

function Courses() {
  return (
    <div className="h-screen w-full">
        <div className="course-head w-full h-20 flex justify-center items-center sm:text-5xl text-4xl md:text-6xl"><h3>Courses</h3></div>
        <div className="card-wrapper h-full w-full mt-28 justify-around max-md:item md:flex md:flex-row flex-col max-md:mt-7">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    </div>
  )
}

export default Courses