import React from 'react'

import Soothing from '../assets/Soothing.png'

const Section = () => {
  return (
    <section>
      <h1 className='text-[#AB572D] text-4xl font-medium text-center p-[50px] mt-[300px]'>Latest Articles</h1>

      <div className="flex justify-around items-center mt-[70px]">

        <div className="flex flex-col space-y-8">
          <img src={Soothing} alt="" className='w-[400px] h-[400px] object-cover rounded-lg' />
          <h3 className='font-bold'>The Soothing Symphony of Lavender <br /> Perfumes: Unlocking the Secrets of a <br /> Fragrant Elixir</h3>
          <p>Lavender, with its enchanting aroma and rich history, <br /> has been cherished for centuries as a symbol of <br /> relaxation, healing, and timeless beauty. In the world <br /> of perfumery, lavender plays a key role in creating captivating <br /> fragrances loved by many.</p>
          <button className='bg-none border-2 border-white rounded-2xl p-[10px] w-[150px]'>Read More</button>
        </div>
        
        <div className="flex flex-col space-y-8">
          <img src={Soothing} alt="" className='w-[400px] h-[400px] object-cover rounded-lg' />
          <h3 className='font-bold'>The Timeless Elegance of Rose <br /> Perfumes: Unveiling the Queen of <br /> Flowers in Fragrance</h3>
          <p>Rose, often referred to as the "Queen of Flowers," <br /> has held a special place in human culture and <br /> history for centuries. Beyond its captivating beauty, <br /> this iconic bloom has also inspired perfumers to <br /> create some of the most timeless and exquisite <br /> fragrances in the world.</p>
          <button className='bg-none border-2 border-white rounded-2xl p-[10px] w-[150px]'>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Section