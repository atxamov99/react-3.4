<<<<<<< HEAD
import React from 'react'

import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";

import Atir from '../assets/atir.png';

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
=======
import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-black text-white">
      
      <div className="flex justify-between items-center px-8 py-5">
       
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text">
          Local Face
        </h1>

       
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Shop</a>
          <a href="#" className="hover:text-orange-400">About us</a>
          <a href="#" className="hover:text-orange-400">Services</a>
          <a href="#" className="hover:text-orange-400">Blog</a>
        </nav>

       
        <div className="flex space-x-6 text-lg">
          <FaSearch className="cursor-pointer hover:text-orange-400" />
          <FaUser className="cursor-pointer hover:text-orange-400" />
          <FaHeart className="cursor-pointer hover:text-orange-400" />
          <FaShoppingBag className="cursor-pointer hover:text-orange-400" />
        </div>
      </div>

      
      <div className="px-8 pb-4 text-sm text-gray-400">
        Home / <span className="text-white">Products</span>
      </div>
    </div>
  );
};

export default Header;
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
