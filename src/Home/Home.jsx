import React from 'react'
import './Home.css'
import Header from './Header'
import GirlImg from './../assets/girl3.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  Aos.init();
  return (
    <div className="Home-parent h-[100vh] w-full relative">
      <Header/>
      <div class="bg-transparent ml-5 mt-20 text-white z-20 overflow-clip">
            <div class="top-con flex ml-10 my-5 md:text-2xl text-white text-4xl" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"vdata-aos-once="false"  data-aos-mirror="true"><h3 className="text-4xl">Eduvoid</h3>
            <div class="line bg-white h-[4px] ml-[20px] mt-[19px] rounded-sm md:block hidden" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-once="false"  data-aos-mirror="true"></div>
            </div>
            <div class="md:ml-10 mx-10 mid-con my-5 md:text-5xl text-4xl text-white" data-aos="fade-right"  data-aos-duration="1000" data-aos-once="false"  data-aos-mirror="true">Democratizing <span>Education</span> <br /> One Child At a Time.</div>
            <a href="#contact" class="btn"><button class="ml-10 contact-btn my-5 text-center w-[170px] h-[50px] rounded-full semi-bold" >Join Us</button></a>
        </div>
      <div className="homeImg w-[350px] max-[985px]:hidden block absolute top-28 right-6"><img src={GirlImg} alt="Girl" /></div>
      
    </div>
  )
}

export default Home