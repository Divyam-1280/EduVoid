import React from 'react'
import './Home.css'
import Header from './Header'
import GirlImg from './../assets/girl3.png'
import Aos from 'aos'

function Home() {
  Aos.init();
  return (
    <div className="Home-parent h-[105vh] max-w-screen">
      <Header/>
      <div class="bg-transparent mt-14 xl:text-black text-white z-20">
            <div class="top-con flex ml-10 my-5 md:text-2xl text-4xl" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"vdata-aos-once="false"  data-aos-mirror="true"><h3>Enjoy A Wide Range of Delicious Food</h3>
            <div class="line h-[4px] ml-[20px] mt-[19px] rounded-sm md:block hidden" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-once="false"  data-aos-mirror="true"></div>
            </div>
            <div class="md:ml-10 mx-10 mid-con my-5 md:text-5xl text-4xl" data-aos="fade-right"  data-aos-duration="1000" data-aos-once="false"  data-aos-mirror="true">Hariyali Serves The <span>Finest</span> <br /> Quality Dining Experience</div>
            <a href="#contact" class="btn"><button class="ml-10 contact-btn my-5 text-center w-[170px] h-[50px] rounded-full" data-aos="zoom-in"  data-aos-duration="1000" data-aos-once="false"  data-aos-mirror="true">Contact Us</button></a>
        </div>
      <div className="homeImg w-[350px] absolute top-28 right-6"><img src={GirlImg} alt="Girl" /></div>
    </div>
  )
}

export default Home