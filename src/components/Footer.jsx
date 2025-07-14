<<<<<<< HEAD
import React from 'react'

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Local Face</h1>
          <p className="mb-2 font-semibold">Subscribe to Our Newsletter:</p>
          <p className="text-sm mb-4">Receive Updates on New Arrivals and Special Promotions!</p>
          <div className="flex items-center mb-4">
            
            <div className="flex w-full md:w-auto mt-[30px]">
              <input
              type="email"
              placeholder="Your email here"
              className="px-3 py-2 rounded-l-md outline-none text-white bg-gray-800 placeholder-gray-500 focus:bg-gray-700 transition w-full md:w-64"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition">
              Submit
            </button>
            </div>

          </div>
          <div className="flex gap-3 text-xl">
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-1 text-sm">
=======
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-50">
      <div className="max-w-7xl mx-auto grid grid-cols-5 md:grid-cols-5 gap-20">

        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-400">Local Face</h2>
          <p className="text-lg font-medium">Subscribe to Our Newsletter:</p>
          <p className="text-sm text-gray-400">
            Receive Updates on New Arrivals and Special Promotions!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email here"
              className="px-4 py-2 rounded-l bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-r hover:bg-orange-500 transition">
              Submit
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
            <li>Fashion</li>
            <li>Jewelry</li>
            <li>Sports</li>
            <li>Electronics</li>
            <li>Indoor</li>
          </ul>
        </div>
<<<<<<< HEAD

        <div>
          <h3 className="font-semibold mb-3">Shopping</h3>
          <ul className="space-y-1 text-sm">
=======
        <div>
          <h4 className="font-semibold mb-2">Shopping</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
            <li>Payments</li>
            <li>Delivery options</li>
            <li>Buyer protection</li>
          </ul>
        </div>
<<<<<<< HEAD

        <div>
          <h3 className="font-semibold mb-3">Customer care</h3>
          <ul className="space-y-1 text-sm">
=======
        <div>
          <h4 className="font-semibold mb-2">Customer care</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
            <li>Help center</li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
            <li>Returns & refund</li>
            <li>Survey & feedback</li>
          </ul>
        </div>
<<<<<<< HEAD

        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-1 text-sm">
=======
        <div>
          <h4 className="font-semibold mb-2">Pages</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

<<<<<<< HEAD
      <div className="mt-12 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © 2025, Local Face. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
=======
      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-500 text-sm">
      
      </p>
    </footer>
  );
};

export default Footer;
>>>>>>> 40a5a13 (Home sahifasi va componentlar qo'shildi)
