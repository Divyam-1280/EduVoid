import React, { useEffect } from 'react'
import logo from './../assets/logo.png'


function Header() {
  useEffect(() => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('#tester');

    if (menu) {
      console.log("Hello");
    }
    let flag =0;
    menu.addEventListener('click', () => {

      // let flag=0;
      if (flag==0) {
        navbar.classList.add('active');
        flag=1;
        // console.log(flag)
      } else {
        navbar.classList.remove('active');
        flag=0;
        // console.log(flag);
      }
        
      
    });
  })

  return (
    <div className="navbar h-24 w-full bg-[#096b2f] flex justify-between overflow-x-hidden">
      <div className="logo w-28 ml-8 pt-1">
        <img src={logo} alt="logo" />
      </div>
      <ul id="tester" className="flex gap-3 md:gap-12 my-auto text-white text-lg navlist">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#Vision">Our Vision</a></li>
        <li><a href="#Team">Team</a></li>
        <li><a href="#Course">Courses</a></li>
      </ul>
      <div className="loginBtn rounded-md bg-transparent hover:bg-green-600 hover:scale-105 transition-all duration-200 ease-in-out flex justify-center items-center h-9 w-20 my-auto text-white cursor-pointer mr-8">
        Login
      </div>
      <button id="menu-icon" className="hidden text-4xl my-auto mr-5 text-white"><i class="bi bi-list"></i></button>

    </div>
  );
}

export default Header