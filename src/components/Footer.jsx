import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Local Face</h1>
          <p className="mb-2 font-semibold">Subscribe to Our Newsletter:</p>
          <p className="text-sm mb-4">
            Receive Updates on New Arrivals and Special Promotions!
          </p>
          <div className="flex w-full md:w-auto mt-4">
            <input
              type="email"
              placeholder="Your email here"
              className="px-3 py-2 rounded-l-md outline-none text-white bg-gray-800 placeholder-gray-500 focus:bg-gray-700 transition w-full md:w-64"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
          <div className="flex gap-3 text-xl mt-4">
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Fashion</li>
            <li>Jewelry</li>
            <li>Sports</li>
            <li>Electronics</li>
            <li>Indoor</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Shopping</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Payments</li>
            <li>Delivery options</li>
            <li>Buyer protection</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">Customer care</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Help center</li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
            <li>Returns & refund</li>
            <li>Survey & feedback</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer
