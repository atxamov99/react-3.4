import React from 'react'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'

import LuxuriousElixir from '../assets/LuxuriousElixirRough.png';
import TheGoldenLegacy from '../assets/TheGolden.png';
import LuxuriousEssence from '../assets/LuxuriousEssence.png';
import TheGolden from '../assets/TheGoldenLegacy.png';

import Designer from '../assets/Designer.png';
import Travel from '../assets/Travel.png';
import Special from '../assets/Special.png';
import Seasonal from '../assets/Seasonal.png';
import Vintage from '../assets/Vintage.png';
import Limited from '../assets/Limited.png';
import Modern from '../assets/Modern.png';

import Perfume from '../assets/Perfume.jpg';


const Main = () => {
  return (
    <main>
        <img src={group1} alt="" className='w-full h-[70vh] relative z-10' />

        <div className="relative z-20 flex flex-col justify-center items-center text-center mt-[-360px] space-y-8">
          <h1 className='text-[#AB572D] text-4xl font-medium'>Welcome to Local Face </h1>
          <p className='text-center text-[#FFFFFF] w-[540px]'>Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <img src={group2} alt="" className='w-full h-[80vh]' />
          </div>

          <div className="flex flex-col space-y-8">
            <h1 className='text-4xl font-medium text-center'>Our Values</h1>
            <p className='text-[#FFFFFF] text-start w-[600px]'>At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives. </p>
            <p className='text-[#FFFFFF] text-start w-[600px]'>Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.</p>
          </div>
        </div>

          <h1 className='text-center text-4xl font-medium text-[#AB572D] mt-[70px] p-[50px]'>Best selling products</h1>

        <div className="flex justify-around items-center">
          <div className="bg-gradient-to-l from-[#0a0a0a] to-[#111111] via-[#111111] p-2.5 rounded-lg text-center">
                <img src={LuxuriousEssence} alt="" className='w-[300px] h-[400px]' />
                <p>Luxurious Elixir Rough</p>
                <p className='text-[#AB572D]'>$ 220.00   <span className='text-white'>100ml</span></p>
          </div>

          <div className="bg-gradient-to-l from-[#0a0a0a] to-[#111111] via-[#111111] p-2.5 rounded-lg text-center">
                <img src={TheGolden} alt="" className='w-[300px] h-[400px]' />
                <p>The Golden</p>
                <p className='text-[#AB572D]'>$ 160.00   <span className='text-white'>100ml</span></p>
          </div>

          <div className="bg-gradient-to-l from-[#0a0a0a] to-[#111111] via-[#111111] p-2.5 rounded-lg text-center">
                <img src={LuxuriousElixir} alt="" className='w-[300px] h-[400px]' />
                <p>Luxurious Elixir Rough</p>
                <p className='text-[#AB572D]'>$ 250.00   <span className='text-white'>100ml</span></p>
          </div>

          <div className="bg-gradient-to-l from-[#0a0a0a] to-[#111111] via-[#111111] p-2.5 rounded-lg text-center">
                <img src={TheGoldenLegacy} alt="" className='w-[300px] h-[400px]' />
                <p>The Golden Legacy</p>
                <p className='text-[#AB572D]'>$ 260.00   <span className='text-white'>100ml</span></p>
          </div>
        </div>

        <h1 className='text-4xl text-[#AB572D] text-center font-medium p-[50px]'>Our Collections</h1>

        <div className="flex flex-col items-center flex-wrap space-x-8 space-y-8">

              <div className="flex space-x-6 justify-around items-center">
                <img src={Designer} alt="" />
                <img src={Travel} alt="" />
              </div>

              <div className="flex space-x-6 justify-around items-center">
                <img src={Special} alt="" />
                <img src={Seasonal} alt="" />
              </div>

              <div className="flex space-x-6 justify-around items-center">
                <img src={Vintage} alt="" />
                <img src={Limited} alt="" />
                <img src={Modern} alt="" />
              </div>

        </div>

        <div className="">
          <img src={Perfume} alt="" className='relative z-10' />
          <div className="relative z-20 mt-[-30%] ml-[70px] space-y-8">
            <h1 className='text-4xl font-bold text-white'>Perfume Year-End Sale! <br /> Up to 50% OFF</h1>
            <p>Discover an exquisite collection of premium perfumes at <br /> unbelievable prices during our exclusive Perfume Sale!</p>
            <button className='bg-[#AB572D] text-white py-2 px-4 rounded'>Know More</button>
          </div>
        </div>
    </main>
  )
}

export default Main