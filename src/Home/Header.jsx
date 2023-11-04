import React from 'react'
import logo from './../assets/logo.png'
import './Home'
function Header() {
  return (
    <div className="navbar h-24 w-full bg-[#096b2f] flex justify-between">
      <div className="logo w-28 ml-8 pt-1">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-3 md:gap-12 my-auto text-white text-lg navlist">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#Vision">Our Vision</a></li>
        <li><a href="#Team">Team</a></li>
        <li><a href="#Course">Courses</a></li>
      </ul>
      <div className="loginBtn rounded-md bg-transparent hover:bg-green-600 hover:scale-105 transition-all duration-200 ease-in-out flex justify-center items-center h-9 w-20 my-auto text-white cursor-pointer mr-8">
        Login
      </div>
      <div id="menu-icon" className="hidden text-4xl my-auto mr-5 text-white"><i class="bi bi-list"></i></div>
    </div>
  );
}

export default Header