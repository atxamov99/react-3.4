import React from 'react'

import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";

import Atir from '../assets/Atir.png';

const Header = () => {
  return (
    <header>
          <nav className='flex justify-between items-center p-4'>

            <h1 className='text-[#AB572D] text-4xl font-bold'>Local Face</h1>

            <ul className='flex space-x-4'>
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>

              <div className="flex justify-around items-center space-x-2">
                <CiSearch className='text-3xl' />
                <BiUser className='text-3xl' />
                <FaRegHeart className='text-3xl' />
                <PiHandbagLight className='text-3xl' />
              </div>

          </nav>

          <div className="flex justify-around items-center">
            <div className="flex flex-col">
              <h1 className='text-4xl font-medium'>Elevate Your Spirit with <br /> Victory Scented Fragrances!</h1>
              <p>Shop now and embrace the sweet smell of victory <br /> with Local Face. </p>
              <button className='mt-[60px] w-[100px] p-3 bg-[#AB572D] rounded-2xl'>Shop Now</button>
            </div>

            <div className="">
              <img src={Atir} alt="Atir" className='w-[500px] h-[700px]' />
            </div>
          </div>
    </header>
  )
}

export default Header