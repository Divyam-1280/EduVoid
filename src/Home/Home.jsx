import React from 'react'
import './Home.css'
import Header from './Header'
import GirlImg from './../assets/girl3.png'

function Home() {
  return (
    <div className="Home-parent h-[105vh] max-w-screen">
      <Header/>
      <div className="homeImg w-[350px] absolute top-28 right-6"><img src={GirlImg} alt="Girl" /></div>
    </div>
  )
}

export default Home