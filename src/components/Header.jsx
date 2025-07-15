
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

export default Header
