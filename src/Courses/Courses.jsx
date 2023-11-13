import React from 'react'
import './../Courses/Courses.css'
import CourseCard1 from './CourseCard1'
import CourseCard2 from './CourseCard2'
import CourseCard3 from './CourseCard3'
import CourseCard4 from './CourseCard4'

function Courses() {
  return (
    <div className="h-full w-full">
        <div className="course-head -mt-4 w-full h-20 flex justify-center items-center sm:text-5xl text-4xl md:text-6xl"><h3>Courses</h3></div>
        <div className="card-wrapper h-full w-full mt-28 justify-around max-md:item md:flex md:flex-row flex-col max-md:mt-7">
            <CourseCard1/>
            <CourseCard2/>
            <CourseCard3/>
            <CourseCard4/>
        </div>
    </div>
  )
}

export default Courses