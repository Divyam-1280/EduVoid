import React from 'react'
import logo from './../assets/logo.png'
function Header() {
  return (
    <div className="navbar h-24 w-full bg-[#096b2f] flex justify-between">
      <div className="logo w-28 ml-8 pt-1">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-12 my-auto text-white text-lg">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Our Vision</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
      </ul>
      <div className="loginBtn rounded-md bg-transparent hover:bg-green-600 hover:scale-105 transition-all duration-200 ease-in-out flex justify-center items-center h-9 w-20 my-auto text-white cursor-pointer mr-8">
        Login
      </div>

    </div>
  );
}

export default Header