import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { img: '/images/p1.jpg', title: 'Rose Eau de Parfum', price: '45.00' },
  { img: '/images/p2.jpg', title: 'Citrus Mist Spray', price: '39.99' },
  { img: '/images/p3.jpg', title: 'Ocean Breeze Cologne', price: '52.00' },
  { img: '/images/p4.jpg', title: 'Amber Night Essence', price: '60.00' },
  { img: '/images/p5.jpg', title: 'Floral Dreams', price: '42.50' },
  { img: '/images/p6.jpg', title: 'Woody Spice Blend', price: '55.00' },
  { img: '/images/p7.jpg', title: 'Sweet Vanilla Drop', price: '48.99' },
  { img: '/images/p8.jpg', title: 'Fresh Mint Tonic', price: '36.00' },
  { img: '/images/p9.jpg', title: 'Oriental Oud', price: '58.25' },
  { img: '/images/p10.jpg', title: 'Lavender Breeze', price: '44.90' },
  { img: '/images/p11.jpg', title: 'Bold Leather Musk', price: '67.00' },
  { img: '/images/p12.jpg', title: 'Coconut Sunset', price: '50.00' },
];

const ProductList = () => {
  return (
   <div className="px-10 py-10 bg-black text-white">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
</div>

  );
};

export default ProductList;
