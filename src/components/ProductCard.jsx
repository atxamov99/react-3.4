import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="max-w-sm bg-[#181818] rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-200 cursor-pointer">
      
      <div
        className="h-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.img})` }}
      ></div>

      <div className="p-15">
       
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>

        
        <h3 className="text-white text-sm font-semibold mb-1">{product.title}</h3>

      
        <p className="text-orange-400 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
